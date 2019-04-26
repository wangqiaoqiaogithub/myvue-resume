<template>
  <div class="resumeEditor">
    <div class="RE_top" v-html="markdown"></div>
    <div class="RE_content">
      <h2 class="clearfix" v-html="markdowno"></h2>
      <h3 class="clearfix" v-html="markdownn"></h3>
      <h4 class="clearfix" v-html="markdownt"></h4>
    </div>
    <resume-button @routerClick="rc" :step="step"></resume-button>
  </div>
</template> 
<script>

  import resumeButton from '@/components/base/resumebutton/resumeButton.vue'

  export default {
    data(){
      return {
        htmlCodeo: `我来自国家开放大学`,
        markdowno: '',
        htmlCodet: `下面来进入我的简历吧`,
        markdownt: '',
        htmlCoden: `学习前端二年非常热爱前端这个大家庭`,
        markdownn:'',
        step: '我的简历'
      }
    },
    props: ['markdown'],
    name: 'ResumeEditor',
    created() {
      this.showresumeone()
      this.showresumetwo()
      this.showresumethree()
    },
    methods: {
      showresumeone(){
        var n = 0
        setInterval(()=>{
          this.markdowno = this.htmlCodeo.substring(0,n)
          n+=1
        },200)
      },
      showresumetwo(){
        var n = 0
        setInterval(()=>{
          this.markdownt = this.htmlCodet.substring(0,n)
          n+=1
        },200)
      },
      showresumethree(){
        var n = 0
        setInterval(()=>{
          this.markdownn = this.htmlCoden.substring(0,n)
          n+=1
        },200)
      },
      rc(){
          this.$router.push({ path: '/re'})
      }
    },
    components: {
      resumeButton
    }
  }
</script>

<style scoped>
  @media (max-width:500px){
    .resumeEditor{
    }
  }
  .htmlMode {
    animation: flip 2s;
  }
  @keyframes flip {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .RE_bottombtn{
    display: inline-block;
    cursor: pointer;
    background: #5a88ba;
    padding: 10px 40px;
    margin-top: 5px;
  }
  .RE_bottombtn:hover{
    background: #abcbec;
  }
</style>