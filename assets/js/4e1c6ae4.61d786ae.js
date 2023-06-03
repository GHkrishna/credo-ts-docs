"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},o="Agent Config",l={unversionedId:"tutorials/agent-config/index",id:"version-0.3/tutorials/agent-config/index",title:"Agent Config",description:"The Aries agent provided by [Aries Framework",source:"@site/versioned_docs/version-0.3/tutorials/agent-config/index.md",sourceDirName:"tutorials/agent-config",slug:"/tutorials/agent-config/",permalink:"/guides/0.3/tutorials/agent-config/",draft:!1,tags:[],version:"0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/guides/0.3/tutorials/"},next:{title:"Logging",permalink:"/guides/0.3/tutorials/agent-config/logging"}},p={},s=[{value:"<code>label</code>*",id:"label",level:2},{value:"<code>walletConfig</code>",id:"walletconfig",level:2},{value:"<code>walletConfig.id</code>*",id:"walletconfigid",level:3},{value:"<code>walletConfig.key</code>*",id:"walletconfigkey",level:3},{value:"<code>walletConfig.keyDerivationMethod</code>",id:"walletconfigkeyderivationmethod",level:3},{value:"<code>walletConfig.storage</code>",id:"walletconfigstorage",level:3},{value:"<code>endpoints</code>",id:"endpoints",level:2},{value:"<code>publicDidSeed</code>",id:"publicdidseed",level:2},{value:"<code>indyLedgers</code>",id:"indyledgers",level:2},{value:"<code>indyLedgers.id</code>*",id:"indyledgersid",level:3},{value:"<code>indyLedgers.indyNamespace</code>",id:"indyledgersindynamespace",level:3},{value:"<code>indyLedgers.isProduction</code>*",id:"indyledgersisproduction",level:3},{value:"<code>indyLedgers.genesisPath</code>",id:"indyledgersgenesispath",level:3},{value:"<code>indyLedgers.genesisTransactions</code>",id:"indyledgersgenesistransactions",level:3},{value:"<code>indyLedgers.transactionAuthorAgreement</code>",id:"indyledgerstransactionauthoragreement",level:3},{value:"<code>indyLedgers.transactionAuthorAgreement.version</code>",id:"indyledgerstransactionauthoragreementversion",level:3},{value:"<code>indyLedgers.transactionAuthorAgreement.acceptanceMechanism</code>",id:"indyledgerstransactionauthoragreementacceptancemechanism",level:3},{value:"<code>connectToIndyLedgerOnStartup</code>",id:"connecttoindyledgeronstartup",level:2},{value:"<code>logger</code>",id:"logger",level:2},{value:"<code>didCommMimeType</code>",id:"didcommmimetype",level:2},{value:"<code>autoAcceptCredentials</code>",id:"autoacceptcredentials",level:2},{value:"<code>autoAcceptProofs</code>",id:"autoacceptproofs",level:2},{value:"<code>autoAcceptMediationRequests</code>",id:"autoacceptmediationrequests",level:2},{value:"<code>mediatorConnectionsInvite</code>",id:"mediatorconnectionsinvite",level:2},{value:"<code>defaultMediatorId</code>",id:"defaultmediatorid",level:2},{value:"<code>clearDefaultMediator</code>",id:"cleardefaultmediator",level:2},{value:"<code>mediatorPollingInterval</code>",id:"mediatorpollinginterval",level:2},{value:"<code>mediatorPickupStratery</code>",id:"mediatorpickupstratery",level:2},{value:"<code>maximumMessagePickup</code> (subject to change)",id:"maximummessagepickup-subject-to-change",level:2},{value:"<code>useLegacyDidSovPrefix</code>",id:"uselegacydidsovprefix",level:2},{value:"<code>connectionImageUrl</code>",id:"connectionimageurl",level:2},{value:"<code>autoUpdateStorageOnStartup</code>",id:"autoupdatestorageonstartup",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agent-config"},"Agent Config"),(0,i.kt)("p",null,"The Aries agent provided by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript"},"Aries Framework\nJavaScript")," is very\nextensible. These are all the configuration options with a short description:"),(0,i.kt)("h2",{id:"label"},(0,i.kt)("inlineCode",{parentName:"h2"},"label"),"*"),(0,i.kt)("p",null,"The label is seen by other users when creating a connection. This should not\nbe used as a base for authenticity, as it is entirely up to the user to\nset this."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"label: 'my-demo-agent'\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"walletconfig"},(0,i.kt)("inlineCode",{parentName:"h2"},"walletConfig")),(0,i.kt)("p",null,"Configuration for the setup of the wallet. Including this in the agent\nconfiguration makes it possible that, when initializing the agent, the wallet\nwill also be initialized. When an application requires the agent without an\ninitialized wallet for any reason, this can be omitted and later on the wallet\ncan be initialized separately."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WalletConfig")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { KeyDerivationMethod } from '@aries-framework/core'\n\nwalletConfig: {\n  id: 'foo',\n  key: 'testkey000000000000000000000',\n  keyDerivationMethod: KeyDerivationMethod.Argon2IMod,\n  storage: {\n    type: 'postgres_storage',\n    ... // depends on the storage type\n  }\n}\n")),(0,i.kt)("h3",{id:"walletconfigid"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.id"),"*"),(0,i.kt)("p",null,"Identifier string. Using another value here will open a new wallet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"walletconfigkey"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.key"),"*"),(0,i.kt)("p",null,"Key to unlock the wallet with. This value MUST be kept as a secret and should\nbe seem like a password."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"walletconfigkeyderivationmethod"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.keyDerivationMethod")),(0,i.kt)("p",null,"The method used for key derivation of the\n",(0,i.kt)("a",{parentName:"p",href:"#walletconfigkey"},(0,i.kt)("inlineCode",{parentName:"a"},"walletConfig.key")),"."),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyDerivationMethod.Raw"),", it is strongly recommended to get the raw\nkey via\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk/blob/1c7096dd95d0fd53881070f66907df4b9e61b874/libindy/src/api/wallet.rs#L560"},(0,i.kt)("inlineCode",{parentName:"a"},"indy_generate_wallet_key")),".\nIf you really must implement your own key generation, it is required to be a\nbase58-encoded\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ChaCha20-Poly1305"},"ChaCha20-Poly1305")," key."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For the advanced readers\n",(0,i.kt)("a",{parentName:"p",href:"https://www.password-hashing.net/argon2-specs.pdf"},"here")," is the\nspecification of Argon2.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"enum KeyDerivationMethod")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyDerivationMethod.Argon2IMod")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Members"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"KeyDerivationMethod.Argon2IMod"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," uses Argon2I modular (most secure option, but slower)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"KeyDerivationMethod.Argon2Int"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," uses Argon2 integer (less secure, but faster)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"KeyDerivationMethod.Raw"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," uses no derivation method.\nIt is recommended to use the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk/blob/1c7096dd95d0fd53881070f66907df4b9e61b874/libindy/src/api/wallet.rs#L560"},(0,i.kt)("inlineCode",{parentName:"a"},"indy_generate_wallet_key")),"\nfor key generation."),(0,i.kt)("h3",{id:"walletconfigstorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.storage")),(0,i.kt)("p",null,"Specify which storage is being used for the wallet. The default is an SQLite\ndatabase, but a Postgres database could be used as well. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://example.org"},"TODO:\nstorage ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"a sqlite database")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"endpoints"},(0,i.kt)("inlineCode",{parentName:"h2"},"endpoints")),(0,i.kt)("p",null,"A list of endpoints (schema + host + port) used for invitations and where other\nagents might reach you. This could be used to host a website that would\nredirect, for example with deep linking, to a wallet where the invitation can be\naccepted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"endpoints: ['https://example.org:3000']\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"publicdidseed"},(0,i.kt)("inlineCode",{parentName:"h2"},"publicDidSeed")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Soon to be deprecated"),(0,i.kt)("p",{parentName:"blockquote"},"Reason for deprecation: this will be generalized")),(0,i.kt)("p",null,"The seed used for initializing the public indy DID of the agent. This does not\nregister the DID on the ledger. This value MUST be 32 characters long."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"publicDidSeed: 'testseed000000000000000000000000'\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"indyledgers"},(0,i.kt)("inlineCode",{parentName:"h2"},"indyLedgers")),(0,i.kt)("p",null,"An array of indy ledgers to connect to. The list can contain the following\nobject and it must include ",(0,i.kt)("em",{parentName:"p"},"either")," the\n",(0,i.kt)("a",{parentName:"p",href:".md#indyledgersgenesispath"},(0,i.kt)("inlineCode",{parentName:"a"},"genesisPath"))," ",(0,i.kt)("em",{parentName:"p"},"or"),"\n",(0,i.kt)("a",{parentName:"p",href:"#indyledgersgenesistransactions"},(0,i.kt)("inlineCode",{parentName:"a"},"genesisTransactions")),". It is\nimportant to know that the first ledger in the list ledgers will be used for\nregistering the schema, credential definition, etc."),(0,i.kt)("p",null,"An example of the ",(0,i.kt)("a",{parentName:"p",href:"#indyledgersgenesistransactions"},(0,i.kt)("inlineCode",{parentName:"a"},"genesisTransactions"))," can be found\n",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Indicio-tech/indicio-network/main/genesis_files/domain_transactions_testnet_genesis"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"IndyPoolConfig[]")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"indyLedgers: [\n  {\n    id: 'indicio-test-net',\n    indyNamespace: 'indicio',\n    isProduction: false,\n    genesisPath: './constants/indicio-test-net.txn',\n    transactionAuthorAgreement: {\n      version: '1',\n      acceptanceMechanism: 'EULA',\n    },\n  },\n]\n")),(0,i.kt)("h3",{id:"indyledgersid"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.id"),"*"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Unique identifier of the ledger. This can be picked by the user as long as it\nis unique."),(0,i.kt)("h3",{id:"indyledgersindynamespace"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.indyNamespace")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The Indy namespace aka the name identifying the name of the network connecting to. ",(0,i.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/indy-did-method/#indy-did-method-identifiers"},"see also")),(0,i.kt)("h3",{id:"indyledgersisproduction"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.isProduction"),"*"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether the ledger is a production ledger. This is used for the pick-up algorithm\nas production ledgers have priority."),(0,i.kt)("h3",{id:"indyledgersgenesispath"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.genesisPath")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Filesystem path of the genesis transaction. At this location, there will just be\na JSON object like the\n",(0,i.kt)("a",{parentName:"p",href:"#indyledgersgenesistransactions"},(0,i.kt)("inlineCode",{parentName:"a"},"indyLedgers.genesisTransaction")),"."),(0,i.kt)("h3",{id:"indyledgersgenesistransactions"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.genesisTransactions")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Stringified JSON object of the transaction."),(0,i.kt)("h3",{id:"indyledgerstransactionauthoragreement"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.transactionAuthorAgreement")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionAuthorAgreement")),(0,i.kt)("p",null,"JSON representation specifying the version and acceptance mechanism. The version is the unique version of the transaction author agreement acceptance mechanism list (AML). The acceptance mechanism refers to the acceptance mechanism label of the item in the AML. For more details you may consult the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-node/blob/master/docs/source/transactions.md#transaction_author_agreement_aml"},"indy-node docs on AML")),(0,i.kt)("h3",{id:"indyledgerstransactionauthoragreementversion"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.transactionAuthorAgreement.version")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The version of the AML acceptance mechanism. This is a string representation of a version number e.g. '1' or '1.4'"),(0,i.kt)("h3",{id:"indyledgerstransactionauthoragreementacceptancemechanism"},(0,i.kt)("inlineCode",{parentName:"h3"},"indyLedgers.transactionAuthorAgreement.acceptanceMechanism")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The acceptance mechanism to choose. This ",(0,i.kt)("em",{parentName:"p"},"must")," be ",(0,i.kt)("em",{parentName:"p"},"one")," of the available labels of the acceptance mechanisms key-value pairs in the AML e.g. 'EULA'."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"connecttoindyledgeronstartup"},(0,i.kt)("inlineCode",{parentName:"h2"},"connectToIndyLedgerOnStartup")),(0,i.kt)("p",null,"Whether to connect to all the Indy ledgers on startup. This might lead to a\nslightly lower startup, but will make the following ledger interactions\nquicker."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"connectToIndyLedgersOnStartup: false\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"logger"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger")),(0,i.kt)("p",null,"A logger instance that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")," interface. This can be extremely\nhelpful for debugging. Aries Framework JavaScript exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsoleLogger"),"\nthat can be used for simple logs. See ",(0,i.kt)("a",{parentName:"p",href:"./logging"},"Logging")," for more details on creating your own logger instance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { ConsoleLogger, LogLevel } from '@aries-framework/core'\n\nlogger: new ConsoleLogger(LogLevel.info)\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"didcommmimetype"},(0,i.kt)("inlineCode",{parentName:"h2"},"didCommMimeType")),(0,i.kt)("p",null,"The mime-type used for sending and receiving messages. ",(0,i.kt)("inlineCode",{parentName:"p"},"application/jwe")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," are used as fallback but are less desirable as they are\nmuch more ambiguous in their specification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"enum DidCommMimeType")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DidCommMimeType.V0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Members"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DidCommMimeType.V0"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0",' "application/ssi-agent-wire"'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DidCommMimeType.V1"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0",' "application/didcomm-envelope-enc"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { DidCommMimeType } from '@aries-framework/core'\n\ndidCommMimeType: DidCommMimeType.V0\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"autoacceptcredentials"},(0,i.kt)("inlineCode",{parentName:"h2"},"autoAcceptCredentials")),(0,i.kt)("p",null,"Whether to auto-accept incoming credentials and with which strategy.\n",(0,i.kt)("inlineCode",{parentName:"p"},"AutoAcceptCredential.Always")," SHOULD not be used in production. If your\napplication requires custom validation before automatically accepting a\ncredential, like accepting every credential from a specific DID, it can easily\nbuild atop of it via the ",(0,i.kt)("inlineCode",{parentName:"p"},"agent events"),", more information can be found ",(0,i.kt)("a",{parentName:"p",href:"https://example.org"},"TODO:\nagent events"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoAcceptCredential")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoAcceptCredential.Never")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Members"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AutoAcceptCredential.Never"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Never auto-accept any incoming credential"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AutoAcceptCredential.ContentApproved"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Incoming credential needs one step of acceptance and the\ncontent is not allowed to be changed in the following steps"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AutoAcceptCredential.Always"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Always auto-accept every incoming credential"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { AutoAcceptCredential } from '@aries-framework/core'\n\nautoAcceptCredentials: AutoAcceptCredential.ContentApproved\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"autoacceptproofs"},(0,i.kt)("inlineCode",{parentName:"h2"},"autoAcceptProofs")),(0,i.kt)("p",null,"Whether to auto-accept incoming proofs and with which strategy.\n",(0,i.kt)("inlineCode",{parentName:"p"},"AutoAcceptProof.Always")," SHOULD not be used in production. If your\napplication requires custom validation before automatically accepting a\ncredential, like accepting every proof request from a specific DID, it can easily\nbuild atop of it via the ",(0,i.kt)("inlineCode",{parentName:"p"},"agent events"),", more information can be found ",(0,i.kt)("a",{parentName:"p",href:"https://example.org"},"TODO:\nagent events"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoAcceptProof")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoAcceptProof.Never")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Members"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AutoAcceptProof.Never"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Never auto-accept any incoming proof"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AutoAcceptProof.ContentApproved"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Incoming proofs need one step of acceptance and the\ncontent is not allowed to be changed in the following steps"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AutoAcceptProofs.Always"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Always auto-accept every incoming proof"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { AutoAcceptProof } from '@aries-framework/core'\n\nautoAcceptProofs: AutoAcceptProof.ContentApproved\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"autoacceptmediationrequests"},(0,i.kt)("inlineCode",{parentName:"h2"},"autoAcceptMediationRequests")),(0,i.kt)("p",null,"As a mediator, whether to automatically accept mediation requests. If disabled,\nthe request should be manually accepted via the ",(0,i.kt)("inlineCode",{parentName:"p"},"mediatorModule"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"autoAcceptMediationRequests: true\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"mediatorconnectionsinvite"},(0,i.kt)("inlineCode",{parentName:"h2"},"mediatorConnectionsInvite")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This property collides with\n",(0,i.kt)("a",{parentName:"p",href:"#defaultmediatorid"},(0,i.kt)("inlineCode",{parentName:"a"},"defaultMediatorId")),"\nand ",(0,i.kt)("a",{parentName:"p",href:"#cleardefaultmediator"},(0,i.kt)("inlineCode",{parentName:"a"},"clearDefaultMediator")))),(0,i.kt)("p",null,"Connection invitation used for the default mediator. If specified, the agent\nwill create a connection, request mediation and store the mediator as the\ndefault for all connections."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"mediatorConnectionsInvite: 'https://didcomm.agent.community.animo.id?c_i=ey....(many bytes omitted)...Q=='\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"defaultmediatorid"},(0,i.kt)("inlineCode",{parentName:"h2"},"defaultMediatorId")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This property collides with\n",(0,i.kt)("a",{parentName:"p",href:"#mediationconnectionsinvitation"},(0,i.kt)("inlineCode",{parentName:"a"},"mediatorConnectionsInvitation")),"\nand ",(0,i.kt)("a",{parentName:"p",href:"#cleardefaultmediator"},(0,i.kt)("inlineCode",{parentName:"a"},"clearDefaultMediator")))),(0,i.kt)("p",null,"The mediator id used as the default mediator. This will override the default\nmediator."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"defaultMediatorId: 'c475bd3e-4baf-40c4-b98b-3b6f131af5ee'\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"cleardefaultmediator"},(0,i.kt)("inlineCode",{parentName:"h2"},"clearDefaultMediator")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This property collides with\n",(0,i.kt)("a",{parentName:"p",href:"#mediationconnectionsinvitation"},(0,i.kt)("inlineCode",{parentName:"a"},"mediatorConnectionsInvitation")),"\nand ",(0,i.kt)("a",{parentName:"p",href:"#defaultmediatorid"},(0,i.kt)("inlineCode",{parentName:"a"},"defaultMediatorId")))),(0,i.kt)("p",null,"Whether to clear the default mediator."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"clearDefaultMediator: true\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"mediatorpollinginterval"},(0,i.kt)("inlineCode",{parentName:"h2"},"mediatorPollingInterval")),(0,i.kt)("p",null,"Set the default interval to poll the mediator in milliseconds."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"5000")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"mediatorPollingInterval: 10000\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"mediatorpickupstratery"},(0,i.kt)("inlineCode",{parentName:"h2"},"mediatorPickupStratery")),(0,i.kt)("p",null,"The pickup strategy to get the messages from the mediator. If none is specified\nwe will use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0557-discover-features-v2/README.md"},"`discover features"),"\nto get the preferred strategy."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"enum MediatorPickupStrategy")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"infer the strategy with feature discovery of the mediator")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Members"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"MediatorPickupStrategy.PickUpV1"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," explicitly pick up messages from the mediator according to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0212-pickup/README.md"},"RFC: 0212 Pickup\nProtocol")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"MediatorPickupStrategy.PickUpV2"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Explicitly pick up messages from the mediator according to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0685-pickup-v2/README.md"},"RFC: 0212 Pickup V2\nProtocol")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"MediatorPickupStrategy.Implicit"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," Open a WebSocket with the mediator to implicitly receive\nmessages. (currently used by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperedger/aries-cloudagent-python"},"aries cloud agent\npython"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { MediatorPickupStrategy } from '@aries-framework/core'\n\nmediatorPickupStrategy: MediatorPickupStrategy.PickUpV2\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"maximummessagepickup-subject-to-change"},(0,i.kt)("inlineCode",{parentName:"h2"},"maximumMessagePickup")," (subject to change)"),(0,i.kt)("p",null,"How many the mediator will give back in batches when using ",(0,i.kt)("inlineCode",{parentName:"p"},"MediatorPickupStrategy.PickUpV2"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"10")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"maximumMessagePickup: 20\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"uselegacydidsovprefix"},(0,i.kt)("inlineCode",{parentName:"h2"},"useLegacyDidSovPrefix")),(0,i.kt)("p",null,"Whether to use the legacy did:sov prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"'did:sov:BzCbsNYhMrjHiqZDTUASHg;spec"),"\nor the new didComm prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"https://didcomm.org"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"useLegacyDidSovPrefix: true\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"connectionimageurl"},(0,i.kt)("inlineCode",{parentName:"h2"},"connectionImageUrl")),(0,i.kt)("p",null,"A URL to an image used so that other agents can display this. Like the\n",(0,i.kt)("a",{parentName:"p",href:"#label"},(0,i.kt)("inlineCode",{parentName:"a"},"Label"))," this is completely up to the user to define\nthis. It MUST not be used got any base of authenticity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"connectionImageUrl: 'https://picsum.photos/200'\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"autoupdatestorageonstartup"},(0,i.kt)("inlineCode",{parentName:"h2"},"autoUpdateStorageOnStartup")),(0,i.kt)("p",null,"Whether the storage should automatically be updated when a newer version of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript"},"Aries Framework\nJavaScript")," is used."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"autoUpdateStorageOnStartup: true\n")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);