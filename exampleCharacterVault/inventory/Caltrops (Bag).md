---
cssclasses:
  - dnd5e-character-item
order_prio: 1
cost: 1
amount: 20
weight: 2
---

## `=this.file.name`

> [!item-infos]
> Cost: `VIEW[{cost}]`&hairsp;_gp._
> Amount: `VIEW[{amount}]`
> `BUTTON[buy-item,use-item]`

A Bag filled with spikey metal objects designed to hinder a creatures movements.

```meta-bind-button
label: ''
icon: plus
style: primary
id: "buy-item"
hidden: true
actions:
  - type: updateMetadata
    bindTarget: amount
    evaluate: true
    value: x + 1
```
```meta-bind-button
label: ''
icon: minus
style: destructive
id: "use-item"
hidden: true
actions:
  - type: updateMetadata
    bindTarget: amount
    evaluate: true
    value: x - 1
```
## Details

As an action, you can spread the bag of caltrops to cover a square area that is 5 feet on a side.

Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature's walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through the area at half speed doesn't need to make the save.
