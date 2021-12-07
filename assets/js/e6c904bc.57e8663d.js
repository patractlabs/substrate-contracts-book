"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[1022],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9722:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),o=t(3366),l=(t(7294),t(3905)),r=["components"],i={},s="Timelock Controller",c={unversionedId:"metis/guides/governance/timelock-controller",id:"metis/guides/governance/timelock-controller",isDocsHomePage:!1,title:"Timelock Controller",description:"Contract module which acts as a timelocked controller. When set as the",source:"@site/docs/metis/guides/governance/timelock-controller.md",sourceDirName:"metis/guides/governance",slug:"/metis/guides/governance/timelock-controller",permalink:"/substrate-contracts-book/metis/guides/governance/timelock-controller",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/metis/guides/governance/timelock-controller.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Access Control Enumerable",permalink:"/substrate-contracts-book/metis/guides/access-control/access-control-enumerable"},next:{title:"Pausable",permalink:"/substrate-contracts-book/metis/guides/security/pausable"}},u=[{value:"Dependency",id:"dependency",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Mutable Messages",id:"mutable-messages",children:[{value:"schedule",id:"schedule",children:[]},{value:"cancel",id:"cancel",children:[]},{value:"execute",id:"execute",children:[]}]},{value:"Immutable Messages",id:"immutable-messages",children:[{value:"is_operation",id:"is_operation",children:[]},{value:"is_operation_pending",id:"is_operation_pending",children:[]},{value:"is_operation_ready",id:"is_operation_ready",children:[]},{value:"is_operation_done",id:"is_operation_done",children:[]},{value:"get_timestamp",id:"get_timestamp",children:[]},{value:"get_min_delay",id:"get_min_delay",children:[]},{value:"hash_operation",id:"hash_operation",children:[]}]},{value:"Internal Functions",id:"internal-functions",children:[{value:"ensure_only_role_or_open_role",id:"ensure_only_role_or_open_role",children:[]}]},{value:"Events",id:"events",children:[{value:"CallScheduled",id:"callscheduled",children:[]},{value:"CallExecuted",id:"callexecuted",children:[]},{value:"Cancelled",id:"cancelled",children:[]},{value:"MinDelayChange",id:"mindelaychange",children:[]}]},{value:"Usage Example",id:"usage-example",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"timelock-controller"},"Timelock Controller"),(0,l.kt)("p",null,"Contract module which acts as a timelocked controller. When set as the\nowner of an ",(0,l.kt)("inlineCode",{parentName:"p"},"Ownable")," smart contract, it enforces a timelock on all\n",(0,l.kt)("inlineCode",{parentName:"p"},"enuser_caller_owner")," maintenance operations. This gives time for users of the\ncontrolled contract to exit before a potentially dangerous maintenance\noperation is applied."),(0,l.kt)("p",null,"By default, this contract is self administered, meaning administration tasks\nhave to go through the timelock process. The proposer (resp executor) role\nis in charge of proposing (resp executing) operations. A common use case is\nto position this ",(0,l.kt)("inlineCode",{parentName:"p"},"TimelockController")," as the owner of a smart contract, with\na multisig or a DAO as the sole proposer."),(0,l.kt)("h2",{id:"dependency"},"Dependency"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'metis_timelock_controller   = { git = "https://github.com/patractlabs/metis", default-features = false }\n')),(0,l.kt)("h2",{id:"storage"},"Storage"),(0,l.kt)("p",null,"The storages of timelock controller contains two variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Data<E: Env> {\n    /// min delay for controller\n    pub min_delay: Lazy<E::Timestamp>,\n\n    pub timestamps: StorageHashMap<[u8; 32], E::Timestamp>,\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[import(timelock_controller, access_control)]\npub struct TimelockController {\n    timelock_controller: timelock_controller::Data<TimelockController>,\n    access_control: access_control::Data<TimelockController>,\n}\n")),(0,l.kt)("h2",{id:"mutable-messages"},"Mutable Messages"),(0,l.kt)("h3",{id:"schedule"},"schedule"),(0,l.kt)("p",null,"Schedule an operation containing a single transaction."),(0,l.kt)("p",null,"Emits a ",(0,l.kt)("inlineCode",{parentName:"p"},"CallScheduled")," event."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the caller must have the 'proposer' role.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn schedule(\n        &mut self,\n        target: E::AccountId,\n        value: E::Balance,\n        data: Vec<u8>,\n        predecessor: Option<[u8; 32]>,\n        salt: [u8; 32],\n        delay: E::Timestamp,\n    ) {\n        access_control::Impl::ensure_caller_role(self, PROPOSER_ROLE);\n\n        let id = self.hash_operation(&target, &value, &data, &predecessor, &salt);\n\n        self._schedule(id, delay);\n\n        self.emit_event_call_scheduled(id, target, value, data, predecessor, delay);\n    }\n")),(0,l.kt)("h3",{id:"cancel"},"cancel"),(0,l.kt)("p",null,"Cancel an operation."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the caller must have the 'proposer' role.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'    fn cancel(&mut self, id: [u8; 32]) {\n        access_control::Impl::ensure_caller_role(self, PROPOSER_ROLE);\n\n        assert!(\n            self.is_operation_pending(&id),\n            "TimelockController: operation cannot be cancelled"\n        );\n        Storage::<E, Data<E>>::get_mut(self).timestamps.take(&id);\n\n        self.emit_event_cancelled(id);\n    }\n')),(0,l.kt)("h3",{id:"execute"},"execute"),(0,l.kt)("p",null,"Execute an (ready) operation containing a single transaction."),(0,l.kt)("p",null,"Emits a ",(0,l.kt)("inlineCode",{parentName:"p"},"CallExecuted")," event."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the caller must have the 'executor' role.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn execute(\n        &mut self,\n        target: E::AccountId,\n        value: E::Balance,\n        data: Vec<u8>,\n        predecessor: Option<[u8; 32]>,\n        salt: [u8; 32],\n    ) {\n        self.ensure_only_role_or_open_role(EXECUTOR_ROLE);\n\n        let id = self.hash_operation(&target, &value, &data, &predecessor, &salt);\n\n        self._before_call(predecessor);\n        self._call(id, target, value, data);\n        self._after_call(id);\n    }\n")),(0,l.kt)("h2",{id:"immutable-messages"},"Immutable Messages"),(0,l.kt)("h3",{id:"is_operation"},"is_operation"),(0,l.kt)("p",null,"Returns whether an id correspond to a registered operation. This includes both Pending, Ready and Done operations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn is_operation(&self, id: &[u8; 32]) -> bool {\n        self.get_timestamp(id) > E::Timestamp::from(0_u8)\n    }\n")),(0,l.kt)("h3",{id:"is_operation_pending"},"is_operation_pending"),(0,l.kt)("p",null,"Returns whether an operation is pending or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn is_operation_pending(&self, id: &[u8; 32]) -> bool {\n        self.get_timestamp(id) > E::Timestamp::from(_DONE_TIMESTAMP)\n    }\n")),(0,l.kt)("h3",{id:"is_operation_ready"},"is_operation_ready"),(0,l.kt)("p",null,"Returns whether an operation is ready or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn is_operation_ready(&self, id: &[u8; 32]) -> bool {\n        let timestamp = self.get_timestamp(id);\n        timestamp > E::Timestamp::from(_DONE_TIMESTAMP)\n            && timestamp <= Self::block_timestamp()\n    }\n")),(0,l.kt)("h3",{id:"is_operation_done"},"is_operation_done"),(0,l.kt)("p",null,"Returns whether an operation is done or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn is_operation_done(&self, id: &[u8; 32]) -> bool {\n        self.get_timestamp(id) == E::Timestamp::from(_DONE_TIMESTAMP)\n    }\n")),(0,l.kt)("h3",{id:"get_timestamp"},"get_timestamp"),(0,l.kt)("p",null,"Returns the timestamp at with an operation becomes ready (0 for unset operations, 1 for done operations)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn get_timestamp(&self, id: &[u8; 32]) -> E::Timestamp {\n        *Storage::<E, Data<E>>::get(self)\n            .timestamps\n            .get(id)\n            .unwrap_or(&E::Timestamp::from(0_u8))\n    }\n")),(0,l.kt)("h3",{id:"get_min_delay"},"get_min_delay"),(0,l.kt)("p",null,"Returns the minimum delay for an operation to become valid."),(0,l.kt)("p",null,"This value can be changed by executing an operation that calls ",(0,l.kt)("inlineCode",{parentName:"p"},"update_delay"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn get_min_delay(&self) -> E::Timestamp {\n        *Storage::<E, Data<E>>::get(self).min_delay\n    }\n")),(0,l.kt)("h3",{id:"hash_operation"},"hash_operation"),(0,l.kt)("p",null,"Returns the identifier of an operation containing a single transaction."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: This ",(0,l.kt)("inlineCode",{parentName:"p"},"hash = Blake2x256(target + value + data + predecessor + salt)"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn hash_operation(\n        &self,\n        target: &E::AccountId,\n        value: &E::Balance,\n        data: &Vec<u8>,\n        predecessor: &Option<[u8; 32]>,\n        salt: &[u8; 32],\n    ) -> [u8; 32] {\n        // for target + value + data + predecessor + salt\n        let mut hash_data: Vec<u8> = Vec::with_capacity(128 + data.len());\n\n        hash_data.append(&mut target.encode());\n        hash_data.append(&mut value.encode());\n        hash_data.append(&mut data.clone());\n        hash_data.append(&mut predecessor.encode());\n        for s in salt.into_iter() {\n            hash_data.push(s.clone());\n        }\n\n        Self::hash_bytes::<Blake2x256>(&hash_data)\n    }\n")),(0,l.kt)("h2",{id:"internal-functions"},"Internal Functions"),(0,l.kt)("h3",{id:"ensure_only_role_or_open_role"},"ensure_only_role_or_open_role"),(0,l.kt)("p",null,"To make a function callable only by a certain role. In\naddition to checking the sender's role, ",(0,l.kt)("inlineCode",{parentName:"p"},"AccountId::default()")," 's role is also\nconsidered. Granting a role to ",(0,l.kt)("inlineCode",{parentName:"p"},"AccountId::default()")," is equivalent to enabling\nthis role for everyone."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    fn ensure_only_role_or_open_role(&self, role: RoleId) {\n        if !access_control::Impl::has_role(self, role, E::AccountId::default()) {\n            access_control::Impl::ensure_caller_role(self, role);\n        }\n    }\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"callscheduled"},"CallScheduled"),(0,l.kt)("p",null,"Emitted when a call is scheduled as part of operation ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct CallScheduled {\n        #[ink(topic)]\n        pub id: [u8; 32],\n        pub target: AccountId,\n        pub value: Balance,\n        pub data: Vec<u8>,\n        pub predecessor: Option<[u8; 32]>,\n        pub delay: Timestamp,\n    }\n")),(0,l.kt)("h3",{id:"callexecuted"},"CallExecuted"),(0,l.kt)("p",null,"Emitted when a call is performed as part of operation ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct CallExecuted {\n        #[ink(topic)]\n        pub id: [u8; 32],\n        pub target: AccountId,\n        pub value: Balance,\n        pub data: Vec<u8>,\n    }\n")),(0,l.kt)("h3",{id:"cancelled"},"Cancelled"),(0,l.kt)("p",null,"Emitted when operation ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," is cancelled."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct Cancelled {\n        #[ink(topic)]\n        pub id: [u8; 32],\n    }\n")),(0,l.kt)("h3",{id:"mindelaychange"},"MinDelayChange"),(0,l.kt)("p",null,"Emitted when the minimum delay for future operations is modified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct MinDelayChange {\n        pub old_duration: Timestamp,\n        pub new_duration: Timestamp,\n    }\n")),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"To make a timelock controller contract, we should import timelock_controller at first."),(0,l.kt)("p",null,"Note the ",(0,l.kt)("inlineCode",{parentName:"p"},"timelock_controller")," component is based on ",(0,l.kt)("inlineCode",{parentName:"p"},"access_control")," component:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[metis_lang::contract]\npub mod contract {\n    use access_control::RoleId;\n    use ink_prelude::vec::Vec;\n    use metis_access_control as access_control;\n    use metis_lang::{\n        import,\n        metis,\n    };\n    use metis_timelock_controller as timelock_controller;\n    pub use metis_timelock_controller::{\n        Error,\n        Result,\n    };\n\n    #[ink(storage)]\n    #[import(timelock_controller, access_control)]\n    pub struct TimelockController {\n        timelock_controller: timelock_controller::Data<TimelockController>,\n        access_control: access_control::Data<TimelockController>,\n    }\n\n    // other logic for\n}\n")),(0,l.kt)("p",null,"Then implement the component:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'    #[cfg(not(feature = "ink-as-dependency"))]\n    impl timelock_controller::Impl<TimelockController> for TimelockController {}\n')),(0,l.kt)("p",null,"Then add the event for timelock_controller, we add the events for the ",(0,l.kt)("inlineCode",{parentName:"p"},"access_control")," component also:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    /// Emitted when a call is scheduled as part of operation `id`.\n    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct CallScheduled {\n        #[ink(topic)]\n        pub id: [u8; 32],\n        pub target: AccountId,\n        pub value: Balance,\n        pub data: Vec<u8>,\n        pub predecessor: Option<[u8; 32]>,\n        pub delay: Timestamp,\n    }\n\n    /// Emitted when a call is performed as part of operation `id`.\n    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct CallExecuted {\n        #[ink(topic)]\n        pub id: [u8; 32],\n        pub target: AccountId,\n        pub value: Balance,\n        pub data: Vec<u8>,\n    }\n\n    /// Emitted when operation `id` is cancelled.\n    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct Cancelled {\n        #[ink(topic)]\n        pub id: [u8; 32],\n    }\n\n    /// Emitted when the minimum delay for future operations is modified.\n    #[ink(event)]\n    #[metis(timelock_controller)]\n    pub struct MinDelayChange {\n        pub old_duration: Timestamp,\n        pub new_duration: Timestamp,\n    }\n\n    /// Emitted when `new_admin_role` is set as ``role``'s\n    /// admin role, replacing `previous_admin_role`\n    #[ink(event)]\n    #[metis(access_control)]\n    pub struct RoleAdminChanged {\n        #[ink(topic)]\n        pub role: RoleId,\n        #[ink(topic)]\n        pub previous_admin_role: Option<RoleId>,\n        #[ink(topic)]\n        pub new_admin_role: RoleId,\n    }\n\n    /// Emitted when `account` is granted `role`.\n    ///\n    /// `sender` is the account that originated the contract call,\n    /// an admin role bearer except when using {_setupRole}.\n    #[ink(event)]\n    #[metis(access_control)]\n    pub struct RoleGranted {\n        #[ink(topic)]\n        pub role: RoleId,\n        #[ink(topic)]\n        pub account: AccountId,\n        #[ink(topic)]\n        pub sender: AccountId,\n    }\n\n    /// Emitted when `account` is revoked `role`.\n    ///\n    /// `sender` is the account that originated the contract call:\n    ///   - if using `revoke_role`, it is the admin role bearer\n    ///   - if using `renounce_role`, it is the role bearer (i.e. `account`)\n    #[ink(event)]\n    #[metis(access_control)]\n    pub struct RoleRevoked {\n        #[ink(topic)]\n        pub role: RoleId,\n        #[ink(topic)]\n        pub account: AccountId,\n        #[ink(topic)]\n        pub sender: AccountId,\n    }\n")),(0,l.kt)("p",null,"impl the constructor for contract:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    impl TimelockController {\n        #[ink(constructor)]\n        pub fn new(\n            min_delay: Timestamp,\n            proposers: Vec<AccountId>,\n            executors: Vec<AccountId>,\n        ) -> Self {\n            let mut instance = Self {\n                timelock_controller: timelock_controller::Data::new(),\n                access_control: access_control::Data::new(),\n            };\n\n            timelock_controller::Impl::init(\n                &mut instance,\n                min_delay,\n                proposers,\n                executors,\n            );\n            instance\n        }\n    }\n")),(0,l.kt)("p",null,"Then implement the messages for contract."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: the ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," message should be ",(0,l.kt)("inlineCode",{parentName:"p"},"payable"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    impl TimelockController{\n        /// Returns `true` if `account` has been granted `role`.\n        #[ink(message)]\n        pub fn has_role(&self, role: RoleId, account: AccountId) -> bool {\n            access_control::Impl::has_role(self, role, account)\n        }\n\n        /// @dev Returns the admin role that controls `role`. See {grant_role} and\n        /// {revoke_role}.\n        ///\n        /// To change a role's admin, use {_setRoleAdmin}.\n        #[ink(message)]\n        pub fn get_role_admin(&self, role: RoleId) -> Option<RoleId> {\n            access_control::Impl::get_role_admin(self, role)\n        }\n\n        /// @dev Grants `role` to `account`.\n        ///\n        /// If `account` had not been already granted `role`, emits a {RoleGranted}\n        /// event.\n        ///\n        /// Requirements:\n        ///\n        /// - the caller must have ``role``'s admin role.\n        #[ink(message)]\n        pub fn grant_role(&mut self, role: RoleId, account: AccountId) {\n            access_control::Impl::grant_role(self, role, account)\n        }\n\n        /// @dev Revokes `role` from `account`.\n        ///\n        /// If `account` had been granted `role`, emits a {RoleRevoked} event.\n        ///\n        /// Requirements:\n        ///\n        /// - the caller must have ``role``'s admin role.\n        #[ink(message)]\n        pub fn revoke_role(&mut self, role: RoleId, account: AccountId) {\n            access_control::Impl::revoke_role(self, role, account)\n        }\n\n        /// @dev Revokes `role` from the calling account.\n        ///\n        /// Roles are often managed via {grant_role} and {revoke_role}: this function's\n        /// purpose is to provide a mechanism for accounts to lose their privileges\n        /// if they are compromised (such as when a trusted device is misplaced).\n        ///\n        /// If the calling account had been granted `role`, emits a {RoleRevoked}\n        /// event.\n        ///\n        /// Requirements:\n        ///\n        /// - the caller must be `account`.\n        #[ink(message)]\n        pub fn renounce_role(&mut self, role: RoleId, account: AccountId) {\n            access_control::Impl::renounce_role(self, role, account)\n        }\n\n        /// Returns whether an id correspond to a registered operation. This\n        /// includes both Pending, Ready and Done operations.\n        #[ink(message)]\n        pub fn is_operation(&self, id: [u8; 32]) -> bool {\n            timelock_controller::Impl::is_operation(self, &id)\n        }\n\n        /// Returns whether an operation is pending or not.\n        #[ink(message)]\n        pub fn is_operation_pending(&self, id: [u8; 32]) -> bool {\n            timelock_controller::Impl::is_operation_pending(self, &id)\n        }\n\n        /// Returns whether an operation is ready or not.\n        #[ink(message)]\n        pub fn is_operation_ready(&self, id: [u8; 32]) -> bool {\n            timelock_controller::Impl::is_operation_ready(self, &id)\n        }\n\n        /// Returns whether an operation is done or not.\n        #[ink(message)]\n        pub fn is_operation_done(&self, id: [u8; 32]) -> bool {\n            timelock_controller::Impl::is_operation_done(self, &id)\n        }\n\n        /// Returns the timestamp at with an operation becomes ready (0 for\n        /// unset operations, 1 for done operations).\n        #[ink(message)]\n        pub fn get_timestamp(&self, id: [u8; 32]) -> Timestamp {\n            timelock_controller::Impl::get_timestamp(self, &id)\n        }\n\n        /// Returns the minimum delay for an operation to become valid.\n        ///\n        /// This value can be changed by executing an operation that calls `updateDelay`.\n        #[ink(message)]\n        pub fn get_min_delay(&self) -> Timestamp {\n            timelock_controller::Impl::get_min_delay(self)\n        }\n\n        /// Returns the identifier of an operation containing a single\n        /// transaction.\n        #[ink(message)]\n        pub fn hash_operation(\n            &self,\n            target: AccountId,\n            value: Balance,\n            data: Vec<u8>,\n            predecessor: Option<[u8; 32]>,\n            salt: [u8; 32],\n        ) -> [u8; 32] {\n            timelock_controller::Impl::hash_operation(\n                self,\n                &target,\n                &value,\n                &data,\n                &predecessor,\n                &salt,\n            )\n        }\n\n        /// Schedule an operation containing a single transaction.\n        ///\n        /// Emits a `CallScheduled` event.\n        ///\n        /// Requirements:\n        ///\n        /// - the caller must have the 'proposer' role.\n        #[ink(message)]\n        pub fn schedule(\n            &mut self,\n            target: AccountId,\n            value: Balance,\n            data: Vec<u8>,\n            predecessor: Option<[u8; 32]>,\n            salt: [u8; 32],\n            delay: Timestamp,\n        ) {\n            timelock_controller::Impl::schedule(\n                self,\n                target,\n                value,\n                data,\n                predecessor,\n                salt,\n                delay,\n            )\n        }\n\n        /// Cancel an operation.\n        ///\n        /// Requirements:\n        ///\n        /// - the caller must have the 'proposer' role.\n        #[ink(message)]\n        pub fn cancel(&mut self, id: [u8; 32]) {\n            timelock_controller::Impl::cancel(self, id)\n        }\n\n        /// Execute an (ready) operation containing a single transaction.\n        ///\n        /// Emits a `CallExecuted` event.\n        ///\n        /// Requirements:\n        ///\n        /// - the caller must have the 'executor' role.\n        #[ink(message, payable)]\n        pub fn execute(\n            &mut self,\n            target: AccountId,\n            value: Balance,\n            data: Vec<u8>,\n            predecessor: Option<[u8; 32]>,\n            salt: [u8; 32],\n        ) {\n            timelock_controller::Impl::execute(\n                self,\n                target,\n                value,\n                data,\n                predecessor,\n                salt,\n            )\n        }\n    }\n")),(0,l.kt)("p",null,"In the end, we can add some other messages."),(0,l.kt)("p",null,"the caller to call need impl the ",(0,l.kt)("inlineCode",{parentName:"p"},"on_call")," message:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"    impl Receiver {\n        #[ink(message, payable)]\n        pub fn on_call(\n            &mut self,\n            _operator: AccountId,\n            _data: Vec<u8>,\n        ) -> bool {\n            unimplemented!()\n        }\n    }\n")),(0,l.kt)("p",null,"like this, NOTE the ",(0,l.kt)("inlineCode",{parentName:"p"},"on_call")," should be payable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"        #[ink(message, payable)]\n        pub fn on_call(\n            &mut self,\n            operator: AccountId,\n            data: Vec<u8>,\n        ) -> bool {\n            // value to transferred_balance\n            let value = Self::env().transferred_balance();\n\n            // emit events\n            Self::env().emit_event(CallReceived {\n                operator,\n                value,\n                data,\n            });\n\n            // if return false should be error.\n            true\n        }\n")))}d.isMDXComponent=!0}}]);