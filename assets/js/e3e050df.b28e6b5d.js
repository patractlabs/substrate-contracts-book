"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7696],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),s=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=s(a),k=n,d=o["".concat(u,".").concat(k)]||o[k]||c[k]||l;return a?r.createElement(d,i(i({ref:e},m),{},{components:a})):r.createElement(d,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},9058:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return o}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],p={},u="zkMega v0.1 \u62a5\u544a\uff08Megaclite v0.1 \u62a5\u544a\uff09",s={unversionedId:"zkmega/reports/v0.1Report",id:"zkmega/reports/v0.1Report",isDocsHomePage:!1,title:"zkMega v0.1 \u62a5\u544a\uff08Megaclite v0.1 \u62a5\u544a\uff09",description:"* Original Proposal//polkadot.polkassembly.io/post/167",source:"@site/docs/zkmega/reports/v0.1Report.md",sourceDirName:"zkmega/reports",slug:"/zkmega/reports/v0.1Report",permalink:"/substrate-contracts-book/zkmega/reports/v0.1Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/zkmega/reports/v0.1Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"zkMega\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",permalink:"/substrate-contracts-book/zkmega/reports"},next:{title:"zkMega v0.2 \u62a5\u544a\uff08Megaclite v0.2 \u62a5\u544a\uff09",permalink:"/substrate-contracts-book/zkmega/reports/v0.2Report"}},m=[{value:"1. \u56de\u987e Megaclite v0.1 \u7684\u8bbe\u8ba1\u76ee\u6807",id:"1-\u56de\u987e-megaclite-v01-\u7684\u8bbe\u8ba1\u76ee\u6807",children:[]},{value:"2. Pairing Friendly Curves",id:"2-pairing-friendly-curves",children:[{value:"2.1 \u57fa\u4e8e arkworks-curve \u7684\u5c01\u88c5",id:"21-\u57fa\u4e8e-arkworks-curve-\u7684\u5c01\u88c5",children:[]},{value:"2.2 \u901a\u8fc7 Host Call \u4f7f\u7528 megaclite",id:"22-\u901a\u8fc7-host-call-\u4f7f\u7528-megaclite",children:[]},{value:"2.3 \u5728 Runtime \u4e2d\u76f4\u63a5\u4f7f\u7528 megaclite",id:"23-\u5728-runtime-\u4e2d\u76f4\u63a5\u4f7f\u7528-megaclite",children:[]},{value:"2.4 Benchmarks",id:"24-benchmarks",children:[]}]},{value:"3. Groth16 Verify System",id:"3-groth16-verify-system",children:[{value:"3.1 \u5728 runtime \u4e2d \u901a\u8fc7 chain-extension \u66b4\u9732 megaclite \u7ed9 ink! \u5408\u7ea6\u8c03\u7528",id:"31-\u5728-runtime-\u4e2d-\u901a\u8fc7-chain-extension-\u66b4\u9732-megaclite-\u7ed9-ink-\u5408\u7ea6\u8c03\u7528",children:[]},{value:"3.2 \u5728 ink! \u5408\u7ea6\u4e2d\u8c03\u7528\u94fe\u4e0a\u7684 megaclite \u5b9e\u73b0\u7b80\u5355\u7684 Groth16 Verifier",id:"32-\u5728-ink-\u5408\u7ea6\u4e2d\u8c03\u7528\u94fe\u4e0a\u7684-megaclite-\u5b9e\u73b0\u7b80\u5355\u7684-groth16-verifier",children:[]}]},{value:"3.3 Benchmarks",id:"33-benchmarks",children:[{value:"3.3.1 Building",id:"331-building",children:[]},{value:"3.3.2 MiMC-Based Groth16 Verify Bench Result",id:"332-mimc-based-groth16-verify-bench-result",children:[]}]},{value:"4. More Libraries built for ink!",id:"4-more-libraries-built-for-ink",children:[{value:"4.1 mimc-based merkle tree \u7684\u5b9e\u73b0",id:"41-mimc-based-merkle-tree-\u7684\u5b9e\u73b0",children:[]},{value:"4.2 eddsa verifier \u7684\u5b9e\u73b0",id:"42-eddsa-verifier-\u7684\u5b9e\u73b0",children:[]}]},{value:"5. \u56de\u987e\u9a8c\u8bc1\u4fe1\u606f",id:"5-\u56de\u987e\u9a8c\u8bc1\u4fe1\u606f",children:[]}],c={toc:m};function o(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zkmega-v01-\u62a5\u544a\uff08megaclite-v01-\u62a5\u544a\uff09"},"zkMega v0.1 \u62a5\u544a\uff08Megaclite v0.1 \u62a5\u544a\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Original Proposal: ",(0,l.kt)("a",{parentName:"li",href:"https://polkadot.polkassembly.io/post/167"},"https://polkadot.polkassembly.io/post/167")),(0,l.kt)("li",{parentName:"ul"},"Project Repositories",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite"},"https://github.com/patractlabs/megaclite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter"},"https://github.com/patractlabs/jupiter"))))),(0,l.kt)("h2",{id:"1-\u56de\u987e-megaclite-v01-\u7684\u8bbe\u8ba1\u76ee\u6807"},"1. \u56de\u987e Megaclite v0.1 \u7684\u8bbe\u8ba1\u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provide more on-chain underlying cryptography support than Ethereum. The current stage includes four curves: alt","_","bn128, bls12","_","377, bls12","_","381, bw6","_","761"),(0,l.kt)("li",{parentName:"ul"},"Integrate ADD, Scalar MUL, Paring units under Runtime layer, and provide them to Runtime applications through Runtime-Interface, and further provide them to Wasm contract applications through Contract-Seal"),(0,l.kt)("li",{parentName:"ul"},"Through Pallet and Ink! contract libraries, providing more higher-level verification and crypto tools than Ethereum, improving execution efficiency and reducing development costs"),(0,l.kt)("li",{parentName:"ul"},"Provide typical sample applications through Ink! sample contracts")),(0,l.kt)("h2",{id:"2-pairing-friendly-curves"},"2. Pairing Friendly Curves"),(0,l.kt)("p",null,"\u6211\u4eec\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/arkworks-rs/curves"},"arkworks-curve")," \u5c01\u88c5\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"bls12_377"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bls12_381"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bw6_761"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bn254")," \u8fd9\u56db\u6761 Piaring Friendly Curves \u7684\u57fa\u7840\u8fd0\u7b97\uff0c\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u5728 Runtime \u76f4\u63a5\u5f15\u5165")," \u4e0e\u5236\u4f5c ",(0,l.kt)("strong",{parentName:"p"},"Host Functions")," \u7684\u529e\u6cd5\u5c06\u5b83\u4eec\u96c6\u6210\u5230\u4e86 jupiter\uff0c\u5e76\u5236\u4f5c\u4e86 Benchmarks\u3002"),(0,l.kt)("h3",{id:"21-\u57fa\u4e8e-arkworks-curve-\u7684\u5c01\u88c5"},"2.1 \u57fa\u4e8e arkworks-curve \u7684\u5c01\u88c5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/ops.rs"},"https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/ops.rs")),(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/tree/master/crates/curve/arkworks/src/tests"},"https://github.com/patractlabs/megaclite/tree/master/crates/curve/arkworks/src/tests"))),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7 CurveBasicOperations trait \u7ee7\u627f PairingEngine trait \u7ec4\u5408\u4e86 add\uff0cmul\uff0cpairings \u4e09\u4e2a\u65b9\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn add(input: &[u8]) -> Result<Vec<u8>, SerializationError> { \\\\omit }\nfn mul(input: &[u8]) -> Result<Vec<u8>, SerializationError> { \\\\omit }\nfn pairings(input: &[u8]) -> Result<bool, SerializationError> { \\\\omit }\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u4e09\u4e2a\u65b9\u6cd5\u4ee5\u5b57\u8282\u5207\u7247\u7c7b\u578b\u7684\u63a5\u53e3\u66b4\u9732\u7ed9 runtime \u548c ink \u5c42, add, mul \u8fd4\u56de\u7684\u662f\u5b57\u8282\u5411\u91cf\u7c7b\u578b\u7684\u692d\u5706\u66f2\u7ebf\u70b9, pairings \u5185\u90e8\u901a\u8fc7\u6279\u91cf\u914d\u5bf9\u7136\u540e\u7d2f\u52a0\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u518d\u4e0e Fqk::one() \u8fdb\u884c\u5bf9\u6bd4\uff0c\u76f8\u7b49\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de\u3002"),(0,l.kt)("p",null,"\u5728 CurveBasicOperations trait \u91cc\u8fd8\u5c01\u88c5\u4e86\u4e00\u4e9b\u7f16\u5199 groth16 verify \u4ee3\u7801\u6240\u9700\u8981\u7528\u5230\u7684\u4e0d\u540c\u7684\u692d\u5706\u66f2\u7ebf\u53c2\u6570:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// curve basic parameters\nconst SCALAR_FIELD: &'static str;\nconst MODULUS: &'static [u8];\n// G1 bytes length\nconst G1_LEN: usize;\n// G2 bytes length\nconst G2_LEN: usize;\n// Scalar bytes length\nconst SCALAR_LEN: usize;\n// Curve ID is used for adaptation chain extension \nconst CURVE_ID: u32;\n")),(0,l.kt)("h3",{id:"22-\u901a\u8fc7-host-call-\u4f7f\u7528-megaclite"},"2.2 \u901a\u8fc7 Host Call \u4f7f\u7528 megaclite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6848\u4f8b\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/primitives/io/src/lib.rs"},"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/primitives/io/src/lib.rs"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"/// Pairing runtime interface\n#[runtime_interface]\npub trait Pairing {\n    /// | curve     | add        | mul        | pairing    |\n    /// |-----------|------------|------------|------------|\n    /// | bls12_377 | 0x01000000 | 0x01000001 | 0x01000002 |\n    /// | bls12_381 | 0x01000010 | 0x01000011 | 0x01000012 |\n    /// | bn254     | 0x01000020 | 0x01000021 | 0x01000022 |\n    /// | bw6_761   | 0x01000030 | 0x01000031 | 0x01000032 |\n    fn call(func_id: u32, input: &[u8]) -> Option<Vec<u8>> {\n        curve::call(func_id, input).ok()\n    }\n}\n")),(0,l.kt)("h3",{id:"23-\u5728-runtime-\u4e2d\u76f4\u63a5\u4f7f\u7528-megaclite"},"2.3 \u5728 Runtime \u4e2d\u76f4\u63a5\u4f7f\u7528 megaclite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6848\u4f8b\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/pallets/template/src/lib.rs"},"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/pallets/template/src/lib.rs"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'# Cargo.toml\n[dependencies.curve]\npackage = "megaclite-arkworks"\ngit = "https://github.com/patractlabs/megaclite.git"\nfeatures = ["tests"]\ndefault-features = false\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"megaclite-arkworks")," \u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"no_std"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 runtime \u4e2d\u76f4\u63a5\u5f15\u5165\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"//! lib.rs\ndecl_module! {\n    #[weight = 10_000 + T::DbWeight::get().writes(1)]\n    pub fn wasm_bls12_377_add(origin) {\n        curve::tests::add(0x2a);\n    }\n}\n")),(0,l.kt)("h3",{id:"24-benchmarks"},"2.4 Benchmarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/19a1fb3a21e04a5e14b33a0f25c6f10e059cc6ea/pallets/template/src/benchmarking.rs#L112"},"https://github.com/patractlabs/jupiter/blob/19a1fb3a21e04a5e14b33a0f25c6f10e059cc6ea/pallets/template/src/benchmarking.rs#L112"))),(0,l.kt)("h4",{id:"241-building"},"2.4.1 Building"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the branch `curve-benchmark` of our fork\ngit clone https://github.com/patractlabs/jupiter.git \\\n    --branch features/runtime-interfaces \\\n    --depth=1\n\n# Build the template\ncd jupiter  \\\n  && git submodule update --init \\\n  && cargo build -p jupiter-dev --all-features --release\n\n# Check the command benchmark works fine\n./target/release/jupiter-dev benchmark -p pallet_template -e wasm_bls_12_381_add\n\n")),(0,l.kt)("h4",{id:"242-result"},"2.4.2 Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. Under the jupiter repo\n# 2. Has compiled the release version jupiter-dev\n./target/benchmark.sh\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"memory"),(0,l.kt)("th",{parentName:"tr",align:null},"processor"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"64GiB System memory"),(0,l.kt)("td",{parentName:"tr",align:null},"AMD Ryzen 9 5900X 12-Core Processor")))),(0,l.kt)("p",null,"Here we test the curevs on ubuntu LTS 20.04, Time is measured in \xb5s"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Curve"),(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Native Time(\xb5s)"),(0,l.kt)("th",{parentName:"tr",align:null},"Wasm Time(\xb5s)"),(0,l.kt)("th",{parentName:"tr",align:null},"Speed(Native/Wasm)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","377(~9.5x)"),(0,l.kt)("td",{parentName:"tr",align:null},"add"),(0,l.kt)("td",{parentName:"tr",align:null},"9.588"),(0,l.kt)("td",{parentName:"tr",align:null},"29.02"),(0,l.kt)("td",{parentName:"tr",align:null},"~3x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"mul"),(0,l.kt)("td",{parentName:"tr",align:null},"183.1"),(0,l.kt)("td",{parentName:"tr",align:null},"1893"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"1732"),(0,l.kt)("td",{parentName:"tr",align:null},"15310"),(0,l.kt)("td",{parentName:"tr",align:null},"~7x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","381(~10x)"),(0,l.kt)("td",{parentName:"tr",align:null},"add"),(0,l.kt)("td",{parentName:"tr",align:null},"13.9"),(0,l.kt)("td",{parentName:"tr",align:null},"28.31"),(0,l.kt)("td",{parentName:"tr",align:null},"~2x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"mul"),(0,l.kt)("td",{parentName:"tr",align:null},"177.1"),(0,l.kt)("td",{parentName:"tr",align:null},"1879"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"1438"),(0,l.kt)("td",{parentName:"tr",align:null},"14770"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bn254(~5x)"),(0,l.kt)("td",{parentName:"tr",align:null},"add"),(0,l.kt)("td",{parentName:"tr",align:null},"5.631"),(0,l.kt)("td",{parentName:"tr",align:null},"16.05"),(0,l.kt)("td",{parentName:"tr",align:null},"~3x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"mul"),(0,l.kt)("td",{parentName:"tr",align:null},"107.7"),(0,l.kt)("td",{parentName:"tr",align:null},"534.3"),(0,l.kt)("td",{parentName:"tr",align:null},"~5x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"1150"),(0,l.kt)("td",{parentName:"tr",align:null},"5061"),(0,l.kt)("td",{parentName:"tr",align:null},"~5x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bw6","_","761(~13x)"),(0,l.kt)("td",{parentName:"tr",align:null},"add"),(0,l.kt)("td",{parentName:"tr",align:null},"26.9"),(0,l.kt)("td",{parentName:"tr",align:null},"92.94"),(0,l.kt)("td",{parentName:"tr",align:null},"~4x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"mul"),(0,l.kt)("td",{parentName:"tr",align:null},"956.8"),(0,l.kt)("td",{parentName:"tr",align:null},"14330"),(0,l.kt)("td",{parentName:"tr",align:null},"~15x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"5715"),(0,l.kt)("td",{parentName:"tr",align:null},"60960"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add: \u53d6 arkworks \u7684 test \u7528\u4f8b\u6570\u636e, \u6d4b\u8bd5\u4e86\u4e24\u4e2a generator \u76f8\u52a0\u3002"),(0,l.kt)("li",{parentName:"ul"},"Mul: \u53d6 arkworks \u7684 test \u7528\u4f8b\u6570\u636e, \u6d4b\u8bd5\u4e86\u4e00\u4e2a\u79c1\u94a5\u5927\u5c0f\u7684\u968f\u673a\u6570\u548c generator \u76f8\u4e58."),(0,l.kt)("li",{parentName:"ul"},"Pairing: \u4f7f\u7528 arkworks \u4ea7\u751f\u6d4b\u8bd5\u6570\u636e, \u6d4b\u8bd5\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"bilinearity: e(s * a, b) = e(s * b, a)"))),(0,l.kt)("p",null,"\u6839\u636e\u6d4b\u8bd5\u7ed3\u679c\u6765\u770b\uff0cWasm \u7248\u672c\u6027\u80fd\u4e0e Native \u7248\u6709\u4e00\u5b9a\u5dee\u8ddd\uff0c\u4f46\u4ece\u7ed3\u679c\u6765\u8bb2\uff0c\u6027\u80fd\u8db3\u4ee5\u6ee1\u8db3\u9700\u6c42\uff0c\u5728 3.1 \u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6d4b\u8bd5\u5728 ink! \u4e2d\u8c03\u7528\u94fe\u4e0a\u7684 megaclite \u6765\u8fdb\u4e00\u6b65\u6bd4\u8f83 Host Call \u7248\u672c\u4e0e Wasm \u7248\u672c\u7684\u6027\u80fd\u3002"),(0,l.kt)("h2",{id:"3-groth16-verify-system"},"3. Groth16 Verify System"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/groth16/verify.rs"},"https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/groth16/verify.rs")),(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/tests/src/arkworks/bench.rs"},"https://github.com/patractlabs/megaclite/blob/master/tests/src/arkworks/bench.rs"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2016/260.pdf"},"gronth16")," \u662f\u76ee\u524d\u96f6\u77e5\u8bc6\u8bc1\u660e\u91cc\u9a8c\u8bc1\u6548\u7387\u6700\u9ad8(\u4ec5\u4ec5\u9700\u8981\u56db\u6b21 pairing )\u4e14 proof \u5c3a\u5bf8\u6700\u5c0f\u7684\u7b97\u6cd5, \u6240\u4ee5\u6211\u4eec\u4f18\u5148\u9009\u62e9\u4e86 groth16 proof system, \u5176 verifier \u56fe\u793a\u5982\u4e0b:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/MoEKfTK.png",alt:null})),(0,l.kt)("p",null,"\u5728\u8bba\u6587\u91cc\u6211\u4eec\u53ef\u4ee5\u770b\u5230, verifier\u7684\u9a8c\u8bc1\u6838\u5fc3\u662f\u4e00\u4e2a\u7b49\u5f0f:"),(0,l.kt)("p",null," ",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/GBIEHmE.png",alt:null})),(0,l.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\uff0c\u5de5\u7a0b\u5b9e\u73b0\u4e2d\uff0c\u5e95\u5c42pairing\u7b97\u6cd5\u5b9e\u73b0\u4e86\u6279\u91cf pairing \u8ba1\u7b97\u5e76\u8fdb\u884c\u7d2f\u52a0\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u505a\u4e2a\u8f6c\u5316:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/r9MZOmr.png",alt:null})),(0,l.kt)("p",null,"\u4ece\u516c\u5f0f\u4e2d\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u9700\u8981\u56db\u6b21pairing\uff0cl\u6b21add\u548cmul\u64cd\u4f5c(\u4e0e\u5b9e\u9645\u7535\u8def\u6709\u5173), \u6700\u7ec8, \u56db\u6b21\u914d\u5bf9\u7684\u7ed3\u679c\u4f1a\u8fd4\u56detrue\u6216\u8005false\u3002"),(0,l.kt)("h3",{id:"31-\u5728-runtime-\u4e2d-\u901a\u8fc7-chain-extension-\u66b4\u9732-megaclite-\u7ed9-ink-\u5408\u7ea6\u8c03\u7528"},"3.1 \u5728 runtime \u4e2d \u901a\u8fc7 chain-extension \u66b4\u9732 megaclite \u7ed9 ink! \u5408\u7ea6\u8c03\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6848\u4f8b\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/primitives/chain-extension/src/lib.rs"},"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/primitives/chain-extension/src/lib.rs")),(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/pallets/template/src/tests.rs"},"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/pallets/template/src/tests.rs"))),(0,l.kt)("p",null,"\u6211\u4eec\u5728 chain-extension \u4e2d\u5bf9 megaclite function id \u7684\u5206\u914d\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"curve"),(0,l.kt)("th",{parentName:"tr",align:null},"add"),(0,l.kt)("th",{parentName:"tr",align:null},"mul"),(0,l.kt)("th",{parentName:"tr",align:null},"pairing"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","377"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000001"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","381"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000010"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000011"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000012")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bn254"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000020"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000021"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bw6","_","761"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000030"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000031"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000032")))),(0,l.kt)("p",null,"Megaclite \u7684\u5bf9\u5e94\u63a5\u53e3\u901a\u8fc7\u6761\u4ef6\u7f16\u8bd1\u6765\u652f\u6301(\u4ece ink! \u5408\u7ea6\u4e2d\u8c03\u7528)chain extension \u6216\u76f4\u63a5\u6267\u884c\u76f8\u5173\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'//! https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/lib.rs\n/// Call curve functions using chain extensions\n#[cfg(feature = "ink")]\npub fn call(func_id: u32, input: &[u8]) -> Result<Vec<u8>> {\n    Ok(ink_env::call_chain_extension(func_id, &Vec::from(input))?)\n}\n\n/// Call curve functions directly\n#[cfg(not(feature = "ink"))]\npub fn call(func_id: u32, input: &[u8]) -> Result<Vec<u8>> {\n    Ok(match func_id {\n        0x01000000 => <ark_bls12_377::Bls12_377 as CurveBasicOperations>::add(input),\n        0x01000010 => <ark_bls12_381::Bls12_381 as CurveBasicOperations>::add(input),\n        0x01000020 => <ark_bn254::Bn254 as CurveBasicOperations>::add(input),\n        0x01000030 => <ark_bw6_761::BW6_761 as CurveBasicOperations>::add(input),\n        0x01000001 => <ark_bls12_377::Bls12_377 as CurveBasicOperations>::mul(input),\n        0x01000011 => <ark_bls12_381::Bls12_381 as CurveBasicOperations>::mul(input),\n        0x01000021 => <ark_bn254::Bn254 as CurveBasicOperations>::mul(input),\n        0x01000031 => <ark_bw6_761::BW6_761 as CurveBasicOperations>::mul(input),\n        0x01000002 => <ark_bls12_377::Bls12_377 as CurveBasicOperations>::pairings(input).map(b2b),\n        0x01000012 => <ark_bls12_381::Bls12_381 as CurveBasicOperations>::pairings(input).map(b2b),\n        0x01000022 => <ark_bn254::Bn254 as CurveBasicOperations>::pairings(input).map(b2b),\n        0x01000032 => <ark_bw6_761::BW6_761 as CurveBasicOperations>::pairings(input).map(b2b),\n        _ => Err(Error::new(ErrorKind::Other, "Invalid function id").into()),\n    }?)\n}\n')),(0,l.kt)("h3",{id:"32-\u5728-ink-\u5408\u7ea6\u4e2d\u8c03\u7528\u94fe\u4e0a\u7684-megaclite-\u5b9e\u73b0\u7b80\u5355\u7684-groth16-verifier"},"3.2 \u5728 ink! \u5408\u7ea6\u4e2d\u8c03\u7528\u94fe\u4e0a\u7684 megaclite \u5b9e\u73b0\u7b80\u5355\u7684 Groth16 Verifier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/metis/tree/master/groth16/lib.rs"},"https://github.com/patractlabs/metis/tree/master/groth16/lib.rs"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies.curve]\npackage = "megaclite-arkworks"\ngit = "https://github.com/patractlabs/megaclite"\nfeatures = [ "ink" ]\n')),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ink")," feautre \u5f00\u542f megaclite \u7684 chain extension \u63a5\u53e3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// ink! contract\n#[ink(message)]\npub fn bls12_377_verify(\n    &self,\n    vk_gamma_abc: Vec<u8>,\n    vk: Vec<u8>,\n    proof: Vec<u8>,\n    public_inputs: Vec<Vec<u8>>,\n) -> bool {\n    if let Ok(res) = groth16::verify::<Bls12_377>(&vk_gamma_abc, &vk, &proof, &public_inputs) {\n        res\n    } else {\n        false\n    }\n}\n\n")),(0,l.kt)("h2",{id:"33-benchmarks"},"3.3 Benchmarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/19a1fb3a21e04a5e14b33a0f25c6f10e059cc6ea/pallets/template/src/benchmarking.rs#L68"},"https://github.com/patractlabs/jupiter/blob/19a1fb3a21e04a5e14b33a0f25c6f10e059cc6ea/pallets/template/src/benchmarking.rs#L68"))),(0,l.kt)("h3",{id:"331-building"},"3.3.1 Building"),(0,l.kt)("p",null,"Build jupiter \u529e\u6cd5\u4e0e 2.3.1 \u4e2d\u76f8\u540c\uff0c\u4f46\u5728\u6b64\u6211\u4eec\u9700\u8981\u4f20\u9012 ",(0,l.kt)("inlineCode",{parentName:"p"},"groth16")," \u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts/benchmark.sh")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# 1. Under the jupiter repo\n# 2. Has compiled the release version jupiter-dev\n./target/benchmark.sh groth16\n")),(0,l.kt)("h3",{id:"332-mimc-based-groth16-verify-bench-result"},"3.3.2 MiMC-Based Groth16 Verify Bench Result"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mimc rounds : 322")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Curve"),(0,l.kt)("th",{parentName:"tr",align:null},"Native Time(\xb5s)"),(0,l.kt)("th",{parentName:"tr",align:null},"Wasm Time(\xb5s)"),(0,l.kt)("th",{parentName:"tr",align:null},"Speed(Native/Wasm)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","377"),(0,l.kt)("td",{parentName:"tr",align:null},"40860"),(0,l.kt)("td",{parentName:"tr",align:null},"60550"),(0,l.kt)("td",{parentName:"tr",align:null},"~1.5x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","381"),(0,l.kt)("td",{parentName:"tr",align:null},"39120"),(0,l.kt)("td",{parentName:"tr",align:null},"58400"),(0,l.kt)("td",{parentName:"tr",align:null},"~1.5x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bn254"),(0,l.kt)("td",{parentName:"tr",align:null},"30760"),(0,l.kt)("td",{parentName:"tr",align:null},"36800"),(0,l.kt)("td",{parentName:"tr",align:null},"~1.2x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bw6","_","761"),(0,l.kt)("td",{parentName:"tr",align:null},"63798"),(0,l.kt)("td",{parentName:"tr",align:null},"172900"),(0,l.kt)("td",{parentName:"tr",align:null},"~2.7x")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: \u6b64\u5904\u7684 MiMC-Based Groth16 Verify \u7684\u5b9e\u73b0\u4e3a\uff0c\u5728\u5408\u7ea6\u4e2d\u5f15\u5165 megaclite \u4e2d\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 chain extension \u8fd0\u884c add\uff0cmul\uff0cpairing \u7684 verify \u51fd\u6570\uff0c\u6d4b\u8bd5\u5408\u7ea6\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/blob/master/groth16/lib.rs"},"https://github.com/patractlabs/metis/blob/master/groth16/lib.rs")," ")),(0,l.kt)("p",null,"\u6839\u636e MiMC Groth16 Verifiy \u7684\u6d4b\u8bd5\u7ed3\u679c\u6765\u770b\uff0c\u4e24\u8005\u7684\u8fd0\u884c\u65f6\u95f4\u5dee\u522b\u4e0d\u5927\uff0c\u800c\u5728\u5b9e\u73b0\u4e0a Wasm  \u7248\u672c\u4e0d\u9700\u8981\u4fee\u6539 Host Call\uff0c\u56e0\u6b64 megaclite \u540e\u7eed\u5c06\u5ef6\u7eed\u5728 wasm \u5c42\u7684\u4fee\u6539\uff0c\u6682\u505c native \u5c42\u7684\u5f00\u53d1\u65b9\u5411\u3002\u5e76\u4e14\uff0cJupiter \u5c06\u5728 runtime \u548c ink! \u96c6\u6210 megaclite\uff0c\u63d0\u4f9b\u516c\u5171\u7684\u7ebf\u4e0a\u6d4b\u8bd5\u73af\u5883\u3002"),(0,l.kt)("h2",{id:"4-more-libraries-built-for-ink"},"4. More Libraries built for ink!"),(0,l.kt)("h3",{id:"41-mimc-based-merkle-tree-\u7684\u5b9e\u73b0"},"4.1 mimc-based merkle tree \u7684\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MiMC \u5b9e\u73b0\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/merkle-tree/src/mimc.rs"},"https://github.com/patractlabs/megaclite/blob/master/crates/merkle-tree/src/mimc.rs")),(0,l.kt)("li",{parentName:"ul"},"Merkle Tree \u5b9e\u73b0: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/merkle-tree/src/merkle_tree.rs"},"https://github.com/patractlabs/megaclite/blob/master/crates/merkle-tree/src/merkle_tree.rs"))),(0,l.kt)("p",null,"mimc \u662f\u5728 alt","_","bn128 \u8fd9\u6761\u692d\u5706\u66f2\u7ebf\u4e0a\u5b9e\u73b0\u4e86\u57fa\u4e8e Field \u7684\u4e00\u79cd hash \u7b97\u6cd5,\u6240\u4ee5\u5b83\u5728\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684 prove system (\u57fa\u4e8e alt","_","bn128 \u66f2\u7ebf)\u91cc\u7684\u7535\u8def\u5b9e\u73b0\u5341\u5206\u53cb\u597d."),(0,l.kt)("p",null,"mimc \u5b9e\u73b0\u5982\u4e0b\u56fe\u6240\u793a, \u91c7\u7528 Sponge mode, Sponge mode instantiated by MiMC permutation with a fixed key"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Rg2zjPW.png",alt:null})),(0,l.kt)("p",null,"\u4ee3\u7801\u5b9e\u73b0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let mut r = in_k.clone();\nfor i in 0..in_x.len() {\n    r = &r + in_x[i] + mimc_pe7(&mut in_x[i], &r, &in_seed, round_count) % &*SCALAR_FIELD;\n}\n")),(0,l.kt)("p",null,"\u5728 snark setting \u4e2d, MiMC-n/n block-cipher \u4e00\u822c\u91c7\u7528 Even-Mansour mode"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/aCExnKY.png",alt:null})),(0,l.kt)("p",null,"Our MiMC-p/p  with exponent of 7, so:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/fqD85VQ.png",alt:null})),(0,l.kt)("p",null,"\u4ee3\u7801\u5b9e\u73b0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let mut keccak = Keccak::v256();\nlet mut received = [0u8; 32];\nkeccak.update(&c.to_bytes_be()[..]);\nkeccak.finalize(&mut received);\nc = U256::from_bytes_be(&received) % &*SCALAR_FIELD;\n\n// x = (x + c_i + k)^7\nt = &in_x + &c % &*SCALAR_FIELD + in_k % &*SCALAR_FIELD; // t = x + c_i + k\na = t.mulmod(&t, &*SCALAR_FIELD); // t^2\na = a.mulmod(&a, &*SCALAR_FIELD).mulmod(&a, &*SCALAR_FIELD);\nin_x = a.mulmod(&t, &*SCALAR_FIELD); // t^7\n")),(0,l.kt)("h3",{id:"42-eddsa-verifier-\u7684\u5b9e\u73b0"},"4.2 eddsa verifier \u7684\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/tree/master/crates/eddsa"},"https://github.com/patractlabs/megaclite/tree/master/crates/eddsa"))),(0,l.kt)("p",null,"\u8fd9\u91cc eddsa \u7b7e\u540d\u7b97\u6cd5\u662f\u5728",(0,l.kt)("a",{parentName:"p",href:"https://z.cash/technology/jubjub/"},"JubJub curve"),"\u4e0a\u5b9e\u73b0\u7684:"),(0,l.kt)("p",null,"Jubjub is the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Twisted_Edwards_curve"},"twisted Edwards curve")," ",(0,l.kt)("inlineCode",{parentName:"p"},"-u^2 + v^2 = 1 + d.u^2.v^2")," of rational points over ",(0,l.kt)("inlineCode",{parentName:"p"},"GF(q)")," with a subgroup of prime order ",(0,l.kt)("inlineCode",{parentName:"p"},"r"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"q = 21888242871839275222246405745257275088548364400416034343698204186575808495617\nr = 21888242871839275222246405745257275088696311157297823662689037894645226208583\n")),(0,l.kt)("p",null,"The choice of ",(0,l.kt)("inlineCode",{parentName:"p"},"GF(q)")," is made to be the scalar field of the Bn254 elliptic curve construction."),(0,l.kt)("p",null,"\u4e14\u8fd8\u5b9e\u73b0\u4e86 ETEC(Extened Twisted Edwards coordinate), \u5728 Extended \u5750\u6807\u7cfb\u4e0b, \u53ef\u63d0\u4f9b\u66f4\u5feb\u7684\u52a0\u6cd5\u8fd0\u7b97\uff0c\u5728 Projective \u5750\u6807\u7cfb\u4e0b\uff0c\u53ef\u907f\u514d\u6c42\u9006\u8fd0\u7b97, \u63d0\u4f9b\u66f4\u5feb\u7684 double \u8fd0\u7b97\u3002"),(0,l.kt)("p",null,"eddsa \u7b7e\u540d\u7684\u6838\u5fc3\u9a8c\u8bc1\u7b97\u6cd5\u5982\u4e0b\u6240\u793a:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/clDEIqR.png",alt:null})),(0,l.kt)("p",null,"\u5176\u4e2d(s,R)\u662f\u7b7e\u540d, Pk \u662f\u516c\u94a5, h \u662f message \u7684 hash \u503c,\u56e0\u4e3a R \u901a\u8fc7\u79c1\u94a5\u548c message \u54c8\u5e0c\u4ea7\u751f\u7684, \u6240\u4ee5 eddsa \u4e5f\u662f\u4e00\u79cd\u786e\u5b9a\u6027\u7b7e\u540d\u7b97\u6cd5."),(0,l.kt)("p",null,"\u6838\u5fc3\u9a8c\u8bc1\u4ee3\u7801\u5b9e\u73b0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"if let Some(lhs) = scalar_mult(GENERATE[0].clone(), GENERATE[1].clone(), s) {\n   let t = hash_to_u256(&input);\n   if let Some((pk_x, pk_y)) = scalar_mult(public_key[0].clone(), public_key[1].clone(), t) {\n       let [r_x, r_y] = r;\n       let etec_point = etec_add(\n           &point_to_etec(r_x, r_y, Q.clone()),\n           &point_to_etec(pk_x, pk_y, Q.clone()),\n           &*Q,\n           &JUBJUB_A.into(),\n           &JUBJUB_D.into(),\n       );\n       if let Some(rhs) = etec_to_point(etec_point, Q.clone()) {\n           return lhs == rhs;\n       }\n   }\n}\nfalse\n")),(0,l.kt)("h2",{id:"5-\u56de\u987e\u9a8c\u8bc1\u4fe1\u606f"},"5. \u56de\u987e\u9a8c\u8bc1\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"Provide more on-chain underlying cryptography support than Ethereum. The current stage includes two curves : alt_bn128 and bls12_381")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"Integrate ADD, MUL, Paring units under Runtime layer, and provide them to Runtime applications through Runtime-Interface, and further provide them to Wasm contract applications through Contract-Seal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"Through Pallet and Ink! contract libraries, providing more higher-level verification and crypto tools than Ethereum, improving execution efficiency and reducing development costs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"Provide off-chain cryptography toolbox through Rust SDK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"Provide typical sample applications through Ink! sample contracts"))))}o.isMDXComponent=!0}}]);