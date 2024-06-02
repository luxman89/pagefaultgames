import {afterEach, beforeAll, beforeEach, describe, expect, it, vi} from "vitest";
import Phaser from "phaser";
import GameManager from "#app/test/essentials/gameManager";
import * as overrides from "#app/overrides";
import {Abilities} from "#app/data/enums/abilities";
import {Species} from "#app/data/enums/species";
import {
  CommandPhase,
  DamagePhase,
  EnemyCommandPhase,
  FaintPhase,
  MessagePhase,
  MoveEffectPhase,
  MovePhase,
  ShowAbilityPhase,
  StatChangePhase,
  TurnStartPhase,
  VictoryPhase
} from "#app/phases";
import {Mode} from "#app/ui/ui";
import {Stat} from "#app/data/pokemon-stat";
import {Moves} from "#app/data/enums/moves";
import {getMovePosition} from "#app/test/essentials/utils";
import {Command} from "#app/ui/command-ui-handler";
import {BattleStat} from "#app/data/battle-stat";


describe("Abilities Test - onKill", () => {
  let phaserGame: Phaser.Game;
  let game: GameManager;

  beforeAll(() => {
    phaserGame = new Phaser.Game({
      type: Phaser.HEADLESS,
    });
  });

  afterEach(() => {
    game.phaseInterceptor.restoreOg();
  });

  beforeEach(() => {
    vi.spyOn(overrides, "STARTER_SPECIES_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "STARTING_LEVEL_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "STARTING_WAVE_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([]);
    vi.spyOn(overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([]);
    vi.spyOn(overrides, "SINGLE_BATTLE_OVERRIDE", "get").mockReturnValue(false);
    vi.spyOn(overrides, "DOUBLE_BATTLE_OVERRIDE", "get").mockReturnValue(false);
    vi.spyOn(overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.NONE);
    vi.spyOn(overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.NONE);
    game = new GameManager(phaserGame);
  });

  it("MOXIE", async() => {
    vi.spyOn(overrides, "SINGLE_BATTLE_OVERRIDE", "get").mockReturnValue(true);
    vi.spyOn(overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(Species.RATTATA);
    vi.spyOn(overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.MOXIE);
    vi.spyOn(overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.MOXIE);
    vi.spyOn(overrides, "STARTING_LEVEL_OVERRIDE", "get").mockReturnValue(2000);
    vi.spyOn(overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.TACKLE]);
    await game.startBattle([
      Species.MIGHTYENA,
      Species.MIGHTYENA,
    ]);

    let battleStatsPokemon = game.scene.getParty()[0].summonData.battleStats;
    expect(battleStatsPokemon[Stat.ATK]).toBe(0);

    game.onNextPrompt("CommandPhase", Mode.COMMAND, () => {
      game.scene.ui.setMode(Mode.FIGHT, (game.scene.getCurrentPhase() as CommandPhase).getFieldIndex());
    });
    game.onNextPrompt("CommandPhase", Mode.FIGHT, () => {
      const movePosition = getMovePosition(game.scene, 0, Moves.TACKLE);
      (game.scene.getCurrentPhase() as CommandPhase).handleCommand(Command.FIGHT, movePosition, false);
    });
    await game.phaseInterceptor.run(EnemyCommandPhase);
    await game.phaseInterceptor.run(TurnStartPhase);

    await game.phaseInterceptor.run(MovePhase);
    await game.phaseInterceptor.run(MessagePhase);
    await game.phaseInterceptor.run(MoveEffectPhase);
    await game.phaseInterceptor.run(DamagePhase);
    await game.phaseInterceptor.run(MessagePhase, () => game.isCurrentPhase(FaintPhase));

    await game.phaseInterceptor.run(FaintPhase);
    await game.phaseInterceptor.run(MessagePhase);
    await game.phaseInterceptor.run(ShowAbilityPhase);
    await game.phaseInterceptor.run(StatChangePhase);
    await game.phaseInterceptor.run(MessagePhase, () => game.isCurrentPhase(VictoryPhase));
    await game.phaseInterceptor.whenAboutToRun(VictoryPhase);
    battleStatsPokemon = game.scene.getParty()[0].summonData.battleStats;
    expect(battleStatsPokemon[BattleStat.ATK]).toBe(1);
  }, 120000);
});
