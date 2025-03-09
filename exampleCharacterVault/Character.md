---
cssclasses:
  - dnd5e-character-sheet
LVL: 5
STR: 8
DEX: 18
CON: 15
INT: 14
WIS: 10
CHR: 12
proficiencies:
  intimidation: 0.5
  acrobatics: 1
  athletics: 1
  perception: 1
  persuasion: 1
  insight: 2
  deception: 1
  DEX_save: 1
  WIS_save: 1
---

> [!charater-details]
> # Test Character
> ### Human - Rogue
> #### Level: `VIEW[{LVL}][text]`
> ![[token.png]]
>
> Here is space for a short character description or some other notes on the character.

## Abilities

- ##### STR `VIEW[calcmodifier({STR})][math(hidden):memory^STR_mod]`
  `INPUT[number(class(val)):STR]`
  `VIEW[sign({memory^STR_mod})][math(class(mod))]`
- ##### DEX `VIEW[calcmodifier({DEX})][math(hidden):memory^DEX_mod]`
  `INPUT[number(class(val)):DEX]`
  `VIEW[sign({memory^DEX_mod})][math(class(mod))]`
- ##### CON `VIEW[calcmodifier({CON})][math(hidden):memory^CON_mod]`
  `INPUT[number(class(val)):CON]`
  `VIEW[sign({memory^CON_mod})][math(class(mod))]`
- ##### INT `VIEW[calcmodifier({INT})][math(hidden):memory^INT_mod]`
  `INPUT[number(class(val)):INT]`
  `VIEW[sign({memory^INT_mod})][math(class(mod))]`
- ##### WIS `VIEW[calcmodifier({WIS})][math(hidden):memory^WIS_mod]`
  `INPUT[number(class(val)):WIS]`
  `VIEW[sign({memory^WIS_mod})][math(class(mod))]`
- ##### CHR `VIEW[calcmodifier({CHR})][math(hidden):memory^CHR_mod]`
  `INPUT[number(class(val)):CHR]`
  `VIEW[sign({memory^CHR_mod})][math(class(mod))]`
{ .ability-scores }

| Prof                                                                                                                                                                       | Mod | Skill           |                                          Bonus                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------- | :-------------------------------------------------------------------------------------: |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.acrobatics]`      | DEX | Acrobatics      |   `VIEW[sign(floor({proficiencies.acrobatics}*{memory^PROF_mod})+{memory^DEX_mod})]`    |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.animal_handling]` | WIS | Animal Handling | `VIEW[sign(floor({proficiencies.animal_handling}*{memory^PROF_mod})+{memory^WIS_mod})]` |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.arcana]`          | INT | Arcana          |     `VIEW[sign(floor({proficiencies.arcana}*{memory^PROF_mod})+{memory^INT_mod})]`      |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.deception]`       | STR | Athletics       |    `VIEW[sign(floor({proficiencies.deception}*{memory^PROF_mod})+{memory^STR_mod})]`    |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.animal_handling]` | CHR | Deception       | `VIEW[sign(floor({proficiencies.animal_handling}*{memory^PROF_mod})+{memory^CHR_mod})]` |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.history]`         | INT | History         |     `VIEW[sign(floor({proficiencies.history}*{memory^PROF_mod})+{memory^INT_mod})]`     |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.insight]`         | WIS | Insight         |     `VIEW[sign(floor({proficiencies.insight}*{memory^PROF_mod})+{memory^WIS_mod})]`     |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.intimidation]`    | CHR | Intimidation    |  `VIEW[sign(floor({proficiencies.intimidation}*{memory^PROF_mod})+{memory^CHR_mod})]`   |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.investigation]`   | INT | Investigation   |  `VIEW[sign(floor({proficiencies.investigation}*{memory^PROF_mod})+{memory^INT_mod})]`  |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.medicine]`        | WIS | Medicine        |    `VIEW[sign(floor({proficiencies.medicine}*{memory^PROF_mod})+{memory^WIS_mod})]`     |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.nature]`          | INT | Nature          |     `VIEW[sign(floor({proficiencies.nature}*{memory^PROF_mod})+{memory^INT_mod})]`      |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.perception]`      | WIS | Perception      |   `VIEW[sign(floor({proficiencies.perception}*{memory^PROF_mod})+{memory^WIS_mod})]`    |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.performance]`     | CHR | Performance     |   `VIEW[sign(floor({proficiencies.performance}*{memory^PROF_mod})+{memory^CHR_mod})]`   |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.persuasion]`      | CHR | Persuasion      |   `VIEW[sign(floor({proficiencies.persuasion}*{memory^PROF_mod})+{memory^CHR_mod})]`    |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.religion]`        | INT | Religion        |    `VIEW[sign(floor({proficiencies.religion}*{memory^PROF_mod})+{memory^INT_mod})]`     |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.sleight_of_hand]` | DEX | Sleight of Hand | `VIEW[sign(floor({proficiencies.sleight_of_hand}*{memory^PROF_mod})+{memory^DEX_mod})]` |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.stealth]`         | DEX | Stealth         |     `VIEW[sign(floor({proficiencies.stealth}*{memory^PROF_mod})+{memory^DEX_mod})]`     |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.survival]`        | WIS | Survival        |    `VIEW[sign(floor({proficiencies.survival}*{memory^PROF_mod})+{memory^WIS_mod})]`     |
{ .proficiencies-table .float }
