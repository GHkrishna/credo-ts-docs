"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[2743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={},o="Cheqd Did Module",l={unversionedId:"tutorials/cheqd/index",id:"version-0.4/tutorials/cheqd/index",title:"Cheqd Did Module",description:"In this tutorial we will see how to use the cheqd modules in detail",source:"@site/versioned_docs/version-0.4/tutorials/cheqd/index.md",sourceDirName:"tutorials/cheqd",slug:"/tutorials/cheqd/",permalink:"/guides/tutorials/cheqd/",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a connection",permalink:"/guides/tutorials/create-a-connection"},next:{title:"Registering a schema and credential definition on an AnonCreds Registry",permalink:"/guides/tutorials/registering-schema-and-credential-definition"}},d={},p=[{value:"DID Module",id:"did-module",level:2},{value:"Create DID",id:"create-did",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Option 1",id:"option-1",level:5},{value:"Option 2",id:"option-2",level:5},{value:"Update DID",id:"update-did",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Deactivate DID",id:"deactivate-did",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Types",id:"types",level:3},{value:"<code>secret.verificationMethod</code>",id:"secretverificationmethod",level:4},{value:"<code>verificationMethod.id</code>*",id:"verificationmethodid",level:5},{value:"<code>verificationMethod.type</code>*",id:"verificationmethodtype",level:5},{value:"<code>verificationMethod.privateKey</code>",id:"verificationmethodprivatekey",level:5},{value:"<code>options.methodSpecificIdAlgo</code>",id:"optionsmethodspecificidalgo",level:4},{value:"<code>options.network</code>*",id:"optionsnetwork",level:4},{value:"<code>options.versionId</code>",id:"optionsversionid",level:4}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cheqd-did-module"},"Cheqd Did Module"),(0,a.kt)("p",null,"In this tutorial we will see how to use the cheqd modules in detail"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This section assumes that"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"You have ",(0,a.kt)("a",{parentName:"li",href:"../../getting-started"},"set-up your develoment environment"),"."),(0,a.kt)("li",{parentName:"ol"},"You have setup the cheqd module ",(0,a.kt)("a",{parentName:"li",href:"/guides/getting-started/set-up/cheqd/"},"setup cheqd")))),(0,a.kt)("h2",{id:"did-module"},"DID Module"),(0,a.kt)("p",null,'The cheqd DID module facilitates the Create, Read, Update, and Delete (CRUD) operations for did:cheqd identifiers. To learn more about "did:cheqd," please refer to the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/cheqd/identity-docs/blob/main/architecture/adr-list/adr-001-cheqd-did-method.md"},"specification")),(0,a.kt)("h3",{id:"create-did"},"Create DID"),(0,a.kt)("p",null,"The DID can be created in two different ways"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"method"),"*",": ",(0,a.kt)("inlineCode",{parentName:"li"},"cheqd")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"secret")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),"*"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"didDocument"))),(0,a.kt)("h5",{id:"option-1"},"Option 1"),(0,a.kt)("p",null,"Provide a DID Document payload according to the w3c did core specification in the request body. This is possible when the keys corresponding to the verification methods provided in the DID Document are already created in the wallet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-2",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-2":!0},"")),(0,a.kt)("h5",{id:"option-2"},"Option 2"),(0,a.kt)("p",null,"If a DID Document is not passed to the registrar, it requires the secret parameter with a verificationMethod to construct the DID Document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-3",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-3":!0},"")),(0,a.kt)("h3",{id:"update-did"},"Update DID"),(0,a.kt)("p",null,"To update a DID Document, fetch the body of the DID Document you want to change from the DID Resolver, make the relevant updates and pass it as the parameter"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"did"),"*"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"didDocument"),"*",": The updated DID Document"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"options")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"secret"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-4",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-4":!0},"")),(0,a.kt)("h3",{id:"deactivate-did"},"Deactivate DID"),(0,a.kt)("p",null,"A DID can be deactivated, it can still be resolved"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"did"),"*"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-5",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-5":!0},"")),(0,a.kt)("h3",{id:"types"},"Types"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"secretverificationmethod"},(0,a.kt)("inlineCode",{parentName:"h4"},"secret.verificationMethod")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"verificationMethod")),(0,a.kt)("h5",{id:"verificationmethodid"},(0,a.kt)("inlineCode",{parentName:"h5"},"verificationMethod.id"),"*"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h5",{id:"verificationmethodtype"},(0,a.kt)("inlineCode",{parentName:"h5"},"verificationMethod.type"),"*"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ed25519VerificationKey2020")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Members"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Ed25519VerificationKey2020")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Ed25519VerificationKey2018")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JsonWebKey2020"))),(0,a.kt)("h5",{id:"verificationmethodprivatekey"},(0,a.kt)("inlineCode",{parentName:"h5"},"verificationMethod.privateKey")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"optionsmethodspecificidalgo"},(0,a.kt)("inlineCode",{parentName:"h4"},"options.methodSpecificIdAlgo")),(0,a.kt)("p",null,"Specifies what type of method specific identifier is needed for your DID"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Members"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"uuid")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"base58btc"))),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"optionsnetwork"},(0,a.kt)("inlineCode",{parentName:"h4"},"options.network"),"*"),(0,a.kt)("p",null,"Specifies the cheqd network name to be published"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Members"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"testnet")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"mainnet"))),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"optionsversionid"},(0,a.kt)("inlineCode",{parentName:"h4"},"options.versionId")),(0,a.kt)("p",null,"Specifies the version of the DID Document to be published"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")))}u.isMDXComponent=!0}}]);