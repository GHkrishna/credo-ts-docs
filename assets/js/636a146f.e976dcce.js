"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?i.createElement(h,o(o({ref:t},c),{},{components:r})):i.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(7462),a=(r(7294),r(3905));const n={},o="The Aries JavaScript Ecosystem",s={unversionedId:"ecosystem/index",id:"ecosystem/index",title:"The Aries JavaScript Ecosystem",description:"The Aries JavaScript ecosystem includes various components that are spread across multiple repositories. In this section we'll go over what these components are and how the relate to one another.",source:"@site/guides/ecosystem/index.md",sourceDirName:"ecosystem",slug:"/ecosystem/",permalink:"/guides/0.4/ecosystem/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrating from AFJ 0.3.x to 0.4.x",permalink:"/guides/0.4/updating/versions/0.3-to-0.4"},next:{title:"Extensions",permalink:"/guides/0.4/extensions/"}},l={},p=[{value:"Repositories",id:"repositories",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Aries Framework JavaScript",id:"aries-framework-javascript",level:3},{value:"Contributing in the Aries JS Ecosystem",id:"contributing-in-the-aries-js-ecosystem",level:2},{value:"Developer Contributions",id:"developer-contributions",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-aries-javascript-ecosystem"},"The Aries JavaScript Ecosystem"),(0,a.kt)("p",null,"The Aries JavaScript ecosystem includes various components that are spread across multiple repositories. In this section we'll go over what these components are and how the relate to one another."),(0,a.kt)("h2",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,"Currently, Aries JavaScript is composed out of three separate repositories:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-framework-javascript"},"Aries Framework JavaScript")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-framework-javascript-ext"},"Aries Framework JavaScript Extensions")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-mobile-agent-react-native"},"Aries Mobile Agent React Native (Bifold)"))),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"You can find their documentation here:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://aries.js.org/guides"},"Aries Framework JavaScript")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://aries.js.org/guides/extensions"},"Aries Framework JavaScript Extensions")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-mobile-agent-react-native/blob/main/README.md"},"Aries Mobile Agent React Native (Bifold)"))),(0,a.kt)("h3",{id:"aries-framework-javascript"},"Aries Framework JavaScript"),(0,a.kt)("p",null,"Aries Framework JavaScript (AFJ) is at the core of the Aries JavaScript ecosystem. AFJ provides all the functionality related to cryptography, storage, messaging and more that is required"),(0,a.kt)("h2",{id:"contributing-in-the-aries-js-ecosystem"},"Contributing in the Aries JS Ecosystem"),(0,a.kt)("p",null,"Consider attending our weekly meetings to become aware of the current development cadence."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.hyperledger.org/display/ARIES/Framework+JS+Meetings"},"Aries Framework JS Meeting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.hyperledger.org/display/ARIES/Aries+Bifold+User+Group"},"Aries Bifold Meeting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.hyperledger.org/display/ARIES/Aries+Working+Group"},"Aries Working Group Meeting"))),(0,a.kt)("h3",{id:"developer-contributions"},"Developer Contributions"),(0,a.kt)("p",null,"Each project maintains its own CONTRIBUTING guidance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-framework-javascript/blob/main/CONTRIBUTING.md"},"AFJ CONTRIBUTING.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-framework-javascript-ext/blob/main/CONTRIBUTING.md"},"AFJ-Ext CONTRIBUTING.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-mobile-agent-react-native/blob/main/CONTRIBUTING"},"Aries Bifold CONTRIBUTING"))),(0,a.kt)("p",null,"Each project has a significant set of developer conventions, checklists, templates, and actions to provide guidance and boundaries for a contribution.\nConsider looking at previous issues and their corresponding PRs to get a sense of the latest."))}u.isMDXComponent=!0}}]);