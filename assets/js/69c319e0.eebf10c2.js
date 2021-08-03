"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7153],{3905:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},i=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,p(p({ref:e},i),{},{components:n})):a.createElement(k,p({ref:e},i))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8427:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),p=["components"],s={},c="Redspot \u6559\u7a0b",l={unversionedId:"redspot/tutorial",id:"redspot/tutorial",isDocsHomePage:!1,title:"Redspot \u6559\u7a0b",description:"\u73af\u5883\u51c6\u5907",source:"@site/docs/redspot/tutorial.md",sourceDirName:"redspot",slug:"/redspot/tutorial",permalink:"/substrate-contracts-book/redspot/tutorial",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/tutorial.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u4ec0\u4e48\u662fRedspot",permalink:"/substrate-contracts-book/redspot/introduction"},next:{title:"\u4ecb\u7ecd",permalink:"/substrate-contracts-book/redspot/overview"}},i=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[{value:"\u5b89\u88c5Node.js",id:"\u5b89\u88c5nodejs",children:[]},{value:"ink! \u5408\u7ea6\u7f16\u8bd1\u7684\u5de5\u5177\u94fe",id:"ink-\u5408\u7ea6\u7f16\u8bd1\u7684\u5de5\u5177\u94fe",children:[]},{value:"\u51c6\u5907\u80fd\u8fd0\u884c\u5408\u7ea6\u7684\u533a\u5757\u94fe\u8282\u70b9",id:"\u51c6\u5907\u80fd\u8fd0\u884c\u5408\u7ea6\u7684\u533a\u5757\u94fe\u8282\u70b9",children:[]}]},{value:"\u521b\u5efa Redspot \u9879\u76ee",id:"\u521b\u5efa-redspot-\u9879\u76ee",children:[{value:"\u4ece\u6a21\u7248\u5b89\u88c5",id:"\u4ece\u6a21\u7248\u5b89\u88c5",children:[]},{value:"\u96c6\u6210\u5230\u5df2\u6709\u7684\u5408\u7ea6\u9879\u76ee\u4e2d",id:"\u96c6\u6210\u5230\u5df2\u6709\u7684\u5408\u7ea6\u9879\u76ee\u4e2d",children:[]}]}],u={toc:i};function d(t){var e=t.components,n=(0,r.Z)(t,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redspot-\u6559\u7a0b"},"Redspot \u6559\u7a0b"),(0,o.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("h3",{id:"\u5b89\u88c5nodejs"},"\u5b89\u88c5Node.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u672c\u5730\u5b89\u88c5Node.js \uff0c\u4e14 Node.js \u7248\u672c \u226514.0\u3002\u60a8\u53ef\u8bbf\u95ee",(0,o.kt)("a",{parentName:"li",href:"http://nodejs.cn/"},"Node.js"),"\u5b98\u7f51\u5b8c\u6210\u5b89\u88c5\u6216\u5347\u7ea7\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\u5efa\u8bae\u60a8\u4f7f\u7528nvm\u5b89\u88c5Node.js\uff0cWindows \u7528\u6237\u53ef\u6539\u7528nvm-windows\u3002"),(0,o.kt)("h3",{id:"ink-\u5408\u7ea6\u7f16\u8bd1\u7684\u5de5\u5177\u94fe"},"ink! \u5408\u7ea6\u7f16\u8bd1\u7684\u5de5\u5177\u94fe"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rust\u73af\u5883\u3002\u7531\u4e8eink!\u5408\u7ea6\u9700\u8981Rust\u7684Wasm\u5de5\u5177\u94fe\uff0c\u4e14\u5f53\u524dWasm\u53ea\u80fd\u5728nightly\u5de5\u5177\u94fe\u4e0b\u8fd0\u884c\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u5148\u51c6\u5907Wasm\u7f16\u8bd1\u73af\u5883\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup install nightly\nrustup component add rust-src --toolchain nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ink! \u7f16\u8bd1\u5408\u7ea6\u7684\u5de5\u5177",(0,o.kt)("inlineCode",{parentName:"li"},"cargo-contract"),"\u3002\u60a8\u53ef\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u9ed8\u8ba4\u63d0\u4f9b\u7684\u5b98\u65b9",(0,o.kt)("inlineCode",{parentName:"li"},"cargo-contract"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-contract --force\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contrac"),"t\u65f6\uff0c\u5fc5\u987b\u5728\u5f53\u524d\u7684\u73af\u5883\u4e2d\u51c6\u5907\u597d",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-opt"),"\uff0c\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"cargo-contract"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u5728\u672c\u673a\u4e0a\u5b89\u88c5Rust\u3001cargo-contract\u73af\u5883\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Docker\u62c9\u53d6\u955c\u50cf\u8fdb\u884c\u73af\u5883\u51c6\u5907\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://docs.patract.io/redspot/tasks.html"},"Tasks"),"\u90e8\u5206\u3002"),(0,o.kt)("h3",{id:"\u51c6\u5907\u80fd\u8fd0\u884c\u5408\u7ea6\u7684\u533a\u5757\u94fe\u8282\u70b9"},"\u51c6\u5907\u80fd\u8fd0\u884c\u5408\u7ea6\u7684\u533a\u5757\u94fe\u8282\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Jupiter"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://%5Bhttps://github.com/patractlabs/jupiter"},"Jupiter"),"\u662f\u7531Patract \u7ef4\u62a4\uff0c\u5305\u542b Patract \u5408\u7ea6\u8bbe\u8ba1\u89c4\u8303\u5e76\u517c\u5bb9\u6700\u65b0",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u6a21\u5757\u7684\u5408\u7ea6\u6d4b\u8bd5\u7f51\u3002Jupiter \u6709\u4e09\u7c7b\u8282\u70b9\uff0c\u5206\u522b\u662f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u4e8e rococo \u4e0a\u7684Jupiter\u5408\u7ea6\u5e73\u884c\u94fe\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u72ec\u7acb\u8fd0\u884c\u5bf9\u5916\u63d0\u4f9b\u6700\u65b0\u5408\u7ea6\u529f\u80fd\u7684Jupiter\u72ec\u7acb\u6d4b\u8bd5\u7f51\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9002\u7528\u4e8e\u672c\u5730\u5feb\u901f\u6d4b\u8bd5\u7684Jupiter\u8282\u70b9\u3002")),(0,o.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e09\u7c7b\u8282\u70b9\u7684\u533a\u522b\u53ca\u7f16\u8bd1\u5b89\u88c5\u7b49\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u8be5\u9879\u76ee\u7684Readme\u6a21\u5757\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Europa"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"Europa"),"\u662f\u7531Patract \u8bbe\u8ba1\uff0c\u5e2e\u52a9\u5408\u7ea6\u5f00\u53d1\u8005\u8c03\u8bd5\u53ca\u6d4b\u8bd5\u5408\u7ea6\u7684\u5408\u7ea6\u6c99\u76d2\u3002\u8be5\u5408\u7ea6\u6c99\u76d2\u7c7b\u4f3c\u4e8e\u4ee5\u592a\u574a\u751f\u6001\u4e2d\u7684Ganache\uff0c\u4f46\u662fEuropa\u7684\u7279\u6027\u66f4\u591a\u7684\u4f53\u73b0\u5728\u5176\u63d0\u4f9b\u4e86\u90e8\u7f72\u8c03\u7528\u5408\u7ea6\u8fc7\u7a0b\u4e2d\u7684\u8be6\u7ec6\u6267\u884c\u4fe1\u606f\u7684\u65e5\u5fd7\uff0c\u80fd\u591f\u6700\u5927\u7a0b\u5ea6\u53cd\u6620\u51fa\u5408\u7ea6\u6a21\u5757\u8fd9\u4e2a\u9ed1\u76d2\u7684\u8fd0\u884c\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u5e76\u542f\u52a8Europa\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install europa --git https://github.com/patractlabs/europa --locked --force\neuropa --tmp\n")),(0,o.kt)("p",null,"Europa \u4e0d\u540c\u7684\u7248\u672c\u53ca\u5176\u4ed6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u8be5\u9879\u76ee\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"Readme"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Canvas"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/canvas-node"},"Canvas"),"\u662f\u7531\u5b98\u65b9\u63d0\u4f9b\u7684\u5177\u5907",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u6a21\u5757\u7684\u5408\u7ea6\u6d4b\u8bd5\u94fe\uff0c\u8fd9\u4e2a\u6d4b\u8bd5\u94fe\u662f\u4e00\u4e2a\u5b98\u65b9",(0,o.kt)("inlineCode",{parentName:"p"},"ink"),"! &",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u5f00\u53d1\u7ec4\u7ef4\u62a4\u7684\u6d4b\u8bd5\u7f51\u3002\u53c2\u4e0ecanvas \u7edc\u7684\u65b9\u5f0f\u8bf7\u53c2\u89c1\u8be5\u9879\u76ee\u7684Readme\u6a21\u5757\u3002\u82e5\u60a8\u53ea\u662f\u4e3a\u4e86\u5728\u672c\u5730\u8fd0\u884c\u6d4b\u8bd5\u8282\u70b9\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --force --locked\ncanvas --dev --tmp\n")),(0,o.kt)("h2",{id:"\u521b\u5efa-redspot-\u9879\u76ee"},"\u521b\u5efa Redspot \u9879\u76ee"),(0,o.kt)("h3",{id:"\u4ece\u6a21\u7248\u5b89\u88c5"},"\u4ece\u6a21\u7248\u5b89\u88c5"),(0,o.kt)("p",null,"Redspot \u63d0\u4f9b\u5408\u7ea6\u5f00\u53d1\u6a21\u7248\uff0c\u53ef\u4ee5\u8ba9\u60a8\u5feb\u901f\u642d\u5efa\u8d77\u4e00\u4e2a\u9879\u76ee\u3002\u76ee\u524d\u4ec5\u652f\u6301\u5b89\u88c5 erc20 \u5408\u7ea6\u7684\u6a21\u7248\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u8981\u4ece\u6a21\u7248\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528npx\u3002npx\u662fnpm (",(0,o.kt)("em",{parentName:"p"},"npm 5.2+"),") \u91cc\u81ea\u5e26\u7684\u4e00\u4e2a\u5305\u6267\u884c\u5668\u3002\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u4f1a\u62c9\u53d6\u6700\u65b0\u7684Redspot\uff0c\u5e76\u4ee5 erc20 \u4e3a\u6a21\u677f\u6784\u5efa\u51fa Redspot \u9879\u76ee\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"npx redspot-new erc20\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f "),"\u56e0\u4e3a\u5f53\u524d ink! \u53d8\u52a8\u6bd4\u8f83\u9891\u7e41\uff0c\u6240\u4ee5Redspot\u8fd8\u672a\u63d0\u4f9b\u4ece\u6a21\u677f\u521b\u5efa\u9879\u76ee\u7684\u529f\u80fd\u3002\u60a8\u5982\u679c\u9700\u8981\u5176\u4ed6\u9879\u76ee\u6a21\u677f\uff0c\u53ef\u4ee5\u4eceRedspot\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/redspot"},"\u9879\u76ee\u4ed3\u5e93"),"\u4e2d\u7684example\u76ee\u5f55\u4e2d\u62f7\u8d1d\u5230\u4efb\u610f\u76ee\u5f55\u4e0b\uff0c\u5e76\u66f4\u6539\u9879\u76ee\u540d\u79f0\u7b49\u914d\u7f6e\u4fe1\u606f\u3002example\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6848\u4f8b\u90fd\u5df2\u7ecf\u662fRedspot\u9879\u76ee\u7ed3\u6784\uff0c\u56e0\u6b64\u60a8\u4e0d\u9700\u8981\u518d\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npx redspot-new"),"\u547d\u4ee4\u521b\u5efa\u9879\u76ee\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u7531Redspot\u521b\u5efa\uff0c\u90a3\u4e48\u8be5\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u4f1a\u5b58\u5728\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),"\u6587\u4ef6\uff0c\u4ee5\u6b64\u4e3a\u6807\u5fd7\u8fd9\u4e2a\u9879\u76ee\u662fRedspot\u3002\u540c\u65f6\u76f8\u540c\u76ee\u5f55\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\u5219\u63a7\u5236\u4e86\u8fd9\u4e2a\u9879\u76ee\u5bf9\u5e94\u7684Redspot\u7684\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u901a\u8fc7Github\u3001example\u6216\u5176\u4ed6\u9014\u5f84\u83b7\u53d6\u5230\u4e86\u5df2\u6784\u5efa\u597d\u7684Redspot\u9879\u76ee\uff0c\u60a8\u53ef\u4ee5\u8fdb\u5165\u5230\u8be5\u9879\u76ee\u76ee\u5f55\u4e0b\u5e76\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),"\u547d\u4ee4\u6062\u590d\u8be5Redspot\u9879\u76ee\u4f7f\u7528\u7684Redspot\u73af\u5883\u3002\u793a\u4f8b\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# copy the delegator multi-contract example from redspot repo to local dir\ncp -r ./redpost/example/delegator ./\ncd delegator\nyarn install\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684\u6a21\u7248\u662f\u5df2\u7ecf\u914d\u7f6e\u4e86typescript \u3002\u4e5f\u63a8\u8350\u60a8\u4f7f\u7528typescript\u8fdb\u884c\u5f00\u53d1\u3002typescript\u517c\u5bb9Javascript \u7684\uff0c\u4e0d\u5b9a\u4e49\u4efb\u4f55\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\uff0c\u5e76\u4e14\u4ecd\u80fd\u591f\u62e5\u6709typescript\u5f3a\u5927\u7684\u7c7b\u578b\u63d0\u793a\u548c\u9519\u8bef\u63d0\u793a\u529f\u80fd\u3002"),(0,o.kt)("h3",{id:"\u96c6\u6210\u5230\u5df2\u6709\u7684\u5408\u7ea6\u9879\u76ee\u4e2d"},"\u96c6\u6210\u5230\u5df2\u6709\u7684\u5408\u7ea6\u9879\u76ee\u4e2d"),(0,o.kt)("p",null,"Redspot\u53ef\u4ee5\u8f7b\u677e\u5730\u96c6\u6210\u5230\u5df2\u5b58\u5728\u7684\u5408\u7ea6\u9879\u76ee\u4e2d\u3002\u6211\u4eec\u4ee5\u5b98\u65b9\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},"ink"),"\u4ed3\u5e93\u4e2d\u7684examples\u76ee\u5f55\u4e0b\u7684\u5408\u7ea6\u4e3a\u4f8b\u3002"),(0,o.kt)("h4",{id:"\u7f16\u8bd1\u5408\u7ea6"},"\u7f16\u8bd1\u5408\u7ea6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u514b\u9686 ink \u4ed3\u5e93\u5e76\u6253\u5f00 ink \u76ee\u5f55\u3002",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/ink.git\ncd ink\n"))),(0,o.kt)("li",{parentName:"ol"},"\u5728 ink \u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4ee5\u4e0b\u4e09\u4e2a\u6587\u4ef6\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"redspot.config.ts")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedspotUserConfig } from 'redspot/types';\nimport '@redspot/patract'; // \u5f15\u5165 @redspot/patract \u63d2\u4ef6\nimport '@redspot/chai'; // \u5f15\u5165 @redspot/chai \u63d2\u4ef6\nexport default {\n  defaultNetwork: 'development', // \u9ed8\u8ba4\u7684 network\n  contract: {\n    ink: {\n      toolchain: 'nightly',      // \u6307\u5b9a\u7f16\u8bd1\u5408\u7ea6\u65f6\u7684 toolchain \u7248\u672c\n      sources: ['examples/**/*'] // \u5408\u7ea6\u6240\u5728\u7684\u76ee\u5f55\n    }\n  },\n  networks: {\n    // development \u7f51\u7edc\u7684\u914d\u7f6e\n    development: {\n      endpoint: 'ws://127.0.0.1:9944',\n      types: {},\n      gasLimit: '400000000000', // \u8bbe\u7f6e\u9ed8\u8ba4\u7684gasLimit\n      explorerUrl:\n        'https://polkadot.js.org/apps/#/explorer/query/?rpc=ws://127.0.0.1:9944/'\n    },\n  },\n  mocha: {\n    timeout: 60000\n  }\n} as RedspotUserConfig;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"package.json")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "examples",\n  "version": "0.1.0",\n  "private": true,\n  "resolutions": {\n    "@polkadot/api": "^3.10.2",\n    "@polkadot/api-contract": "^3.10.2"\n  },\n  "dependencies": {\n    "@redspot/chai": "^0.10.1",\n    "@redspot/patract": "^0.10.1",\n    "@types/chai": "^4.2.14",\n    "@types/mocha": "^8.0.3",\n    "chai": "^4.2.0",\n    "redspot": "^0.10.1",\n    "typescript": "^4.0.2"\n  },\n  "scripts": {\n    "build": "npx redspot compile",\n    "test": "npx redspot test"\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"tsconfig.json")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "commonjs",\n    "strict": true,\n    "esModuleInterop": true,\n    "outDir": "dist",\n    "noImplicitAny": false\n  },\n  "include": [\n    "**/*.ts"\n  ],\n  "exclude": [\n    "node_modules"\n  ],\n  "files": [\n    "./redspot.config.ts",\n  ]\n}\n')))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b89\u88c5 npm \u4f9d\u8d56\uff0c\u5728\u8fd9\u91cc\u63a8\u8350\u60a8\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install"},"yarn"),"\u4f5c\u4e3a\u5305\u7ba1\u7406\u5668\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"yarn \u6216\u8005 npm install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npx redspot compile"),"\u547d\u4ee4\uff0c\u7f16\u8bd1examples\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u5408\u7ea6\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"npx redspot compile examples/erc20\n")),(0,o.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u4f1a\u6307\u5b9a\u7f16\u8bd1 erc20 \u5408\u7ea6\u3002\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u5728artifacts\u76ee\u5f55\u4e0b\u627e\u5230\u7f16\u8bd1\u4ea7\u751f\u7684\u4fe1\u606f\u3002"))),(0,o.kt)("h4",{id:"\u90e8\u7f72\u5408\u7ea6"},"\u90e8\u7f72\u5408\u7ea6"),(0,o.kt)("p",null,"\u73b0\u5728\u60a8\u53ef\u4ee5\u901a\u8fc7 Redspot \u8fd0\u884c\u4e00\u4e2a\u90e8\u7f72\u811a\u672c\u4e86\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ink \u6839\u76ee\u5f55\u521b\u5efadeploy.ts\u6587\u4ef6\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { network, patract } from "redspot";\nconst { getContractFactory } = patract;\nconst { getSigners, api } = network;\nasync function run() {\n    console.log("deploy erc20");\n    await api.isReady;\n    console.log("deploy erc201");\n    const signers = await getSigners();\n    const signer = signers[0];\n    const contractFactory = await getContractFactory("erc20", signer);\n    const contract = await contractFactory.deploy("new", "1000000", {\n        gasLimit: "200000000000",\n        value: "10000000000000000",\n    });\n    console.log(\n        "Deploy successfully. The contract address: ",\n        contract.address.toString()\n    );\n    api.disconnect();\n}\nrun().catch((err) => {\n    console.log(err);\n});\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5df2\u7ecf\u5728redspot.config.ts \u4e2d\u6b63\u786e\u914d\u7f6e\u4e86\u7f51\u7edc\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n        ...\n        networks: {\n    development: {\n      endpoint: 'ws://127.0.0.1:9944', // \n      types: {},\n      ...\n    },\n  },\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"--no-compile"),"\u9632\u6b62\u91cd\u590d\u7f16\u8bd1\uff0c\u8fd0\u884c deploy.ts \u6587\u4ef6\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot run ./deploy.ts --no-compile\n")))),(0,o.kt)("h4",{id:"\u7ed3\u679c\u9a8c\u8bc1"},"\u7ed3\u679c\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u5408\u7ea6\u90e8\u7f72\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u5f97\u5230\u7c7b\u4f3c\u8fd9\u6837\u7684\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Deploy successfully. The contract address:  5CqB5Mh9UdVbTE1Gt5PJfWSiCHydJaJsA31HjKGti1Z2fn78\n")),(0,o.kt)("h4",{id:"\u6d4b\u8bd5\u5408\u7ea6"},"\u6d4b\u8bd5\u5408\u7ea6"),(0,o.kt)("p",null,"\u5728 tests \u76ee\u5f55\u4e0b\u65b0\u589e erc20.test.ts \u6587\u4ef6\uff0c\u7528\u6765\u6d4b\u8bd5 erc20 \u5408\u7ea6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import BN from 'bn.js';\nimport { expect } from 'chai';\nimport { patract, network, artifacts } from 'redspot';\nconst { getContractFactory, getRandomSigner } = patract;\nconst { api, getSigners } = network;\ndescribe('ERC20', () => {\n  after(() => {\n    return api.disconnect();\n  });\n  async function setup() {\n    const one = new BN(10).pow(new BN(api.registry.chainDecimals[0]));\n    const signers = await getSigners();\n    const Alice = signers[0];\n    const sender = Alice;\n    const contractFactory = await getContractFactory('erc20', sender);\n    const contract = await contractFactory.deploy('new', '1000');\n    const abi = artifacts.readArtifact('erc20');\n    const receiver = await getRandomSigner();\n    return { sender, contractFactory, contract, abi, receiver, Alice, one };\n  }\n  it('Assigns initial balance', async () => {\n    const { contract, sender } = await setup();\n    const result = await contract.query.balanceOf(sender.address);\n    expect(result.output).to.equal(1000);\n  });\n  it('Transfer emits event', async () => {\n    const { contract, sender, receiver } = await setup();\n    await expect(contract.tx.transfer(receiver.address, 7))\n      .to.emit(contract, 'Transfer')\n      .withArgs(sender.address, receiver.address, 7);\n  });\n  it('Can not transfer above the amount', async () => {\n    const { contract, receiver } = await setup();\n    await expect(contract.tx.transfer(receiver.address, 1007)).to.not.emit(\n      contract,\n      'Transfer'\n    );\n  });\n  it('Can not transfer from empty account', async () => {\n    const { contract, Alice, one, sender } = await setup();\n    const emptyAccount = await getRandomSigner(Alice, one.muln(10000));\n    await expect(\n      contract.tx.transfer(sender.address, 7, {\n        signer: emptyAccount\n      })\n    ).to.not.emit(contract, 'Transfer');\n  });\n});\n")),(0,o.kt)("p",null,"\u8fd0\u884c\u6d4b\u8bd5\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot test --no-compile\n")),(0,o.kt)("p",null,"\u60a8\u5c06\u4f1a\u5f97\u5230\u4ee5\u4e0b\u7c7b\u4f3c\u7ed3\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```\n\u2713 Can not transfer from empty account (17912ms)\n  4 passing (46s)\n")),(0,o.kt)("p",null,"\u67e5\u770b\u66f4\u591a\u5185\u7f6e\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"./tasks"},"tasks"),"\u3002"))}d.isMDXComponent=!0}}]);