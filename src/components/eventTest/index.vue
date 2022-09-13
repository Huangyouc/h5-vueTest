<template>
 <div id="hello">
    <div v-on:click="greet">
      点我
    </div>
 </div>
</template>

<script>
export default{
    name:"eventTest",
    components:{},
    methods:{
        greet(event){
            alert(event.target.tagName)
        }
    }
}
</script>

<style>
#hello {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  background-color: darkgrey;
}
</style>