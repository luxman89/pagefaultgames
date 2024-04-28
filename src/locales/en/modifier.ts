import { SimpleTranslationEntries } from "#app/plugins/i18n.js";

export const modifier: SimpleTranslationEntries = {
    "recieveModifier": "Recieve {{modifier}} {{amount}}x",
    "catchRate": "Catch Rate: {{multiplier}}",
    "hpRestore": "Restores {{restorePoints}} HP or {{restorePercent}} HP for one Pokémon, whichever is higher",
    "revive": "Revives one Pokémon and restores {{restorePercent}}% HP",
    "ppRestore": "Restores {{restorePoints}} PP for one Pokémon move",
    "ppRestoreAll": "Restores {{restorePoints}} PP for all of one Pokémon's moves",
    "ppUp": "Permanently increases PP for one Pokémon move by {{upPoints}} for every 5 maximum PP (maximum 3)",
    "lure": "Doubles the chance of an encounter being a double battle for {{battleCount}} battles",
    "tempBattleStatBoost": "Increases the {{tempBattleStat}} of all party members by 1 stage for 5 battles",
    "baseStatBoost": "Increases the holder's base {{stat}} by 10%. The higher your IVs, the higher the stack limit.",
    "atkTypeBooster": "Increases the power of a Pokémon's {{type}}-type moves by 20%",
    "mint": "Changes a Pokémon\'s nature to {{nature}}",
    "tera": "{{type}} Terastallizes the holder for up to 10 battles",
    "berry": "Raises {{stat}} if HP is below 25%",
    "tm": "Teaches {{move}} to a Pokémon",
    "expCharm": "Increases gain of EXP. Points by {{boostPercent}}%",
    "expEgg": "Increases the holder's gain of EXP. Points by {{boostPercent}}%",
    "contactItemTransfer": "Upon attacking, there is a {{chancePercent}}% chance the foe's held item will be stolen.",
    "moveAccuracyBooster": "Increases move accuracy by {{amount}} (maximum 100)",
    "multiHit": "Attacks hit one additional time at the cost of a 60/75/82.5% power reduction per stack respectively.",
    "fusePokemon": "Combines two Pokémon (transfers Ability, splits base stats and types, shares move pool)",
    "heldItemTransfer": "Every turn, the holder acquires one held item from the foe.",
    "attackStatusEffect": "Adds a {{chancePercent}}% chance to inflict {{effect}} with attack moves",
    "endureChance": "Adds a {{chancePercent}}% chance of enduring a hit",
    "evolve": "Causes certain Pokémon to evolve",
    "formChange": "Causes certain Pokémon to change form",
    "moneyReward": "Grants a {{moneyMultiplierDescriptor}} amount of money (₽{AMOUNT})",
    "small": "small",
    "moderate": "moderate",
    "large": "large",
} as const;