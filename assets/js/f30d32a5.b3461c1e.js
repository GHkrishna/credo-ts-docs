"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[2637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,m=d["".concat(l,".").concat(c)]||d[c]||g[c]||i;return n?s.createElement(m,a(a({ref:t},u),{},{components:n})):s.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=n(7462),r=(n(7294),n(3905));const i={},a="Postgres Setup for Linux",o={unversionedId:"tutorials/indy-sdk-postgres-database-nodejs/linux",id:"version-0.4/tutorials/indy-sdk-postgres-database-nodejs/linux",title:"Postgres Setup for Linux",description:"Prerequisites",source:"@site/versioned_docs/version-0.4/tutorials/indy-sdk-postgres-database-nodejs/linux.md",sourceDirName:"tutorials/indy-sdk-postgres-database-nodejs",slug:"/tutorials/indy-sdk-postgres-database-nodejs/linux",permalink:"/guides/tutorials/indy-sdk-postgres-database-nodejs/linux",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using PostgreSQL as Database for Indy SDK in Node.js",permalink:"/guides/tutorials/indy-sdk-postgres-database-nodejs/"},next:{title:"Postgres Setup for macOS",permalink:"/guides/tutorials/indy-sdk-postgres-database-nodejs/macos"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: installing the dependencies using apt",id:"step-1-installing-the-dependencies-using-apt",level:2},{value:"Debian based (Ubuntu, Mint, Kali, Deepin, etc.)",id:"debian-based-ubuntu-mint-kali-deepin-etc",level:3},{value:"Step 2: Build Postgres plugin",id:"step-2-build-postgres-plugin",level:2},{value:"Step 2.1: Cloning the indy-sdk",id:"step-21-cloning-the-indy-sdk",level:3},{value:"Step 2.2: Building Postgres plugin",id:"step-22-building-postgres-plugin",level:3},{value:"Step 2.3: Moving the file",id:"step-23-moving-the-file",level:3}],u={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgres-setup-for-linux"},"Postgres Setup for Linux"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A system package manager (like APT, Pacman, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Cargo (We have to build Postgres plugin from source)"),(0,r.kt)("li",{parentName:"ul"},"git (to clone a repo, could also be done with downloading the zip from the GitHub page)")),(0,r.kt)("h2",{id:"step-1-installing-the-dependencies-using-apt"},"Step 1: installing the dependencies using apt"),(0,r.kt)("h3",{id:"debian-based-ubuntu-mint-kali-deepin-etc"},"Debian based (Ubuntu, Mint, Kali, Deepin, etc.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install libzmq3-dev libsodium-dev libssl-dev\n")),(0,r.kt)("h2",{id:"step-2-build-postgres-plugin"},"Step 2: Build Postgres plugin"),(0,r.kt)("p",null,"Building Postgres plugin from the indy-sdk repo with cargo."),(0,r.kt)("h3",{id:"step-21-cloning-the-indy-sdk"},"Step 2.1: Cloning the indy-sdk"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/hyperledger/indy-sdk.git\n\ncd indy-sdk/experimental/plugins/postgres_storage\n")),(0,r.kt)("h3",{id:"step-22-building-postgres-plugin"},"Step 2.2: Building Postgres plugin"),(0,r.kt)("p",null,"If this step throws any errors, it might be because you miss some packages. Step 1 of this guide provided the dependencies that are required, but it also assumed that you have some basic development packages installed. If you are missing some packages, you can install them with your package manager."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n\n# OUTPUT: .../indy-sdk/experimental/plugins/postgres_storage\n\ncargo build --release\n")),(0,r.kt)("h3",{id:"step-23-moving-the-file"},"Step 2.3: Moving the file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n\n# OUTPUT: .../indy-sdk/experimental/plugins/postgres_storage\n\nsudo mv ./target/release/libindystrgpostgres.so /usr/local/lib/libindystrgpostgres.so\n")))}g.isMDXComponent=!0}}]);