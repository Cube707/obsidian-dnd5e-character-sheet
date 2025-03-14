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
speed:
  walking: 30
  climbing: 15
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
exhaustion: 0
---

> [!charater-details]
> # Test Character
> ### Human - Rogue
> #### Level: `VIEW[{LVL}][text]`
> ![[token.png]]
>
> Here is space for a short character description or some other notes on the character.
>
> `BUTTON[longrest,shortrest]` `BUTTON[conditions]`

```meta-bind-button
label: Long Rest
icon: home
style: primary
cssStyle: "background-color: #2e7d32"
id: longrest
hidden: true
actions:
  - type: inlineJS
    code: new Notice("long rest completed")
  - type: sleep
    ms: 200
```
```meta-bind-button
label: Short Rest
icon: flame-kindling
style: primary
cssStyle: "background-color:#9e9d24"
id: shortrest
hidden: true
actions:
  - type: inlineJS
    code: new Notice("short rest completed")
  - type: sleep
    ms: 200
```
```meta-bind-button
label: Contitions
icon: user-round-search
style: primary
class: conditions
id: "conditions"
hidden: true
actions:
  - type: inlineJS
    code: document.querySelectorAll('[data-callout~="conditions"]').forEach(div=>div.classList.toggle('show'))
```
```meta-bind-button
label: ''
icon: plus
style: primary
class: plus
id: "add-exhaustion"
hidden: true
actions:
  - type: updateMetadata
    bindTarget: exhaustion
    evaluate: true
    value: Math.min(getMetadata('exhaustion')+1, 6)
  - type: sleep
    ms: 50
```
```meta-bind-button
label: ""
icon: minus
style: destructive
class: minus
id: sub-exhaustion
hidden: true
actions:
  - type: updateMetadata
    bindTarget: exhaustion
    evaluate: true
    value: Math.max(0, getMetadata('exhaustion')-1)
  - type: sleep
    ms: 50
```

> [!conditions]
>
> ##### Conditions
> `INPUT[toggle:conditions.blinded]` Blinded
> `INPUT[toggle:conditions.charmed]` Charmed
> `INPUT[toggle:conditions.deafened]` Deafened
> `INPUT[toggle:conditions.frightened]` Frightened
> `INPUT[toggle:conditions.grappled]` Grappled
> `INPUT[toggle:conditions.incapacitated]` Incapacitated
> `INPUT[toggle:conditions.invisible]` Invisible
> `INPUT[toggle:conditions.paralyzed]` Paralyzed
> `INPUT[toggle:conditions.petrified]` Petrified
> `INPUT[toggle:conditions.poisoned]` Poisoned
> `INPUT[toggle:conditions.prone]` Prone
> `INPUT[toggle:conditions.restrained]` Restrained
> `INPUT[toggle:conditions.stunned]` Stunned
> `INPUT[toggle:conditions.unconscious]` Unconscious
>
> ##### Exhaustion
> `BUTTON[add-exhaustion,sub-exhaustion]` Level: `VIEW[{exhaustion}]`
>

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

#### Saving Throws

- ##### Strength
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.STR_save]`
  `VIEW[sign(floor({proficiencies.STR_save}*{memory^PROF_mod})+{memory^STR_mod})][math(class(val))]`
- ##### Dexterity
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.DEX_save]`
  `VIEW[sign(floor({proficiencies.DEX_save}*{memory^PROF_mod})+{memory^DEX_mod})][math(class(val))]`
- ##### Constitution
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.CON_save]`
  `VIEW[sign(floor({proficiencies.CON_save}*{memory^PROF_mod})+{memory^CON_mod})][math(class(val))]`
- ##### Intelligence
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.INT_save]`
  `VIEW[sign(floor({proficiencies.INT_save}*{memory^PROF_mod})+{memory^INT_mod})][math(class(val))]`
- ##### Wisdom
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.WIS_save]`
  `VIEW[sign(floor({proficiencies.WIS_save}*{memory^PROF_mod})+{memory^WIS_mod})][math(class(val))]`
- ##### Charisma
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.CHR_save]`
  `VIEW[sign(floor({proficiencies.CHR_save}*{memory^PROF_mod})+{memory^CHR_mod})][math(class(val))]`
{ .saving-scores }

#### Senses

- ##### Passive Perception
  `VIEW[10+{memory^WIS_mod}+floor({proficiencies.perception}*{memory^PROF_mod})][math(class(val))]`
- ##### Passive Investigation
  `VIEW[10+{memory^INT_mod}+floor({proficiencies.investigation}*{memory^PROF_mod})][math(class(val))]`
- ##### Passive Insight
  `VIEW[10+{memory^WIS_mod}+floor({proficiencies.insight}*{memory^PROF_mod})][math(class(val))]`
{ .senses-scores }

### Proficiency

```meta-bind-js-view
{LVL} as lvl
save to {memory^PROF_mod}
hidden
---
const lookup = { 1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:4,10:4,
                 11:4,12:4,13:5,15:5,16:5,17:7,18:6,19:6,20:6 };
return lookup[context.bound.lvl];
```
- { .proficiency-bonus }
  ##### Bonus
  `VIEW[sign({memory^PROF_mod})][math(class(val))]`
{ .proficiency-scores }

#### Languages
Common
Thieves’ Cant

#### Tools
Calligrapher's Supplies
Thieves' Tools
Poisener's Kit

#### Weapons
Crossbow, Hand, Longsword, Rapier, Shortsword, Simple Weapons

#### Amor
Light Armor

### Defenses

#### Resistances
_A{.icon-advantage}_ CON saves against the poisoned condition
_p{.icon-poison}_ poison damage

#### Immunities
None

#### Vulnerabilities
None

## Combat

- { .amour-class }
  ##### AC
  `VIEW[10+{memory^DEX_mod}][math(class(val))]`
- { .initiative }
  ##### Initiative
  `VIEW[sign({memory^DEX_mod})][math(class(val))]`
- { .speed }
  ##### Speed
  _w{ .icon-walking .size-m }_ `VIEW[{speed.walking}][math(class(val))]` _ft._
  _c{ .icon-climbing .size-m }_ `VIEW[{speed.climbing}][math(class(val))]` _ft._
{ .combat-scores }

### Actions

|                              | Info                                                    |                       Hit/DC                       |                                    Damage                                    |
| :--------------------------: | :------------------------------------------------------ | :------------------------------------------------: | :--------------------------------------------------------------------------: |
| _M{ .icon-melee .size-xl }_  | **Wip**<br>_Meele Attack_<br>10 _ft._                   | `VIEW[sign({memory^DEX_mod}+{memory^PROF_mod}+1)]` | `1d4`&hairsp;`VIEW[sign({memory^DEX_mod})]`<br>_s{ .icon-slashing }_<br>Slow |
| _M{ .icon-melee .size-xl }_  | **Dagger of Venom**<br>_Meele Attack_<br>5 _ft._        | `VIEW[sign({memory^DEX_mod}+{memory^PROF_mod}+1)]` |     `1d4`&hairsp;`VIEW[sign({memory^DEX_mod})]`<br>_p{ .icon-piercing }_     |
|                              | **Venom Effect**<br>1&hairsp;_min_ or until attack hits |                     CON<br>15                      |                        `2d10`<br>_p{ .icon-poison }_                         |
| _R{ .icon-ranged .size-xl }_ | **Dagger (throw)**<br>_Ranged Attack_<br>20 _(60)_      | `VIEW[sign({memory^DEX_mod}+{memory^PROF_mod}+1)]` | `1d4`&hairsp;`VIEW[sign({memory^DEX_mod})]`<br>_p{ .icon-piercing }_         |
| _U{ .icon-unarmed .size-xl}_ | **Unarmed strike**<br>_Meele Attack_<br>5 _ft._         |  `VIEW[sign({memory^STR_mod}+{memory^PROF_mod})]`  |                       `VIEW[sign(1+{memory^STR_mod})]`                       |
|                              | **Net**<br>_Ranged Attack_<br>5 _(15)_                  |           `VIEW[sign({memory^DEX_mod})]`           |                                                                              |
{ .actions-in-combat .float }

- **Activate Dagger of Venom{.action}**
  The Dagger covers itself with a thick, black poison.
  The substance stays on the blade for 1 _min_ or until you hit a creature with the Dagger.
- [[Net]]{.action}
  If a Large or smaller creature is hit with Net, it is restraint.
  A creature within reach can attempt a DC 10 STR check or deal 5 _slashing{.icon-slashing}_ damage, to destroy the net.

#### Non-damaging attacks

- [[Grapple]]{.action}
  make an _unarmed strike_, on a hit, apply the _Grappled Condition_
- [[Shove]]{.action}
  make a contested _Strength_ roll, on a success, knock the target prone of move it 5 _ft_

#### Default Actions

- [[Dash]]{.action}
  Double your movement for this round
- [[Disengage]]{.action}
  you don't provoke _oportunity attacks_ this round
- [[Dodge]]{.action}
  until the start of your next turn, attacks against you are made with disadvantage, you have advantage on Dex-Saves
- [[Hide]]{.action}
  make a _Stealth_ check, on success you are _hidden_
- [[Ready]]{.action}
  define a trigger and chose an action to hold,
  use your reaction to complete the action if the trigger happens
- [[Help]]{.action}
  assist an ally, giving advantage
- [[Search]]{.action}
- [[Use]]{.action}

### Bonus Actions

- **Two weapon Fighting**{.action}
  If used the Attack-action and you have a second weapon in you offhand, you may attack a second time using it.
- [[Cunning Action]]{.action}
  You may use [[Dash]], [[Disengage]] or [[Hide]] as a bonus action.

### Reactions

- [[Opportunity Attack]]{.action}
  when a creature that you can see leaves your reach, you can use your reaction to make one melee attack against it

### Other

- [[Sneak Attack]]{.action}
  Once per turn, you can deal an extra `2d6` damage to one creature you hit with an attack with a finesse or ranged weapon if you have advantage on the attack roll. You don’t need advantage on the attack roll if another enemy of the target is within 5 ft. of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.
