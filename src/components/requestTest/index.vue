<template>
  <div id="main">
    <div @click="requestJson">点击请求json</div>
  </div>
</template>
<script>
 export default{
    name:"requestTest",
    data(){
        return{
            data:true
        }
    },
    created(){
            console.log("mounted")
    },
    mounted(){
       console.log("mounted");
    },
    methods:{
        requestJson(){
         this.axios.get('try/ajax/json_demo.json')
                  .then(function(response){
                      console.log(response.data)    
                  })
                  .catch(function(err){
                      console.log(err)   
                  })
        }
    }
 }
</script>
 
<style>
#main {
  position: fixed;
  background-color: aliceblue;
}
</style>
