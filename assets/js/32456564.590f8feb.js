"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8937],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var u=n.createContext({}),l=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),g=l(a),c=i,h=g["".concat(u,".").concat(c)]||g[c]||d[c]||r;return a?n.createElement(h,s(s({ref:e},p),{},{components:a})):n.createElement(h,s({ref:e},p))}));function c(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,s=new Array(r);s[0]=g;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4462:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={},u="Update Assistant",l={unversionedId:"updating/update-assistant",id:"updating/update-assistant",title:"Update Assistant",description:"The Update Assistant helps you update the storage objects from AFJ to newer versions. This documents describes the different ways you can leverage the Update Assistant from fully managed to more manual approaches.",source:"@site/guides/updating/update-assistant.md",sourceDirName:"updating",slug:"/updating/update-assistant",permalink:"/guides/updating/update-assistant",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updating AFJ",permalink:"/guides/updating/"},next:{title:"Migrating from AFJ 0.1.0 to 0.2.x",permalink:"/guides/updating/versions/0.1-to-0.2"}},p={},d=[{value:"Update Strategies",id:"update-strategies",level:2},{value:"Manually instantiating the update assistant on agent startup",id:"manually-instantiating-the-update-assistant-on-agent-startup",level:3},{value:"Storing the agent storage version outside of the agent storage",id:"storing-the-agent-storage-version-outside-of-the-agent-storage",level:3},{value:"Automatically update on agent startup",id:"automatically-update-on-agent-startup",level:3},{value:"Backups",id:"backups",level:2}],g={toc:d};function c(t){var e=t.components,a=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-assistant"},"Update Assistant"),(0,r.kt)("p",null,"The Update Assistant helps you update the storage objects from AFJ to newer versions. This documents describes the different ways you can leverage the Update Assistant from fully managed to more manual approaches."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-strategies"},"Update Strategies"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#manually-instantiating-the-update-assistant-on-agent-startup"},"Manually instantiating the update assistant on agent startup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#storing-the-agent-storage-version-outside-of-the-agent-storage"},"Storing the agent storage version outside of the agent storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#automatically-update-on-agent-startup"},"Automatically update on agent startup")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#backups"},"Backups"))),(0,r.kt)("h2",{id:"update-strategies"},"Update Strategies"),(0,r.kt)("p",null,"There are three options on how to leverage the update assistant on agent startup:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Manually instantiating the update assistant on agent startup"),(0,r.kt)("li",{parentName:"ol"},"Storing the agent storage version outside of the agent storage"),(0,r.kt)("li",{parentName:"ol"},"Automatically update on agent startup")),(0,r.kt)("h3",{id:"manually-instantiating-the-update-assistant-on-agent-startup"},"Manually instantiating the update assistant on agent startup"),(0,r.kt)("p",null,"When the version of the storage is stored inside the agent storage, it means we need to check if the agent needs to be updated on every agent startup. We'll initialize the update assistant and check whether the storage is up to date. The advantage of this approach is that you don't have to store anything yourself, and have full control over the workflow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { UpdateAssistant, Agent } from '@aries-framework/core'\n\n// or @aries-framework/node\nimport { agentDependencies } from '@aries-framework/react-native'\n\n// First create the agent\nconst agent = new Agent(config, agentDependencies)\n\n// Then initialize the update assistant with the update config\nconst updateAssistant = new UpdateAssistant(agent, {\n  v0_1ToV0_2: {\n    mediationRoleUpdateStrategy: 'allMediator',\n  },\n})\n\n// Initialize the update assistant so we can read the current storage version\n// from the wallet. If you manually initialize the wallet you should do this _before_\n// calling initialize on the update assistant\n// await agent.wallet.initialize(walletConfig)\nawait updateAssistant.initialize()\n\n// Check if the agent is up to date, if not call update\nif (!(await updateAssistant.isUpToDate())) {\n  await updateAssistant.update()\n}\n\n// Once finished initialize the agent. You should do this on every launch of the agent\nawait agent.initialize()\n")),(0,r.kt)("h3",{id:"storing-the-agent-storage-version-outside-of-the-agent-storage"},"Storing the agent storage version outside of the agent storage"),(0,r.kt)("p",null,"When the version of the storage is stored outside of the agent storage, you don't have to initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateAssistant")," on every agent agent startup. You can just check if the storage version is up to date and instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateAssistant")," if not. The advantage of this approach is that you don't have to instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateAssistant")," on every agent startup, but this does mean that you have to store the storage version yourself."),(0,r.kt)("p",null,"When a wallet has been exported and later imported you don't always have the latest version available. If this is the case you can always rely on Method 1 or 2 for updating the wallet, and storing the version yourself afterwards. You can also get the current version by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"await updateAssistant.getCurrentAgentStorageVersion()"),". Do note the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateAssistant")," needs to be initialized before calling this method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { UpdateAssistant, Agent } from '@aries-framework/core'\n\n// or @aries-framework/node\nimport { agentDependencies } from '@aries-framework/react-native'\n\n// The storage version will normally be stored in e.g. persistent storage on a mobile device\nlet currentStorageVersion: VersionString = '0.1'\n\n// First create the agent\nconst agent = new Agent(config, agentDependencies)\n\n// We only initialize the update assistant if our stored version is not equal\n// to the frameworkStorageVersion of the UpdateAssistant. The advantage of this\n// is that we don't have to initialize the UpdateAssistant to retrieve the current\n// storage version.\nif (currentStorageVersion !== UpdateAssistant.frameworkStorageVersion) {\n  const updateAssistant = new UpdateAssistant(agent, {\n    v0_1ToV0_2: {\n      mediationRoleUpdateStrategy: 'recipientIfEndpoint',\n    },\n  })\n\n  // Same as with the previous strategy, if you normally call agent.wallet.initialize() manually\n  // you need to call this before calling updateAssistant.initialize()\n  await updateAssistant.initialize()\n\n  await updateAssistant.update()\n\n  // Store the version so we can leverage it during the next agent startup and don't have\n  // to initialize the update assistant again until a new version is released\n  currentStorageVersion = UpdateAssistant.frameworkStorageVersion\n}\n\n// Once finished initialize the agent. You should do this on every launch of the agent\nawait agent.initialize()\n")),(0,r.kt)("h3",{id:"automatically-update-on-agent-startup"},"Automatically update on agent startup"),(0,r.kt)("p",null,"This is by far the easiest way to update the agent, but has the least amount of flexibility and is not configurable. This means you will have to use the default update options to update the agent storage. You can find the default update config in the respective version migration guides (e.g. in ",(0,r.kt)("a",{parentName:"p",href:"/guides/updating/versions/0.1-to-0.2"},"0.1-to-0.2"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { UpdateAssistant, Agent } from '@aries-framework/core'\n\n// or @aries-framework/node\nimport { agentDependencies } from '@aries-framework/react-native'\n\n// First create the agent, setting the autoUpdateStorageOnStartup option to true\nconst agent = new Agent({ ...config, autoUpdateStorageOnStartup: true }, agentDependencies)\n\n// Then we call initialize, which under the hood will call the update assistant if the storage is not update to date.\nawait agent.initialize()\n")),(0,r.kt)("h2",{id:"backups"},"Backups"),(0,r.kt)("p",null,"Before starting the update, the update assistant will automatically create a backup of the wallet. If the migration succeeds the backup won't be used. If the backup fails, another backup will be made of the migrated wallet, after which the backup will be restored."),(0,r.kt)("p",null,"The backups can be found at the following locations. The ",(0,r.kt)("inlineCode",{parentName:"p"},"backupIdentifier")," is generated at the start of the update process and generated based on the current timestamp."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backup path: ",(0,r.kt)("inlineCode",{parentName:"li"},"${agent.config.fileSystem.basePath}/afj/migration/backup/${backupIdentifier}")),(0,r.kt)("li",{parentName:"ul"},"Migration backup: ",(0,r.kt)("inlineCode",{parentName:"li"},"${agent.config.fileSystem.basePath}/afj/migration/backup/${backupIdentifier}-error"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the future the backup assistant will make a number of improvements to the recovery process. Namely:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Do not throw an error if the update fails, but rather return an object that contains the status, and include the backup paths and backup identifiers."))))}c.isMDXComponent=!0}}]);