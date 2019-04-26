<template>  
  <div class="resumemain">
    <progress-bar :callback="isOk" :stopVal="stopVal" :invital="invital" :step="step" :isShow="isShow"></progress-bar>
    <div class="rem-content">
      <div class="icon-jiantou" title="联系方式" @click="handleclick">
        <span class="ij_icon">∧</span>
      </div> 
      <my-avator></my-avator>
      <div class="resume_top base_background" v-html="stylecode">
      </div>
      <resume-editor class="resume_bottom base_background" :markdown="markdown"></resume-editor>
    </div>
    <contact-information @handleclick="handleclick" :showFlag="showFlag"></contact-information>
  </div>
</template>

<script>

import ResumeEditor from '@/components/resumeEditor/resumeEditor.vue'
import MyAvator from '@/components/base/avator/MyAvator.vue'
import ContactInformation from '@/components/base/contactinformation/ContactInformation.vue'
import ProgressBar from '@/components/base/progressbar/progressbar.vue'

export default {
  name: 'resumemain',
  data(){
     return {
      code: '',
      finalCode: `
body{
  position: relative;
}
.rem-content{
  padding-top: 10%!important;
}
.base_background{
  font-size: 40px;
}
.resume_bottom{
  color: #fff;
}
h2{
  text-shadow: 0 0 10px #737373;
}
h3{
  text-shadow: 0 0 10px #000; 
}
.RE_content{
  padding: 10px 0px;
}
.avator{                                
  width: 100%;
}
.RE_top{
  margin-top: 30px;
  text-shadow: 0 0 2px #eee;
}
.avator_content{
  border-radius: 50%;
}
h4{
  margin-bottom: 10px;
}
.__cov-button-ripple{
  color: #fff;
}
.rem-content{
  background-color: rgba(0,0,0,.7);
}
      `,
      htmlCode: `欢迎来到前端工程师2019求职简历(王乔乔)
      `,
      markdown: '',
      enableHtml: false,
      showFlag: false,
      isShow: false,
      step: 5,
      invital: 0,
      stopVal: 100,
      isOk: false
     }
  },
  created(){
    this.myone()
    this.showHtml()
  },
  methods: {
    myone(){
      var n = 0
      setInterval(()=>{
        this.code = this.finalCode.substring(0,n)
        n+=1
      })
    },
    showHtml:async function(){
      await this.mytwo()
      return new Promise((resolve, reject) => {
        this.enableHtml = true
        resolve()
      })
    },
    mytwo(){
      var n = 0
      setInterval(()=>{
        this.markdown = this.htmlCode.substring(0,n)
        n+=1
      },30)
    },
    handleclick(){
      return this.showFlag = !this.showFlag
    }
  },
  computed: {
    stylecode() {
      return `<style>${this.code}</style>`
    }
  },
  components: {
    ResumeEditor,
    MyAvator,
    ContactInformation,
    ProgressBar
  }
}
</script>

<style lang="stylus" scoped="scoped">
  .resumemain
    position: fixed
    width: 100%
    height: 100%
    background-image: url(/static/img/background.jpg)
    background-size: cover
    .rem-content
      position: relative
      width: 100%
      height: 100%
      background-repeat: no-repeat
      padding-top: 5%
      background-size: 3000px
      .icon-jiantou
        width: 140px
        line-height: 50px
        display: inline-block
        position: absolute
        top: 0
        left: 50%
        font-size: 40px
        color: #ffffff
        transform: translateX(-50%)
        cursor: pointer
        background-image: linear-gradient(-90deg,#98c4fd,#2f86f6)
        .ij_icon
          display: inline-block
          animation: plusein .5s ease .2s infinite alternate 
          @-webkit-keyframes plusein 
            0%
              transform: translate3d(0,0,0)
            100%
              transform: translate3d(0,-9px,0)
      .icon-jiantou:hover
        background-image: linear-gradient(-90deg,#2f86f6,#98c4fd)
</style>