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
