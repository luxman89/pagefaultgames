import BattleScene from "../../battle-scene";
import { ModifierTier } from "../../modifier/modifier-tier";
import { getHighestLevelPlayerPokemon, koPlayerPokemon, leaveEncounterWithoutBattle, setEncounterRewards, showEncounterText } from "../../utils/mystery-encounter-utils";
import MysteryEncounter, { MysteryEncounterFactory, OptionSelectMysteryEncounter } from "../mystery-encounter";
import * as Utils from "../../utils";
import { MysteryEncounterType } from "../enums/mystery-encounter-type";
import { Species } from "../enums/species";
import { MysteryEncounterRequirements } from "../mystery-encounter-requirements";

export class MysteriousChestEncounter implements MysteryEncounterFactory {
  getEncounter(): MysteryEncounter<OptionSelectMysteryEncounter> {
    return new OptionSelectMysteryEncounter(MysteryEncounterType.MYSTERIOUS_CHEST)
      .introVisualsConfig([
        {
          spriteKey: Species.GIMMIGHOUL.toString(),
          fileRoot: "pokemon",
          hasShadow: true
        }
      ])
      .requirements(new MysteryEncounterRequirements(2, 180)) // waves 2 to 180
      .option(async (scene: BattleScene) => {
        // Open the chest
        const roll = Utils.randSeedInt(100);
        if (roll > 50) {
          // Choose between 4 GREAT tier items (50%)
          setEncounterRewards(scene, true, [ModifierTier.GREAT, ModifierTier.GREAT, ModifierTier.GREAT, ModifierTier.GREAT], false);
          // Display result message then proceed to rewards
          await showEncounterText(scene, "mysteryEncounter:mysterious_chest_option_1_normal_result")
            .then(() => leaveEncounterWithoutBattle(scene));
        } else if (roll > 30) {
          // Choose between 3 ULTRA tier items (20%)
          setEncounterRewards(scene, true, [ModifierTier.ULTRA, ModifierTier.ULTRA, ModifierTier.ULTRA], false);
          // Display result message then proceed to rewards
          await showEncounterText(scene, "mysteryEncounter:mysterious_chest_option_1_good_result")
            .then(() => leaveEncounterWithoutBattle(scene));
        } else if (roll > 25) {
          // Choose between 2 ROGUE tier items (5%)
          setEncounterRewards(scene, true, [ModifierTier.ROGUE, ModifierTier.ROGUE], false);
          // Display result message then proceed to rewards
          await showEncounterText(scene, "mysteryEncounter:mysterious_chest_option_1_great_result")
            .then(() => leaveEncounterWithoutBattle(scene));
        } else if (roll > 24) {
          // Choose 1 MASTER tier item (1%)
          setEncounterRewards(scene, true, [ModifierTier.MASTER], false);
          // Display result message then proceed to rewards
          await showEncounterText(scene, "mysteryEncounter:mysterious_chest_option_1_amazing_result")
            .then(() => leaveEncounterWithoutBattle(scene));
        } else {
          // Your highest level Pok�mon gets OHKO. Progress with no rewards (24%)
          const highestLevelPokemon = getHighestLevelPlayerPokemon(scene);
          koPlayerPokemon(highestLevelPokemon);
          scene.currentBattle.mysteryEncounter.dialogueTokens.push([/@ec\{pokeName\}/gi, highestLevelPokemon.name]);
          // Show which Pokemon was KOed, then leave encounter with no rewards
          await showEncounterText(scene, "mysteryEncounter:mysterious_chest_option_1_bad_result")
            .then(() => leaveEncounterWithoutBattle(scene));
        }
      })
      .option(async (scene: BattleScene) => {
        // Leave encounter with no rewards or exp
        leaveEncounterWithoutBattle(scene);
        return true;
      });
  }
}