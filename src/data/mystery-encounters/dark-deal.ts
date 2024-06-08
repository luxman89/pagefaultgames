import BattleScene from "../../battle-scene";
import { AddPokeballModifierType } from "../../modifier/modifier-type";
import { EnemyPartyConfig, initBattleWithEnemyConfig, getRandomSpeciesByEggTier, leaveEncounterWithoutBattle, getRandomPlayerPokemon } from "../../utils/mystery-encounter-utils";
import MysteryEncounter, { MysteryEncounterBuilder } from "../mystery-encounter";
import { ModifierRewardPhase } from "../../phases";
import { getPokemonSpecies } from "../pokemon-species";
import { Species } from "../enums/species";
import { MysteryEncounterType } from "../enums/mystery-encounter-type";
import { PokeballType } from "../pokeball";
import { EggTier } from "../enums/egg-type";
import { WaveCountRequirement } from "../mystery-encounter-requirements";
import { MysteryEncounterOptionBuilder } from "../mystery-encounter-option";

export const DarkDealEncounter: MysteryEncounter = new MysteryEncounterBuilder()
  .withEncounterType(MysteryEncounterType.DARK_DEAL)
  .withIntroSpriteConfigs([
    {
      spriteKey: "mad_scientist_m",
      fileRoot: "mystery-encounters",
      hasShadow: true
    },
    {
      spriteKey: Species.PORYGON.toString(),
      fileRoot: "pokemon",
      hasShadow: true,
      repeat: true
    }
  ])
  .withRequirement(new WaveCountRequirement([2, 180])) // waves 2 to 180
  .withCatchAllowed(true)
  .withOption(new MysteryEncounterOptionBuilder()
    .withPreOptionPhase((scene: BattleScene) => {
      // Removes random pokemon (including fainted) from party and adds name to dialogue data tokens
      const removedPokemon = getRandomPlayerPokemon(scene, false);
      scene.removePokemonFromPlayerParty(removedPokemon);
      scene.currentBattle.mysteryEncounter.dialogueTokens.push([/@ec\{pokeName\}/gi, removedPokemon.name]);
    })
    .withOptionPhase(async (scene: BattleScene) => {
      // Give the player 10 Rogue Balls
      scene.unshiftPhase(new ModifierRewardPhase(scene, () => new AddPokeballModifierType("rb", PokeballType.ROGUE_BALL, 10)));

      // Start encounter with random legendary (7-10 starter strength) at +50% level strength
      const bossSpecies = getPokemonSpecies(getRandomSpeciesByEggTier(scene, [EggTier.ULTRA, EggTier.MASTER]));
      const config: EnemyPartyConfig = {
        levelMultiplier: 1.5,
        pokemonBosses: [bossSpecies]
      };
      return initBattleWithEnemyConfig(scene, config);
      //initBattleFromEncounter(scene);
    })
    .build())
  .withOption(new MysteryEncounterOptionBuilder()
    .withOptionPhase(async (scene: BattleScene) => {
      // Leave encounter with no rewards or exp
      leaveEncounterWithoutBattle(scene);
      return true;
    })
    .build())
  .build();
