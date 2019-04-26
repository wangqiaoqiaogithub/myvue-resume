<template>
    <div class="resumebanner">
        <transition name="zhanshi">  
            <div v-if="rbshow" class="banner_outermost">
                <ul>
                    <li v-for="(rmbs,index) in bannerA" v-if="index === isindex" :key="rmbs.id" class="bannerbox">
                        <ul>
                            <li ref="wowt" v-for="(banners,index) in rmbs.bannerimg" :key="index" v-show="index===bannervalue" class="bbimg">
                                <img width="100%" height="100%" :src="banners.img_url" alt="banner_图片">
                            </li>
                        </ul>
                    </li>
                </ul>
                    <span @click="up" class="banner_left iconfont icon-jiantouzuo"></span>
                    <span @click="next" class="banner_right iconfont icon-jiantouyou"></span>
                <div @click="acceptrb" class="rbs_false">
                    <span class="iconfont icon-chahao">
                    </span>
                </div>
            </div>
        </transition>
    </div>  
</template>
<script>
    export default {
        data(){
            return{
                bannervalue: 0,
                bannerA: []
            }
        },
        props:{
            rbshow: {
                type: Boolean,
                default: false
            },
            rmb: {
                type: Array,
                default: function(){
                    return []
                }
            },
            isindex: {
                type: Number,
                default: 0
            }
        },
        created(){
            this.bannera()
        },
        updated(){
            this.rbfixed()
        },
        methods:　{
            change(key){
                console.log(this.$refs.wowt)
                if(key>(this.$refs.wowt.length-1)){
                    key = 0;
                }
                if(key < 0){
                    key = this.$refs.wowt.length-1;
                }
                this.bannervalue=key;
                //将当前组件中的下标赋值给形参key使其能相互映射
            },
            acceptrb(index) {
                this.$emit('rbclick',this.isindex);
                //this.$emit('定义的函数',函数本身参数//也可以是父组件传来的值)
            },
            rbfixed(){
                var body = document.body;
                if(this.rbshow === true){
                    body.style="position: fixed";//当浮窗现实的时候让那个body不能滚动
                }else{
                    body.style="position: none";
                }
            },
            up(){
                //递减
                --this.bannervalue;
                this.change(this.bannervalue);
            },
            next(){
                //递增
                ++this.bannervalue;
                this.change(this.bannervalue);
            },
            bannera(){
                var bannerA = this.bannerA;
                for(let i in this.rmb) {
                    // 键
                    console.log(i);
                    //值
                    //console.log(this.rmb[i]);
                    bannerA.push(this.rmb[i])
                }
                console.log(this.bannerA)
            }
        },
        computed: {
        },
        name:'resumebanner' 
    }   
</script>
<style lang="stylus" scoped="scoped">
    .banner_outermost
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-image: linear-gradient(-90deg, #2f86f6, #98c4fd)
        z-index: 10
        &.zhanshi-leave-active,&.zhanshi-enter-active
            opacity: 1
            transform: translate3d(0,0,0)
        &.zhanshi-leave-to,&.zhanshi-enter
            opacity: 0
            transform: translate3d(0,100%,0)
        .bannerbox
            position: fixed
            width: 80%
            top: 50%
            left: 50%
            transform: translate3d(-50%,-50%,0)
            height: 70%
            background: #fff
            .bbimg
                position: absolute
                width: 100%
                height: 100%
        .banner_left
            display: block
            position: absolute
            width: 5%
            left: 0
            top: 50%
            font-size: 30px
            line-height: 3rem
            color: #fff
            cursor: pointer
            transform: translate3d(0,-50%,0)
        .banner_right
            display: block
            position: absolute
            width: 5%
            top: 50%
            right: 0
            line-height: 3rem
            font-size: 30px
            color: #fff
            cursor: pointer
            transform: translate3d(0,-50%,0)
        .rbs_false
            position: absolute
            bottom: 0
            left: 50%
            width: 20%
            border-radius: 2px
            transform: translate3d(-50%,0,0)
            .iconfont
                display: block
                width: 100%
                line-height: 60px
                font-size: 50px
                color: #fff
                cursor: pointer
                box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2)
                -webkit-box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2)
                -ms-box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2)
                -o-box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2)
</style>
