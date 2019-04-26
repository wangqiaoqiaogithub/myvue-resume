<template>
    <transition name="fold">
        <div class="contactinformation" v-show="showFlag">
            <div class="ci_main">
                <div class="ci-navbar clearfix">
                    <div class="bf_content clearfix">
                        <ul class="bfc_nav">
                            <li :class="{'active':isActive===index}" class="clearfix" @click="showloading(index)" v-for="(contacts,index) in contact" :key="contacts.id">
                               {{contacts.text}} 
                            </li>
                        </ul>
                    </div>
                    <div @click="bottomfold" class="bf_icon">
                        <span class="bficon_span">∨</span>
                    </div>
                </div>
                <div class="ci_img">
                    <ul class="ci_ul">
                        <li ref="touchw" @touchstart.stop="tsloading" @touchend="tdloading" :class="{ 'active':isActive === index }" v-for="(biks,index) in backimage" :key="biks.id" v-show="index === isActive">
                            <div class="ci_li" :style="{ backgroundImage:'url('+biks.content+')' }">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">

export default {
    name:'contactinformation',
    data(){
        return{
            contact: 
            [
                { text: '微信' },
                { text: 'gitHub' },
                { text: 'QQ' },
                { text: '联系电话' }
            ],
            backimage:[
                {   content: '/static/img/weixin.png'},
                {   content: '/static/img/github.png'},
                {   content: '/static/img/qq.png'},
                {   content:'/static/img/ct_content.png'}
            ],
            isActive: 0,
            startX: 0,
            startY: 0,
            moveEndx: 0,
            moveEndy: 0,
            awactive: 0 
        }
    },
    props: {
        showFlag:{
            type: Boolean,
            default: false
        }
    },
    created(){
        this.touch = {}
    },
    methods: {
        bottomfold() {
            this.$emit('handleclick')//事件派发（父组件的事件作用派给子组件进行相应）
        },
        showloading(index) {
            this.isActive = index//将isActive赋值给index也就是下标
        },
        tsloading(e) {
            const touch = e.touches[0]
            this.startX = touch.pageX
            this.startY = touch.pageY
        },
        tdloading(e){
            const touch = e.changedTouches[0]
            this.moveEndx = touch.pageX
            this.moveEndy = touch.pageY 
            let x = this.moveEndx - this.startX
            let y = this.moveEndy - this.startY
            let tmo = {
                xiabiao1: 0,
                xiabiao2: 1,
                xiabiao3: 2,
                xiabiao4: 3
            }
            console.log(Math.abs(x))
            if(Math.floor(x)){
                this.awactive = this.$refs.touchw[this.isActive].style='display: none'
                if(this.isActive===0){
                    return this.isActive = tmo.xiabiao2
                }else if(this.isActive ===1){
                    return this.isActive = tmo.xiabiao3
                }else if(this.isActive ===2){
                    return this.isActive = tmo.xiabiao4
                }else if(this.isActive ===3){
                    return this.isActive = tmo.xiabiao1
                }
                this.awactive = this.$refs.touchw[tmo].style = 'display: block'
            }   
        }
    }
}
</script>
<style lang="stylus" scoped="scoped">
    .contactinformation
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-image: linear-gradient(-90deg, #2f86f6, #98c4fd)
        transition: all 0.3s!important
        z-index: 10
        &.fold-enter-active,&.fold-leave-active
            opacity: 1
            transform: translate3d(0,0,0)
        &.fold-enter,&.fold-leave-to
            opacity: 0
            transform: translate3d(0,100%,0)
        .ci_main
            width: 100%
            .ci-navbar
                width: 95%
                background: #ffffff
                box-shadow: 1px 3px 12px #807d7d
                margin: 10px auto
                -webkit-border-radius: 10px
                .bf_icon
                    cursor: pointer
                    font-size: 40px
                    padding-bottom: 10px
                    .bficon_span
                        opacity: .4
                        display: inline-block
                        animation: pluse 1s ease .2s infinite alternate
                        font-weight: bold
                    .bficon_span:hover
                        opacity: 1
                        font-weight: bold
                        color: #000
                        animation-play-state: paused
                        @-webkit-keyframes pluse
                            0%
                                transform: translate3d(0,0,0)
                            50%
                                transform: translate3d(0,8px,0)
                            100%
                                transform: translate(0,0,0)
                .bf_content
                    width: 100%
                    .bfc_nav
                        width: 1000px
                        text-align: center
                        margin: 0 auto
                    .bfc_nav>li
                        width: 23%
                        display: inline-block
                        float: left 
                        line-height: 50px
                        font-size: 20px
                        margin: 10px
                        color: #ccc
                        font-weight: bold
                        cursor: pointer
                        background: #efecec
                        &.active
                            color: #fff
                            opacity: 1
                            background-image: linear-gradient(-90deg, #2f86f6, #98c4fd)
                    .bfc_nav>li:hover
                        color: #69a9fa
                        opacity: 1
                        background: #fff
                        
            .ci_img
                position: absolute 
                top: 30%
                left: 50%
                width: 25%
                height: 420px
                transform: translateX(-50%)
                .ci_ul
                    width: 100%
                .ci_ul>li
                    width: 100%
                    height: 420px
                    background: #fff
                    border-radius: 20px
                    &.active
                        animation: ro 0.3s ease 0.2s 1 alternate
                        @-webkit-keyframes ro
                            0%
                                transform: rotateY(0deg)
                            100%
                                transform: rotateY(180deg)
                    .ci_li
                        width: 100%
                        height: 100%
                        position: absolute
                        top: 0
                        left: 0
                        border-radius: 20px
                        background-size: 100% 100%
                        background-repeat: no-repeat

</style>
