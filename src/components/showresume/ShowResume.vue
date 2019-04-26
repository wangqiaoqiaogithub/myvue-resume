<template>
    <transition name="resume_display">  
        <div class="showresume">
            <mypullup-refresh @listenisrsshow="listenisrsshow" :isrsshow="isrsshow" :array="array" @refresh="refresh">
                <resume-top></resume-top>  
            </mypullup-refresh>
            <rebottom-main></rebottom-main>
            <prompt-box @listenisrsshow="listenisrsshow" :isrsshow="isrsshow"></prompt-box>
        </div>
    </transition>
</template>
<script>

    import resumeTop from '@/components/base/resumetop/resumetop.vue'
    import rebottomMain from '@/components/base/resumebm/rebottomMain.vue'
    import MypullupRefresh from '@/components/base/MypullupRefresh/MypullupRefresh.vue'
    import PromptBox from '@/components/base/promptbox/PromptBox.vue'

    export default {
        name: 'showresume',
        data(){
            return {
                array: [],
                isrsshow: false
            }
        },
        methods: {
            refresh(done){
                /**
                 * 下拉刷新主要思路
                 * 1.父组件通过props传值给子组件（下拉刷新组件）
                 * 2.再用$emit('同名',数组)派发$on('同名',(兄弟组件的数组)=>{this.数组=兄弟组件的数组})
                 * 实现兄弟组件之间的传值。
                 * 另一种实现方案则需要Vuex
                 */
                setTimeout(() => {
                    done()//我就想说这里，把状态归0
                    console.log(this.array)
                }, 1400)
            },
            listenisrsshow(){
                let prohibit = document.body||document.documentElement;
                this.$nextTick(()=>{
                    if(this.isrsshow===true){
                        prohibit.style="position: fixed"
                    }else{
                        prohibit.style="position: none"
                    }
                })
                return this.isrsshow = !this.isrsshow
            }
        },
        components: {
            resumeTop,
            rebottomMain,
            MypullupRefresh,
            PromptBox
        }
    }
</script>
<style lang="stylus" scoped>
    .showresume
        position: relative
        width: 100%
        background-image: linear-gradient(-90deg, #2f86f6, #98c4fd)
        &.resume_display-enter-active,&.resume_display-leave-active
            opacity: 1
            transform: translate3d(0,0,0)
        &.resume_display-enter,&.resume_display-leave-to
            opacity: 0
            transform: translate3d(0,100%,0)
            transition: all ease 0s
        .resumeTop
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100% 
</style>