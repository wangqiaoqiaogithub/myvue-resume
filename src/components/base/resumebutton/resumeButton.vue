<template>
    <div class="resumebutton">
        <a @click="rw" @mouseover="reppleClick"  class="__cov-button-ripple" >
            {{step}}
            <span class="__cov-ripple" :class="{'animate': repple_button.animate}"></span>
        </a>
    </div>
</template>

<script>
export default {
  data () {
    return {
      repple_button: {
        animate: false
      }
    }
  },
  props:{
      step:{
          type: String
      }
  },
  methods: {
    reppleClick (e) {
      this.repple_button.animate = true
      let button = e.target
      let ripple = button.querySelector('.__cov-ripple')
      if (ripple) {
        let d = Math.max(button.offsetHeight, button.offsetWidth)
        let x = e.layerX - ripple.offsetWidth / 2
        let y = e.layerY - ripple.offsetHeight / 2
        ripple.setAttribute('style', 'height: ' + d + 'px; width: ' + d + 'px; top: ' + y + 'px; left: ' + x + 'px;')
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.repple_button.animate = false
        }, 660)
      })
    },
    rw(){
        this.$emit("routerClick")
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
.__cov-button-ripple
    border: none
    border-radius: 5px
    position: relative
    height: 70px
    line-height: 2em
    padding: 0 16px
    display: inline-block
    vertical-align: middle
    min-width: 200px
    background-image: linear-gradient(-90deg, #98c4fd, #2f86f6)
    overflow: hidden
    cursor: pointer
    font-size: 30px
    .__cov-ripple 
        display: block
        position: absolute
        background-image: linear-gradient(90deg, #98c4fd, #2f86f6)
        border-radius: 100%
        transform: scale(0)
        &.animate 
            animation: ripple 0.65s linear
            @keyframes ripple 
                100% 
                    opacity: 0
                    transform: scale(2.7)
    
</style>