<template>
  <div>
    <div id="appl">
      <img alt="Vue logo" src="./assets/logo.png"/>
      <HelloWorldd subject="121211111" content="1qwqwqwq" />
      <!-- <ShopCar/> -->
      <h3>mssssss</h3>
      <div id="hyc">
        <h1>hycccc</h1>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import HelloWorldd from './components/HelloWorld.vue'
// import ShopCar from './components/shopCar/index.vue';
export default {
  name: 'HycBb',
  components: {
    HelloWorldd,
    // ShopCar
  }
}
</script>

<style>
#appl {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#hyc {
  text-align: right;
  margin-right: 100px;
}
</style>
