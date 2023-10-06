"use strict";(self.webpackChunkfigurawiki=self.webpackChunkfigurawiki||[]).push([[6430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=l,b=d["".concat(u,".").concat(p)]||d[p]||h[p]||r;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={},i=void 0,o={unversionedId:"tutorials/Tables",id:"tutorials/Tables",title:"Tables",description:'A table is a Lua value that can store values in specific keys. The act of getting a value from a table using a key is called "indexing".',source:"@site/docs/tutorials/Tables.md",sourceDirName:"tutorials",slug:"/tutorials/Tables",permalink:"/tutorials/Tables",draft:!1,editUrl:"https://github.com/figuramc/wiki/tree/main/docs/tutorials/Tables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sounds",permalink:"/tutorials/Sounds"},next:{title:"Globals",permalink:"/category/globals"}},u={},s=[{value:"Initialize Table",id:"initialize-table",level:2},{value:"Generic Indexing",id:"generic-indexing",level:2},{value:"Object Oriented Method Indexing",id:"object-oriented-method-indexing",level:2},{value:"Initialize Table with Values",id:"initialize-table-with-values",level:2},{value:"Iterating Over a Table",id:"iterating-over-a-table",level:2},{value:"Length of Table Array",id:"length-of-table-array",level:2},{value:"Manipulating Table Arrays",id:"manipulating-table-arrays",level:2},{value:"<code>table.insert(t, pos, value)</code>",id:"tableinsertt-pos-value",level:3},{value:"<code>table.remove(t, pos)</code>",id:"tableremovet-pos",level:3}],c={toc:s},d="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'A table is a Lua value that can store values in specific keys. The act of getting a value from a table using a key is called "indexing".'),(0,l.kt)("h2",{id:"initialize-table"},"Initialize Table"),(0,l.kt)("p",null,"A table can be created using curly brackets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local t={}\n")),(0,l.kt)("h2",{id:"generic-indexing"},"Generic Indexing"),(0,l.kt)("code",null,"table[key]")," is the way to index a table. You can either get what is currently at that key, or assign a value to that key. There is no limitation to what can be used as keys or values in a table. If you index a table with an unknown key, it will return ",(0,l.kt)("code",null,"nil"),'. You can also use variables as a key to index a table using this method. ```lua local v=6 t[2]="number key, string value" t["string key, table value"]=','t[false]=true t[v]="ree"',(0,l.kt)("p",null,"print(t","[2]",') --\x3e "number key, string value"\nprint(t','["reeee"]',") --\x3e nil\nprint(t",'["string key, table value"]',") --\x3e table 3be7a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n## String Indexing Shorthand\nIf that seems like a lot of work to index by a string, yes it is.<br/>\n<code>table.key</code> is the shorthand for indexing a table with a string. This has very specific restrictions for what the string can contain.\n- Cannot start with a number (<code>t.2fort</code> will not work. Use <code>[]</code> indexing, or use a different string)\n- Cannot contain spaces, periods, or other special characters\n- Cannot be Lua Keywords (true, false, local, function)\n```lua\nt.name = "Katt"\nt.age = -1\nt.gender = t.name\nt.underscores_are_allowed=true\n')),(0,l.kt)("h2",{id:"object-oriented-method-indexing"},"Object Oriented Method Indexing"),(0,l.kt)("p",null,"There is one more way to index a table. Many of the functions in Figura take in the object that called said function as the first parameter. This is because every object of the same type has the exact same functions. This is done via ",(0,l.kt)("code",null,"table:key()"),".",(0,l.kt)("br",null)),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local posA=player:getPos()\n\nlocal posB=player.getPos(player)\n")),(0,l.kt)("h2",{id:"initialize-table-with-values"},"Initialize Table with Values"),(0,l.kt)("p",null,"You can assign values to keys when the table is initialized. Each key-value pair must be separated by a comma (",(0,l.kt)("code",null,","),")",(0,l.kt)("br",null)),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local a={\n  [false]=1,\n  ["string with spaces"]="string",\n  [v]={\n    ["a"]=1,\n    ["b"]=2\n  },\n\n  --string shorthand rules still apply. This is equivalent to <code>["life"]=42,</code>\n  life=42,\n}\n')),(0,l.kt)("p",null,"If you do not specify an index, the provided values will automatically be assigned a numeric index, starting at ",(0,l.kt)("code",null,"1"),". This is how arrays are handled in lua, just a table that acts as an array. A table array if you will. Unlike other languages, Lua arrays begin indexing at ",(0,l.kt)("code",null,"1")," and functions that take in an array expect the first element at ",(0,l.kt)("code",null,"1"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local array={\n  42,         --[1] = 42,\n  36,         --[2] = 36,\n  1024,       --[3] = 1024,\n  1,          --[4] = 1,\n  "string",   --[5] = "string",\n  v,          --[6] = v,\n  t           --[7] = t\n}\n--newlines are ignored, as with everything in lua\nlocal array2={42,36,1024,1,"string",v,t}\n')),(0,l.kt)("h2",{id:"iterating-over-a-table"},"Iterating Over a Table"),(0,l.kt)("p",null,"Iterating over a table is simple.",(0,l.kt)("br",null),"\nYou can iterate over every single index using ",(0,l.kt)("code",null,"pairs"),". This will go through every index, but it will be in an undefined order. ",(0,l.kt)("code",null,"pairs")," has 2 values it returns when used in a for loop: the current ",(0,l.kt)("code",null,"key"),", and the current ",(0,l.kt)("code",null,"value")," at that ",(0,l.kt)("code",null,"key"),".",(0,l.kt)("br",null)),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"for key, value in pairs(t) do\n  print(key,value)\nend\n")),(0,l.kt)("p",null,"If the order of the iteration is important, you can use ",(0,l.kt)("code",null,"ipairs"),", but it only goes over numerical indices. This is what you want to use for table arrays. It starts at index ",(0,l.kt)("code",null,"1"),", and increments by ",(0,l.kt)("code",null,"1")," until the table returns ",(0,l.kt)("code",null,"nil"),". When used in a for loop, ",(0,l.kt)("code",null,"ipairs")," returns the current index and the ",(0,l.kt)("code",null,"value")," at that ",(0,l.kt)("code",null,"index"),".",(0,l.kt)("br",null)),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"for index, value in ipairs(array) do\n  print(index,value)\nend\n")),(0,l.kt)("h2",{id:"length-of-table-array"},"Length of Table Array"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("code",null,"#")," operator to get the length of a table array. For tables with non-numeric indexes, you have to use ",(0,l.kt)("code",null,"pairs"),' and calculate the length yourself, though the "length" of that kind of table isnt really useful. This follows the same rules as ',(0,l.kt)("code",null,"ipairs")," in the way that the table's length is every numeric index until one returns ",(0,l.kt)("code",null,"nil"),". So ",(0,l.kt)("code",null,"#{1,2,3,4}")," will return ",(0,l.kt)("code",null,"4"),", and ",(0,l.kt)("code",null,"#{1,2,nil,4}")," will return ",(0,l.kt)("code",null,"2"),".",(0,l.kt)("br",null),"\nAs an example, ",(0,l.kt)("code",null,"ipairs")," is pretty much just this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"for index=1,#array,1 do\n  print(index,array[index])\nend\n")),(0,l.kt)("h2",{id:"manipulating-table-arrays"},"Manipulating Table Arrays"),(0,l.kt)("p",null,"Lua comes built in with ways to manipulate tables. Not all are described here, just the ones that I feel are most important.",(0,l.kt)("br",null),"\nAll of these functions are available via the ",(0,l.kt)("code",null,"tables")," global."),(0,l.kt)("h3",{id:"tableinsertt-pos-value"},(0,l.kt)("code",null,"table.insert(t, pos, value)")),(0,l.kt)("p",null,"This function can add a value at any index, shifting the other values to account for the added value.",(0,l.kt)("br",null)),(0,l.kt)("code",null,'table.insert(array, 1, "e")')," will insert ",(0,l.kt)("code",null,'"e"')," at the beggining of the table ",(0,l.kt)("code",null,"array"),", shifting every other value forward one index.",(0,l.kt)("br",null),"When adding elements to the end of the array, you use the function as ",(0,l.kt)("code",null,"table.insert(t, value)"),". So ",(0,l.kt)("code",null,'table.insert(array, "l")')," appends ",(0,l.kt)("code",null,'"l"')," to the end of the table ",(0,l.kt)("code",null,"array"),".",(0,l.kt)("h3",{id:"tableremovet-pos"},(0,l.kt)("code",null,"table.remove(t, pos)")),(0,l.kt)("p",null,"This function can remove a value at any index, shifting the other values to account for the removed value. The value that was removed will be returned by this function as well.",(0,l.kt)("br",null)),(0,l.kt)("code",null,"table.remove(array, 1)")," will remove the value at index ",(0,l.kt)("code",null,"1")," from the table, shifting all the values back an index.",(0,l.kt)("br",null),(0,l.kt)("code",null,"pos")," is optional, with the default value being ",(0,l.kt)("code",null,"#t"),". ",(0,l.kt)("code",null,"table.remove(array)")," will remove the last value in the table.")}h.isMDXComponent=!0}}]);