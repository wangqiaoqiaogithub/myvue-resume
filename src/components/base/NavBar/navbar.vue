<template>
    <div class="navbar">
        <transition name="fold">    
            <div v-if="navshow" class="navbar_container">
                <div @click="avatorscroll" class="nbc_bgimage" :style="{backgroundImage: 'url('+navbaravator+')'}">
                </div>
                <ul class="navul">
                    <li @click="showLoading(index)" v-for="(res,index) in resumetitle" :key="res.id">{{res.text}}</li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                navshow: false,
                navbaravator: './static/img/avator.jpg'
            }
        },
        props: {
            resumetitle: {
                type: Array,
                default: []
            },
            isActive: {
                type: Number,
                default: 0
            }
        },
        created(){
            var body =  document.documentElement|| document.body;
            body.addEventListener('scroll',this.handleScroll,true)
            //向document添加滚动事件
        },
        methods: {
            handleScroll(){
                let topscroll = document.documentElement.scrollTop; 
                if(topscroll >= 200){
                    this.navshow = true
                }else{
                    this.navshow = false
                }
            },
            avatorscroll(){
                //document.body.scrollTop = document.documentElement.scrollTop = 0;
                let timer = setInterval(()=>{
                    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                    var ispeed=Math.floor(-scrollTop/5);
                    //console.log(ispeed)
                    if(scrollTop===0){
                        clearInterval(timer);
                    }
                    document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
                },10)
            },
            showLoading(index){
                //this.isActive = index
                this.index = index
                this.$emit('wow',index)//this.$emit('定义的函数',函数本身参数)
            }
        },
        name: 'navbar'
    }
</script>
<style lang="stylus" > 
    .navbar_container
        position: fixed
        top: 0
        left: 0
        width: 100%
        background-color: rgba(83,156,214,.9)
        padding: 20px 0px
        &.fold-enter-active,&.fold-leave-active
            opacity: 1
            transform: translate3d(0,0,0)
        &.fold-enter,&.fold-leave-to
            opacity: 0
            transform: translate3d(0,-100%,0)
        .nbc_bgimage
            position: absolute
            top: 50%
            left: 50%
            width: 100px
            height: 100px
            background-size: cover
            border-radius: 100%
            -webkit-border-radius: 100%
            -o-border-radius: 100%
            -ms-border-radius: 100%
            cursor: pointer
            transform: translate3d(-50%,-50%,0)
        .navul
            width: 50%
            margin: 0 auto
        .navul>li
            width: 30%
            float: left
            line-height: 70px
            background: #fff
            margin-left: 10%
            margin-right: 10%
            cursor: pointer
</style>
