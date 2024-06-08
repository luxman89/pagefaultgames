import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} apareceu.",
  "trainerAppeared": "{{trainerName}}\nquer batalhar!",
  "trainerAppearedDouble": "{{trainerName}}\nquerem batalhar!",
  "singleWildAppeared": "Um {{pokemonName}} selvagem apareceu!",
  "trainerSendOut": "{{trainerName}} escolheu\n{{pokemonName}}!",
  "multiWildAppeared": "Um {{pokemonName1}} e um {{pokemonName2}} selvagens\napareceram!",
  "playerComeBack": "{{pokemonName}}, retorne!",
  "trainerComeBack": "{{trainerName}} retirou {{pokemonName}} da batalha!",
  "playerGo": "{{pokemonName}}, eu escolho você!",
  "trainerGo": "{{trainerName}} escolheu {{pokemonName}}!",
  "switchQuestion": "Quer trocar\nde {{pokemonName}}?",
  "trainerDefeated": "Você derrotou\n{{trainerName}}!",
  "moneyWon": "Você ganhou\n₽{{moneyAmount}} por ganhar!",
  "pokemonCaught": "{{pokemonName}} foi capturado!",
  "partyFull": "Sua equipe está cheia.\nSolte um Pokémon para ter espaço para {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "{{pokemonName}}, eu escolho você!!",
  "hitResultCriticalHit": "Um golpe crítico!",
  "hitResultSuperEffective": "É supereficaz!",
  "hitResultNotVeryEffective": "É pouco eficaz...",
  "hitResultNoEffect": "Isso não afeta {{pokemonName}}!",
  "hitResultOneHitKO": "Foi um nocaute de um golpe!",
  "attackFailed": "Mas falhou!",
  "attackHitsCount": "Acertou {{count}} vezes.",
  "expGain": "{{pokemonName}} ganhou\n{{exp}} pontos de experiência.",
  "levelUp": "{{pokemonName}} subiu para \nNv. {{level}}!",
  "learnMove": "{{pokemonName}} aprendeu {{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} quer aprender\n{{moveName}}.",
  "learnMoveLimitReached": "Porém, {{pokemonName}} já sabe\nquatro movimentos.",
  "learnMoveReplaceQuestion": "Quer substituir um de seus movimentos por {{moveName}}?",
  "learnMoveStopTeaching": "Você não quer aprender\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} não aprendeu {{moveName}}.",
  "learnMoveForgetQuestion": "Qual movimento quer esquecer?",
  "learnMoveForgetSuccess": "{{pokemonName}} esqueceu como usar {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}e@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}Puf!",
  "learnMoveAnd": "E…",
  "levelCapUp": "O nível máximo aumentou\npara {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} ainda não foi implementado e não pode ser usado.",
  "moveNoPP": "Não há mais PP\npara esse movimento!",
  "moveDisabled": "Não se pode usar {{moveName}} porque foi desabilitado!",
  "noPokeballForce": "Uma força misteriosa\nte impede de usar Poké Bolas.",
  "noPokeballTrainer": "Não se pode capturar\nPokémon dos outros!",
  "noPokeballMulti": "Não se pode lançar Poké Bolas\nquando há mais de um Pokémon!",
  "noPokeballStrong": "Este Pokémon é forte demais para ser capturado!\nÉ preciso enfraquecê-lo primeiro!",
  "noEscapeForce": "Uma força misteriosa\nte impede de fugir.",
  "noEscapeTrainer": "Não se pode fugir de\nbatalhas contra treinadores!",
  "noEscapePokemon": "O movimento {{moveName}} de {{pokemonName}} te impede de fugir!",
  "runAwaySuccess": "Você fugiu com sucesso.",
  "runAwayCannotEscape": "Você nao conseguiu fugir!",
  "escapeVerbSwitch": "trocar",
  "escapeVerbFlee": "fugir",
  "notDisabled": "O movimento {{moveName}}\nnão está mais desabilitado!",
  "skipItemQuestion": "Tem certeza de que não quer escolher um item?",
  "eggHatching": "Opa?",
  "ivScannerUseQuestion": "Quer usar o Scanner de IVs em {{pokemonName}}?",
  "wildPokemonWithAffix": "{{pokemonName}} selvagem",
  "foePokemonWithAffix": "{{pokemonName}} adversário",
  "useMove": "{{pokemonNameWithAffix}} usou {{moveName}}!",
  "drainMessage": "{{pokemonName}} teve sua\nenergia drenada!",
  "regainHealth": "{{pokemonName}} recuperou\npontos de saúde!"
} as const;
