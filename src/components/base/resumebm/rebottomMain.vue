<template>
    <div class="rebottommain">
        <div class="rbm_navbar clearfix">
            <ul class="rbm_nav clearfix">
                <li :class="{'active':isActive === index}" @click="wow(index)" v-for="(retitles,index) in resumetitle" :key="retitles.id">
                    {{retitles.text}}   
                </li>
            </ul>
        </div>
        <div class="rbm_content clearfix">
            <ul class="rbmc_nav">
                <li v-show="this.isActive === 0" class="clearfix">
                    <div class="rbmc_one cili clearfix">
                        <div class="skills clearfix">
                            <h1 class="h1_style h1_common clearfix">
                                相关技能    
                            </h1>
                            <div @click="font(index)" v-for="(skillstl,index) in skillstitle" :key="skillstl.id" class="skill-item">
                                <p ref="ski" class="keyword" v-html="skillstl.item">
                                </p>
                                <p class="rule">
                                    <span class="rl_item" :style="{ width:`${skillstl.width}`}"></span>
                                </p>
                            </div>   
                        </div>
                        <div class="personal clearfix">
                            <h1 class="h1_common h1_style">
                                基本信息
                            </h1>
                            <div v-for="pes in personal" :key="pes.id" class="personalrm">
                                <span  class="iconfont" :class="addclass(pes.status)"></span>
                                {{pes.item}}
                                <a href="https://github.com/wangqiaoqiaogithub">
                                    <span class="highlint" v-text="pes.content"></span>
                                </a>     
                            </div>
                        </div>
                        <div class="aboutme">
                            <h1 class="h1_common h1_style">
                                关于我
                            </h1>
                            <div class="aboutmerm">
                                <p class="at_p">
                                    熟练HTML、DIV+CSS的
                                    <span class="highlint">
                                        页面布局
                                    </span>
                                    ,能根据设计图
                                    <span class="highlint">
                                        像素级
                                    </span>
                                    完成页面制作。
                                </p>
                                <p class="at_p">
                                    熟悉HTML5及
                                    <span class="highlint">
                                    语义化
                                    </span>
                                    了解
                                    <span class="highlint">
                                        Canvans
                                    </span>
                                    动画制作
                                    <span class="highlint">
                                     css3动画、过渡效果
                                    </span>
                                </p>
                                <p class="at_p">
                                    熟悉原生Javascript,会使用
                                    <span class="highlint">
                                    Es6+
                                    </span>
                                    常用规范
                                    ,了解 jQuery 常用API及思想。
                                </p>
                                <p class="at_p">
                                    熟练Vue常用功能,理解如
                                    <span class="highlint">
                                        生命周期、组件、虚拟 DOM、数据响应式
                                    </span>
                                    等概念,能够使用 Vue 全家桶开发项目,对 React 有一定了解。
                                </p>
                                <p class="at_p">
                                    熟练
                                    <span class="highlint">
                                        模块化、工程化开发
                                    </span>
                                    流程，能够配置 Webpack。
                                </p>
                                <p class="at_p">
                                    有移动端开发经验，会使用
                                    <span class="highlint">
                                        stylus、REM、Em/ vh、响应式
                                    </span>
                                    等技术制作适配手机设备的页面。
                                </p>
                                <p class="at_p">
                                    了解
                                    <span class="highlint">
                                    HTTP
                                    </span>
                                    相关知识,了解常见的
                                    <span class="highlint">
                                    Web性能优化
                                    </span>
                                    方案。
                                </p>
                                <p class="at_p">
                                    了解
                                    <span class="highlint">
                                    Node.js
                                    </span>
                                    ,能够开发简单的后台服务器。
                                </p>
                                <p class="at_p">
                                    熟练使用
                                    <span class="highlint">
                                    VsCode、SublineText、Sass、Git
                                    </span>
                                    等开发工具。
                                </p>
                            </div>
                        </div>
                        <div class="experience">
                            <h1 class="h1_common h1_style">
                                个人经历
                            </h1>
                            <p class="ex_p" v-html="exps.name">
                            </p>
                        </div>
                        <div class="more">
                            <h1 class="h1_common h1_style">
                                了解更多
                            </h1>
                            <div @click="handleclick" class="more_mian" v-html="more.btn">
                            </div>
                        </div>
                    </div>
                </li>
                <li v-show="this.isActive === 1" class="clearfix">
                    <div class="rbmc_two cili clearfix">
                        <h1 class="h1_common h1_style">
                            项目经历
                        </h1>
                        <div class="rmbcontent" v-for="(rmbs,index) in rmb" :key="rmbs.id">
                            <div @click="rbclick(index)" ref="rbwow" class="rmbc_top">
                                <div class="rmbimage" :style="{ backgroundImage:'url('+rmbs.imgUrl+')' }">
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <div class="rmbc_bottom">
                                        <p class="rmbcb_pone">
                                            {{rmbs.project}}
                                        </p>
                                        <ul class="projectul">
                                            <li v-for="prts in rmbs.projectcontent" :key="prts.id">
                                                {{prts.ptone}}
                                                <span class="highlint">{{prts.pttwo}}</span>
                                            </li>    
                                        </ul> 
                                        <p class="rmbcb_ptwo">
                                            {{rmbs.font}}
                                            <span class="highlint">
                                                {{rmbs.fontcontent}}
                                            </span>
                                        </p>
                                    </div>                                        
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <contact-information @handleclick="handleclick" :showFlag="showFlag"></contact-information>
        <resume-banner  @rbclick="rbclick" :isindex="isindex" :rbshow="rbshow" :rmb="rmb"></resume-banner>
        <nav-bar @wow="wow" :resumetitle="resumetitle" :isActive="isActive"></nav-bar>
    </div>
</template>
<script type="text/ecmascript-6">

    import ContactInformation from '@/components/base/contactinformation/ContactInformation.vue'
    import ResumeBanner from '@/components/base/ResumeBanner/resumebanner.vue'
    import NavBar from '@/components/base/NavBar/navbar.vue'
    import eventVue from '@/common/js/event.js'

export default {
    data(){
        return{
            num: 0,
            isindex:0,
            rbshow: false,
            rmb: [
                {

                    imgUrl: '/static/img/onewow.jpg',
                    font: '使用技术:',
                    project: '项目介绍:',
                    fontcontent: 'Vue CLI/ Vue2/ Axios/ Vue Router/ vue-swiper/ ES6/ Npm/ stylus',
                    projectcontent: [
                        {
                            ptone: '该项目使用 Vue 实现了一个仿饿了么SPA应用。包含',
                            pttwo: '首页、评价、商家评论等'
                        },
                        {
                            ptone: '实现了',
                            pttwo: '评论、查看商家店铺环境、点单等功能。'
                        },
                        {
                            ptone: '项目使用',
                            pttwo: 'Flex作页面布局。'
                        },
                        {
                            ptone: '以VueCLI为基础创建项目模版，使用stylus作',
                            pttwo: 'CSS预处理语言。'
                        },
                        {
                            ptone: '自定义组件做',
                            pttwo: '渲染交互。'
                        },
                        {
                            ptone: '通过VueRouter实现',
                            pttwo: '路由的跳转等。'
                        },
                        {
                            ptone: '用',
                            pttwo: 'Axios 获取数据'
                        }
                    ],
                    bannerimg:[
                        {
                            img_url: 'static/img/onewow.jpg'
                        },
                        {
                            img_url: 'static/img/onewow1.jpg'
                        },
                        {
                            img_url: 'static/img/onewow2.jpg'
                        },
                        {
                            img_url: 'static/img/onewow3.jpg'
                        }
                    ]
                },
                {

                    imgUrl: '/static/img/onewow.jpg',
                    font: '使用技术:',
                    project: '项目介绍:',
                    fontcontent: 'JQuery/ JavaScript/ Html5/ Css3/',
                    projectcontent: [
                        {
                            ptone: '该项目使用 Vue 实现了一个web单页跳转应用。包含',
                            pttwo: '首页、关于我们、轮播图等'
                        },
                        {
                            ptone: '实现了',
                            pttwo: '懒加载、响应式轮播图等功能。'
                        },
                        {
                            ptone: '项目使用',
                            pttwo: 'Flex作页面布局。'
                        },
                        {
                            ptone: '以JQuery为主要技术，使用css3作为主要',
                            pttwo: '样式语言'
                        }
                    ],
                    bannerimg:[
                        {
                            img_url: 'static/img/onewow1.jpg'
                        },
                        {
                            img_url: 'static/img/onewow2.jpg'
                        },
                        {
                            img_url: 'static/img/onewow3.jpg'
                        }
                    ]
                }
            ],
            showFlag: false,
            more: {
                name: '点击我了解更多',
                btn: '∧'
            },
            exps:{
                name: `以前主要学习的是计算机基础应用在一次机遇下
                接触到程序员学习平台(慕课网)在那以后对前端产生了浓厚的的兴趣,
                并不断的实践积累系统性的学习前端知识后来结识了一些热爱
                前端的同学组成团队去实践学习成果锻炼自己的前端开发能力。`
            },
            personal:[
                {
                    item: '学历:',
                    content: '大专',
                    status:'-1'
                },
                {
                    item: '性别:',
                    content: '男',
                    status:'0'
                },
                {
                    item: '年龄:',
                    content: '19',
                    status:'1'
                },
                {
                    item: '在职状态:',
                    content: '应届生',
                    status:'2'
                },
                {
                    item: '开源:',
                    content: '请点击了解更多下的箭头',
                    status: '3'
                },
                {
                    item: '',
                    content: '山东',
                    status: '4'
                }
            ],
            skillstitle: [
                {
                    item: 'JavaScript/ HTML 5/ CSS 3/ SVG',
                    width: '50%'
                },
                {
                    item: 'Vue.js/ Vuex/ Vue Router/ Axios',
                    width: '50%'  
                },
                {
                    item: 'Bootstrap',
                    width: '60%'
                },
                {
                    item: 'Webpack/ Npm Script',
                    width: '40%'
                },
                {
                    item: 'ES6/Stylus/Sass/less',
                    width: '45%'
                }
            ],
            resumetitle: [
                {text: '个人信息'},
                {text: '项目经历'}
            ],
            isActive: 0,
            startX: 0,
            startY: 0,
            movEndX: 0,
            movEndY: 0,
            tmo: {
                show1: true,
                show2: false,
                show3: true
            },
            owindex: 0
        }
    },
    created(){
        this.Array()
    },
    methods: {
        wow(index){
            this.isActive = index;
        },
        font(index){
            this.owindex = index;
            let ski = this.$refs.ski;
            for(var i= 0; i<ski.length;i++){
                //利用遍历去让区域个数的div都有作用效果
                ski[i].style = 'background: rgb(87, 174, 228)';
            }
            console.log(this.owindex)
            ski[this.owindex].style = 'background: rgb(38, 159, 234)';
            
        },
        addclass(i){
            let arr = ['icon-man','icon-nianling','icon-icon35','icon-github','icon-dizhi_'];
            if(i == -1){
                return 'icon-xueli'
            }else{
                return arr[i];
            }
        },
        handleclick() {
            return this.showFlag = !this.showFlag
        },
        rbclick(index) {
            this.isindex = index;//把实参复制给形参（让它和遍历的数组下标做映射） 
            //let wowt = this.$refs.wowt;
            // for(var w= 0;w<this.rmb.length;w++){
            //     console.log(wowt[w])
            // }
            console.log(this.isindex)
            return this.rbshow = !this.rbshow
        },
        Array(){
            eventVue.$on('myArray',(array)=>{
                
                // for(var w=0,len=this.rmb.length;w<len;w++){
                //     //console.log(w)键
                //     //console.log(this.rmb[w])值
                    
                //     // array.push(this.rmb[w])
                //     // if(w>=1){
                //     //     array.slice(0,this.rmb[w])
                //     //     alert('没有更多');  
                //     // }
                //     // if((w+1)>=this.rmb.length){
                //     //     this.$el.querySelector('.rmbcontent').style='display: none';
                //     //     return;
                //     // }
                // }
                for (var i = 0; i < this.rmb.length; i++) {
                    if(array.indexOf(array[i])==-1){
                        array.push(this.rmb[i]);
                        if((i+1)>=this.rmb.length){
                            this.$el.querySelector('.rmbcontent').style='display: none';
                            return;
                        }
                    }
                }
                //debugger
                this.rmb = array;
            })
        }
    },
    computed: {
    },
    name: 'rebottommain',
    components: {
        ContactInformation,
        ResumeBanner,
        NavBar
    }
}
</script>
<style lang="stylus" scoped="scoped">
    >>>.content 
        padding: 0 15px
        .text
            font-size: 14px
            color: rgba(69,90,100,.6)
    >>>.h1_common
        font-size: 30px
        color: #2397DF
        font-weight: bold
        text-align: left
    >>>.cili
        position: absolute 
        width: 100%
        background: #fff
        border-radius: 10px
        box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2)
        -webkit-box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2)
        -o-box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2)
        -ms-box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2)
    .rebottommain
        .rbm_navbar
            width: 1000px
            margin: 0 auto
            padding: 10px 8px
            line-height: 6rem 
            background: #98c4fd
            .rbm_nav
                display: table
                width: 100%
                height: 100px
            .rbm_nav>li
                position: relative
                display: table-cell
                width: 50%
                height: 50px
                vertical-align: middle
                text-align: center
                background: #60a5fc
                color: #fff
                font-size: 22px
                font-weight: bold
                opacity: 0.65
                &.active
                    color: #2397df
                    background: #fff
                    opacity: 1
                ._covripple
                    display: block
                    position: absolute
                    background: #1463c7
                    border-radius: 100%
                    animation: ripple 0.65s linear
                    transform: scale(0)
                    @keyframes ripple 
                        100%
                            opacity: 0
                            transform: scale(2.5)
            .rbm_nav>li:hover
                opacity: 1
        .rbm_content
            width: 100%
            margin-top: 5%
            .rbmc_nav
                padding-top: 10px
                width: 100%
            .rbmc_nav>li
                position: relative
                width: 95%
                height: 300vh
                .rbmc_one
                    top: 0
                    margin: 0 2.5%
                    .skills
                        width: 100%
                        padding: 20px 0px
                        .h1_style
                            padding-left: 10px
                        .skill-item
                            width: 18.5%
                            float: left
                            margin-left: 1%
                            margin-right: 0.5%
                            background: #5db3e8
                            -webkit-border-radius: 3px
                            border-radius: 3px
                            -ms-border-radius: 3px
                            -o-border-radius: 3px
                            cursor: pointer
                            opacity: .7
                            &:hover
                                opacity: 1
                            .keyword
                                color: #fff
                                font-weight: bold
                                line-height: 7rem
                            .rule
                                width: 100%
                                height: 7px
                                background: #ccc
                                .rl_item
                                    display: block
                                    height: 7px
                                    background-color: #2397df
                    .personal
                        padding: 0px 0px 10px 0px
                        .h1_style
                            padding-left: 10px
                        .personalrm
                            letter-spacing: 1px
                            text-align: left
                            padding-left: 20px
                            font-size: 18px
                            color: #3187cb
                            .iconfont
                                display: inline-block
                                vertical-align: 1px
                                color: #2397df
                                font-size: 20px
                            .highlint
                                background: #2d90de
                                color: #fff
                                padding: 0 5px
                    .aboutme
                        text-align: left
                        margin-bottom: 10px
                        .aboutmerm
                            padding-left: 20px
                            .at_p
                                font-size: 20px
                                line-height: 1.4em
                                color: #8c8f92
                                margin-top: 5px
                                .highlint
                                    display: inline
                                    background: #2d90de
                                    color: #ffffff
                                    font-weight: bold
                                    padding: 0px 5px
                                    vertical-align: 2px
                                    text-indent: none
                        .h1_style
                            padding-left: 10px
                    .experience
                        .h1_style
                            padding-left: 10px
                        .ex_p 
                            text-align: left 
                            font-size: 22px
                            padding-left: 15px
                            padding-right: 10px
                            color: #868282
                    .more
                        padding-bottom: 10px
                        .h1_style
                            padding-left: 10px
                        .more_mian
                            width: 95%
                            background: #539cd6
                            height: 100px
                            line-height: 100px
                            margin-left: 2%
                            font-size: 50px
                            cursor: pointer
                            color: #dfdfdf
                            opacity: .9
                        .more_mian:hover
                            opacity: 1
                            border-radius: 5px
                .rbmc_two
                    top: 0
                    margin: 0 2.5%
                    .h1_style
                        padding-top: 20px
                        padding-left: 10px
                    .rmbcontent
                        padding-bottom: 20px
                        .rmbc_top
                            position: relative
                            width: 95%
                            height: 500px
                            margin: 0 auto
                            .rmbimage
                                position: absolute
                                width: 100%
                                height: 100%
                                cursor: pointer
                                background-size: 100% 100%
                                border-radius: 10px
                        .rmbc_bottom
                            padding-top: 10px
                            padding-left: 10px
                            .rmbcb_pone
                                font-size: 19px
                                text-align: left
                                color: #60a5fc
                                font-weight: bold
                            .rmbcb_ptwo
                                width: 100%
                                font-size: 19px
                                text-align: left
                                color: #60a5fc
                                font-weight: bold
                                .highlint
                                    width: 100%
                                    display: inline
                                    font-size: 15px
                                    padding-left: 10px
                                    padding-right: 10px
                                    background: #2d90de
                                    color: #fff
                            .projectul
                                text-align: left
                                padding-left: 5px
                                .highlint
                                    background: #2d90de
                                    color: #fff
                                    padding-left: 5px
                                    padding-right: 5px
                            .projectul>li
                                font-size: 17px
                                color: #8c8f92
                                
</style>
