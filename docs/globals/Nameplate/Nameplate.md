---
sidebar_position: 1
---

A global API which is used for customizing your player's nameplate in chat, above your head, and in the tab list

---

### <code>CHAT</code> \{#CHAT}

A customization for your nameplate in the chat

See [NameplateCustomization](../globals/Nameplate/NameplateCustomization) for `Chat` functions

---

### <code>ENTITY</code> \{#ENTITY}

A customization for your nameplate above your head

See [EntityNameplateCustomization](../globals/Nameplate/EntityNameplateCustomization) for `Entity` functions

---

### <code>LIST</code> \{#LIST}

A customization for your nameplate in the tab list

See [NameplateCustomization](../globals/Nameplate/NameplateCustomization) for `List` functions

---

### <code>ALL</code> \{#ALL}

A group that manages all your nameplate customizations at once

See [NameplateCustomizationGroup](../globals/Nameplate/NameplateCustomizationGroup) for `All` functions

---

## Using JSON

If you wish to change the properties of the text outside of just the text, you can use json to change things like color, boldness, or any other properties you can give text in Minecraft, including via the color codes. You can also use a json text generator from anywhere online.

<!-- prettier-ignore -->
```lua
nameplate.All:setText('[{"color":"red","text":"Me"},{"text":"!","color":"#09ff71"}]')

nameplate.All:setText(
   toJson({
       { text = 'Me', color = 'red' },
       { text = '!', color = '#09FF71' }
   })
)
```

Here's an example, you **_must_** wrap all the json given in apostrophes (') like in this example. A json generator will not come with the apostrophes around it, you need to add those yourself. To make things easier, you can use `toJson` like in the second example above.
