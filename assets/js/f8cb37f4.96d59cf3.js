"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4176],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const i={},a="Setup",s={unversionedId:"extensions/rest/setup",id:"extensions/rest/setup",title:"Setup",description:"This guide assumes you have followed the install guides for the framework",source:"@site/guides/extensions/rest/setup.md",sourceDirName:"extensions/rest",slug:"/extensions/rest/setup",permalink:"/guides/next/extensions/rest/setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/guides/next/extensions/rest/"},next:{title:"React Hooks",permalink:"/guides/next/extensions/react-hooks/"}},l={},u=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Directly on computer",id:"directly-on-computer",level:3},{value:"Configuration",id:"configuration",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This guide assumes you have followed the install guides for the framework\n(See ",(0,o.kt)("a",{parentName:"p",href:"/guides/next/getting-started/"},"Getting Started")," section) for your platform and a valid ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," project setup.")),(0,o.kt)("h2",{id:"quick-setup"},"Quick Setup"),(0,o.kt)("p",null,"Using the CLI is the easiest way to get started with REST API."),(0,o.kt)("p",null,"You can do this directly on your machine."),(0,o.kt)("h3",{id:"directly-on-computer"},"Directly on computer"),(0,o.kt)("p",null,"After installing and confirming that Libindy is installed, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'npx -p @aries-framework/rest afj-rest start \\\n  --label "AFJ Rest" \\\n  --wallet-id "walletId" \\\n  --wallet-key "walletKey" \\\n  --endpoint http://localhost:5000 \\\n  --admin-port 3000 \\\n  --outbound-transport http \\\n  --inbound-transport http 5000\n')),(0,o.kt)("p",null,"The REST API provides an OpenAPI schema that can easily be viewed using the SwaggerUI that is provided with the server. The endpoint documentation can be viewed at the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," endpoint (e.g. ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/docs"},"http://localhost:3000/docs"),")."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To find out all available configuration options from the CLI, you can run the CLI command with ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),". This will print a full list of all available options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx -p @aries-framework/rest afj-rest start --help\n")))}d.isMDXComponent=!0}}]);