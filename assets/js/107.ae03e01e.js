(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{676:function(t,s,e){"use strict";e.r(s);var a=e(6),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("h2",{attrs:{id:"redspot-s-architecture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redspot-s-architecture"}},[t._v("#")]),t._v(" Redspot's architecture")]),t._v(" "),e("p",[t._v("Redspot is designed around the concept of Tasks and Plug-ins. Most of Redspot's functions come from plug-ins, and you can choose which plug-in you want to use according to your needs.")]),t._v(" "),e("h3",{attrs:{id:"tasks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[t._v("#")]),t._v(" Tasks")]),t._v(" "),e("p",[t._v("Every time you run Redspot from the terminal, you are running tasks. For example, executing the "),e("code",[t._v("npx redspot compile")]),t._v(" command is to run the compilation task. To view the tasks currently available in the project, run the "),e("code",[t._v("npx redspot")]),t._v("  command. You can view the help information of any task by running "),e("code",[t._v("npx redspot help [task]")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"plug-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plug-in"}},[t._v("#")]),t._v(" Plug-in")]),t._v(" "),e("p",[t._v("Redspot installs some plug-ins by default. If you need to install or upgrade them manually, please refer to the following steps.")]),t._v(" "),e("p",[t._v("For example, install @redspot/patract and @redspot/chai plug-ins.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Execute the following command in the project root directory.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @redspot/patract @redspot/chai\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Import the plug-in in the redspot configuration file redspot.config.js in the project directory.")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RedspotUserConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redspot/types'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@redspot/patract'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@redspot/chai'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" RedspotUserConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);