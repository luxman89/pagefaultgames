import {afterEach, beforeAll, beforeEach, describe, expect, it, vi} from "vitest";
import Phaser from "phaser";
import GameManager from "#app/test/essentials/gameManager";
import * as overrides from "#app/overrides";
import {Abilities} from "#app/data/enums/abilities";
import {Species} from "#app/data/enums/species";
import {
  BerryPhase,
  CommandPhase,
  DamagePhase,
  EnemyCommandPhase,
  MessagePhase,
  MoveEffectPhase, MoveEndPhase,
  MovePhase,
  StatChangePhase, TurnEndPhase, TurnInitPhase,
  TurnStartPhase,
} from "#app/phases";
import {Mode} from "#app/ui/ui";
import {Moves} from "#app/data/enums/moves";
import {getMovePosition} from "#app/test/essentials/utils";
import {Command} from "#app/ui/command-ui-handler";
import {StatusEffect} from "#app/data/status-effect";


describe("Items Test - onTurnEnd", () => {
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
    vi.spyOn(overrides, "STARTING_HELD_ITEMS_OVERRIDE", "get").mockReturnValue([]);
    game = new GameManager(phaserGame);
  });

  it("TOXIC ORB", async() => {
    const moveToUse = Moves.GROWTH;
    const oppMoveToUse = Moves.TACKLE;
    vi.spyOn(overrides, "SINGLE_BATTLE_OVERRIDE", "get").mockReturnValue(true);
    vi.spyOn(overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(Species.RATTATA);
    vi.spyOn(overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.MOXIE);
    vi.spyOn(overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.MOXIE);
    vi.spyOn(overrides, "STARTING_LEVEL_OVERRIDE", "get").mockReturnValue(2000);
    vi.spyOn(overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([moveToUse]);
    vi.spyOn(overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([oppMoveToUse, oppMoveToUse, oppMoveToUse, oppMoveToUse]);
    vi.spyOn(overrides, "STARTING_HELD_ITEMS_OVERRIDE", "get").mockReturnValue([{
      name: "TOXIC_ORB",
    }]);
    await game.startBattle([
      Species.MIGHTYENA,
      Species.MIGHTYENA,
    ]);
    expect(game.scene.modifiers[0].type.id).toBe("TOXIC_ORB");

    game.onNextPrompt("CommandPhase", Mode.COMMAND, () => {
      game.scene.ui.setMode(Mode.FIGHT, (game.scene.getCurrentPhase() as CommandPhase).getFieldIndex());
    });
    game.onNextPrompt("CommandPhase", Mode.FIGHT, () => {
      const movePosition = getMovePosition(game.scene, 0, moveToUse);
      (game.scene.getCurrentPhase() as CommandPhase).handleCommand(Command.FIGHT, movePosition, false);
    });
    await game.phaseInterceptor.run(EnemyCommandPhase);
    await game.phaseInterceptor.run(TurnStartPhase);

    await game.phaseInterceptor.run(MovePhase);
    await game.phaseInterceptor.run(MessagePhase);
    await game.phaseInterceptor.run(MoveEffectPhase);
    await game.phaseInterceptor.run(StatChangePhase);
    await game.phaseInterceptor.run(MessagePhase, () => game.isCurrentPhase(MoveEndPhase));
    await game.phaseInterceptor.run(MoveEndPhase);
    await game.phaseInterceptor.run(MovePhase);


    await game.phaseInterceptor.run(MessagePhase);
    await game.phaseInterceptor.run(MoveEffectPhase);
    await game.phaseInterceptor.run(DamagePhase);
    await game.phaseInterceptor.run(MoveEndPhase);

    await game.phaseInterceptor.run(BerryPhase);
    await game.phaseInterceptor.run(TurnEndPhase);
    // Toxic orb should trigger here
    await game.phaseInterceptor.run(MessagePhase);
    const message = game.textInterceptor.getLatestMessage();
    expect(message).toContain("was badly poisoned by Toxic Orb");
    await game.phaseInterceptor.run(MessagePhase);
    const message2 = game.textInterceptor.getLatestMessage();
    expect(message2).toContain("is hurt");
    expect(message2).toContain("by poison");
    expect(game.scene.getParty()[0].status.effect).toBe(StatusEffect.POISON);
    expect(game.scene.getParty()[0].status.turnCount).toBe(2);
    await game.phaseInterceptor.whenAboutToRun(TurnInitPhase);


  }, 120000);
});
