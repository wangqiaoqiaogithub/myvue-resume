webpackJsonp([1],{"53Cy":function(t,n){},"6wBc":function(t,n){},"NCW/":function(t,n){},NHnr:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},i,!1,function(t){s("NCW/")},null,null).exports,o=s("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"avator"},[n("div",{staticClass:"avator_content"})])}]};var c=s("VU/8")({name:"avator",data:function(){return{}}},r,!1,function(t){s("fqVA")},"data-v-438dee25",null).exports,l={data:function(){return{}},name:"resumetop",components:{MyAvator:c}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"resumetop"},[n("div",{staticClass:"rt_content"},[n("my-avator",{staticClass:"rt_avator"}),this._v(" "),n("h1",{staticClass:"rt_title rt_percent"},[this._v("\n            前端工程师2019求职简历\n        ")])],1)])},staticRenderFns:[]};var h=s("VU/8")(l,u,!1,function(t){s("Y1Uw")},"data-v-34128328",null).exports,v={name:"contactinformation",data:function(){return{contact:[{text:"微信"},{text:"gitHub"},{text:"QQ"},{text:"联系电话"}],backimage:[{content:"/static/img/weixin.png"},{content:"/static/img/github.png"},{content:"/static/img/qq.png"},{content:"/static/img/ct_content.png"}],isActive:0,startX:0,startY:0,moveEndx:0,moveEndy:0,awactive:0}},props:{showFlag:{type:Boolean,default:!1}},created:function(){this.touch={}},methods:{bottomfold:function(){this.$emit("handleclick")},showloading:function(t){this.isActive=t},tsloading:function(t){var n=t.touches[0];this.startX=n.pageX,this.startY=n.pageY},tdloading:function(t){var n=t.changedTouches[0];this.moveEndx=n.pageX,this.moveEndy=n.pageY;var s=this.moveEndx-this.startX,e=(this.moveEndy,this.startY,{xiabiao1:0,xiabiao2:1,xiabiao3:2,xiabiao4:3});if(console.log(Math.abs(s)),Math.floor(s)){if(this.awactive=this.$refs.touchw[this.isActive].style="display: none",0===this.isActive)return this.isActive=e.xiabiao2;if(1===this.isActive)return this.isActive=e.xiabiao3;if(2===this.isActive)return this.isActive=e.xiabiao4;if(3===this.isActive)return this.isActive=e.xiabiao1;this.awactive=this.$refs.touchw[e].style="display: block"}}}},m={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("transition",{attrs:{name:"fold"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"contactinformation"},[s("div",{staticClass:"ci_main"},[s("div",{staticClass:"ci-navbar clearfix"},[s("div",{staticClass:"bf_content clearfix"},[s("ul",{staticClass:"bfc_nav"},t._l(t.contact,function(n,e){return s("li",{key:n.id,staticClass:"clearfix",class:{active:t.isActive===e},on:{click:function(n){return t.showloading(e)}}},[t._v("\n                           "+t._s(n.text)+" \n                        ")])}),0)]),t._v(" "),s("div",{staticClass:"bf_icon",on:{click:t.bottomfold}},[s("span",{staticClass:"bficon_span"},[t._v("∨")])])]),t._v(" "),s("div",{staticClass:"ci_img"},[s("ul",{staticClass:"ci_ul"},t._l(t.backimage,function(n,e){return s("li",{directives:[{name:"show",rawName:"v-show",value:e===t.isActive,expression:"index === isActive"}],key:n.id,ref:"touchw",refInFor:!0,class:{active:t.isActive===e},on:{touchstart:function(n){return n.stopPropagation(),t.tsloading(n)},touchend:t.tdloading}},[s("div",{staticClass:"ci_li",style:{backgroundImage:"url("+n.content+")"}})])}),0)])])])])},staticRenderFns:[]};var d=s("VU/8")(v,m,!1,function(t){s("ect2")},"data-v-90b92a6c",null).exports,p={data:function(){return{bannervalue:0,bannerA:[]}},props:{rbshow:{type:Boolean,default:!1},rmb:{type:Array,default:function(){return[]}},isindex:{type:Number,default:0}},created:function(){this.bannera()},updated:function(){this.rbfixed()},methods:{change:function(t){console.log(this.$refs.wowt),t>this.$refs.wowt.length-1&&(t=0),t<0&&(t=this.$refs.wowt.length-1),this.bannervalue=t},acceptrb:function(t){this.$emit("rbclick",this.isindex)},rbfixed:function(){var t=document.body;!0===this.rbshow?t.style="position: fixed":t.style="position: none"},up:function(){--this.bannervalue,this.change(this.bannervalue)},next:function(){++this.bannervalue,this.change(this.bannervalue)},bannera:function(){var t=this.bannerA;for(var n in this.rmb)console.log(n),t.push(this.rmb[n]);console.log(this.bannerA)}},computed:{},name:"resumebanner"},f={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"resumebanner"},[s("transition",{attrs:{name:"zhanshi"}},[t.rbshow?s("div",{staticClass:"banner_outermost"},[s("ul",t._l(t.bannerA,function(n,e){return e===t.isindex?s("li",{key:n.id,staticClass:"bannerbox"},[s("ul",t._l(n.bannerimg,function(n,e){return s("li",{directives:[{name:"show",rawName:"v-show",value:e===t.bannervalue,expression:"index===bannervalue"}],key:e,ref:"wowt",refInFor:!0,staticClass:"bbimg"},[s("img",{attrs:{width:"100%",height:"100%",src:n.img_url,alt:"banner_图片"}})])}),0)]):t._e()}),0),t._v(" "),s("span",{staticClass:"banner_left iconfont icon-jiantouzuo",on:{click:t.up}}),t._v(" "),s("span",{staticClass:"banner_right iconfont icon-jiantouyou",on:{click:t.next}}),t._v(" "),s("div",{staticClass:"rbs_false",on:{click:t.acceptrb}},[s("span",{staticClass:"iconfont icon-chahao"})])]):t._e()])],1)},staticRenderFns:[]};var _=s("VU/8")(p,f,!1,function(t){s("eju9")},"data-v-a68174a8",null).exports,w={data:function(){return{navshow:!1,navbaravator:"./static/img/avator.jpg"}},props:{resumetitle:{type:Array,default:[]},isActive:{type:Number,default:0}},created:function(){document.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop,n=document.querySelector(".rebottommain").offsetTop;this.navshow=t>=n},avatorscroll:function(){var t=setInterval(function(){var n=document.documentElement.scrollTop||document.body.scrollTop,s=Math.floor(-n/5);0===n&&clearInterval(t),document.documentElement.scrollTop=document.body.scrollTop=n+s},10)},showLoading:function(t){this.index=t,this.$emit("wow",t)}},destroyed:function(){window.removeEventListener("scroll",handleScroll,!0)},name:"navbar"},b={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"navbar"},[s("transition",{attrs:{name:"fold"}},[t.navshow?s("div",{staticClass:"navbar_container"},[s("div",{staticClass:"nbc_bgimage",style:{backgroundImage:"url("+t.navbaravator+")"},on:{click:t.avatorscroll}}),t._v(" "),s("ul",{staticClass:"navul"},t._l(t.resumetitle,function(n,e){return s("li",{key:n.id,on:{click:function(n){return t.showLoading(e)}}},[t._v(t._s(n.text))])}),0)]):t._e()])],1)},staticRenderFns:[]};var g=s("VU/8")(w,b,!1,function(t){s("jfOl")},null,null).exports,C=new e.a,x={data:function(){return{num:0,isindex:0,rbshow:!1,rmb:[{imgUrl:"/static/img/onewow.jpg",font:"使用技术:",project:"项目介绍:",fontcontent:"Vue CLI/ Vue2/ Axios/ Vue Router/ vue-swiper/ ES6/ Npm/ stylus",projectcontent:[{ptone:"该项目使用 Vue 实现了一个仿饿了么SPA应用。包含",pttwo:"首页、评价、商家评论等"},{ptone:"实现了",pttwo:"评论、查看商家店铺环境、点单等功能。"},{ptone:"项目使用",pttwo:"Flex作页面布局。"},{ptone:"以VueCLI为基础创建项目模版，使用stylus作",pttwo:"CSS预处理语言。"},{ptone:"自定义组件做",pttwo:"渲染交互。"},{ptone:"通过VueRouter实现",pttwo:"路由的跳转等。"},{ptone:"用",pttwo:"Axios 获取数据"}],bannerimg:[{img_url:"static/img/onewow.jpg"},{img_url:"static/img/onewow1.jpg"},{img_url:"static/img/onewow2.jpg"},{img_url:"static/img/onewow3.jpg"}]},{imgUrl:"/static/img/onewow.jpg",font:"使用技术:",project:"项目介绍:",fontcontent:"JQuery/ JavaScript/ Html5/ Css3/",projectcontent:[{ptone:"该项目使用 Vue 实现了一个web单页跳转应用。包含",pttwo:"首页、关于我们、轮播图等"},{ptone:"实现了",pttwo:"懒加载、响应式轮播图等功能。"},{ptone:"项目使用",pttwo:"Flex作页面布局。"},{ptone:"以JQuery为主要技术，使用css3作为主要",pttwo:"样式语言"}],bannerimg:[{img_url:"static/img/onewow1.jpg"},{img_url:"static/img/onewow2.jpg"},{img_url:"static/img/onewow3.jpg"}]}],showFlag:!1,more:{name:"点击我了解更多",btn:"∧"},exps:{name:"以前主要学习的是计算机基础应用在一次机遇下\n                接触到程序员学习平台(慕课网)在那以后对前端产生了浓厚的的兴趣,\n                并不断的实践积累系统性的学习前端知识后来结识了一些热爱\n                前端的同学组成团队去实践学习成果锻炼自己的前端开发能力。"},personal:[{item:"学历:",content:"大专",status:"-1"},{item:"性别:",content:"男",status:"0"},{item:"年龄:",content:"19",status:"1"},{item:"在职状态:",content:"应届生",status:"2"},{item:"开源:",content:"请点击了解更多下的箭头",status:"3"},{item:"",content:"山东",status:"4"}],skillstitle:[{item:"JavaScript/ HTML 5/ CSS 3/ SVG",width:"50%"},{item:"Vue.js/ Vuex/ Vue Router/ Axios",width:"50%"},{item:"Bootstrap",width:"60%"},{item:"Webpack/ Npm Script",width:"40%"},{item:"ES6/Stylus/Sass/less",width:"45%"}],resumetitle:[{text:"个人信息"},{text:"项目经历"}],isActive:0,startX:0,startY:0,movEndX:0,movEndY:0,tmo:{show1:!0,show2:!1,show3:!0},owindex:0}},created:function(){this.Array()},methods:{wow:function(t){this.isActive=t},font:function(t){this.owindex=t;for(var n=this.$refs.ski,s=0;s<n.length;s++)n[s].style="background: rgb(87, 174, 228)";console.log(this.owindex),n[this.owindex].style="background: rgb(38, 159, 234)"},addclass:function(t){return-1==t?"icon-xueli":["icon-man","icon-nianling","icon-icon35","icon-github","icon-dizhi_"][t]},handleclick:function(){return this.showFlag=!this.showFlag},rbclick:function(t){return this.isindex=t,console.log(this.isindex),this.rbshow=!this.rbshow},Array:function(){var t=this;C.$on("myArray",function(n){for(var s=0;s<t.rmb.length;s++)if(-1==n.indexOf(n[s])&&(n.push(t.rmb[s]),s+1>=t.rmb.length))return void(t.$el.querySelector(".rmbcontent").style="display: none");t.rmb=n})}},computed:{},name:"rebottommain",components:{ContactInformation:d,ResumeBanner:_,NavBar:g}},y={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"rebottommain"},[s("div",{staticClass:"rbm_navbar clearfix"},[s("ul",{staticClass:"rbm_nav clearfix"},t._l(t.resumetitle,function(n,e){return s("li",{key:n.id,class:{active:t.isActive===e},on:{click:function(n){return t.wow(e)}}},[t._v("\n                "+t._s(n.text)+"   \n            ")])}),0)]),t._v(" "),s("div",{staticClass:"rbm_content clearfix"},[s("ul",{staticClass:"rbmc_nav"},[s("li",{directives:[{name:"show",rawName:"v-show",value:0===this.isActive,expression:"this.isActive === 0"}],staticClass:"clearfix"},[s("div",{staticClass:"rbmc_one cili clearfix"},[s("div",{staticClass:"skills clearfix"},[s("h1",{staticClass:"h1_style h1_common clearfix"},[t._v("\n                            相关技能    \n                        ")]),t._v(" "),t._l(t.skillstitle,function(n,e){return s("div",{key:n.id,staticClass:"skill-item",on:{click:function(n){return t.font(e)}}},[s("p",{ref:"ski",refInFor:!0,staticClass:"keyword",domProps:{innerHTML:t._s(n.item)}}),t._v(" "),s("p",{staticClass:"rule"},[s("span",{staticClass:"rl_item",style:{width:""+n.width}})])])})],2),t._v(" "),s("div",{staticClass:"personal clearfix"},[s("h1",{staticClass:"h1_common h1_style"},[t._v("\n                            基本信息\n                        ")]),t._v(" "),t._l(t.personal,function(n){return s("div",{key:n.id,staticClass:"personalrm"},[s("span",{staticClass:"iconfont",class:t.addclass(n.status)}),t._v("\n                            "+t._s(n.item)+"\n                            "),s("a",{attrs:{href:"https://github.com/wangqiaoqiaogithub"}},[s("span",{staticClass:"highlint",domProps:{textContent:t._s(n.content)}})])])})],2),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"experience"},[s("h1",{staticClass:"h1_common h1_style"},[t._v("\n                            个人经历\n                        ")]),t._v(" "),s("p",{staticClass:"ex_p",domProps:{innerHTML:t._s(t.exps.name)}})]),t._v(" "),s("div",{staticClass:"more"},[s("h1",{staticClass:"h1_common h1_style"},[t._v("\n                            了解更多\n                        ")]),t._v(" "),s("div",{staticClass:"more_mian",domProps:{innerHTML:t._s(t.more.btn)},on:{click:t.handleclick}})])])]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:1===this.isActive,expression:"this.isActive === 1"}],staticClass:"clearfix"},[s("div",{staticClass:"rbmc_two cili clearfix"},[s("h1",{staticClass:"h1_common h1_style"},[t._v("\n                        项目经历\n                    ")]),t._v(" "),t._l(t.rmb,function(n,e){return s("div",{key:n.id,staticClass:"rmbcontent"},[s("div",{ref:"rbwow",refInFor:!0,staticClass:"rmbc_top",on:{click:function(n){return t.rbclick(e)}}},[s("div",{staticClass:"rmbimage",style:{backgroundImage:"url("+n.imgUrl+")"}})]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"rmbc_bottom"},[s("p",{staticClass:"rmbcb_pone"},[t._v("\n                                        "+t._s(n.project)+"\n                                    ")]),t._v(" "),s("ul",{staticClass:"projectul"},t._l(n.projectcontent,function(n){return s("li",{key:n.id},[t._v("\n                                            "+t._s(n.ptone)+"\n                                            "),s("span",{staticClass:"highlint"},[t._v(t._s(n.pttwo))])])}),0),t._v(" "),s("p",{staticClass:"rmbcb_ptwo"},[t._v("\n                                        "+t._s(n.font)+"\n                                        "),s("span",{staticClass:"highlint"},[t._v("\n                                            "+t._s(n.fontcontent)+"\n                                        ")])])])])])])})],2)])])]),t._v(" "),s("contact-information",{attrs:{showFlag:t.showFlag},on:{handleclick:t.handleclick}}),t._v(" "),s("resume-banner",{attrs:{isindex:t.isindex,rbshow:t.rbshow,rmb:t.rmb},on:{rbclick:t.rbclick}}),t._v(" "),s("nav-bar",{attrs:{resumetitle:t.resumetitle,isActive:t.isActive},on:{wow:t.wow}})],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"aboutme"},[s("h1",{staticClass:"h1_common h1_style"},[t._v("\n                            关于我\n                        ")]),t._v(" "),s("div",{staticClass:"aboutmerm"},[s("p",{staticClass:"at_p"},[t._v("\n                                熟练HTML、DIV+CSS的\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                    页面布局\n                                ")]),t._v("\n                                ,能根据设计图\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                    像素级\n                                ")]),t._v("\n                                完成页面制作。\n                            ")]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                熟悉HTML5及\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                语义化\n                                ")]),t._v("\n                                了解\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                    Canvans\n                                ")]),t._v("\n                                动画制作\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                 css3动画、过渡效果\n                                ")])]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                熟悉原生Javascript,会使用\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                Es6+\n                                ")]),t._v("\n                                常用规范\n                                ,了解 jQuery 常用API及思想。\n                            ")]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                熟练Vue常用功能,理解如\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                    生命周期、组件、虚拟 DOM、数据响应式\n                                ")]),t._v("\n                                等概念,能够使用 Vue 全家桶开发项目,对 React 有一定了解。\n                            ")]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                熟练\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                    模块化、工程化开发\n                                ")]),t._v("\n                                流程，能够配置 Webpack。\n                            ")]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                有移动端开发经验，会使用\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                    stylus、REM、Em/ vh、响应式\n                                ")]),t._v("\n                                等技术制作适配手机设备的页面。\n                            ")]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                了解\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                HTTP\n                                ")]),t._v("\n                                相关知识,了解常见的\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                Web性能优化\n                                ")]),t._v("\n                                方案。\n                            ")]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                了解\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                Node.js\n                                ")]),t._v("\n                                ,能够开发简单的后台服务器。\n                            ")]),t._v(" "),s("p",{staticClass:"at_p"},[t._v("\n                                熟练使用\n                                "),s("span",{staticClass:"highlint"},[t._v("\n                                VsCode、SublineText、Sass、Git\n                                ")]),t._v("\n                                等开发工具。\n                            ")])])])}]};var k=s("VU/8")(x,y,!1,function(t){s("OYus")},"data-v-00ce68df",null).exports,S={name:"MypullupRefresh",data:function(){return{startY:"",moveDistance:0,moveState:0,duration:0}},props:{array:{type:Array,default:[]},isrsshow:{type:Boolean,default:!1}},computed:{style:function(){return{transition:this.duration+"ms",transform:"translate3d(0,"+this.moveDistance+"px, 0)"}},msText:function(){return 0===this.moveState?"下拉即可刷新∨":"释放即可刷新∧"}},methods:{touchStart:function(t){this.duration=0,this.moveDistance=0,this.startY=t.targetTouches[0].clientY},touchMove:function(t){if(!((document.documentElement.scrollTop||document.body.scrollTop)>0)){var n=document.querySelector(".rt_content"),s=t.targetTouches[0].clientY-this.startY;if(s>0){this.moveDistance=Math.pow(s,.8);var e=s/3700;if(n.style="opacity: "+e,this.moveDistance>120){if(1===this.moveState)return;this.moveState=1}else{if(0===this.moveState)return;this.moveState=0}}}},touchEnd:function(t){var n=this;this.duration=300;var s=document.querySelector(".rt_content");if(this.moveDistance>120){this.moveState=2,this.moveDistance=120,this.$emit("refresh",function(){s.style="opacity: 1",clearInterval(e),C.$emit("myArray",n.array);for(var t=0;t<n.array.length;t++)t+1>=n.array.length&&n.$emit("listenisrsshow");n.moveState=0});var e=setInterval(function(){n.moveState=3},800)}else this.moveDistance=0,s.style="opacity: 1"}},watch:{moveState:function(t){0===t&&300===this.duration&&(this.moveDistance=0)}}},A={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{ref:"scrollBox",staticClass:"MypullupRefresh",style:t.style,on:{touchstart:function(n){return n.stopPropagation(),n.preventDefault(),t.touchStart(n)},touchmove:function(n){return n.stopPropagation(),n.preventDefault(),t.touchMove(n)},touchend:t.touchEnd}},[s("div",{staticClass:"weui-pull-refreshing-box"},[t.moveState<2?s("div",{staticClass:"text"},[t._v(t._s(t.msText))]):t._e(),t._v(" "),2===t.moveState?s("div",{staticClass:"wordloading"},[s("i",{staticClass:"weui-loading"}),t._v(" 加载中...")]):t._e(),t._v(" "),3===t.moveState?s("div",{staticClass:"wordwancheng"},[s("i",{staticClass:"weui-loading"}),t._v("加载完成")]):t._e(),t._v(" "),4===t.moveState?s("div",{staticClass:"wordwancheng"},[s("i",{staticClass:"weui-loading"}),t._v("没有更多数据")]):t._e()]),t._v(" "),s("div",{staticClass:"weui-pull-present-box"},[t._t("default")],2)])},staticRenderFns:[]};var E=s("VU/8")(S,A,!1,function(t){s("uTZ2")},"data-v-2d7dc4de",null).exports,V={data:function(){return{}},props:{isrsshow:{type:Boolean,default:!1},pbtext:{type:String,default:"抱歉暂无更多数据!"}},methods:{pd_handleclick:function(){this.$emit("listenisrsshow"),console.log(this.isrsshow)}},name:"promptbox"},F={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.isrsshow?s("div",{staticClass:"promptbox"},[s("div",{staticClass:"pb_content"},[s("div",{staticClass:"pb_dblock"},[s("p",{staticClass:"dp_p"},[t._v("信息提示")]),t._v(" "),s("div",{staticClass:"dp_main"},[s("p",{staticClass:"dp_p1",domProps:{textContent:t._s(t.pbtext)}})]),t._v(" "),s("div",{staticClass:"dp_btn",on:{click:t.pd_handleclick}},[t._v("\n                确定\n            ")])])])]):t._e()},staticRenderFns:[]};var $={name:"showresume",data:function(){return{array:[],isrsshow:!1}},methods:{refresh:function(t){var n=this;setTimeout(function(){t(),console.log(n.array)},1400)},listenisrsshow:function(){var t=this,n=document.body||document.documentElement;return this.$nextTick(function(){!0===t.isrsshow?n.style="position: fixed":n.style="position: none"}),this.isrsshow=!this.isrsshow}},components:{resumeTop:h,rebottomMain:k,MypullupRefresh:E,PromptBox:s("VU/8")(V,F,!1,function(t){s("luz7")},"data-v-5b6f66b8",null).exports}},T={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("transition",{attrs:{name:"resume_display"}},[s("div",{staticClass:"showresume"},[s("mypullup-refresh",{attrs:{isrsshow:t.isrsshow,array:t.array},on:{listenisrsshow:t.listenisrsshow,refresh:t.refresh}},[s("resume-top")],1),t._v(" "),s("rebottom-main"),t._v(" "),s("prompt-box",{attrs:{isrsshow:t.isrsshow},on:{listenisrsshow:t.listenisrsshow}})],1)])},staticRenderFns:[]};var j=s("VU/8")($,T,!1,function(t){s("gt0F")},"data-v-51297d88",null).exports,R=s("Xxa5"),M=s.n(R),I=s("//Fk"),H=s.n(I),N=s("exGp"),P=s.n(N),U={data:function(){return{repple_button:{animate:!1}}},props:{step:{type:String}},methods:{reppleClick:function(t){var n=this;this.repple_button.animate=!0;var s=t.target,e=s.querySelector(".__cov-ripple");if(e){var i=Math.max(s.offsetHeight,s.offsetWidth),a=t.layerX-e.offsetWidth/2,o=t.layerY-e.offsetHeight/2;e.setAttribute("style","height: "+i+"px; width: "+i+"px; top: "+o+"px; left: "+a+"px;")}this.$nextTick(function(){setTimeout(function(){n.repple_button.animate=!1},660)})},rw:function(){this.$emit("routerClick")}}},Y={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"resumebutton"},[n("a",{staticClass:"__cov-button-ripple",on:{click:this.rw,mouseover:this.reppleClick}},[this._v("\n        "+this._s(this.step)+"\n        "),n("span",{staticClass:"__cov-ripple",class:{animate:this.repple_button.animate}})])])},staticRenderFns:[]};var L={data:function(){return{htmlCodeo:"我来自国家开放大学",markdowno:"",htmlCodet:"下面来进入我的简历吧",markdownt:"",htmlCoden:"学习前端二年非常热爱前端这个大家庭",markdownn:"",step:"我的简历"}},props:["markdown"],name:"ResumeEditor",created:function(){this.showresumeone(),this.showresumetwo(),this.showresumethree()},methods:{showresumeone:function(){var t=this,n=0;setInterval(function(){t.markdowno=t.htmlCodeo.substring(0,n),n+=1},200)},showresumetwo:function(){var t=this,n=0;setInterval(function(){t.markdownt=t.htmlCodet.substring(0,n),n+=1},200)},showresumethree:function(){var t=this,n=0;setInterval(function(){t.markdownn=t.htmlCoden.substring(0,n),n+=1},200)},rc:function(){this.$router.push({path:"/re"})}},components:{resumeButton:s("VU/8")(U,Y,!1,function(t){s("hcZb")},"data-v-782399d8",null).exports}},B={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"resumeEditor"},[s("div",{staticClass:"RE_top",domProps:{innerHTML:t._s(t.markdown)}}),t._v(" "),s("div",{staticClass:"RE_content"},[s("h2",{staticClass:"clearfix",domProps:{innerHTML:t._s(t.markdowno)}}),t._v(" "),s("h3",{staticClass:"clearfix",domProps:{innerHTML:t._s(t.markdownn)}}),t._v(" "),s("h4",{staticClass:"clearfix",domProps:{innerHTML:t._s(t.markdownt)}})]),t._v(" "),s("resume-button",{attrs:{step:t.step},on:{routerClick:t.rc}})],1)},staticRenderFns:[]};var D=s("VU/8")(L,B,!1,function(t){s("6wBc")},"data-v-3b82ddaa",null).exports,q={data:function(){return{isShow:!0,val:0}},props:{step:{type:Number,default:5},invital:{type:Number,default:0},stopVal:{type:Number,default:80},isOk:{type:Boolean,default:!1}},mounted:function(){this.pbloading()},methods:{pbloading:function(){var t=this;this.val=this.invital;var n=this.step,s=setInterval(function(){if(t.val=t.val+n,t.$el.style.width=t.val+"%",t.val>=t.stopVal)return clearInterval(s),void(t.isShow=!1)},60)}},name:"progressbar"},O={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"progressbar"},[n("span",{staticClass:"pb_activity"})])])},staticRenderFns:[]};var X=s("VU/8")(q,O,!1,function(t){s("53Cy")},"data-v-2bed7f8f",null).exports,W={name:"resumemain",data:function(){return{code:"",finalCode:"\nbody{\n  position: relative;\n}\n.rem-content{\n  padding-top: 10%!important;\n}\n.base_background{\n  font-size: 40px;\n}\n.resume_bottom{\n  color: #fff;\n}\nh2{\n  text-shadow: 0 0 10px #737373;\n}\nh3{\n  text-shadow: 0 0 10px #000; \n}\n.RE_content{\n  padding: 10px 0px;\n}\n.avator{                                \n  width: 100%;\n}\n.RE_top{\n  margin-top: 30px;\n  text-shadow: 0 0 2px #eee;\n}\n.avator_content{\n  border-radius: 50%;\n}\nh4{\n  margin-bottom: 10px;\n}\n.__cov-button-ripple{\n  color: #fff;\n}\n.rem-content{\n  background-color: rgba(0,0,0,.7);\n}\n      ",htmlCode:"欢迎来到前端工程师2019求职简历(王乔乔)\n      ",markdown:"",enableHtml:!1,showFlag:!1,isShow:!1,step:5,invital:0,stopVal:100,isOk:!1}},created:function(){this.myone(),this.showHtml()},methods:{myone:function(){var t=this,n=0;setInterval(function(){t.code=t.finalCode.substring(0,n),n+=1})},showHtml:function(){var t=P()(M.a.mark(function t(){var n=this;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mytwo();case 2:return t.abrupt("return",new H.a(function(t,s){n.enableHtml=!0,t()}));case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mytwo:function(){var t=this,n=0;setInterval(function(){t.markdown=t.htmlCode.substring(0,n),n+=1},30)},handleclick:function(){return this.showFlag=!this.showFlag}},computed:{stylecode:function(){return"<style>"+this.code+"</style>"}},components:{ResumeEditor:D,MyAvator:c,ContactInformation:d,ProgressBar:X}},z={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"resumemain"},[s("progress-bar",{attrs:{callback:t.isOk,stopVal:t.stopVal,invital:t.invital,step:t.step,isShow:t.isShow}}),t._v(" "),s("div",{staticClass:"rem-content"},[s("div",{staticClass:"icon-jiantou",attrs:{title:"联系方式"},on:{click:t.handleclick}},[s("span",{staticClass:"ij_icon"},[t._v("∧")])]),t._v(" "),s("my-avator"),t._v(" "),s("div",{staticClass:"resume_top base_background",domProps:{innerHTML:t._s(t.stylecode)}}),t._v(" "),s("resume-editor",{staticClass:"resume_bottom base_background",attrs:{markdown:t.markdown}})],1),t._v(" "),s("contact-information",{attrs:{showFlag:t.showFlag},on:{handleclick:t.handleclick}})],1)},staticRenderFns:[]};var J=s("VU/8")(W,z,!1,function(t){s("nVYp")},"data-v-6c1f7896",null).exports;e.a.use(o.a);var Q=new o.a({routes:[{path:"/",name:"resumemain",component:J},{path:"/re",name:"showresume",component:j}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:Q,components:{App:a},template:"<App/>"})},OYus:function(t,n){},Y1Uw:function(t,n){},ect2:function(t,n){},eju9:function(t,n){},fqVA:function(t,n){},gt0F:function(t,n){},hcZb:function(t,n){},jfOl:function(t,n){},luz7:function(t,n){},nVYp:function(t,n){},uTZ2:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.d46bce07d3bc72fe93af.js.map