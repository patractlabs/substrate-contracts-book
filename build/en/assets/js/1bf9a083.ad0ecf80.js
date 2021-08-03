"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8055],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8986:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],s={},i="Access Control",l={unversionedId:"metis/access-control",id:"metis/access-control",isDocsHomePage:!1,title:"Access Control",description:"Although smart contract applications are decentralized, implementing necessary centralized access control in the contract can make the contract more secure.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/metis/access-control.md",sourceDirName:"metis",slug:"/metis/access-control",permalink:"/en/metis/access-control",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/metis/access-control.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ERC20",permalink:"/en/metis/tokens"},next:{title:"Report for Metis proposals",permalink:"/en/metis/reports"}},p=[{value:"Ownership and Ownable",id:"ownership-and-ownable",children:[{value:"Use <code>Ownership</code> to realize contract ownership",id:"use-ownership-to-realize-contract-ownership",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-control"},"Access Control"),(0,a.kt)("p",null,"Although smart contract applications are decentralized, implementing necessary centralized access control in the contract can make the contract more secure."),(0,a.kt)("h2",{id:"ownership-and-ownable"},"Ownership and Ownable"),(0,a.kt)("p",null,"The concept of ownership is the most common and basic form of access control: an account is the owner of the contract and can perform management tasks on the contract."),(0,a.kt)("p",null,"metis provides ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/tree/master/traits/access/ownership"},"Ownership")," to realize the ownership in your contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::trait_definition]\npub trait Ownable {\n    /// Initializes the contract setting the deployer as the initial owner.\n    #[ink(constructor)]\n    fn new() -> Self;\n\n    /// Returns the account id of the current owner.\n    #[ink(message)]\n    fn owner(&self) -> Option<AccountId>;\n\n    /// Transfer ownership to new owner.\n    #[ink(message)]\n    fn transfer_ownership(&mut self, new_owner: Option<AccountId>);\n}\n")),(0,a.kt)("h3",{id:"use-ownership-to-realize-contract-ownership"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"Ownership")," to realize contract ownership"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership")," package to the ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo.toml")," dependency of the new contract project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nownership = {version = "0.1.0", git = "https://github.com/patractlabs/metis", default-features = false}\n\n[features]\ndefault = ["std"]\nstd = [\n    "ownership/std",\n]\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The simplest realization of ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod ownership {\nuse super::Ownable;\n\n    #[ink(storage)]\n    pub struct Ownership {\n        owner: Option<AccountId>,\n    }\n\n    impl Ownable for Ownership {\n        #[ink(constructor)]\n        fn new() -> Self {\n            Self {\n                owner: Self::env().caller(),\n            }\n        }\n\n        #[ink(message)]\n        fn owner(&self) -> Option<AccountId> {\n            self.owner.clone()\n        }\n\n        #[ink(message)]\n        fn transfer_ownership(&mut self, new_owner: Option<AccountId>) {\n            assert_eq!(self.owner(), Some(self.env().caller()));\n            if let Some(new_one) = new_owner {\n\n            }\n            self.owner = new_owner;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"By default, the owner of the contract is the account that deployed it, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," also provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_ownership")," method to allow you to transfer the contract ownership to other accounts."))}m.isMDXComponent=!0}}]);