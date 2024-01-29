"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[4565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),s=n(6550),l=n(1980),d=n(7392),p=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,d]=h({queryString:n,groupId:a}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var f=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==s&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},3624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const s={},l="Indy VDR",d={unversionedId:"getting-started/set-up/indy-vdr",id:"version-0.4/getting-started/set-up/indy-vdr",title:"Indy VDR",description:"Hyperledger Indy VDR, Verifiable Data Registry, can be used to connect to one or more Indy Node ledger pools given sets of genesis transactions. Methods are provided to construct ledger requests and send them to the validators, collecting the results and ensuring that there is a consensus between the nodes. In the context of Aries Framework JavaScript, we mainly leverage it to register, and resolve, schemas, credential definitions and DIDs.",source:"@site/versioned_docs/version-0.4/getting-started/set-up/indy-vdr.md",sourceDirName:"getting-started/set-up",slug:"/getting-started/set-up/indy-vdr",permalink:"/guides/getting-started/set-up/indy-vdr",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AnonCreds RS",permalink:"/guides/getting-started/set-up/anoncreds-rs"},next:{title:"cheqd",permalink:"/guides/getting-started/set-up/cheqd/"}},p={},u=[{value:"Installing Indy VDR",id:"installing-indy-vdr",level:3},{value:"Adding Indy VDR to the agent",id:"adding-indy-vdr-to-the-agent",level:3},{value:"Configuration",id:"configuration",level:3},{value:"indyVdr",id:"indyvdr",level:4},{value:"networks",id:"networks",level:4},{value:"indyNamespace",id:"indynamespace",level:5},{value:"<code>isProduction</code>",id:"isproduction",level:5},{value:"<code>genesisTransactions</code>",id:"genesistransactions",level:5},{value:"<code>connectOnStartup</code>",id:"connectonstartup",level:5},{value:"<code>transactionAuthorAgreement</code>",id:"transactionauthoragreement",level:5},{value:"<code>transactionAuthorAgreement.version</code>",id:"transactionauthoragreementversion",level:5},{value:"<code>transactionAuthorAgreement.acceptanceMechanism</code>",id:"transactionauthoragreementacceptancemechanism",level:5},{value:"Supported Node.JS versions for Indy VDR",id:"supported-nodejs-versions-for-indy-vdr",level:3}],c={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"indy-vdr"},"Indy VDR"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-vdr"},"Hyperledger Indy VDR"),", Verifiable Data Registry, can be used to connect to one or more Indy Node ledger pools given sets of genesis transactions. Methods are provided to construct ledger requests and send them to the validators, collecting the results and ensuring that there is a consensus between the nodes. In the context of Aries Framework JavaScript, we mainly leverage it to register, and resolve, schemas, credential definitions and DIDs."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Support for Indy VDR in Aries Framework JavaScript is currently experimental. We recommend new projects to use Indy VDR from the start, and also to migrate existing projects to Indy VDR, from the indy-sdk. However, projects may experience some issues. If you encounter any issues, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript/issues/new"},"open an issue"),"."),(0,r.kt)("p",{parentName:"admonition"},"Currently, there are few limitations to using Indy VDR."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When running in Node.JS, only Node.JS 18 is supported for now. See ",(0,r.kt)("a",{parentName:"li",href:"#supported-nodejs-versions-for-indy-vdr"},"Supported Node.JS versions for Indy VDR")),(0,r.kt)("li",{parentName:"ul"},"Install scripts rely on bash command substitution to get the proper binaries for each system architecture and platform. Therefore, if you are under Windows, you must configure ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," to use a bash-compliant shell (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'npm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"'),")"))),(0,r.kt)("h3",{id:"installing-indy-vdr"},"Installing Indy VDR"),(0,r.kt)("p",null,"When using Aries Framework JavaScript with Indy VDR, there are a few extra dependencies that need to be installed. We need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@hyperledger/indy-vdr"),", which contains all the functionality to register objects on an Hyperledger Indy VDR. Secondly, we need to add native bindings for the specific platform ",(0,r.kt)("inlineCode",{parentName:"p"},"@hyperledger/indy-vdr-<platform>"),". Currently there are bindings for Node.JS, as ",(0,r.kt)("inlineCode",{parentName:"p"},"@hyperledger/indy-vdr-nodejs"),", and React Native as ",(0,r.kt)("inlineCode",{parentName:"p"},"@hyperlegder/indy-vdr-react-native"),"."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/indy-vdr@^0.4.0 @hyperledger/indy-vdr-nodejs@^0.1.0\n"))),(0,r.kt)(o.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"yarn add @aries-framework/indy-vdr@^0.4.0 @hyperledger/indy-vdr-react-native@^0.1.0\n")))),(0,r.kt)("h3",{id:"adding-indy-vdr-to-the-agent"},"Adding Indy VDR to the agent"),(0,r.kt)("p",null,"After installing the dependencies, we can register the Indy VDR module on the agent."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node.JS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-indy-vdr.ts section-1",showLineNumbers:!0,"set-up-indy-vdr.ts":!0,"section-1":!0},""))),(0,r.kt)(o.Z,{label:"React Native",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-indy-vdr-rn.ts section-1",showLineNumbers:!0,"set-up-indy-vdr-rn.ts":!0,"section-1":!0},"")))),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"As you can see below, the Indy VDR module takes the native bindings and a list of networks. This list of networks will be used to resolve and register objects on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"typescript showLineNumbers set-up-indy-vdr-config.ts section-1",typescript:!0,showLineNumbers:!0,"set-up-indy-vdr-config.ts":!0,"section-1":!0},"")),(0,r.kt)("h4",{id:"indyvdr"},"indyVdr"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"IndyVdr")),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"indyVdr")," key takes a class that implements all the native bindings for Indy VDR. This can be imoprted from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@hyperledger/indy-vdr-nodejs")," package or the ",(0,r.kt)("inlineCode",{parentName:"p"},"@hyperledger/indy-vdr-react-native")," package."),(0,r.kt)("h4",{id:"networks"},"networks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"IndyVdrPoolConfig[]")),(0,r.kt)("p",null,"An array of indy networks to connect to. The list can contain the following object and it must ",(0,r.kt)("a",{parentName:"p",href:"#indyledgersgenesistransactions"},(0,r.kt)("inlineCode",{parentName:"a"},"genesisTransactions")),"."),(0,r.kt)("h5",{id:"indynamespace"},"indyNamespace"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The Indy namespace aka the name identifying the name of the network connecting to. See also ",(0,r.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/indy-did-method/#indy-did-method-identifiers"},"indy did method identifiers")),(0,r.kt)("h5",{id:"isproduction"},(0,r.kt)("inlineCode",{parentName:"h5"},"isProduction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the ledger is a production ledger. This is used for detecting which ledger to use in case of unqualified identifiers as production ledgers have priority."),(0,r.kt)("h5",{id:"genesistransactions"},(0,r.kt)("inlineCode",{parentName:"h5"},"genesisTransactions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Stringified JSON object of the transaction."),(0,r.kt)("h5",{id:"connectonstartup"},(0,r.kt)("inlineCode",{parentName:"h5"},"connectOnStartup")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether to connect to the ledger on startup. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h5",{id:"transactionauthoragreement"},(0,r.kt)("inlineCode",{parentName:"h5"},"transactionAuthorAgreement")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionAuthorAgreement")),(0,r.kt)("p",null,"JSON representation specifying the version and acceptance mechanism. The version is the unique version of the transaction author agreement acceptance mechanism list (AML). The acceptance mechanism refers to the acceptance mechanism label of the item in the AML. For more details you may consult the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-node/blob/master/docs/source/transactions.md#transaction_author_agreement_aml"},"indy-node docs on AML")),(0,r.kt)("h5",{id:"transactionauthoragreementversion"},(0,r.kt)("inlineCode",{parentName:"h5"},"transactionAuthorAgreement.version")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The version of the AML acceptance mechanism. This is a string representation of a version number e.g. '1' or '1.4'"),(0,r.kt)("h5",{id:"transactionauthoragreementacceptancemechanism"},(0,r.kt)("inlineCode",{parentName:"h5"},"transactionAuthorAgreement.acceptanceMechanism")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The acceptance mechanism to choose. This ",(0,r.kt)("em",{parentName:"p"},"must")," be ",(0,r.kt)("em",{parentName:"p"},"one")," of the available labels of the acceptance mechanisms key-value pairs in the AML e.g. 'EULA'."),(0,r.kt)("h3",{id:"supported-nodejs-versions-for-indy-vdr"},"Supported Node.JS versions for Indy VDR"),(0,r.kt)("p",null,"Due to an issue in ",(0,r.kt)("inlineCode",{parentName:"p"},"ref-napi")," (which is used in the Node.JS bindings for Indy VDR), performance for Indy VDR in Node.JS is not as expected. A patched version for ",(0,r.kt)("inlineCode",{parentName:"p"},"ref-napi")," has been published that fixes this issue, but this only works in Node.JS 18+."),(0,r.kt)("p",null,"To use Indy VDR in Node.JS, make sure you're using Node.JS 18 and patch the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref-napi")," package to point towards ",(0,r.kt)("inlineCode",{parentName:"p"},"@2060.io/ref-napi")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"NPM",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides"},"NPM ",(0,r.kt)("inlineCode",{parentName:"a"},"overrides"))," we can point the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref-napi")," package to ",(0,r.kt)("inlineCode",{parentName:"p"},"@2060.io/ref-napi"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overrides": {\n    "ref-napi": "npm:@2060.io/ref-napi"\n  }\n}\n'))),(0,r.kt)(o.Z,{label:"Yarn",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/"},"Yarn ",(0,r.kt)("inlineCode",{parentName:"a"},"resolutions"))," we can point the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref-napi")," package to ",(0,r.kt)("inlineCode",{parentName:"p"},"@2060.io/ref-napi"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resolutions": {\n    "ref-napi": "npm:@2060.io/ref-napi"\n  }\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the following issues for more information on the performance bottleneck"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-askar/issues/76"},"https://github.com/hyperledger/aries-askar/issues/76")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/node-ffi-napi/ref-napi/issues/72"},"https://github.com/node-ffi-napi/ref-napi/issues/72")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/node-ffi-napi/ref-napi/pull/73"},"https://github.com/node-ffi-napi/ref-napi/pull/73")))))}h.isMDXComponent=!0}}]);