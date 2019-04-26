<template>
    <div class="resumetop">
        <div class="rt_content">
            <my-avator class="rt_avator"></my-avator>
            <h1 class="rt_title rt_percent">
                前端工程师2019求职简历
            </h1>
        </div>
    </div>
</template>
<script>

import MyAvator from '@/components/base/avator/MyAvator.vue'

export default {
    data(){
        return{
        }
    },
    name: 'resumetop',
    components: {
        MyAvator
    }
}
</script>
<style lang="stylus" scoped="scoped">
    .rt_content
        padding: 45px 50px 25px
        .rt_title
            color: #fff
            font-size: 50px 
            font-weight: bold
        .rt_avator
            .avator_content
                border-radius: 10px
</style>