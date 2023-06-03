"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},1089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={},s="Prerequisites",u={unversionedId:"getting-started/prerequisites",id:"getting-started/prerequisites",title:"Prerequisites",description:"To work with Aries Framework JavaScript we need to install some dependencies and set-up our Node.JS environment. Even when creating a mobile app in React Native, we need Node.JS installed. We will go over the specific installation process for each platform. Go ahead and pick your system of choice to get started!",source:"@site/guides/getting-started/prerequisites.md",sourceDirName:"getting-started",slug:"/getting-started/prerequisites",permalink:"/guides/0.4/getting-started/prerequisites",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/guides/0.4/getting-started/"},next:{title:"Agent Setup",permalink:"/guides/0.4/getting-started/set-up/"}},c={},p=[{value:"Node.JS",id:"nodejs",level:3},{value:"Windows",id:"windows",level:4},{value:"macOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Arch Linux",id:"arch-linux",level:5},{value:"Debian",id:"debian",level:5},{value:"Red Hat",id:"red-hat",level:5},{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Project Setup",id:"project-setup",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To work with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript"},"Aries Framework JavaScript")," we need to install some dependencies and set-up our Node.JS environment. Even when creating a mobile app in React Native, we need Node.JS installed. We will go over the specific installation process for each platform. Go ahead and pick your system of choice to get started!"),(0,a.kt)("p",null,"The specific items that we set-up:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.JS")," - v16 or v18"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install"},"yarn")," or ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")),(0,a.kt)("li",{parentName:"ul"},"Node.JS or React Native project.")),(0,a.kt)("h3",{id:"nodejs"},"Node.JS"),(0,a.kt)("p",null,"NodeJS is the most popular JavaScript runtime environment excluding browsers. It can run on your desktop or even a server."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{label:"Windows",value:"tab1",mdxType:"TabItem"},(0,a.kt)("p",null,"You can download it from the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.JS Website"))),(0,a.kt)(l.Z,{label:"macOS",value:"tab2",mdxType:"TabItem"},(0,a.kt)("p",null,"Make sure you have ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," installed. If not you can install it with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Then install Node.JS with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"brew install nodejs\n")),(0,a.kt)("p",null,"Alternatively, you can download it from the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.JS Website"))),(0,a.kt)(l.Z,{label:"Linux",value:"tab3",mdxType:"TabItem"},(0,a.kt)("p",null,"Either follow one of the specific steps for installing Node.JS on linux below, or you can download it directly from the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.JS Website")),(0,a.kt)("h5",{id:"arch-linux"},"Arch Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pacman -S nodejs npm\n")),(0,a.kt)("h5",{id:"debian"},"Debian"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -fsSL https://deb.nodesource.com/setup_18.x | bash -\napt-get install -y nodejs\n")),(0,a.kt)("h5",{id:"red-hat"},"Red Hat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sL https://rpm.nodesource.com/setup_18.x | bash -\nyum install nodejs\n")))),(0,a.kt)("h3",{id:"npm"},"NPM"),(0,a.kt)("p",null,"The Node Package Manager comes pre-bundled with the NodeJS installation from above."),(0,a.kt)("h3",{id:"yarn"},"Yarn"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only required when not using npm")),(0,a.kt)("p",null,"For every platform, the installation of yarn is the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install --global yarn\n")),(0,a.kt)("h3",{id:"project-setup"},"Project Setup"),(0,a.kt)("p",null,"Finally, you need to make sure you have a project set-up using Node.JS or React Native. If you're not familiar with setting up a project, we suggest following the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/learn/"},"Introduction to Node.JS")," or ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native Quickstart")," guides."))}f.isMDXComponent=!0}}]);