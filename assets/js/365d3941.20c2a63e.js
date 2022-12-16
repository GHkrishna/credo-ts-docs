"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6347],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),o=n(6010),r="tabItem_OmH5";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),o=n(7294),r=n(2389),s=n(7392),i=n(7094),l=n(2466),d=n(6010),u="tabList_uSqn",c="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,m=e.block,g=e.defaultValue,h=e.values,f=e.groupId,v=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===g?g:null!=(t=null!=g?g:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),N=x.tabGroupChoices,M=x.setTabGroupChoices,T=(0,o.useState)(w),C=T[0],I=T[1],A=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var R=N[f];null!=R&&R!==C&&y.some((function(e){return e.value===R}))&&I(R)}var q=function(e){var t=e.currentTarget,n=A.indexOf(t),a=y[n].value;a!==C&&(P(t),I(a),null!=f&&M(f,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var o=A.indexOf(e.currentTarget)-1;n=A[o]||A[A.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,d.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":m},v)},y.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return A.push(e)},onKeyDown:O,onFocus:q,onClick:q},r,{className:(0,d.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,o.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},8412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(9877),i=n(2360),l=["components"],d={},u="Migrating from AFJ 0.2.x to 0.3.x",c={unversionedId:"updating/versions/0.2-to-0.3",id:"updating/versions/0.2-to-0.3",title:"Migrating from AFJ 0.2.x to 0.3.x",description:"This document describes everything you need to know for updating AFJ 0.2.x to 0.3.x. If you're not aware of how updating in AFJ works make sure to first read the guide on Updating AFJ.",source:"@site/guides/updating/versions/0.2-to-0.3.md",sourceDirName:"updating/versions",slug:"/updating/versions/0.2-to-0.3",permalink:"/guides/updating/versions/0.2-to-0.3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrating from AFJ 0.1.0 to 0.2.x",permalink:"/guides/updating/versions/0.1-to-0.2"},next:{title:"The Aries JavaScript Ecosystem",permalink:"/guides/ecosystem/"}},p={},m=[{value:"React Native",id:"react-native",level:4},{value:"Node",id:"node",level:4},{value:"Breaking Code Changes",id:"breaking-code-changes",level:2},{value:"Agent creation",id:"agent-creation",level:3},{value:"0.2.x",id:"02x",level:5},{value:"0.3.x",id:"03x",level:5},{value:"did:key usage in protocols",id:"didkey-usage-in-protocols",level:3},{value:"Modules extracted from the core",id:"modules-extracted-from-the-core",level:3},{value:"0.2.x",id:"02x-1",level:5},{value:"0.3.x",id:"03x-1",level:5},{value:"Discover Features Module",id:"discover-features-module",level:3},{value:"0.2.x",id:"02x-2",level:5},{value:"0.3.x",id:"03x-2",level:5},{value:"0.2.x",id:"02x-3",level:5},{value:"0.3.x",id:"03x-3",level:5},{value:"Ledger Module",id:"ledger-module",level:3},{value:"Proofs Module",id:"proofs-module",level:3},{value:"Module API Updates",id:"module-api-updates",level:4},{value:"0.2.x",id:"02x-4",level:5},{value:"0.3.x",id:"03x-4",level:5},{value:"Messages Extracted from Proof Exchange Record",id:"messages-extracted-from-proof-exchange-record",level:4},{value:"0.2.x",id:"02x-5",level:5},{value:"0.3.x",id:"03x-5",level:5},{value:"Out Of Band Proofs and Credentials",id:"out-of-band-proofs-and-credentials",level:3},{value:"0.2.x",id:"02x-6",level:4},{value:"0.3.x",id:"03x-6",level:4},{value:"Updating Custom Modules to the new Plugin API",id:"updating-custom-modules-to-the-new-plugin-api",level:3},{value:"Using AgentContext",id:"using-agentcontext",level:4},{value:"0.2.x",id:"02x-7",level:4},{value:"0.3.x",id:"03x-7",level:4},{value:"Using OutboundMessageContext",id:"using-outboundmessagecontext",level:4},{value:"0.2.x",id:"02x-8",level:4},{value:"0.3.x",id:"03x-8",level:4},{value:"Updating module structure to register in new Plugin API",id:"updating-module-structure-to-register-in-new-plugin-api",level:4},{value:"Breaking Storage Changes",id:"breaking-storage-changes",level:2},{value:"Migrate Proof Record Properties",id:"migrate-proof-record-properties",level:3},{value:"0.2.x",id:"02x-9",level:4},{value:"0.3.x",id:"03x-9",level:4}],g={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-afj-02x-to-03x"},"Migrating from AFJ 0.2.x to 0.3.x"),(0,r.kt)("p",null,"This document describes everything you need to know for updating AFJ 0.2.x to 0.3.x. If you're not aware of how updating in AFJ works make sure to first read the guide on ",(0,r.kt)("a",{parentName:"p",href:"/guides/updating/"},"Updating AFJ"),"."),(0,r.kt)("p",null,"First of all, update you dependencies to the 0.3.x versions. This will also update the needed peer depedencnies. ",(0,r.kt)("strong",{parentName:"p"},"Extension packages are not updated with this command"),". You need to update these manually, and make sure they're up to date with the latest version of AFJ."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"React Native",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @aries-framework/react-native@^0.3.0 @aries-framework/core@^0.3.0 indy-sdk-react-native@^0.3.0\n\n# or NPM\nnpn install @aries-framework/react-native@^0.3.0 @aries-framework/core@^0.3.0 indy-sdk-react-native@^0.3.0\n"))),(0,r.kt)(i.Z,{label:"Node",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @aries-framework/node@^0.3.0 @aries-framework/core@^0.3.0\n\n# or NPM\nnpm install @aries-framework/node@^0.3.0 @aries-framework/core@^0.3.0\n")))),(0,r.kt)("h2",{id:"breaking-code-changes"},"Breaking Code Changes"),(0,r.kt)("p",null,"This section will list all breaking changes made to the public API of AFJ between version 0.2.x and 0.3.0."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have custom modules take into account there could be a lot more breaking changes that aren't documented here. We try to make sure that the biggest breaking changes to the internal API are also documented here (e.g. see ",(0,r.kt)("a",{parentName:"p",href:"#Updating-Custom-Modules-to-the-new-Plugin-API"},"Updating Custom Modules to the Plugin API"),"), but it is possible some breaking changes are not documented here (feel free to open PRs)."))),(0,r.kt)("h3",{id:"agent-creation"},"Agent creation"),(0,r.kt)("p",null,"The agent constructor has been updated to a single ",(0,r.kt)("inlineCode",{parentName:"p"},"AgentOptions")," object that contains the config and dependencies properties."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const agent = new Agent(agentConfig, agentDependencies)\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const agent = new Agent({ config: agentConfig, dependencies: agentDependencies })\n")))),(0,r.kt)("p",null,"This object contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"config: Agent's initial configuration"),(0,r.kt)("li",{parentName:"ul"},"dependencies: platform-specific Agent dependencies"),(0,r.kt)("li",{parentName:"ul"},"modules: optional field for internal module configuration and custom module registration")),(0,r.kt)("p",null,"For easy migration, you can simply construct ",(0,r.kt)("inlineCode",{parentName:"p"},"AgentOptions")," by putting current InitConfig into ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," key and agentDependencies into ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," key."),(0,r.kt)("p",null,"Note that, if you are defining ",(0,r.kt)("inlineCode",{parentName:"p"},"indyLedgers")," configuration, you should set the indyNamespace for every ledger, as explained in ",(0,r.kt)("a",{parentName:"p",href:"/guides/tutorials/agent-config/#indyledgers"},"Agent Config tutorial"),"."),(0,r.kt)("h3",{id:"didkey-usage-in-protocols"},"did:key usage in protocols"),(0,r.kt)("p",null,"In accordance with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0360-use-did-key"},"Aries RFC 0360"),", since 0.2.5 there is a configuration parameter called ",(0,r.kt)("inlineCode",{parentName:"p"},"useDidKeyInProtocols")," which, when enabled, will encode keys in did:key instead of previous base58 format, unless the other party has started a protocol and is using base58."),(0,r.kt)("p",null,"This parameter was previously disabled by default and now it is enabled. If your agent only interacts with modern agents (e.g. AFJ 0.2.5 and newer) this will not represent any issue. Otherwise it is safer to explicitly set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". However, keep in mind that we expect this setting to be deprecated in the future, so we encourage you to update all your agents to use did:key."),(0,r.kt)("h3",{id:"modules-extracted-from-the-core"},"Modules extracted from the core"),(0,r.kt)("p",null,"In this release two modules were extracted from the core and published as separate, optional packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"actionMenu has been moved to @aries-framework/action-menu"),(0,r.kt)("li",{parentName:"ul"},"questionAnswer has been moved to @aries-framework/question-answer")),(0,r.kt)("p",null,"If you want to use them, you can integrate in an Agent instance by injecting them in constructor, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ActionMenuModule } from '@aries-framework/action-menu'\nimport { QuestionAnswerModule } from '@aries-framework/question-answer'\n\nconst agent = new Agent({\n  config: {\n    /* config */\n  },\n  dependencies: agentDependencies,\n  modules: {\n    actionMenu: new ActionMenuModule(),\n    questionAnswer: new QuestionAnswerModule(),\n    /* other custom modules */\n  },\n})\n")),(0,r.kt)("p",null,"As they are now considered custom modules, their API can be accessed in ",(0,r.kt)("inlineCode",{parentName:"p"},"modules")," namespace, so you should add it to every call to them."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await agent.questionAnswer.sendQuestion(connectionId, {\n  question: 'Do you want to play?',\n  validResponses: [{ text: 'Yes' }, { text: 'No' }],\n})\n\nawait agent.questionAnswer.sendAnswer(questionAnswerRecordId, 'Yes')\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await agent.modules.questionAnswer.sendQuestion(connectionId, {\n  question: 'Do you want to play?',\n  validResponses: [{ text: 'Yes' }, { text: 'No' }],\n})\n\nawait agent.modules.questionAnswer.sendAnswer(questionAnswerRecordId, 'Yes')\n")))),(0,r.kt)("h3",{id:"discover-features-module"},"Discover Features Module"),(0,r.kt)("p",null,"This module now supports both Discover Features V1 and V2, and as it happened to other modules, ",(0,r.kt)("inlineCode",{parentName:"p"},"queryFeatures")," method parameters have been unified to a single object and requires to specify the version of Discover Features protocol to be used. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," property has been replaced by the more general ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," which accepts multiple features to be search for. To convert a query to this new format you simply need to create a single-object array whose unique object whose ",(0,r.kt)("inlineCode",{parentName:"p"},"featureType")," field is 'protocol' and ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," field is the query itself."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await agent.discovery.queryFeatures(connectionId, {\n  query: 'https://didcomm.org/messagepickup/2.0',\n  comment: 'Detect if protocol is supported',\n})\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await agent.discovery.queryFeatures({\n  connectionId,\n  protocolVersion: 'v1',\n  queries: [{ featureType: 'protocol', match: 'https://didcomm.org/messagepickup/2.0' }],\n  comment: 'Detect if protocol is supported',\n})\n")))),(0,r.kt)("p",null,"The convenience method ",(0,r.kt)("strong",{parentName:"p"},"isProtocolSupported")," has been replaced by the more general synchronous mode of queryFeatures, which works when awaitDisclosures in options is set. Instead of returning a boolean, it returns an object with matching features:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const isPickUpV2Supported = await agent.discovery.isProtocolSupported(connectionId, StatusRequestMessage)\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const discloseForPickupV2 = await agent.discovery.queryFeatures({\n  connectionId: connectionId,\n  protocolVersion: 'v1',\n  queries: [{ featureType: 'protocol', match: StatusMessage.type.protocolUri }],\n  awaitDisclosures: true,\n  awaitDisclosuresTimeoutMs: 7000,\n})\n\nconst isPickUpV2Supported = discloseForPickupV2.features?.length === 1\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Discover Features module does not rely anymore on Agent ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispatcher")," to determine protocol support. Instead, it uses the new Feature Registry, where any custom modules implementing protocols must register them."),(0,r.kt)("p",{parentName:"div"},"This procedure can be done in module's ",(0,r.kt)("inlineCode",{parentName:"p"},"register(dependencyManager, featureRegistry)"),"."))),(0,r.kt)("h3",{id:"ledger-module"},"Ledger Module"),(0,r.kt)("p",null,"Apart from the aforementioned indyLedgers configuration, you should also ",(0,r.kt)("a",{parentName:"p",href:"/guides/tutorials/issue-a-credential#side-notes"},"note a slight change")," in behaviour when attempting to register credential definitions that already exists on the ledger but not in the wallet."),(0,r.kt)("h3",{id:"proofs-module"},"Proofs Module"),(0,r.kt)("h4",{id:"module-api-updates"},"Module API Updates"),(0,r.kt)("p",null,"Much in the same way as in 0.2.0 release when ",(0,r.kt)("a",{parentName:"p",href:"/guides/updating/versions/0.1-to-0.2#module-api-updates"},"Issue Credential V2 protocol")," has been added, now that Present Proof V2 is supported, we introduced changes to proofs module."),(0,r.kt)("p",null,"Basically, for all methods in the proofs module you should take the following steps to update your code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Move all function parameters into a single object. All module methods now take a single object that contain all properties."),(0,r.kt)("li",{parentName:"ol"},"For methods that initiate proposals, requests or presentations (",(0,r.kt)("inlineCode",{parentName:"li"},"proposeProof"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"acceptProposal"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"requestProof"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"acceptPresentation"),", etc.), you should pass ",(0,r.kt)("inlineCode",{parentName:"li"},"protocolVersion: 'v1'")," to indicate we should use the v1 protocol"),(0,r.kt)("li",{parentName:"ol"},"All indy specific attributes (e.g. Presentation Preview) should be passed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"proofFormats.indy")," object."),(0,r.kt)("li",{parentName:"ol"},"Some indy objects, as the preview should now be passed only as their attributes (i.e. no need of creating the object instance) and provided in the ",(0,r.kt)("inlineCode",{parentName:"li"},"proofFormats.indy")," object.")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await agent.proofs.proposeProof(\n  'connectionId',\n  new PresentationPreview({\n    attributes: [new PresentationPreviewAttribute({ name: 'key', value: 'value' })],\n    predicates: [\n      new PresentationPreviewPredicate({\n        name: 'age',\n        credentialDefinitionId,\n        predicate: PredicateType.GreaterThanOrEqualTo,\n        threshold: 50,\n      }),\n    ],\n  })\n)\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await agent.proofs.proposeProof({\n    connectionId: connection.id,\n    protocolVersion: 'v1',\n    proofFormats: {\n      indy: {\n        attributes: [{ name: 'key', value: 'value' }],\n        predicates: [{name: 'age', credentialDefinitionId, predicate: PredicateType.GreaterThanOrEqualTo, threshold: 50, ]\n      },\n    },\n    comment: 'Propose proof comment',\n})\n")))),(0,r.kt)("h4",{id:"messages-extracted-from-proof-exchange-record"},"Messages Extracted from Proof Exchange Record"),(0,r.kt)("p",null,"The DIDComm messages that were previously stored on the proof record, have been extracted to separate DIDComm message records. This makes it easier to work with multiple versions of the protocol internally, and keeps the proof exchange record agnostic of the protocol version. Instead of accessing the messages through the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposalMessage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"requestMessage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"presentationMessage")," parameters, we now expose dedicated methods on the proofs module to retrieve the message."),(0,r.kt)("p",null,"With the addition of the v2 messages, all v1 messages have been prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"V1")," while v2 messages have been prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"V2")," (",(0,r.kt)("inlineCode",{parentName:"p"},"V1RequestPresentationMessage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"V2RequestPresentationMessage"),"). If you were using these messages classes throughout your codebase, update them to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"V1")," prefix."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const proofRecord = await agent.proofs.getById('proofRecordId')\n\nconst proposalMessage = proofRecord.proposalMessage\nconst requestMessage = proofRecord.requestMessage\nconst presentationMessage = proofRecord.presentationMessage\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const proofRecord = await agent.proofs.getById('proofRecordId')\n\nconst proposalMessage = await agent.proofs.findProposalMessage('proofRecordId')\nconst requestMessage = await agent.proofs.findRequestMessage('proofRecordId')\nconst presentationMessage = await agent.proofs.findPresentationMessage('proofRecordId')\n")),(0,r.kt)("p",null,"Because AFJ now also supports the present proof v2 protocol, the return type of this protocol has been changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"V1XXXMessage | V2XXXMessage | null"),". Take this into account when working with the messages."),(0,r.kt)("p",null,"You can check if a message is a specific version by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"if (proposalMessage instanceof V1RequestPresentationMessage) {\n  // do something\n}\n")))),(0,r.kt)("h3",{id:"out-of-band-proofs-and-credentials"},"Out Of Band Proofs and Credentials"),(0,r.kt)("p",null,"With the addition of the out of band module, the creation of connection-less messages has been split into two steps, allowing for better control and flexibility. The previous ",(0,r.kt)("inlineCode",{parentName:"p"},"agent.proofs.createOutOfBandRequest")," has been replaced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"agent.proofs.createRequest")," method. This new method creates a proof request that is not tied to any connection."),(0,r.kt)("p",null,"What you can now do is call ",(0,r.kt)("inlineCode",{parentName:"p"},"agent.oob.createLegacyConnectionlessInvitation")," to attach the service decorator to the message and get a legacy connectionless message."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { requestMessage, proofRecord } = await agent.proofs.createOutOfBandRequest({\n  requestedAttributes: {\n    group1: {\n      name: 'dateOfBirth',\n      restrictions: [{ schemaId: 'F72i3Y3Q4i466efjYJYCHM:2:aha_cert:4.1.1' }],\n    },\n  },\n})\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { message, proofRecord } = await agent.proofs.createRequest({\n  protocolVersion: 'v1',\n  proofFormats: {\n    indy: {\n      requestedAttributes: {\n        group1: {\n          name: 'dateOfBirth',\n          restrictions: [\n            {\n              schemaId: 'F72i3Y3Q4i466efjYJYCHM:2:aha_cert:4.1.1',\n            },\n          ],\n        },\n      },\n    },\n  },\n})\n\nconst { invitationUrl, message: messageWithServiceDecorator } = await agent.oob.createLegacyConnectionlessInvitation({\n  recordId: proofRecord.id,\n  domain: 'https://google.com',\n  message,\n})\n")))),(0,r.kt)("p",null,"Out of band invitations are the new way to send messages out of band. You can use it for connection-less exchanges, but also for exchanges that you want to establish a connection for first. Here's an example on how to use the out of band module to create a connection-less invitation for a proof request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const outOfBandRecord = await agent.oob.createInvitation({\n  handshake: false, // set to true if you want to create a connection\n  messages: [message],\n})\n\nconst invitationUrl = outOfBandRecord.outOfBandInvitation.toUrl({\n  domain: 'https://afj.com',\n})\n")),(0,r.kt)("p",null,"As you can see, there's now a lot more ways to use a message not tied to a connection. By splitting the creation of the message from the creation of the invitation, we can now create a message not bound to a connection (at time of creation) for multiple use cases."),(0,r.kt)("h3",{id:"updating-custom-modules-to-the-new-plugin-api"},"Updating Custom Modules to the new Plugin API"),(0,r.kt)("p",null,"Although this isn't a breaking change to the public API of the framework, it is something that you will need to take into account if you have custom modules and want to upgrade them to make compatible with AFJ 0.3.0."),(0,r.kt)("h4",{id:"using-agentcontext"},"Using AgentContext"),(0,r.kt)("p",null,"First of all, it's worth noting that now all services and repositories have been made stateless. A new ",(0,r.kt)("inlineCode",{parentName:"p"},"AgentContext")," is introduced that holds the current context, which is passed to each method call. Therefore, you'll need to update every call to services, repositories and also eventEmitter methods to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"AgentContext")," object as first argument."),(0,r.kt)("p",null,"AgentContext can be obtained from either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MessageContext used by handlers (accesed as messageContext.agentContext)"),(0,r.kt)("li",{parentName:"ul"},"Injected in your API constructor: you can store the instance and pass it to all your service and repository calls")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  public async createRequest(options: CreateRequestOptions) {\n    const message = new RequestMessage({\n      parentThreadId: options.parentThreadId,\n    })\n\n    const record = new MyRecord({\n      connectionId: options.connectionRecord.id,\n      threadId: message.id,\n      parentThreadId: options.parentThreadId,\n    })\n\n    await this.myRecordRepository.save(record)\n\n    this.eventEmitter.emit<MyRecordStateChangedEvent>({\n      type: MyRecordEventTypes.StateChanged,\n      payload: {\n        myRecord: record,\n        previousState: null,\n      },\n    })\n\n    return { record, message }\n  }\n\n  public async processRequest(messageContext: HandlerInboundMessage<RequestHandler>) {\n    const { message } = messageContext\n\n    const record = new MyRecord({\n        connectionId: connection.id,\n        threadId: messageContext.message.id,\n        parentThreadId: messageContext.message.thread?.parentThreadId,\n      })\n\n    await this.myRepository.save(record)\n\n    return record\n  }\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  public async createRequest(agentContext: AgentContext, options: CreateRequestOptions) {\n    const message = new RequestMessage({\n      parentThreadId: options.parentThreadId,\n    })\n\n    const record = new MyRecord({\n      connectionId: options.connectionRecord.id,\n      threadId: message.id,\n      parentThreadId: options.parentThreadId,\n    })\n\n    await this.myRecordRepository.save(agentContext, record)\n\n    this.eventEmitter.emit<MyRecordStateChangedEvent>(agentContext, {\n      type: MyRecordEventTypes.StateChanged,\n      payload: {\n        myRecord: record,\n        previousState: null,\n      },\n    })\n\n    return { record, message }\n  }\n\n  public async processRequest(messageContext: HandlerInboundMessage<RequestHandler>) {\n    const { message } = messageContext\n\n    const record = new MyRecord({\n        connectionId: connection.id,\n        threadId: messageContext.message.id,\n        parentThreadId: messageContext.message.thread?.parentThreadId,\n      })\n\n    await this.myRepository.save(messageContext.agentContext, record)\n\n    return record\n  }\n")))),(0,r.kt)("h4",{id:"using-outboundmessagecontext"},"Using OutboundMessageContext"),(0,r.kt)("p",null,"If your module implements a protocol that sends messages to other agents, you will notice that Agent's ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageSender")," now receives the more generic ",(0,r.kt)("inlineCode",{parentName:"p"},"OutboundMessageContext")," class, which replaces previous helper method ",(0,r.kt)("inlineCode",{parentName:"p"},"createOutboundMessage"),"."),(0,r.kt)("p",null,"You can take advantage of this new mechanism to associate a record to the context, in order to do specific actions to it when outbound message state changes (e.g. a ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageSendingError")," is thrown or ",(0,r.kt)("inlineCode",{parentName:"p"},"AgentMessageSentEvent")," is emitted)."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createOutboundMessage } from '@aries-framework/core'\n\nconst outboundMessage = createOutboundMessage(connection, message)\nawait this.messageSender.sendMessage(outboundMessage)\n"))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { OutboundMessageContext } from '@aries-framework/core'\n\nconst outboundMessageContext = new OutboundMessageContext(message, {\n  agentContext: this.agentContext,\n  connection,\n  // optional, if you want to link the message to a related record\n  associatedRecord: record,\n})\n\nawait this.messageSender.sendMessage(outboundMessageContext)\n")))),(0,r.kt)("h4",{id:"updating-module-structure-to-register-in-new-plugin-api"},"Updating module structure to register in new Plugin API"),(0,r.kt)("p",null,"Existing modules can benefit from the new Plugin API mechanism by doing the following modifications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rename Module class (e.g. MyModule) to API class (MyApi) and add @injectable decorator. Inject AgentContext in order to pass it to any services or repositories it might call. For instance:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable } from '@aries-framework/core'\n\n@injectable() // <-- Add this\nexport class MyApi {\n  private messageSender: MessageSender\n  private authCodeService: MyService\n  private connectionService: ConnectionService\n  private agentContext: AgentContext // <-- Add this\n\n  public constructor(\n    dispatcher: Dispatcher,\n    messageSender: MessageSender,\n    authCodeService: MyService,\n    connectionService: ConnectionService,\n    agentContext: AgentContext // <-- Add this\n  ) {\n    this.messageSender = messageSender\n    this.myService = myService\n    this.connectionService = connectionService\n    this.agentContext = agentContext // <-- Add this\n    this.registerHandlers(dispatcher)\n  }\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a new Module class that implements Module interface and registers the dependencies and features. For instance:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { DependencyManager, FeatureRegistry, Module } from '@aries-framework/core'\n\nimport { Protocol } from '@aries-framework/core'\n\nexport class MyModule implements Module {\n  public readonly api = MyApi // the one we've just renamed from MyModule\n\n  public register(dependencyManager: DependencyManager, featureRegistry: FeatureRegistry) {\n    // Api\n    dependencyManager.registerContextScoped(MyApi)\n\n    // Services\n    dependencyManager.registerSingleton(MyService)\n\n    // Repositories\n    dependencyManager.registerSingleton(MyRepository)\n\n    // Feature Registry: don't forget to register your protocols and other features your module may add\n    featureRegistry.register(\n      new Protocol({\n        id: 'https://didcomm.org/my-protocol/1.0',\n        roles: [MyRole.Sender, MyRole.Receiver],\n      })\n    )\n  }\n")),(0,r.kt)("p",null,"After doing this, you can add your module to agent constructor like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const agent = new Agent({\n  config: {\n    /* config */\n  },\n  dependencies: agentDependencies,\n  modules: {\n    myModule: new MyModule(),\n    /* other custom modules */\n  },\n})\n\n// MyModule API can be accessed in agent.modules namespace\nawait agent.modules.myModule.doSomething()\n\nawait agent.modules.myModule.doAnotherThing()\n")),(0,r.kt)("h2",{id:"breaking-storage-changes"},"Breaking Storage Changes"),(0,r.kt)("p",null,"The 0.3.0 release introduces some breaking changes to the storage format, mainly related to Proof Exchanges."),(0,r.kt)("p",null,"Below all breaking storage changes are explained in as much detail as possible. The update assistant provides all tools to migrate without a hassle, but it is important to know what has changed. All examples only show the keys that have changed, unrelated keys in records have been omitted."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/guides/updating/update-assistant"},"Update Assistant")," documentation for a guide on how to use the update assistant."),(0,r.kt)("p",null,"There are no config parameters to be provided to the update assistant to migrate from 0.2.x to 0.3.x."),(0,r.kt)("h3",{id:"migrate-proof-record-properties"},"Migrate Proof Record Properties"),(0,r.kt)("p",null,"In 0.3.0 the v1 DIDComm messages have been moved out of the proof record into separate records using the DidCommMessageRepository. The migration scripts extracts all messages (proposalMessage, requestMessage, presentationMessage) and moves them into the DidCommMessageRepository. With the addition of support for different protocol versions the proof record now stores the protocol version."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"0.2.x",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proposalMessage": { ... },\n  "requestMessage": { ... },\n  "presentationMessage": { ... },\n}\n'))),(0,r.kt)(i.Z,{label:"0.3.x",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocolVersion": "v1"\n}\n')))))}h.isMDXComponent=!0}}]);