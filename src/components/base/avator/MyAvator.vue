<template>
    <div class="avator">
        <div class="avator_content">
        </div>
    </div>   
</template>
<script type="text/ecmascript-6">


export default {
    name: 'avator',
    data(){
        return{ 
        }
    }
    
}
</script>
<style lang="stylus" scoped="scoped">
    .avator
        .avator_content
            margin: 80px auto 0px
            width: 150px
            height: 150px
            background-image: url(/static/img/avator.jpg)
            background-size: cover
            border: 2px solid #fff

</style>
