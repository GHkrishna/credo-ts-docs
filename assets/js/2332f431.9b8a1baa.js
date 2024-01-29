"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[82],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),r=n(6010),i=n(3438),o=n(9960),s=n(3919),l=n(5999);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer)},n)}function c(e){let{href:t,icon:n,title:i,description:o}=e;return a.createElement(p,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",u.cardTitle),title:i},n," ",i),o&&a.createElement("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:o},o))}function d(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(c,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(c,{href:t.href,icon:n,title:t.label,description:r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return a.createElement(h,e);const o=(0,i.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},o.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),s=n(6550),l=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=g({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},8278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162),s=n(2991);const l={},u="Agent Setup",p={unversionedId:"getting-started/set-up/index",id:"getting-started/set-up/index",title:"Agent Setup",description:"This guide assumes you have followed the Prerequisites, and you have a valid",source:"@site/guides/getting-started/set-up/index.md",sourceDirName:"getting-started/set-up",slug:"/getting-started/set-up/",permalink:"/guides/0.5/getting-started/set-up/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/guides/0.5/getting-started/prerequisites"},next:{title:"Aries Askar",permalink:"/guides/0.5/getting-started/set-up/aries-askar"}},c={},d=[{value:"Installing the required dependencies",id:"installing-the-required-dependencies",level:3},{value:"Additional setup",id:"additional-setup",level:3},{value:"Setting up the agent",id:"setting-up-the-agent",level:3},{value:"Adding a wallet and storage implementation",id:"adding-a-wallet-and-storage-implementation",level:3},{value:"Setting up the transports",id:"setting-up-the-transports",level:3},{value:"Initializing the agent",id:"initializing-the-agent",level:3},{value:"Next Steps",id:"next-steps",level:3},{value:"Useful resources",id:"useful-resources",level:3}],m={toc:d},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agent-setup"},"Agent Setup"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide assumes you have followed the ",(0,r.kt)("a",{parentName:"p",href:"./prerequisites"},"Prerequisites"),", and you have a valid\n",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.JS")," or ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React Native")," project setup.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Credo is still in ",(0,r.kt)("strong",{parentName:"p"},"active development"),", and as such some APIs are still experimental. ",(0,r.kt)("strong",{parentName:"p"},"When using any experimental features, make sure to use an exact version of Credo")," (",(0,r.kt)("inlineCode",{parentName:"p"},"0.4.0"),") instead of a range (",(0,r.kt)("inlineCode",{parentName:"p"},"^0.4.0"),"), to prevent accidental breaking changes. If you're not leveraging any experimental features, you can use a range (",(0,r.kt)("inlineCode",{parentName:"p"},"^0.4.0"),") to get the latest bugfixes and features."),(0,r.kt)("p",{parentName:"admonition"},"For Credo ",(0,r.kt)("inlineCode",{parentName:"p"},"0.4.x"),", ",(0,r.kt)("strong",{parentName:"p"},"the following features are experimental"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Implementing your own ",(0,r.kt)("inlineCode",{parentName:"li"},"AnonCredsRegistry")," and AnonCreds service implementation."),(0,r.kt)("li",{parentName:"ul"},"Using the shared component libraries from ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/aries-askar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/indy-vdr")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/anoncreds-rs")),(0,r.kt)("li",{parentName:"ul"},"Using OpenID4VC from the ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/openid4vc-client")," module"),(0,r.kt)("li",{parentName:"ul"},"W3C JWT Verifiable Credentials"),(0,r.kt)("li",{parentName:"ul"},"Using multi-tenancy from the ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/tenants")," module"),(0,r.kt)("li",{parentName:"ul"},"Using BBS+ Signatures from the ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/bbs-signatures")," module"),(0,r.kt)("li",{parentName:"ul"},"Using the cheqd module from the ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/cheqd")," module"))),(0,r.kt)("h3",{id:"installing-the-required-dependencies"},"Installing the required dependencies"),(0,r.kt)("p",null,"First we have to install the minimal amount of dependencies that are required\nfor configuring an Credo agent."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/core@^0.4.0 @aries-framework/node@^0.4.0\n"))),(0,r.kt)(o.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/core@^0.4.0 @aries-framework/react-native@^0.4.0 react-native-fs react-native-get-random-values\n")))),(0,r.kt)("h3",{id:"additional-setup"},"Additional setup"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"No additional setup is required for Node.JS")),(0,r.kt)(o.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"Since ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React Native")," does not have an implementation\nfor\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"},(0,r.kt)("inlineCode",{parentName:"a"},"crypto.getRandomValues()")),"\nwe have to setup a polyfill for this. We have to do this at the entrypoint of\nthe application. This could is most likely ",(0,r.kt)("inlineCode",{parentName:"p"},"index.(js|ts|jsx|tsx)")," at the root\nof your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="index.tsx" showLineNumbers',title:'"index.tsx"',showLineNumbers:!0},"+ import 'react-native-get-random-values'\n")),(0,r.kt)("p",null,"In addition you need add support for resolving modules with the ",(0,r.kt)("inlineCode",{parentName:"p"},".cjs")," extension, as this is used by some of Credo's dependencies and not automatically supported by React Native."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="metro.config.js" showLineNumbers',title:'"metro.config.js"',showLineNumbers:!0},"module.exports = {\n  // ... other Metro config options ...\n  resolver: {\n    // make sure this includes `cjs` (and other extensions you need)\n    sourceExts: ['js', 'json', 'ts', 'tsx', 'cjs'],\n  },\n}\n")),(0,r.kt)("p",null,"Finally, if you're using ",(0,r.kt)("a",{parentName:"p",href:"https://expo.dev"},"Expo")," you need to add a custom resolution 'hack' that removes support for the legacy unimodules."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Yarn")),(0,r.kt)("p",null,"For yarn we can replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"@unimodules/react-native-adapter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@unimodules/core")," dependencies with an empty directory. Make sure to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"noop")," directory in the root of your project and create a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitkeep")," file in the directory so that the directory is committed to your repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json" showLineNumbers',title:'"package.json"',showLineNumbers:!0},'{\n  // ... other package.json options ...\n  "resolutions": {\n    "@unimodules/react-native-adapter": "./noop",\n    "@unimodules/core": "./noop"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NPM")),(0,r.kt)("p",null,"Not supported at the moment. NPM overrides work different than Yarn resolutions, and thus we can't use the same trick. If you're using NPM, feel free to open a PR with a working solution."))),(0,r.kt)("h3",{id:"setting-up-the-agent"},"Setting up the agent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"this section does not assume any knowledge of the agent configuration.\nIn the ",(0,r.kt)("a",{parentName:"p",href:"../tutorials/agent-config"},"Agent Config")," tutorial we will discuss in-depth what every\nfield in the configuration does and when to set it.")),(0,r.kt)("p",null,"In order to use the agent in the application we have to configure and\ninitialize it. This following configuration is quite generic and possibly not\nenough for your specific use cases. Please refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../tutorials/index"},"tutorials")," for a more use-case-specific agent setup."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up.ts section-1",showLineNumbers:!0,"set-up.ts":!0,"section-1":!0},""))),(0,r.kt)(o.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-rn.ts section-1",showLineNumbers:!0,"set-up-rn.ts":!0,"section-1":!0},"")))),(0,r.kt)("h3",{id:"adding-a-wallet-and-storage-implementation"},"Adding a wallet and storage implementation"),(0,r.kt)("p",null,"After creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"Agent")," instance, we need to provide the agent with a wallet and storage implementation. Credo provides a few implementations out of the box, but you can also implement your own. Currently the following Wallet and Storage implementations are supported out of the box. Follow the specific guides to set up the wallet and storage implementation of your choice."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./set-up/aries-askar"},"Aries Askar")," - Recommended."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./set-up/indy-sdk"},"Indy SDK")," - Legacy. Will be deprecated in the future.")),(0,r.kt)(s.Z,{items:[{type:"link",label:"Aries Askar",href:"./set-up/aries-askar",docId:"getting-started/set-up/aries-askar"},{type:"link",label:"Indy SDK",href:"./set-up/indy-sdk",docId:"getting-started/set-up/indy-sdk/index"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"setting-up-the-transports"},"Setting up the transports"),(0,r.kt)("p",null,"Finally, we have to set an outbound transport that\nwill handle traffic from the agent. It is also possible to set an inbound\ntransport in the same way as the outbound transport."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"Sets up an WS outbound and HTTP inbound and outbound transport."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up.ts section-2",showLineNumbers:!0,"set-up.ts":!0,"section-2":!0},""))),(0,r.kt)(o.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"For mobile agents the WebSocket transport is often required. We will go into\nmore depth about the reasons for this in the ",(0,r.kt)("a",{parentName:"p",href:"/guides/0.5/tutorials/mediation"},"mediation")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-rn.ts section-2",showLineNumbers:!0,"set-up-rn.ts":!0,"section-2":!0},"")))),(0,r.kt)("h3",{id:"initializing-the-agent"},"Initializing the agent"),(0,r.kt)("p",null,"Finally, we can initialize the agent and it's ready for use."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node.js",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up.ts section-3",showLineNumbers:!0,"set-up.ts":!0,"section-3":!0},""))),(0,r.kt)(o.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-rn.ts section-3",showLineNumbers:!0,"set-up-rn.ts":!0,"section-3":!0},"")))),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now that you have your agent setup, it's time to start building your application. Head over to the tutorials page to get started."),(0,r.kt)(s.Z,{items:[{type:"link",label:"Tutorials",href:"../tutorials/index",docId:"tutorials/index"},{type:"link",label:"Create a Connection",href:"../tutorials/create-a-connection",docId:"tutorials/create-a-connection"}],mdxType:"DocCardList"}),(0,r.kt)("h3",{id:"useful-resources"},"Useful resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/concepts/0004-agents/README.md"},"Hyperledger Aries RFC - 004:\nAgents"))))}h.isMDXComponent=!0}}]);