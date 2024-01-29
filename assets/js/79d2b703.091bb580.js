"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[7902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6010),i=n(3438),s=n(9960),o=n(3919),l=n(5999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:n}=e;return r.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer)},n)}function u(e){let{href:t,icon:n,title:i,description:s}=e;return r.createElement(c,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d.cardTitle),title:i},n," ",i),s&&r.createElement("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:s},s))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const s=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),i=n(6010),s=n(2466),o=n(6550),l=n(1980),d=n(7392),c=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,d]=h({queryString:n,groupId:r}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),y=(()=>{const e=l??u;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var y=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=d[n].value;r!==o&&(u(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},9875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(4866),s=n(5162),o=n(2991);const l={},d="Indy SDK",c={unversionedId:"getting-started/set-up/indy-sdk/index",id:"getting-started/set-up/indy-sdk/index",title:"Indy SDK",description:"Indy SDK provides a distributed ledger based foundation for self-sovereign identity. It can provide the Wallet and StorageService implementations for the agent, as well as a way to interact with Indy ledgers and an implementation of the legacy (v0.1) AnonCreds Specification",source:"@site/guides/getting-started/set-up/indy-sdk/index.md",sourceDirName:"getting-started/set-up/indy-sdk",slug:"/getting-started/set-up/indy-sdk/",permalink:"/guides/0.5/getting-started/set-up/indy-sdk/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aries Askar",permalink:"/guides/0.5/getting-started/set-up/aries-askar"},next:{title:"Linux",permalink:"/guides/0.5/getting-started/set-up/indy-sdk/linux"}},u={},p=[{value:"Installing the Indy SDK",id:"installing-the-indy-sdk",level:3},{value:"Adding the Indy SDK to the Agent",id:"adding-the-indy-sdk-to-the-agent",level:3}],m={toc:p},h="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"indy-sdk"},"Indy SDK"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"Indy SDK")," provides a distributed ledger based foundation for self-sovereign identity. It can provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"Wallet")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StorageService")," implementations for the agent, as well as a way to interact with Indy ledgers and an implementation of the legacy (v0.1) ",(0,a.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/anoncreds-spec/"},"AnonCreds Specification")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The Indy SDK integration in Credo is currently in maintenance mode. We recommend new projects to use ",(0,a.kt)("a",{parentName:"p",href:"../aries-askar"},"Aries Askar")," from the start, and also to migrate existing projects to Aries Askar.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The AnonCreds implementation from the Indy SDK only supports the ",(0,a.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/anoncreds-methods-registry/#hyperledger-indy-legacy-anoncreds-method"},"Hyperledger Indy Legacy AnonCreds Method")," (the pre-standardized implementation), and doesn't support the new Ledger ",(0,a.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/anoncreds-spec/"},"Agnostic AnonCreds Specification (v1.0)"),". Use the new AnonCreds Rust implementation, which is also supported by Credo, in combination with ",(0,a.kt)("a",{parentName:"p",href:"../aries-askar"},"Aries Askar")," and Indy VDR to replace the bevhaviour of the Indy SDK, and support the new features these libraries have to offer.")),(0,a.kt)("h3",{id:"installing-the-indy-sdk"},"Installing the Indy SDK"),(0,a.kt)("p",null,"When using Credo with the Indy SDK, there's a few extra dependencies that need to be installed. We need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@aries-framework/indy-sdk")," package, which implements the needed interfaces for the agent. Secondly, we need to install the native Indy SDK library and the bindings for our specific platform. Currently there are bindings for Node.JS and React Native."),(0,a.kt)("p",null,"To start off, install the native Indy SDK library. The setup for this depends on the platform you are using. Follow the instructions for your platform below."),(0,a.kt)(o.Z,{mdxType:"DocCardList"}),(0,a.kt)("p",null,"After the native Indy SDK library is installed, we can add the Indy SDK libraries."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/indy-sdk@^0.4.0 indy-sdk\n")),(0,a.kt)("p",null,"And install the needed types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"yarn add --dev @types/indy-sdk\n"))),(0,a.kt)(s.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/indy-sdk@^0.4.0 indy-sdk-react-native\n")),(0,a.kt)("p",null,"And then install the needed types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"yarn add --dev @types/indy-sdk-react-native@npm:@types/indy-sdk\n")))),(0,a.kt)("h3",{id:"adding-the-indy-sdk-to-the-agent"},"Adding the Indy SDK to the Agent"),(0,a.kt)("p",null,"After installing the dependencies, we can register the Indy SDK Module on the agent."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-indy-sdk.ts section-1",showLineNumbers:!0,"set-up-indy-sdk.ts":!0,"section-1":!0},""))),(0,a.kt)(s.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-indy-sdk-rn.ts section-1",showLineNumbers:!0,"set-up-indy-sdk-rn.ts":!0,"section-1":!0},"")))))}f.isMDXComponent=!0}}]);