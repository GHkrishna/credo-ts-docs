"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6657],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(n),p=o,f=l["".concat(c,".").concat(p)]||l[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(3117),o=(n(7294),n(3905));const i={},a="DIDs and DIDComm",s={unversionedId:"concepts/did-and-didcomm",id:"version-0.3/concepts/did-and-didcomm",title:"DIDs and DIDComm",description:"DIDs",source:"@site/versioned_docs/version-0.3/concepts/did-and-didcomm.md",sourceDirName:"concepts",slug:"/concepts/did-and-didcomm",permalink:"/guides/concepts/did-and-didcomm",draft:!1,tags:[],version:"0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agents",permalink:"/guides/concepts/agents"},next:{title:"Platform and Environment",permalink:"/guides/concepts/platform-and-environment"}},c={},d=[{value:"DIDs",id:"dids",level:3},{value:"DID Documents",id:"did-documents",level:3},{value:"DIDComm",id:"didcomm",level:3},{value:"Useful Resources",id:"useful-resources",level:3}],u={toc:d},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dids-and-didcomm"},"DIDs and DIDComm"),(0,o.kt)("h3",{id:"dids"},"DIDs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DIDs"),", short for Decentralized identifiers,\nare a type of identifier that enables verifiable, decentralized identity. A DID\ncan refer to any subject, a person, organization, etc. DIDs are decoupled from\ncentralized registries, identity providers and certificate authorities."),(0,o.kt)("h3",{id:"did-documents"},"DID Documents"),(0,o.kt)("p",null,"A DID by itself does not contain a lot of information. So in order to get some\nmetadata we have to resolve the DID to get a ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-documents"},"DID Document"),". With this\ndocument we can get data such as their public key, proof mechanisms and their\nservice endpoints. This means that we can check the validity, encrypt\none-to-one messages and send it to their service endpoint."),(0,o.kt)("h3",{id:"didcomm"},"DIDComm"),(0,o.kt)("p",null,"In the previous section sending a message to their service endpoint is\nmentioned. This is a nice feature, but is lacking a definition of how it should\nwork. ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm"),", we will\nonly discuss V1 here, defines this. DIDComm is designed to be private, secure,\ntransport-agnostic, interoperable and much more. This means that you can\nsecurely send a message from as Alice to Bob securely via bluetooth, HTTP,\nWebSockets, etc."),(0,o.kt)("p",null,"When working with the tools available inside the Aries JavaScript ecosystem,\ndeep knowledge of DIDComm is not required."),(0,o.kt)("h3",{id:"useful-resources"},"Useful Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/"},"DID spec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm spec"))))}m.isMDXComponent=!0}}]);