<template>
    <transition name="fade">  
        <div class="progressbar" v-show="isShow">
            <span class="pb_activity"></span>
        </div>
    </transition>
</template>
<script>
    export default {
        data(){
            return {
                isShow: true,//是否显示进度条
                val: 0,//进度
            }
        },
        props: {
            //每10ms自增幅度
            step: {
                type: Number,
                default: 5
            },//初始值
            invital: {
                type: Number,
                default: 0
            },//到一定进度停止
            stopVal: {
                type: Number,
                default: 80
            },//进度条继续到成功
            isOk: {
                type: Boolean,
                default: false
            }
        },
        mounted(){//组件注册加载完成执行
            this.pbloading()
        },
        methods:{
            pbloading(){
                // 初始化后加载进度，加载到百分之多少由stopVal决定
                this.val = this.invital
                let step = this.step
                let timer = setInterval(() => {
                    this.val = this.val + step
                    this.$el.style.width = this.val + '%'
                    //父组件数据加载完
                    if (this.val >= this.stopVal) {
                        clearInterval(timer)
                        this.isShow = false
                        return
                    }
                },60)
            }
        },  
        name:'progressbar' 
    }
</script>
<style lang="stylus" scoped="scoped">
    .progressbar
        top: 0
        height: 4px
        width: 0
        background-color: #98c4fd
        &.fade-enter-active,&.fade-leave-active
            transition: all .3s
        &.fade-enter,&.fade-leave-to
            opacity: 0
        .pb_activity
            position: fixed
            top: 10px
            right: 10px
            z-index: 2000
            display: block
            width: 10px
            height: 10px
            border-radius: 10px
            border: 2px solid transparent
            border-top-color: #006fff
            border-left-color: #006fff
            animation: pbactive .4s linear infinite
            @keyframes pbactive
                0%
                    transfrom: rotate(0)
                100%
                    transform: rotate(360deg)
</style>    
