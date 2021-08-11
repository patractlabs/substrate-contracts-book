(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{579:function(a,e,l){"use strict";l.r(e);var r=l(6),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h1",{attrs:{id:"设计简述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设计简述"}},[a._v("#")]),a._v(" 设计简述")]),a._v(" "),l("p",[a._v("Elara有长期的开发迭代规划和运维目标，为的是能够支撑Polkadot生态开发者从万+级别到亿+级别的持续跃迁。Elara的核心是一套高性能、高可用和高扩展的分布式架构。与其他提供 Node API Service的项目有显著区别：")]),a._v(" "),l("ol",[l("li",[l("p",[a._v("Elara的后端架构不是简单但低效的NodePool+LoadBalancer。这种方案无法承担大规模应用和流量的冲击，无法及时扩展，因为Node会成为体系中的显著瓶颈。而在Elara的架构中，只需要很少数量的Node提供基础数据源。Elara通过分布式架构的设计、多服务的融合以及对请求访问路径的极致优化，来支撑海量用户的访问。NodePool方案的短期开发成本较低，但长期服务用户的单位成本却极高。反过来，Elara在初期的技术成本投入较高，但长期可以极大降低服务用户的单位成本，同时还可以保障高服务质量。")])]),a._v(" "),l("li",[l("p",[a._v('Elara专注于为生态开发者提供极简的全功能体验。我们提供的是极其“薄薄”的一层服务，希望开发者感受不到Elara的存在。Elara提供的API服务不仅包括节点的所有功能，也包括了历史状态数据功能，还包括项目的请求统计仪表盘等功能，给开发者提供的服务能力远大于自己部署节点所提供的能力。所以，在这个目标之下，"一键节点部署"之类的功能就显得非常多余，开发者只应该专注于自己的业务应用。')])]),a._v(" "),l("li",[l("p",[a._v("Elara是一个开放的平台，秉持社区共建的原则。在接下来的版本迭代中，我们会陆续接入更多主网，还会建立一套Polkadot生态主链和平行链自动化接入的流程规范。")])])]),a._v(" "),l("p",[a._v("在整体设计上，Elara设计成微服务的架构体系，由多个可独立进行扩展的微服务组成。所有的微服务启动后都以独立进程运行，所以在将来可以对单独的微服务进行平行扩容、重构、替换实现等升级。其中用到"),l("code",[a._v("Redis")]),a._v("作为数据高速访问的存储容器,和使用"),l("code",[a._v("kafka")]),a._v("做架构解耦。将来可以很容易地在此设计的基础上，添加更多复杂的功能模块，让Elara发挥更强大的效果。")]),a._v(" "),l("p",[a._v("Elara的核心架构大概如下所示")]),a._v(" "),l("p",[l("img",{attrs:{src:"https://user-images.githubusercontent.com/21072025/111115173-35923280-859f-11eb-8172-737c07aab4e7.png",alt:"elara"}})])])}),[],!1,null,null,null);e.default=t.exports}}]);