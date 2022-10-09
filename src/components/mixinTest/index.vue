<template>
  <div id="main">
    混入测试页面
  </div>
</template>

<script>
    import myMinxin from './mixinTt.vue'
    // var myMinxin={
    //     created(){
    //     console.log('来自Mixins中的消息')
    // }
    // }
    console.log(myMinxin)
 export default{
    name:"mixinTest",
    mixins:[myMinxin]
 }
</script>

<style>
#main {
    position: fixed;
    background-color: brown;
}
</style>