"use strict";(self.webpackChunkfigurawiki=self.webpackChunkfigurawiki||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Figura","href":"/","docId":"intro"},{"type":"category","label":"Start Here","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Avatar File Format","href":"/start_here/Avatar File Format","docId":"start_here/Avatar File Format"},{"type":"link","label":"BlockBench","href":"/start_here/BlockBench","docId":"start_here/BlockBench"}],"href":"/category/start-here"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ActionWheel","href":"/tutorials/ActionWheel","docId":"tutorials/ActionWheel"},{"type":"link","label":"Animations","href":"/tutorials/Animations","docId":"tutorials/Animations"},{"type":"link","label":"Avatar Metadata","href":"/tutorials/Avatar Metadata","docId":"tutorials/Avatar Metadata"},{"type":"link","label":"Custom-Items","href":"/tutorials/Custom-Items","docId":"tutorials/Custom-Items"},{"type":"link","label":"Emissive Textures","href":"/tutorials/Emissive Textures","docId":"tutorials/Emissive Textures"},{"type":"link","label":"How-To-Read-Documentation","href":"/tutorials/How-To-Read-Documentation","docId":"tutorials/How-To-Read-Documentation"},{"type":"link","label":"Keybinds","href":"/tutorials/Keybinds","docId":"tutorials/Keybinds"},{"type":"link","label":"ModelPart Indexing","href":"/tutorials/ModelPart Indexing","docId":"tutorials/ModelPart Indexing"},{"type":"link","label":"Particles","href":"/tutorials/Particles","docId":"tutorials/Particles"},{"type":"link","label":"Pings","href":"/tutorials/Pings","docId":"tutorials/Pings"},{"type":"link","label":"Sounds","href":"/tutorials/Sounds","docId":"tutorials/Sounds"},{"type":"link","label":"Tables","href":"/tutorials/Tables","docId":"tutorials/Tables"}],"href":"/category/tutorials"},{"type":"category","label":"Globals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Events","href":"/globals/Events","docId":"globals/Events"},{"type":"link","label":"Host","href":"/globals/Host","docId":"globals/Host"},{"type":"link","label":"Nameplate","href":"/globals/Nameplate","docId":"globals/Nameplate"},{"type":"link","label":"Player","href":"/globals/Player","docId":"globals/Player"},{"type":"link","label":"Renderer","href":"/globals/Renderer","docId":"globals/Renderer"},{"type":"link","label":"World","href":"/globals/World","docId":"globals/World"}],"href":"/category/globals"},{"type":"category","label":"Enums","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"EntityPoses","href":"/enums/EntityPoses","docId":"enums/EntityPoses"},{"type":"link","label":"ItemDisplayModes","href":"/enums/ItemDisplayModes","docId":"enums/ItemDisplayModes"},{"type":"link","label":"KeyIDs","href":"/enums/KeyIDs","docId":"enums/KeyIDs"},{"type":"link","label":"Keybinds-List","href":"/enums/Keybinds-List","docId":"enums/Keybinds-List"},{"type":"link","label":"Loop-Modes","href":"/enums/Loop-Modes","docId":"enums/Loop-Modes"},{"type":"link","label":"ModelPartParentTypes","href":"/enums/ModelPartParentTypes","docId":"enums/ModelPartParentTypes"},{"type":"link","label":"PlayStates","href":"/enums/PlayStates","docId":"enums/PlayStates"},{"type":"link","label":"PlayerModelParts","href":"/enums/PlayerModelParts","docId":"enums/PlayerModelParts"},{"type":"link","label":"PostEffects","href":"/enums/PostEffects","docId":"enums/PostEffects"},{"type":"link","label":"RenderModes","href":"/enums/RenderModes","docId":"enums/RenderModes"},{"type":"link","label":"RenderTypes","href":"/enums/RenderTypes","docId":"enums/RenderTypes"},{"type":"link","label":"TextureTypes","href":"/enums/TextureTypes","docId":"enums/TextureTypes"},{"type":"link","label":"UseActions","href":"/enums/UseActions","docId":"enums/UseActions"}],"href":"/category/enums"}]},"docs":{"enums/EntityPoses":{"id":"enums/EntityPoses","title":"EntityPoses","description":"List of poses a living entity can have, as accessed by :getPose()","sidebar":"tutorialSidebar"},"enums/ItemDisplayModes":{"id":"enums/ItemDisplayModes","title":"ItemDisplayModes","description":"Item Display Modes can be used to detect the display mode of an item through the item_render event, or it can be used to apply transformations to item tasks.","sidebar":"tutorialSidebar"},"enums/Keybinds-List":{"id":"enums/Keybinds-List","title":"Keybinds-List","description":"List of keybind ids","sidebar":"tutorialSidebar"},"enums/KeyIDs":{"id":"enums/KeyIDs","title":"KeyIDs","description":"For convenience these have been ordered identically to vanilla\'s keybind menu","sidebar":"tutorialSidebar"},"enums/Loop-Modes":{"id":"enums/Loop-Modes","title":"Loop-Modes","description":"These are the loop modes a blockbench animation can be set to, they can be initialized in blockbench itself. Or changed in the code via setLoop(string)","sidebar":"tutorialSidebar"},"enums/ModelPartParentTypes":{"id":"enums/ModelPartParentTypes","title":"ModelPartParentTypes","description":"ParentTypes are applied to ModelParts to apply specific transformations, or change how the ModelPart behaves.","sidebar":"tutorialSidebar"},"enums/PlayerModelParts":{"id":"enums/PlayerModelParts","title":"PlayerModelParts","description":"These are outer layer parts used in conjunction with player:isSkinLayerVisible(string) to detect what parts a player has enabled via the Minecraft Skin Customizations setting.","sidebar":"tutorialSidebar"},"enums/PlayStates":{"id":"enums/PlayStates","title":"PlayStates","description":"The play state of a Blockbench animation, detected with getPlayState().","sidebar":"tutorialSidebar"},"enums/PostEffects":{"id":"enums/PostEffects","title":"PostEffects","description":"These are the Super Secret Settings screen effects. They can be applied to the avatar user\'s POV via renderer:setPostEffect(string)","sidebar":"tutorialSidebar"},"enums/RenderModes":{"id":"enums/RenderModes","title":"RenderModes","description":"Render modes indicate what context the avatar is being rendered in.","sidebar":"tutorialSidebar"},"enums/RenderTypes":{"id":"enums/RenderTypes","title":"RenderTypes","description":"Modelpart render types that can be applied via setPrimaryRenderType(string) or setSecondaryRenderType(string)","sidebar":"tutorialSidebar"},"enums/TextureTypes":{"id":"enums/TextureTypes","title":"TextureTypes","description":"Texture Types you can set using setPrimaryTexture and setSecondaryTexture","sidebar":"tutorialSidebar"},"enums/UseActions":{"id":"enums/UseActions","title":"UseActions","description":"What hold-right-click action an item you\'re using has. As this is for holding actions only, there are no use actions for single press actions like placing a block, feeding an animal, or using blocks like buttons, doors, or trapdoors.","sidebar":"tutorialSidebar"},"globals/Events":{"id":"globals/Events","title":"Events","description":"Events are special functions that run at specific times or from specific triggers.","sidebar":"tutorialSidebar"},"globals/Host":{"id":"globals/Host","title":"Host","description":"The host API is accessed through the host global. Like soisFlying()","sidebar":"tutorialSidebar"},"globals/Nameplate":{"id":"globals/Nameplate","title":"Nameplate","description":"The nameplate is split into four parts, all with different values you can change. These parts are","sidebar":"tutorialSidebar"},"globals/Player":{"id":"globals/Player","title":"Player","description":"The player API is accessed through the player global. Like soisGliding()","sidebar":"tutorialSidebar"},"globals/Renderer":{"id":"globals/Renderer","title":"Renderer","description":"The renderer API is accessed with the renderer global. Like sosetRenderVehicle(false)","sidebar":"tutorialSidebar"},"globals/World":{"id":"globals/World","title":"World","description":"The world API is accessed through the world global. Like so) like most other APIS.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Figura","description":"Welcome to the Figura wiki.","sidebar":"tutorialSidebar"},"start_here/Avatar File Format":{"id":"start_here/Avatar File Format","title":"Avatar File Format","description":"Avatars are stored in &lt;minecraftDirectory&gt;/figura/avatars. You can get to this folder quickly via the  button in the Figura Menu.","sidebar":"tutorialSidebar"},"start_here/BlockBench":{"id":"start_here/BlockBench","title":"BlockBench","description":"Proper tutorials for blockbench can be found online. This page just explains Figura specific stuff. This page assumes you are using the Desktop version of BlockBench, not the online app.","sidebar":"tutorialSidebar"},"tutorials/ActionWheel":{"id":"tutorials/ActionWheel","title":"ActionWheel","description":"The Action Wheel is a gui element provided by Figura that allows for adding highly customizable Actions that can provide additional functionality to your avatar.","sidebar":"tutorialSidebar"},"tutorials/Animations":{"id":"tutorials/Animations","title":"Animations","description":"Figura can play animations from Blockbench using the Animation API.","sidebar":"tutorialSidebar"},"tutorials/Avatar Metadata":{"id":"tutorials/Avatar Metadata","title":"Avatar Metadata","description":"avatar.json is the file that contains Avatar Metadata. It tells Figura specific information about the avatar.","sidebar":"tutorialSidebar"},"tutorials/Custom-Items":{"id":"tutorials/Custom-Items","title":"Custom-Items","description":"Using Figura you can make custom items that are visible in first and third person.","sidebar":"tutorialSidebar"},"tutorials/Emissive Textures":{"id":"tutorials/Emissive Textures","title":"Emissive Textures","description":"This page describes everything to know about Emissive Textures.","sidebar":"tutorialSidebar"},"tutorials/How-To-Read-Documentation":{"id":"tutorials/How-To-Read-Documentation","title":"How-To-Read-Documentation","description":"This article is a WIP.","sidebar":"tutorialSidebar"},"tutorials/Keybinds":{"id":"tutorials/Keybinds","title":"Keybinds","description":"Through Figura\'s keybind API you can have the script listen for key presses to make things happen. Common uses are to trigger animations or toggle modelParts on and off.","sidebar":"tutorialSidebar"},"tutorials/ModelPart Indexing":{"id":"tutorials/ModelPart Indexing","title":"ModelPart Indexing","description":"This page describes the process to access any ModelPart from the global ModelPart models","sidebar":"tutorialSidebar"},"tutorials/Particles":{"id":"tutorials/Particles","title":"Particles","description":"Using the particle API you can spawn particles from Minecraft. These work similarly to the /particle command in-game. For particles with special properties like dust, they are placed in the name.","sidebar":"tutorialSidebar"},"tutorials/Pings":{"id":"tutorials/Pings","title":"Pings","description":"With normal mods, there is comunication between the Minecraft Server and it\'s clients which allows everything to stay in sync.","sidebar":"tutorialSidebar"},"tutorials/Sounds":{"id":"tutorials/Sounds","title":"Sounds","description":"Using Figura you can play custom sounds and sounds from Minecraft itself.","sidebar":"tutorialSidebar"},"tutorials/Tables":{"id":"tutorials/Tables","title":"Tables","description":"A table is a Lua value that can store values in specific keys. The act of getting a value from a table using a key is called \\"indexing\\".","sidebar":"tutorialSidebar"}}}')}}]);