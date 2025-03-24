---
cssclasses:
  - dnd5e-character-item
order_prio: 2
cost: 50
used: false
---
## `=this.file.name`

> [!item-infos]
> Cost: `VIEW[{cost}]`&hairsp;_gp._

A Dagger that can secrete a thick, black venom on command.

```meta-bind-js-view
{used} as used
---
container.addClass('resource-tracker');
return engine.markdown.create(`\`BUTTON[use-item]\` <i class="charge ${context.bound.used?'x':''}"></i>`)
```

```meta-bind-button
label: Use
style: primary
id: "use-item"
hidden: true
actions:
  - type: updateMetadata
    bindTarget: used
    evaluate: false
    value: "true"
```

## Details

You gain a +1 bonus to attack and damage rolls made with this magic weapon.

You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute.
The dagger can't be used this way again until the next dawn.
