<template>
    <div class="promptbox" v-if="isrsshow">
        <div class="pb_content">
            <div class="pb_dblock">
                <p class="dp_p">信息提示</p>
                <div class="dp_main">
                    <p class="dp_p1" v-text="pbtext"></p>
                </div>
                <div class="dp_btn" @click="pd_handleclick">
                    确定
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import eventVue from '@/common/js/event.js'
export default {
    data(){
        return{
        }
    },
    props:{
        isrsshow:{
            type: Boolean,
            default: false
        },
        pbtext:{
            type: String,
            default: '抱歉暂无更多数据!'
        }
    },
    methods:{
        pd_handleclick(){
            this.$emit('listenisrsshow')
            console.log(this.isrsshow)
            
        }
    },
    name:'promptbox'
}
</script>
<style lang="stylus" scoped="scoped">
    .pb_content
        position: fixed
        top: 0
        left: 0 
        width: 100%
        height: 100%
        background: rgba(0,0,0,.9)
        .pb_dblock
            position: absolute
            top: 0
            left: 0
            bottom: 0
            right: 0
            display: block
            width: 300px
            height: 150px
            background: #ffffff
            border-radius: 10px
            margin: auto
            .dp_p
                padding-top: 15px
                font-size: 20px
            .dp_main
                font-size: 18px
                line-height: 56px
                .dp_p1
                    color: #808080
            .dp_btn
                border-top: 1px solid #ccc
                font-size: 22px
                line-height: 50px
                color: #2397df
                letter-spacing: 1px
</style>
