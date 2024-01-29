"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[2254],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7294),a=t(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var r=t(7462),a=t(7294),o=t(6010),s=t(2466),i=t(6550),l=t(1980),u=t(7392),p=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function c(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=c(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,u]=f({queryString:t,groupId:r}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,p.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=p.indexOf(n),r=u[t].value;r!==i&&(d(n),l(r))},m=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:c},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function v(e){const n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(k,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function N(e){const n=(0,g.Z)();return a.createElement(v,(0,r.Z)({key:String(n)},e))}},3570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),o=t(4866),s=t(5162);const i={},l="AnonCreds RS",u={unversionedId:"getting-started/set-up/anoncreds-rs",id:"version-0.4/getting-started/set-up/anoncreds-rs",title:"AnonCreds RS",description:"AnonCreds RS is a direct implementation of the AnonCreds V1.0 specification that provides functionality like; creating a schema object, creating a credential definition object, creating a credential, verifying a proof presentation and much more.",source:"@site/versioned_docs/version-0.4/getting-started/set-up/anoncreds-rs.md",sourceDirName:"getting-started/set-up",slug:"/getting-started/set-up/anoncreds-rs",permalink:"/guides/getting-started/set-up/anoncreds-rs",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/guides/getting-started/set-up/indy-sdk/react-native"},next:{title:"Indy VDR",permalink:"/guides/getting-started/set-up/indy-vdr"}},p={},d=[{value:"Installing AnonCreds RS",id:"installing-anoncreds-rs",level:3},{value:"Adding AnonCreds RS to the agent",id:"adding-anoncreds-rs-to-the-agent",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Supported Node.JS versions for AnonCreds RS",id:"supported-nodejs-versions-for-anoncreds-rs",level:3}],c={toc:d},m="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anoncreds-rs"},"AnonCreds RS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/anoncreds-rs"},"AnonCreds RS")," is a direct implementation of the ",(0,a.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/anoncreds-spec/"},"AnonCreds V1.0 specification")," that provides functionality like; creating a schema object, creating a credential definition object, creating a credential, verifying a proof presentation and much more."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Support for the AnonCreds RS library in Aries Framework JavaScript is currently experimental. We recommend new projects to use AnonCreds RS from the start, and also to migrate existing projects to AnonCreds, from the Indy Sdk. However, projects may experience some issues. If you encounter any issues, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript/issues/new"},"open an issue"),"."),(0,a.kt)("p",{parentName:"admonition"},"Currently, there are few limitations to using AnonCreds RS."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"When running in Node.JS, only Node.JS 18 is supported for now. See ",(0,a.kt)("a",{parentName:"li",href:"#supported-nodejs-versions-for-anoncreds-rs"},"Supported Node.JS versions for AnonCreds RS")),(0,a.kt)("li",{parentName:"ul"},"Install scripts rely on bash command substitution to get the proper binaries for each system architecture and platform. Therefore, if you are under Windows, you must configure ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," to use a bash-compliant shell (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'npm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"'),")"))),(0,a.kt)("h3",{id:"installing-anoncreds-rs"},"Installing AnonCreds RS"),(0,a.kt)("p",null,"When using Aries Framework JavaScript with AnonCreds RS, there are a few extra dependencies that need to be installed. We need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@hyperledger/anoncreds")," package, which contains the interfaces, and ",(0,a.kt)("inlineCode",{parentName:"p"},"@hyperledger/anoncreds-rs")," package which is an implementation which depends on a wrapper of anoncreds-rs. Secondly, we need to add native bindings for the specific platform ",(0,a.kt)("inlineCode",{parentName:"p"},"@hyperledger/anoncreds-<platform>"),". Currently there are bindings for Node.JS, as ",(0,a.kt)("inlineCode",{parentName:"p"},"@hyperledger/anoncreds-nodejs"),", and React Native as ",(0,a.kt)("inlineCode",{parentName:"p"},"@hyperlegder/anoncreds-react-native"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/anoncreds@^0.4.0 @aries-framework/anoncreds-rs@^0.4.0 @hyperledger/anoncreds-nodejs@^0.1.0\n"))),(0,a.kt)(s.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/anoncreds@^0.4.0 @aries-framework/anoncreds-rs@^0.4.0 @hyperledger/anoncreds-react-native@^0.1.0\n")))),(0,a.kt)("h3",{id:"adding-anoncreds-rs-to-the-agent"},"Adding AnonCreds RS to the agent"),(0,a.kt)("p",null,"After installing the dependencies, we should register both the ",(0,a.kt)("inlineCode",{parentName:"p"},"AnonCreds")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AnonCredsRs")," module on the agent."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-anoncreds-rs.ts section-1",showLineNumbers:!0,"set-up-anoncreds-rs.ts":!0,"section-1":!0},""))),(0,a.kt)(s.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-anoncreds-rs-rn.ts section-1",showLineNumbers:!0,"set-up-anoncreds-rs-rn.ts":!0,"section-1":!0},"")))),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"As you can see, the AnonCreds module takes a list of registry modules. These modules will be used to resolve the AnonCreds objects. We recommend ",(0,a.kt)("a",{parentName:"p",href:"./indy-vdr"},"Indy VDR")," as an AnonCreds registry for Hyperledger Indy networks, but ",(0,a.kt)("a",{parentName:"p",href:"./indy-sdk"},"Indy SDK")," can also be used."),(0,a.kt)("h3",{id:"supported-nodejs-versions-for-anoncreds-rs"},"Supported Node.JS versions for AnonCreds RS"),(0,a.kt)("p",null,"Due to an issue in ",(0,a.kt)("inlineCode",{parentName:"p"},"ref-napi")," (which is used in the Node.JS bindings for AnonCreds RS), performance for AnonCreds RS in Node.JS is not as expected. A patched version for ",(0,a.kt)("inlineCode",{parentName:"p"},"ref-napi")," has been published that fixes this issue, but this only works in Node.JS 18+."),(0,a.kt)("p",null,"To use AnonCreds RS in Node.JS, make sure you're using Node.JS 18 and patch the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref-napi")," package to point towards ",(0,a.kt)("inlineCode",{parentName:"p"},"@2060.io/ref-napi")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{label:"NPM",value:"tab1",mdxType:"TabItem"},(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides"},"NPM ",(0,a.kt)("inlineCode",{parentName:"a"},"overrides"))," we can point the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref-napi")," package to ",(0,a.kt)("inlineCode",{parentName:"p"},"@2060.io/ref-napi"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overrides": {\n    "ref-napi": "npm:@2060.io/ref-napi"\n  }\n}\n'))),(0,a.kt)(s.Z,{label:"Yarn",value:"tab2",mdxType:"TabItem"},(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/"},"Yarn ",(0,a.kt)("inlineCode",{parentName:"a"},"resolutions"))," we can point the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref-napi")," package to ",(0,a.kt)("inlineCode",{parentName:"p"},"@2060.io/ref-napi"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resolutions": {\n    "ref-napi": "npm:@2060.io/ref-napi"\n  }\n}\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See the following issues for more information on the performance botleneck"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-askar/issues/76"},"https://github.com/hyperledger/aries-askar/issues/76")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/node-ffi-napi/ref-napi/issues/72"},"https://github.com/node-ffi-napi/ref-napi/issues/72")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/node-ffi-napi/ref-napi/pull/73"},"https://github.com/node-ffi-napi/ref-napi/pull/73")))))}f.isMDXComponent=!0}}]);