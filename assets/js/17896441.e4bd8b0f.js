(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{7634:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return be}});var a=t(7294),i=t(6010),o=t(7462),r=t(5999),s=t(9960);function c(e){var n=e.permalink,t=e.title,o=e.subLabel,r=e.isNext;return a.createElement(s.Z,{className:(0,i.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},t))}function l(e){var n=e.previous,t=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n&&a.createElement(c,(0,o.Z)({},n,{subLabel:a.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),t&&a.createElement(c,(0,o.Z)({},t,{subLabel:a.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var d=t(2263),u=t(5551),m=t(373),g=t(5281),p=t(4477);var b={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return a.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return a.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function f(e){var n=b[e.versionMetadata.banner];return a.createElement(n,e)}function v(e){var n=e.versionLabel,t=e.to,i=e.onClick;return a.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:a.createElement("b",null,a.createElement(s.Z,{to:t,onClick:i},a.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var n,t=e.className,o=e.versionMetadata,r=(0,d.Z)().siteConfig.title,s=(0,u.gA)({failfast:!0}).pluginId,c=(0,m.J)(s).savePreferredVersionName,l=(0,u.Jo)(s),p=l.latestDocSuggestion,b=l.latestVersionSuggestion,h=null!=p?p:(n=b).docs.find((function(e){return e.id===n.mainDocId}));return a.createElement("div",{className:(0,i.Z)(t,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(f,{siteTitle:r,versionMetadata:o})),a.createElement("div",{className:"margin-top--md"},a.createElement(v,{versionLabel:b.label,to:h.path,onClick:function(){return c(b.name)}})))}function E(e){var n=e.className,t=(0,p.E)();return t.banner?a.createElement(h,{className:n,versionMetadata:t}):null}function w(e){var n=e.className,t=(0,p.E)();return t.badge?a.createElement("span",{className:(0,i.Z)(n,g.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function C(e){var n=e.lastUpdatedAt,t=e.formattedLastUpdatedAt;return a.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*n).toISOString()},t))}}," on {date}")}function T(e){var n=e.lastUpdatedBy;return a.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,n)}}," by {user}")}function y(e){var n=e.lastUpdatedAt,t=e.formattedLastUpdatedAt,i=e.lastUpdatedBy;return a.createElement("span",{className:g.k.common.lastUpdated},a.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n&&t?a.createElement(C,{lastUpdatedAt:n,formattedLastUpdatedAt:t}):"",byUser:i?a.createElement(T,{lastUpdatedBy:i}):""}},"Last updated{atDate}{byUser}"),!1)}var A=t(3366),I="iconEdit_dcUD",k=["className"];function O(e){var n=e.className,t=(0,A.Z)(e,k);return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(I,n),"aria-hidden":"true"},t),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function N(e){var n=e.editUrl;return a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:g.k.common.editThisPage},a.createElement(O,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var L="tag_hD8n",Z="tagRegular_D6E_",B="tagWithCount_i0QQ";function R(e){var n=e.permalink,t=e.label,o=e.count;return a.createElement(s.Z,{href:n,className:(0,i.Z)(L,o?B:Z)},t,o&&a.createElement("span",null,o))}var U="tags_XVD_",_="tag_JSN8";function S(e){var n=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,i.Z)(U,"padding--none","margin-left--sm")},n.map((function(e){var n=e.label,t=e.permalink;return a.createElement("li",{key:t,className:_},a.createElement(R,{label:n,permalink:t}))}))))}var x="lastUpdated_foO9";function D(e){return a.createElement("div",{className:(0,i.Z)(g.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(S,e)))}function H(e){var n=e.editUrl,t=e.lastUpdatedAt,o=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,i.Z)(g.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},n&&a.createElement(N,{editUrl:n})),a.createElement("div",{className:(0,i.Z)("col",x)},(t||o)&&a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:o})))}function z(e){var n=e.content.metadata,t=n.editUrl,o=n.lastUpdatedAt,r=n.formattedLastUpdatedAt,s=n.lastUpdatedBy,c=n.tags,l=c.length>0,d=!!(t||o||s);return l||d?a.createElement("footer",{className:(0,i.Z)(g.k.docs.docFooter,"docusaurus-mt-lg")},l&&a.createElement(D,{tags:c}),d&&a.createElement(H,{editUrl:t,lastUpdatedAt:o,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var M=t(1575),W=t(6043),V="tocCollapsible_bZGK",P="tocCollapsibleContent_NNA8",F="tocCollapsibleExpanded_IqtF",j=t(721),q="tocCollapsibleButton_l22C",$="tocCollapsibleButtonExpanded_KeTX",G=["collapsed"];function J(e){var n=e.collapsed,t=(0,A.Z)(e,G);return a.createElement("button",(0,o.Z)({type:"button"},t,{className:(0,i.Z)("clean-btn",q,!n&&$,t.className)}),a.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function X(e){var n=e.toc,t=e.className,o=e.minHeadingLevel,r=e.maxHeadingLevel,s=(0,W.u)({initialState:!0}),c=s.collapsed,l=s.toggleCollapsed;return a.createElement("div",{className:(0,i.Z)(V,!c&&F,t)},a.createElement(J,{collapsed:c,onClick:l}),a.createElement(W.z,{lazy:!0,className:P,collapsed:c},a.createElement(j.Z,{toc:n,minHeadingLevel:o,maxHeadingLevel:r})))}var K=t(9649),Q="docItemContainer_vinB",Y="docItemCol_DM6M",ee="tocMobile_TmEX",ne=t(1944),te=t(7524),ae=t(3791),ie=t(8596),oe={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},re=t(4996);function se(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function ce(e){var n=e.children,t=e.href,i="breadcrumbs__link";return e.isLast?a.createElement("span",{className:i,itemProp:"name"},n):t?a.createElement(s.Z,{className:i,href:t,itemProp:"item"},a.createElement("span",{itemProp:"name"},n)):a.createElement("span",{className:i},n)}function le(e){var n=e.children,t=e.active,r=e.index,s=e.addMicrodata;return a.createElement("li",(0,o.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),n,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function de(){var e=(0,re.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(s.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",oe.breadcrumbsItemLink),href:e},a.createElement(se,{className:oe.breadcrumbHomeIcon})))}function ue(){var e=(0,ae.s1)(),n=(0,ie.Ns)();return e?a.createElement("nav",{className:(0,i.Z)(g.k.docs.docBreadcrumbs,oe.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},n&&a.createElement(de,null),e.map((function(n,t){var i=t===e.length-1;return a.createElement(le,{key:t,active:i,index:t,addMicrodata:!!n.href},a.createElement(ce,{href:n.href,isLast:i},n.label))})))):null}var me=t(6810);function ge(e){var n,t=e.content,i=t.metadata,o=t.frontMatter,r=t.assets,s=o.keywords,c=i.description,l=i.title,d=null!=(n=r.image)?n:o.image;return a.createElement(ne.d,{title:l,description:c,keywords:s,image:d})}function pe(e){var n=e.content,t=n.metadata,o=n.frontMatter,r=o.hide_title,s=o.hide_table_of_contents,c=o.toc_min_heading_level,d=o.toc_max_heading_level,u=t.title,m=!r&&void 0===n.contentTitle,p=(0,te.i)(),b=!s&&n.toc&&n.toc.length>0,f=b&&("desktop"===p||"ssr"===p);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,i.Z)("col",!s&&Y)},a.createElement(E,null),a.createElement("div",{className:Q},a.createElement("article",null,a.createElement(ue,null),a.createElement(w,null),b&&a.createElement(X,{toc:n.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,i.Z)(g.k.docs.docTocMobile,ee)}),a.createElement("div",{className:(0,i.Z)(g.k.docs.docMarkdown,"markdown")},m&&a.createElement("header",null,a.createElement(K.Z,{as:"h1"},u)),a.createElement(me.Z,null,a.createElement(n,null))),a.createElement(z,e)),a.createElement(l,{previous:t.previous,next:t.next}))),f&&a.createElement("div",{className:"col col--3"},a.createElement(M.Z,{toc:n.toc,minHeadingLevel:c,maxHeadingLevel:d,className:g.k.docs.docTocDesktop})))}function be(e){var n="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(ne.FG,{className:n},a.createElement(ge,e),a.createElement(pe,e))}},4477:function(e,n,t){"use strict";t.d(n,{E:function(){return s},q:function(){return r}});var a=t(7294),i=t(9688),o=a.createContext(null);function r(e){var n=e.children,t=e.version;return a.createElement(o.Provider,{value:t},n)}function s(){var e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocsVersionProvider");return e}},1415:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(7294),i=t(1330);function o(e){return a.createElement(a.Fragment,null,a.createElement(i.Z,e))}},8573:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var a=t(7462),i=t(3366),o=t(7294),r=t(2389),s=t(9296),c=t(5973),l=["children"];function d(e){var n,d,u=e.children,m=(0,i.Z)(e,l),g=(0,r.Z)(),p=function(e){return o.Children.toArray(e).some((function(e){return(0,o.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(u),b="string"==typeof p?c.Z:s.Z;if(!m.metastring)return o.createElement(b,(0,a.Z)({key:String(g)},m),p);console.log(m.metastring);try{n=t(9970)("./"+(d=m.metastring,d.split(" ").find((function(e){return e.match(/.(js|ts)$/)})))).default}catch(h){}var f,v=function(e){var n;return null==(n=e.split(" ").find((function(e){return e.match(/^section-/)})))?void 0:n.substr(8)}(m.metastring);return n&&(f=v?function(e,n){var t="start-section-"+e,a="end-section-"+e,i=n.split("\n"),o=i.indexOf(i.find((function(e){return e.includes(t)}))),r=i.indexOf(i.find((function(e){return e.includes(a)})));return i.slice(o+1,r).join("\r\n")}(v,n):function(e){console.log(e);var n=e.split("\n").filter((function(e){return!e.match(/section-/)}));return console.log(n.join("\r\n")),n.join("\r\n")}(n)),o.createElement(b,(0,a.Z)({key:String(g)},m),f||p)}},127:function(e,n,t){"use strict";t.r(n),n.default="import {\n  Agent,\n  InitConfig,\n  ConnectionEventTypes,\n  ConnectionStateChangedEvent,\n  WsOutboundTransport,\n  HttpOutboundTransport,\n  DidExchangeState,\n  OutOfBandRecord,\n} from '@aries-framework/core'\nimport { agentDependencies, HttpInboundTransport } from '@aries-framework/node'\n\n// start-section-1\nconst initializeBobAgent = async () => {\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label. It also sets the mediator invitation url,\n  // because this is most likely required in a mobile environment.\n  const config: InitConfig = {\n    label: 'demo-agent-bob',\n    walletConfig: {\n      id: 'mainBob',\n      key: 'demoagentbob00000000000000000000',\n    },\n    autoAcceptConnections: true,\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-1\n\n// start-section-2\nconst initializeAcmeAgent = async () => {\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label.\n  const config: InitConfig = {\n    label: 'demo-agent-acme',\n    walletConfig: {\n      id: 'mainAcme',\n      key: 'demoagentacme0000000000000000000',\n    },\n    autoAcceptConnections: true,\n    endpoints: ['http://localhost:3001'],\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Register a simple `Http` inbound transport\n  agent.registerInboundTransport(new HttpInboundTransport({ port: 3001 }))\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-2\n\n// start-section-3\nconst createNewInvitation = async (agent: Agent) => {\n  const outOfBandRecord = await agent.oob.createInvitation()\n\n  return {\n    invitationUrl: outOfBandRecord.outOfBandInvitation.toUrl({ domain: 'https://example.org' }),\n    outOfBandRecord,\n  }\n}\n// end-section-3\n\n// start-section-4\nconst createLegacyInvitation = async (agent: Agent) => {\n  const { invitation } = await agent.oob.createLegacyInvitation()\n\n  return invitation.toUrl({ domain: 'https://example.org' })\n}\n// end-section-4\n\n// start-section-5\nconst receiveInvitation = async (agent: Agent, invitationUrl: string) => {\n  const { outOfBandRecord } = await agent.oob.receiveInvitationFromUrl(invitationUrl)\n\n  return outOfBandRecord\n}\n// end-section-5\n\n// start-section-6\nconst setupConnectionListener = (agent: Agent, outOfBandRecord: OutOfBandRecord, cb: (...args: any) => void) => {\n  agent.events.on<ConnectionStateChangedEvent>(ConnectionEventTypes.ConnectionStateChanged, ({ payload }) => {\n    if (payload.connectionRecord.outOfBandId !== outOfBandRecord.id) return\n    if (payload.connectionRecord.state === DidExchangeState.Completed) {\n      // the connection is now ready for usage in other protocols!\n      console.log(`Connection for out-of-band id ${outOfBandRecord.id} completed`)\n\n      // Custom business logic can be included here\n      // In this example we can send a basic message to the connection, but\n      // anything is possible\n      cb()\n\n      // We exit the flow\n      process.exit(0)\n    }\n  })\n}\n\n// end-section-6\n\nconst run = async () => {\n  console.log('Initializing Bob agent...')\n  const bobAgent = await initializeBobAgent()\n  console.log('Initializing Acme agent...')\n  const acmeAgent = await initializeAcmeAgent()\n\n  console.log('Creating the invitation as Acme...')\n  const { outOfBandRecord, invitationUrl } = await createNewInvitation(acmeAgent)\n\n  console.log('Listening for connection changes...')\n  setupConnectionListener(acmeAgent, outOfBandRecord, () =>\n    console.log('We now have an active connection to use in the following tutorials')\n  )\n\n  console.log('Accepting the invitation as Bob...')\n  await receiveInvitation(bobAgent, invitationUrl)\n}\n\nexport default run\n\nvoid run()\n"},6414:function(e,n,t){"use strict";t.r(n),n.default="import {\n  InitConfig,\n  Agent,\n  WsOutboundTransport,\n  HttpOutboundTransport,\n  ConnectionEventTypes,\n  ConnectionStateChangedEvent,\n  DidExchangeState,\n  AutoAcceptCredential,\n  CredentialEventTypes,\n  CredentialState,\n  CredentialStateChangedEvent,\n  OutOfBandRecord,\n} from '@aries-framework/core'\nimport { agentDependencies, HttpInboundTransport } from '@aries-framework/node'\nimport { Schema } from 'indy-sdk'\nimport fetch from 'node-fetch'\n\nconst getGenesisTransaction = async (url: string) => {\n  const response = await fetch(url)\n\n  return await response.text()\n}\n\n// start-section-1\nconst initializeHolderAgent = async () => {\n  const genesisTransactionsBCovrinTestNet = await getGenesisTransaction('http://test.bcovrin.vonx.io/genesis')\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label. It also sets the mediator invitation url,\n  // because this is most likely required in a mobile environment.\n  const config: InitConfig = {\n    label: 'demo-agent-holder',\n    walletConfig: {\n      id: 'demo-agent-holder',\n      key: 'demoagentholder00000000000000000',\n    },\n    indyLedgers: [\n      {\n        id: 'bcovin-test-net',\n        isProduction: false,\n        genesisTransactions: genesisTransactionsBCovrinTestNet,\n      },\n    ],\n    autoAcceptCredentials: AutoAcceptCredential.ContentApproved,\n    autoAcceptConnections: true,\n    endpoints: ['http://localhost:3002'],\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Register a simple `Http` inbound transport\n  agent.registerInboundTransport(new HttpInboundTransport({ port: 3002 }))\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-1\n\n// start-section-2\nconst initializeIssuerAgent = async () => {\n  const genesisTransactionsBCovrinTestNet = await getGenesisTransaction('http://test.bcovrin.vonx.io/genesis')\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label.\n  const config: InitConfig = {\n    label: 'demo-agent-issuer',\n    walletConfig: {\n      id: 'demo-agent-issuer',\n      key: 'demoagentissuer00000000000000000',\n    },\n    publicDidSeed: 'demoissuerdidseed000000000000000',\n    indyLedgers: [\n      {\n        id: 'bcovrin-test-net',\n        isProduction: false,\n        genesisTransactions: genesisTransactionsBCovrinTestNet,\n      },\n    ],\n    autoAcceptCredentials: AutoAcceptCredential.ContentApproved,\n    autoAcceptConnections: true,\n    endpoints: ['http://localhost:3001'],\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Register a simple `Http` inbound transport\n  agent.registerInboundTransport(new HttpInboundTransport({ port: 3001 }))\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-2\n\n// start-section-3\nconst registerSchema = async (issuer: Agent) =>\n  issuer.ledger.registerSchema({ attributes: ['name', 'age'], name: 'Identity', version: '1.0' })\n// end-section-3\n\n// start-section-4\nconst registerCredentialDefinition = async (issuer: Agent, schema: Schema) =>\n  issuer.ledger.registerCredentialDefinition({ schema, supportRevocation: false, tag: 'default' })\n// end-section-4\n\n// start-section-5\nconst setupCredentialListener = (holder: Agent) => {\n  holder.events.on<CredentialStateChangedEvent>(CredentialEventTypes.CredentialStateChanged, async ({ payload }) => {\n    switch (payload.credentialRecord.state) {\n      case CredentialState.OfferReceived:\n        console.log('received a credential')\n        // custom logic here\n        await holder.credentials.acceptOffer({ credentialRecordId: payload.credentialRecord.id })\n      case CredentialState.Done:\n        console.log(`Credential for credential id ${payload.credentialRecord.id} is accepted`)\n        // For demo purposes we exit the program here.\n        process.exit(0)\n    }\n  })\n}\n// end-section-5\n\n// start-section-6\nconst issueCredential = async (issuer: Agent, credentialDefinitionId: string, connectionId: string) =>\n  issuer.credentials.offerCredential({\n    protocolVersion: 'v1',\n    connectionId,\n    credentialFormats: {\n      indy: {\n        credentialDefinitionId,\n        attributes: [\n          { name: 'name', value: 'Jane Doe' },\n          { name: 'age', value: '23' },\n        ],\n      },\n    },\n  })\n// end-section-6\n\nconst createNewInvitation = async (issuer: Agent) => {\n  const outOfBandRecord = await issuer.oob.createInvitation()\n\n  return {\n    invitationUrl: outOfBandRecord.outOfBandInvitation.toUrl({ domain: 'https://example.org' }),\n    outOfBandRecord,\n  }\n}\n\nconst receiveInvitation = async (holder: Agent, invitationUrl: string) => {\n  const { outOfBandRecord } = await holder.oob.receiveInvitationFromUrl(invitationUrl)\n\n  return outOfBandRecord\n}\n\nconst setupConnectionListener = (\n  issuer: Agent,\n  outOfBandRecord: OutOfBandRecord,\n  cb: (...args: any) => Promise<unknown>\n) => {\n  issuer.events.on<ConnectionStateChangedEvent>(ConnectionEventTypes.ConnectionStateChanged, async ({ payload }) => {\n    if (payload.connectionRecord.outOfBandId !== outOfBandRecord.id) return\n    if (payload.connectionRecord.state === DidExchangeState.Completed) {\n      // the connection is now ready for usage in other protocols!\n      console.log(`Connection for out-of-band id ${outOfBandRecord.id} completed`)\n\n      // Custom business logic can be included here\n      // In this example we can send a basic message to the connection, but\n      // anything is possible\n      await cb(payload.connectionRecord.id)\n    }\n  })\n}\n\nconst flow = (issuer: Agent) => async (connectionId: string) => {\n  console.log('Registering the schema...')\n  const schema = await registerSchema(issuer)\n  console.log('Registering the credential definition...')\n  const credentialDefinition = await registerCredentialDefinition(issuer, schema)\n  console.log('Issuing the credential...')\n  await issueCredential(issuer, credentialDefinition.id, connectionId)\n}\n\nconst run = async () => {\n  console.log('Initializing the holder...')\n  const holder = await initializeHolderAgent()\n  console.log('Initializing the issuer...')\n  const issuer = await initializeIssuerAgent()\n\n  console.log('Initializing the credential listener...')\n  setupCredentialListener(holder)\n\n  console.log('Initializing the connection...')\n  const { outOfBandRecord, invitationUrl } = await createNewInvitation(issuer)\n  setupConnectionListener(issuer, outOfBandRecord, flow(issuer))\n  await receiveInvitation(holder, invitationUrl)\n}\n\nvoid run()\n"},9794:function(e,n,t){"use strict";t.r(n),n.default="import type { InitConfig } from '@aries-framework/core'\nimport { Agent, HttpOutboundTransport, WsOutboundTransport } from '@aries-framework/core'\nimport { agentDependencies } from '@aries-framework/react-native'\n\n// start-section-1\nconst config: InitConfig = {\n  label: 'docs-agent-react-native',\n  walletConfig: {\n    id: 'wallet-id',\n    key: 'testkey0000000000000000000000000',\n  },\n}\n\nconst agent = new Agent(config, agentDependencies)\n// end-section-1\n\n// start-section-2\nagent.registerOutboundTransport(new HttpOutboundTransport())\nagent.registerOutboundTransport(new WsOutboundTransport())\n// end-section-2\n\n// start-section-3\nconst run = async () => {\n  try {\n    await agent.initialize()\n  } catch (e) {\n    console.error(`Something went wrong while setting up the agent! Message: ${e}`)\n  }\n}\n// end-section-3\n\nvoid run()\n"},6967:function(e,n,t){"use strict";t.r(n),n.default="import type { InitConfig } from '@aries-framework/core'\nimport { Agent, HttpOutboundTransport, WsOutboundTransport } from '@aries-framework/core'\nimport { agentDependencies, HttpInboundTransport } from '@aries-framework/node'\n\n// start-section-1\nconst config: InitConfig = {\n  label: 'docs-agent-nodejs',\n  walletConfig: {\n    id: 'wallet-id',\n    key: 'testkey0000000000000000000000000',\n  },\n}\n\nconst agent = new Agent(config, agentDependencies)\n// end-section-1\n\n// start-section-2\nagent.registerOutboundTransport(new HttpOutboundTransport())\nagent.registerOutboundTransport(new WsOutboundTransport())\nagent.registerInboundTransport(new HttpInboundTransport({ port: 3000 }))\n// end-section-2\n\n// start-section-3\nconst run = async () => {\n  try {\n    await agent.initialize()\n  } catch (e) {\n    console.error(`Something went wrong while setting up the agent! Message: ${e}`)\n  }\n}\n// end-section-3\n\nvoid run()\n"},9970:function(e,n,t){var a={"./create-a-connection":127,"./create-a-connection.ts":127,"./issue-a-credential":6414,"./issue-a-credential.ts":6414,"./set-up":6967,"./set-up-rn":9794,"./set-up-rn.ts":9794,"./set-up.ts":6967};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=9970}}]);