<template>
 <div id="main">
  <router-link to="/scrollTest" active-class="router-active">11111</router-link>
  <br/>
  <br/>
  <router-link to="/routerTest" exact-active-class="router-active">22222</router-link>
  <br/>
  <br/>
  <router-link to="/routerTest/1" exact-active-class="router-active">33333</router-link>
  <br/>
  <br/>
  <router-link to="/routerTest" active-class="router-active">44444</router-link>
 </div>
</template>

<script>
  export default{
    name:"routerTest"
  }
</script>

<style>
#main {
  position: fixed;
  top: 0px;

}
.router-active{
      background-color : red;
   }
</style>