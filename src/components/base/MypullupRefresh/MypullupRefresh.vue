<template>
  <div
    class="MypullupRefresh"
    ref="scrollBox"
    :style="style"
    @touchstart.stop.prevent="touchStart"
    @touchmove.stop.prevent="touchMove"
    @touchend="touchEnd">
    <div class="weui-pull-refreshing-box">
      <div class="text" v-if="moveState < 2">{{ msText }}</div>
      <div class="wordloading"v-if="moveState ===2"><i class="weui-loading"/> 加载中...</div>
      <div class="wordwancheng" v-if="moveState === 3"><i class="weui-loading"/>加载完成</div>
      <div class="wordwancheng" v-if="moveState === 4"><i class="weui-loading"/>没有更多数据</div>
    </div>
    <div class="weui-pull-present-box">
      <slot/>
    </div>
  </div>
</template>
 
<script>

  import eventVue from '@/common/js/event.js'

export default {
  name: 'MypullupRefresh',
  data () {
    return {
      startY: '',    //保存touch时的Y坐标
      moveDistance: 0,    //保存向下滑动的距离
      moveState: 0,        //开始滑动到结束后状态的变化 0:下拉即可刷新 1:释放即可刷新 2:加载中
      duration: 0,        //动画持续时间，0就是没有动画
    }
  },
  props: {
    array: {
      type: Array,
      default: []
    },
    isrsshow:{
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0,${this.moveDistance}px, 0)`
      }
    },
    msText(){
        return this.moveState === 0 ? '下拉即可刷新∨' : '释放即可刷新∧'
    }
  },
  methods: {
    touchStart (e) {
      this.duration = 0 // 关闭动画
      this.moveDistance = 0 // 滑动距离归0
      this.startY = e.targetTouches[0].clientY  // 获得开始Y坐标
    },
    touchMove (e) {    //这里是整个下拉刷新的核心
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        //首先判断我们有没有滚动条，如果有，我们下拉刷新就不能启用。
      if (scrollTop > 0) return
      let rt_content = document.querySelector('.rt_content')
      let move = e.targetTouches[0].clientY - this.startY
      
        //判断手指滑动的距离，只有为正数才代表用户下拉了。
      if (move > 0) {
        //阻止默认事件，在微信浏览器中尤为有用，至于为什么，你去试就知道了。
        //增加滑动阻力的感觉
        this.moveDistance = Math.pow(move, 0.8)
        //插槽里的div内容背景透明度的变化
        const opa = (move)/3700;
        rt_content.style = `opacity: ${opa}` 
        //console.log(opa)
        if (this.moveDistance > 120) {
        //如果滑动距离大于50 那我就告诉你，释放即可刷新
          if (this.moveState === 1) return
          this.moveState = 1
        } else {
        //否则 恢复原样
          if (this.moveState === 0) return;
          this.moveState = 0;
        }
      }
    },
    touchEnd (e) {
      // 只要手指拿开，我都需要加上结束时的动画，这里为300ms
      this.duration = 300
      let rt_content = document.querySelector('.rt_content')
      if (this.moveDistance > 120) {
        //这里逻辑跟touchMove一样，但是需要真的加载数据了，那moveState变为2 所以加载动画在这出现
        this.moveState = 2
        //因为还没加载完，我得让加载动画显示着，所以这里移动距离为50
        this.moveDistance = 120
        this.$emit('refresh', () => {
            //这里就是成功后的回调了，如果该函数被调用，那就以为着加载数据完成，所以状态要回到0，当然需要在父组件调用。
            rt_content.style = "opacity: 1"
            // for(var i=0;i<this.array.length;i++){
            //   console.log(i)
            // }
            clearInterval(timer)//当数据加载完成后清掉定时器
            eventVue.$emit('myArray',this.array)//兄弟组件间的传值方法
            //console.log(this.array)
            for (var i = 0; i < this.array.length; i++) {
              if((i+1)>=this.array.length){
                  //alert('没有更多数据')
                  //clearInterval(timero)
                  this.$emit('listenisrsshow')
              }
            }
            
            this.moveState = 0;
        })
        let timer = setInterval(()=>{
          this.moveState = 3
        },800)//加载完成后执行一下
      } else {
        //否则 给我老老实实恢复原样
        this.moveDistance = 0
        rt_content.style = "opacity: 1"
      }
      
    }
  },
  watch: {
    //这里是给用户操作返回的核心
    moveState (state) {
      //我们监听moveState的状态，
      //0意味着开始也意味着结束，这里是结束，并且只有动画生效我们才能 moveDistance 设为0，
      //为什么动画生效才行，因为动画生效意味着手指离开了屏幕，如果不懂去看touchEnd方法，这时
      //我们让距离变为0才会有动画效果。
      if (state === 0 && this.duration === 300) {
        this.moveDistance = 0
      }
    }
  }
}
</script>
<!-- css我就不讲了，你肯定比我厉害 -->
<style lang="stylus" scoped>
    .MypullupRefresh
        position: relative
        margin-top: -120px
        .weui-pull-refreshing-box
            line-height: 50px
            height: 50px
            font-size: 14px
            color: rgba(69,90,100,.6)
            text-align: center
            margin-bottom:20px
            .text
              font-size: 20px
              color: #fff
              font-weight: bold
            .wordloading
              display: block
              font-size: 20px
              color: #fff
              font-weight: bold
              background-color: rgba(255,255,255,.2)
              .weui-loading
                display: inline-block
                width: 30px
                height: 30px
                background-image: url(/static/img/Loado.gif)
                background-size: 100% 100%  
                line-height: 50px
                vertical-align: middle
            .wordwancheng
              display: block
              font-size: 20px
              color: #2397df
              font-weight: bold
              background-color: rgba(0,0,0,.7)
              .weui-loading
                display: inline-block
                width: 30px
                height: 30px
                background-image: url(/static/img/Loado.gif)
                background-size: 100% 100%  
                line-height: 50px
                vertical-align: middle
            .wow
              display: block
              font-size: 20px
              color: #fff
              font-weight: bold
</style>