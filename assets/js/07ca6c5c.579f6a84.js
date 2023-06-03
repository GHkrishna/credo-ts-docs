"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=s,m=d["".concat(l,".").concat(c)]||d[c]||g[c]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const i={},a="Postgres Setup for Linux",o={unversionedId:"tutorials/postgres-database-nodejs/linux",id:"version-0.3/tutorials/postgres-database-nodejs/linux",title:"Postgres Setup for Linux",description:"Prerequisites",source:"@site/versioned_docs/version-0.3/tutorials/postgres-database-nodejs/linux.md",sourceDirName:"tutorials/postgres-database-nodejs",slug:"/tutorials/postgres-database-nodejs/linux",permalink:"/guides/0.3/tutorials/postgres-database-nodejs/linux",draft:!1,tags:[],version:"0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using PostgreSQL as Database in Node.js",permalink:"/guides/0.3/tutorials/postgres-database-nodejs/"},next:{title:"Postgres Setup for macOS",permalink:"/guides/0.3/tutorials/postgres-database-nodejs/macos"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: installing the dependencies using apt",id:"step-1-installing-the-dependencies-using-apt",level:2},{value:"Debian based (Ubuntu, Mint, Kali, Deepin, etc.)",id:"debian-based-ubuntu-mint-kali-deepin-etc",level:3},{value:"Step 2: Build Postgres plugin",id:"step-2-build-postgres-plugin",level:2},{value:"Step 2.1: Cloning the indy-sdk",id:"step-21-cloning-the-indy-sdk",level:3},{value:"Step 2.2: Building Postgres plugin",id:"step-22-building-postgres-plugin",level:3},{value:"Step 2.3: Moving the file",id:"step-23-moving-the-file",level:3}],u={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"postgres-setup-for-linux"},"Postgres Setup for Linux"),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A system package manager (like apt, pacman, etc.)"),(0,s.kt)("li",{parentName:"ul"},"Cargo (We have to build Postgres plugin from source)"),(0,s.kt)("li",{parentName:"ul"},"git (to clone a repo, could also be done with downloading the zip from the Github page)")),(0,s.kt)("h2",{id:"step-1-installing-the-dependencies-using-apt"},"Step 1: installing the dependencies using apt"),(0,s.kt)("h3",{id:"debian-based-ubuntu-mint-kali-deepin-etc"},"Debian based (Ubuntu, Mint, Kali, Deepin, etc.)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install libzmq3-dev libsodium-dev libssl-dev\n")),(0,s.kt)("h2",{id:"step-2-build-postgres-plugin"},"Step 2: Build Postgres plugin"),(0,s.kt)("p",null,"Building Postgres plugin from the indy-sdk repo with cargo."),(0,s.kt)("h3",{id:"step-21-cloning-the-indy-sdk"},"Step 2.1: Cloning the indy-sdk"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/hyperledger/indy-sdk.git\n\ncd indy-sdk/experimental/plugins/postgres_storage\n")),(0,s.kt)("h3",{id:"step-22-building-postgres-plugin"},"Step 2.2: Building Postgres plugin"),(0,s.kt)("p",null,"If this step throws any errors, it might be because you miss some packages. Step 1 of this guide provided the dependencies that are required, but it also assumed that you have some basic development packages installed. If you are missing some packages, you can install them with your package manager."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n\n# OUTPUT: .../indy-sdk/experimental/plugins/postgres_storage\n\ncargo build --release\n")),(0,s.kt)("h3",{id:"step-23-moving-the-file"},"Step 2.3: Moving the file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n\n# OUTPUT: .../indy-sdk/experimental/plugins/postgres_storage\n\nsudo mv ./target/release/libindystrgpostgres.so /usr/local/lib/libindystrgpostgres.so\n")))}g.isMDXComponent=!0}}]);