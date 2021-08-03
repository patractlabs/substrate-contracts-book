"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6345],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1905:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},c="Access Control",l={unversionedId:"metis/access-control",id:"metis/access-control",isDocsHomePage:!1,title:"Access Control",description:"\u867d\u7136\u667a\u80fd\u5408\u7ea6\u5e94\u7528\u662f\u53bb\u4e2d\u5fc3\u5316\u7684\uff0c\u4f46\u5728\u5408\u7ea6\u4e2d\u5b9e\u73b0\u5fc5\u8981\u7684\u4e2d\u5fc3\u5316\u8bbf\u95ee\u63a7\u5236\u53ef\u4ee5\u4f7f\u5408\u7ea6\u66f4\u52a0\u5b89\u5168\u3002",source:"@site/docs/metis/access-control.md",sourceDirName:"metis",slug:"/metis/access-control",permalink:"/metis/access-control",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/metis/access-control.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ERC20",permalink:"/metis/tokens"},next:{title:"Metis\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",permalink:"/metis/reports"}},p=[{value:"Ownership and Ownable",id:"ownership-and-ownable",children:[{value:"\u4f7f\u7528 <code>Ownership</code> \u5b9e\u73b0\u5408\u7ea6\u6240\u6709\u6743",id:"\u4f7f\u7528-ownership-\u5b9e\u73b0\u5408\u7ea6\u6240\u6709\u6743",children:[]}]}],u={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-control"},"Access Control"),(0,a.kt)("p",null,"\u867d\u7136\u667a\u80fd\u5408\u7ea6\u5e94\u7528\u662f\u53bb\u4e2d\u5fc3\u5316\u7684\uff0c\u4f46\u5728\u5408\u7ea6\u4e2d\u5b9e\u73b0\u5fc5\u8981\u7684\u4e2d\u5fc3\u5316\u8bbf\u95ee\u63a7\u5236\u53ef\u4ee5\u4f7f\u5408\u7ea6\u66f4\u52a0\u5b89\u5168\u3002"),(0,a.kt)("h2",{id:"ownership-and-ownable"},"Ownership and Ownable"),(0,a.kt)("p",null,"\u6240\u6709\u6743\u7684\u6982\u5ff5\u662f\u8bbf\u95ee\u63a7\u5236\u6700\u5e38\u89c1\u548c\u6700\u57fa\u672c\u7684\u5f62\u5f0f\uff1a\u6709\u4e00\u4e2a\u5e10\u6237\u662f\u5408\u7ea6\u7684 owner\uff0c\u53ef\u4ee5\u5728\u5408\u7ea6\u4e0a\u6267\u884c\u7ba1\u7406\u4efb\u52a1\u3002 "),(0,a.kt)("p",null,"metis \u63d0\u4f9b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/tree/master/traits/access/ownership"},"Ownership"),"  \u6765\u5b9e\u73b0\u60a8\u5408\u7ea6\u4e2d\u7684\u6240\u6709\u6743\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::trait_definition]\npub trait Ownable {\n    /// Initializes the contract setting the deployer as the initial owner.\n    #[ink(constructor)]\n    fn new() -> Self;\n\n    /// Returns the account id of the current owner.\n    #[ink(message)]\n    fn owner(&self) -> Option<AccountId>;\n\n    /// Transfer ownership to new owner.\n    #[ink(message)]\n    fn transfer_ownership(&mut self, new_owner: Option<AccountId>);\n}\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-ownership-\u5b9e\u73b0\u5408\u7ea6\u6240\u6709\u6743"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Ownership")," \u5b9e\u73b0\u5408\u7ea6\u6240\u6709\u6743"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership")," \u5305\u6dfb\u52a0\u5230\u65b0\u5408\u7ea6\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo.toml")," \u4f9d\u8d56\u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nownership = { version = "0.1.0", git = "https://github.com/patractlabs/metis", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n    "ownership/std",\n]\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6700\u7b80\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod ownership {\n    use super::Ownable;\n\n    #[ink(storage)]\n    pub struct Ownership {\n        owner: Option<AccountId>,\n    }\n\n    impl Ownable for Ownership {\n        #[ink(constructor)]\n        fn new() -> Self {\n            Self {\n                owner: Self::env().caller(),\n            }\n        }\n\n        #[ink(message)]\n        fn owner(&self) -> Option<AccountId> {\n            self.owner.clone()\n        }\n\n        #[ink(message)]\n        fn transfer_ownership(&mut self, new_owner: Option<AccountId>) {\n            assert_eq!(self.owner(), Some(self.env().caller()));\n            if let Some(new_one) = new_owner {\n\n            }\n            self.owner = new_owner;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5408\u7ea6\u7684\u6240\u6709\u8005\u662f\u90e8\u7f72\u5b83\u7684\u5e10\u6237\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," \u4e5f\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_ownership")," \u65b9\u6cd5\u53ef\u4ee5\u8ba9\u60a8\u5c06\u5408\u7ea6\u6240\u6709\u6743\u8f6c\u79fb\u5230\u5176\u4ed6\u5e10\u6237\u3002"))}f.isMDXComponent=!0}}]);