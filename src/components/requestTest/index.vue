<template>
  <div id="main">
    <div @click="requestJson">点击请求json</div>
    <a href="https://www.runoob.com/try/ajax/json_demo.json">ssssss</a>
    <h1></h1>
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
          // 创建script节点
    // let script = document.createElement("script")
    // script.id = "jsonp"
    // script.innerHTML="121212"
    // script.src = "https://www.runoob.com/try/ajax/json_demo.json"
    // // 将script节点添加到DOM树中，否则该节点不会生效
    // document.body.appendChild(script)
    // this.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    //      this.axios.get('api/try/ajax/json_demo.json')
    //               .then(function(response){
    //                   console.log(response.data)    
    //               })
    //               .catch(function(err){
    //                   console.log(err)   
    //               })

    this.axios({
      url:"api/try/ajax/json_demo.json",
      method:"get",
      headers:{//设置请求头
                          'X-Client-Info':' {"a":"3000","ch":"1002","v":"5.0.4","e":"15611234619393093477584"}',
                          'X-Host': 'www.runoob.com',
                          'Access-Control-Allow-Origin': '*',
                          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
                          'Access-Control-Allow-Headers':'x-requested-with,content-type',
                          'Content-Type' : 'application/json;charset=utf-8'
                      },
    }).then(data=>console.log(data)).catch(err=>console.log(err))
        },
        getData(data){
           let script = document.getElementById("jsonp")
        script.parentNode.removeChild(script)  //移除该新创的节点
        console.log(data)
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
