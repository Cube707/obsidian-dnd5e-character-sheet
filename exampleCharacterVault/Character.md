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
health:
  rolled: 24
  max: 34
  current: 24
  temp: 10
---

> [!charater-details]
> # Test Character
> ### Human - Rogue
> #### Level: `VIEW[{LVL}]`
> ![[token.png]]
>
> Here is space for a short character description or some other notes on the character.
>
> `BUTTON[longrest,shortrest]` `BUTTON[conditions]`

> [!conditions]
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
> ```meta-bind-js-view
> {exhaustion} as exhaustion
> ---
> container.addClass('exhaustion-tracker');
> return engine.markdown.create(
>     Array(6).fill().map((_,i)=> `<div class="exhaustion ${i<(context.bound.exhaustion??0) ? 'x' : ''}"></div>`).join(''))
> ```
> `BUTTON[add-exhaustion,sub-exhaustion]` Level: `VIEW[+{exhaustion}]`&hairsp;/&hairsp;6
>
> <!-- Death Saves Tracker -->
> ```meta-bind-js-view
> {health.current} as current
> {death_saves} and children as saves
> ---
> const mb = engine.getPlugin('obsidian-meta-bind-plugin').api;
> container.addClass('death-saves');
> const saves = context.bound.saves;
> if (context.bound.current <= 0)
> return engine.markdown.create(`##### Death Saves
>   ${ Array(3).fill().map((_,i)=> `<i class="failure ${i<(saves.failures??0) ? 'x' : ''}"></i>`).join('') }
>   ${ Array(3).fill().map((_,i)=> `<i class="success ${i<(saves.successes??0) ? 'x' : ''}"></i>`).join('') }
>   \`BUTTON[fail-death-saves,succssed-death-saves,clear-death-saves]\`
> `)
> ```


## Abilities

- ##### STR `VIEW[calcmodifier({STR})][math(hidden):memory^STR_mod]`
  `INPUT[number(class(val)):STR]` `VIEW[sign({memory^STR_mod})][math(class(sub))]`
- ##### DEX `VIEW[calcmodifier({DEX})][math(hidden):memory^DEX_mod]`
  `INPUT[number(class(val)):DEX]` `VIEW[sign({memory^DEX_mod})][math(class(sub))]`
- ##### CON `VIEW[calcmodifier({CON})][math(hidden):memory^CON_mod]`
  `INPUT[number(class(val)):CON]` `VIEW[sign({memory^CON_mod})][math(class(sub))]`
- ##### INT `VIEW[calcmodifier({INT})][math(hidden):memory^INT_mod]`
  `INPUT[number(class(val)):INT]` `VIEW[sign({memory^INT_mod})][math(class(sub))]`
- ##### WIS `VIEW[calcmodifier({WIS})][math(hidden):memory^WIS_mod]`
  `INPUT[number(class(val)):WIS]` `VIEW[sign({memory^WIS_mod})][math(class(sub))]`
- ##### CHR `VIEW[calcmodifier({CHR})][math(hidden):memory^CHR_mod]`
  `INPUT[number(class(val)):CHR]` `VIEW[sign({memory^CHR_mod})][math(class(sub))]`
{ .ability-scores }

| Prof                                                                                                                                                                       | Mod | Skill           |                                                                                 Bonus                                                                                 |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.acrobatics]`      | DEX | Acrobatics      |          `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.acrobatics}*{memory^PROF_mod})+{memory^DEX_mod})]`          |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.animal_handling]` | WIS | Animal Handling |       `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.animal_handling}*{memory^PROF_mod})+{memory^WIS_mod})]`        |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.arcana]`          | INT | Arcana          |            `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.arcana}*{memory^PROF_mod})+{memory^INT_mod})]`            |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.deception]`       | STR | Athletics       |          `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.deception}*{memory^PROF_mod})+{memory^STR_mod})]`           |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.animal_handling]` | CHR | Deception       |       `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.animal_handling}*{memory^PROF_mod})+{memory^CHR_mod})]`        |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.history]`         | INT | History         |           `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.history}*{memory^PROF_mod})+{memory^INT_mod})]`            |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.insight]`         | WIS | Insight         |           `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.insight}*{memory^PROF_mod})+{memory^WIS_mod})]`            |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.intimidation]`    | CHR | Intimidation    |         `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.intimidation}*{memory^PROF_mod})+{memory^CHR_mod})]`         |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.investigation]`   | INT | Investigation   |        `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.investigation}*{memory^PROF_mod})+{memory^INT_mod})]`         |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.medicine]`        | WIS | Medicine        |           `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.medicine}*{memory^PROF_mod})+{memory^WIS_mod})]`           |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.nature]`          | INT | Nature          |            `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.nature}*{memory^PROF_mod})+{memory^INT_mod})]`            |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.perception]`      | WIS | Perception      |          `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.perception}*{memory^PROF_mod})+{memory^WIS_mod})]`          |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.performance]`     | CHR | Performance     |         `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.performance}*{memory^PROF_mod})+{memory^CHR_mod})]`          |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.persuasion]`      | CHR | Persuasion      |          `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.persuasion}*{memory^PROF_mod})+{memory^CHR_mod})]`          |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.religion]`        | INT | Religion        |           `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.religion}*{memory^PROF_mod})+{memory^INT_mod})]`           |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.sleight_of_hand]` | DEX | Sleight of Hand |       `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.sleight_of_hand}*{memory^PROF_mod})+{memory^DEX_mod})]`        |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.stealth]`         | DEX | Stealth         | `VIEW[{shield_equipped} or {exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.stealth}*{memory^PROF_mod})+{memory^DEX_mod})]` |
| `INPUT[inlineSelect(defaultValue(0), option(0,not), option(0.5,half), option(1,proficient), option(2,expert), class(proficiency-selector)):proficiencies.survival]`        | WIS | Survival        |           `VIEW[{exhaustion}>=1?'D':''][math(class(twicon-disadvantage))]` `VIEW[sign(floor({proficiencies.survival}*{memory^PROF_mod})+{memory^WIS_mod})]`           |
{ .proficiencies-table .float }

#### Saving Throws

- ##### Strength
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.STR_save]` `VIEW[sign(floor({proficiencies.STR_save}*{memory^PROF_mod})+{memory^STR_mod})][math(class(val))]`
- ##### Dexterity
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.DEX_save]` `VIEW[sign(floor({proficiencies.DEX_save}*{memory^PROF_mod})+{memory^DEX_mod})][math(class(val))]`
- ##### Constitution
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.CON_save]` `VIEW[sign(floor({proficiencies.CON_save}*{memory^PROF_mod})+{memory^CON_mod})][math(class(val))]`
- ##### Intelligence
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.INT_save]` `VIEW[sign(floor({proficiencies.INT_save}*{memory^PROF_mod})+{memory^INT_mod})][math(class(val))]`
- ##### Wisdom
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.WIS_save]` `VIEW[sign(floor({proficiencies.WIS_save}*{memory^PROF_mod})+{memory^WIS_mod})][math(class(val))]`
- ##### Charisma
  `INPUT[inlineSelect(defaultValue(0), option(0,not), option(1,proficient), class(proficiency-selector)):proficiencies.CHR_save]` `VIEW[sign(floor({proficiencies.CHR_save}*{memory^PROF_mod})+{memory^CHR_mod})][math(class(val))]`
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
_A{.twicon-advantage}_ CON saves against the poisoned condition
_p{.twicon-poison}_ poison damage

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
  _w{ .twicon-walking .size-m }_ `VIEW[{speed.walking}][math(class(val))]` _ft._
  _c{ .twicon-climbing .size-m }_ `VIEW[{speed.climbing}][math(class(val))]` _ft._
{ .combat-scores }

> [!health-tracker]
> ##### Hitpoints: `VIEW[{health.current}]`&hairsp;/&hairsp;`VIEW[{health.rolled}+{LVL}*{memory^CON_mod}][:health.max]` `VIEW[{health.temp}>0?print('(+$hp)',\{hp:{health.temp}\}):''][math(class(temp-hp))]`
> ```meta-bind-js-view
> {health.max} as max
> ---
> return engine.markdown.create(`\`\`\`meta-bind\nINPUT[progressBar(maxValue(${context.bound.max}),addLabels(false),class(health-bar)):health.current]\n\`\`\``)
> ```
> `INPUT[number(defaultValue(0)):memory^health_change]` `BUTTON[deal-damage,heal-hitpoints,temp-hitpoints]`

### Actions

|                               | Info                                                    |                       Hit/DC                       |                                                                                 Damage |
| :---------------------------: | :------------------------------------------------------ | :------------------------------------------------: | -------------------------------------------------------------------------------------: |
| _M{ .twicon-melee .size-l }_  | **Wip**<br>_Meele Attack_<br>10 _ft._                   | `VIEW[sign({memory^DEX_mod}+{memory^PROF_mod}+1)]` | **1d4{.dice}**&hairsp;`VIEW[sign({memory^DEX_mod})]` _s{ .twicon-slashing }_<br>slowed |
| _M{ .twicon-melee .size-l }_  | **Dagger of Venom**<br>_Meele Attack_<br>5 _ft._        | `VIEW[sign({memory^DEX_mod}+{memory^PROF_mod}+1)]` |           **1d4{.dice}**&hairsp;`VIEW[sign({memory^DEX_mod})]` _p{ .twicon-piercing }_ |
|                               | **Venom Effect**<br>1&hairsp;_min_ or until attack hits |                     CON<br>15                      |                                                  **2d10{.dice}** _p{ .twicon-poison }_ |
| _R{ .twicon-ranged .size-l }_ | **Dagger (throw)**<br>_Ranged Attack_<br>20 _(60)_      | `VIEW[sign({memory^DEX_mod}+{memory^PROF_mod}+1)]` |           **1d4{.dice}**&hairsp;`VIEW[sign({memory^DEX_mod})]` _p{ .twicon-piercing }_ |
| _U{ .twicon-unarmed .size-l}_ | **Unarmed strike**<br>_Meele Attack_<br>5 _ft._         |  `VIEW[sign({memory^STR_mod}+{memory^PROF_mod})]`  |                                                       `VIEW[sign(1+{memory^STR_mod})]` |
|                               | **Net**<br>_Ranged Attack_<br>5 _(15)_                  |           `VIEW[sign({memory^DEX_mod})]`           |                                                                              restraint |
{ .actions-in-combat .float }

- [[Dagger of Venom|Activate Dagger of Venom]]{.action}
  The Dagger covers itself with a thick, black poison.
  The substance stays on the blade for 1 _min_ or until you hit a creature with the Dagger.
- [[Net]]{.action}
  If a Large or smaller creature is hit with Net, it is restraint.
  A creature within reach can attempt a DC 10 STR check or deal 5 _slashing{.twicon-slashing}_ damage, to destroy the net.
- [[Caltrops (Bag)|Spread Caltrops]]{.action}
  You can spread the bag of caltrops to cover a square area that is 5 feet on a side.

#### Default Actions

- [[Grapple]]{.action}
- [[Shove]]{.action}
- [[Dash]]{.action}
- [[Disengage]]{.action}
- [[Dodge]]{.action}
- [[Hide]]{.action}
- [[Ready]]{.action}
- [[Help]]{.action}
- [[Search]]{.action}
- [[Use]]{.action}
{ .inline-list }

### Bonus Actions

- **Two weapon Fighting**{.action}
  If used the Attack-action and you have a second weapon in you offhand, you may attack a second time using it.
- [[Cunning Action]]{.action}
  You may use [[Dash]], [[Disengage]] or [[Hide]] as a bonus action.

### Reactions

- [[Opportunity Attack]]{.action}
  when a creature that you can see leaves your reach, you can use your reaction to make one melee attack against it

### Other

|                              | Info                                          |         Hit/DC         |                                 Damage |
| :--------------------------: | :-------------------------------------------- | :--------------------: | -------------------------------------: |
| _M{ .twicon-melee .size-l }_ | **Sneat Attack**<br>_Effect_<br>once per turn | advantage<br>on attack |                         **2d6{.dice}** |
| _S{ .twicon-square .size-l }_ | **Caltrops**<br>_Area Effect_                 |       DEX<br>15        | 1 _p{ .twicon-piercing }_<br>-10 _ft._ |s
{ .actions-in-combat }

- [[Sneak Attack]]{.action}
  Once per turn, you can deal an extra `2d6` damage to one creature you hit with an attack with a finesse or ranged weapon if you have advantage on the attack roll. You don’t need advantage on the attack roll if another enemy of the target is within 5 ft. of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.
- [[Caltrops (Bag)|Caltrops]]{.action}
  Any creature that enters the area must succeed on a DC 15 DEX-save or stop moving this turn, take 1 piercing damage and reduces it's walking speed by 10 feet until it regains at least 1 hit point.
  A creature moving through the area at half speed doesn't need to make the save.


## Inventory

```js-engine
container.addClass('inventory-box');
const dv = engine.getPlugin("dataview").api;
let items = dv.pages('"inventory"')
    .sort((e) => e.order_prio ?? 0, 'desc', (a,b) => a - b)
    .map((p) => `![[${p.file.name}#\`=this.file.name\`]]`)
return engine.markdown.create(items.join('\n'))
```


<!-- ===== Buttons for all interactive stuff ================================================== -->

<!-- buttons for long and short rest -->
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

<!-- button to toggle the conditions view -->
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

<!-- buttons for the exhaustion tracker -->
```meta-bind-button
label: ""
icon: plus
style: primary
class: plus
id: "add-exhaustion"
hidden: true
actions:
  - type: updateMetadata
    bindTarget: exhaustion
    evaluate: true
    value: Math.min((x??0)+1, 6)
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
    value: "(x??0) - 1"
  - type: updateMetadata
    bindTarget: exhaustion
    evaluate: true
    value: "x<=0 ? undefined : x"
```

 <!-- buttons for the Death-Saves tracker -->
```meta-bind-button
label: Failure
icon: skull
style: destructive
class: failure
id: fail-death-saves
hidden: true
actions:
  - type: updateMetadata
    bindTarget: death_saves.failures
    evaluate: true
    value: Math.min((x??0) + 1, 3)
```
```meta-bind-button
label: Success
icon: heart-pulse
style: primary
class: success
id: succssed-death-saves
hidden: true
actions:
  - type: updateMetadata
    bindTarget: death_saves.successes
    evaluate: true
    value: Math.min((x??0) + 1, 3)
```
```meta-bind-button
label: Clear
style: default
id: clear-death-saves
hidden: true
actions:
  - type: updateMetadata
    bindTarget: death_saves
    evaluate: true
    value: "undefined"
```

<!-- buttons for the health tracker -->
```meta-bind-button
label: "Damage"
style: primary
class: damage
hidden: true
id: "deal-damage"
actions:
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: "getMetadata('health.temp') == 0 ? Math.max(0, x - (getMetadata('memory^health_change')??0)) : x"
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: "x > 0 ? x - (getMetadata('memory^health_change')??0) : 0"
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: "getMetadata('health.temp') < 0 ? Math.max(0, x + getMetadata('health.temp')) : x"
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: "x < 0 ? 0 : x"
```
```meta-bind-button
label: "Heal"
style: primary
class: heal
hidden: true
id: "heal-hitpoints"
actions:
  - type: updateMetadata
    bindTarget: health.current
    evaluate: true
    value: "Math.min(Math.max(0, x + (getMetadata('memory^health_change')??0)), getMetadata('health.max'))"
```
```meta-bind-button
label: "Temp"
style: primary
class: temp
hidden: true
id: "temp-hitpoints"
actions:
  - type: updateMetadata
    bindTarget: health.temp
    evaluate: true
    value: "Math.max(x, getMetadata('memory^health_change'))"
```
