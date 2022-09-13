<template>
  <div class="hello">
    <h1>{{ subject }}</h1>
    <div>{{ content }}</div>
    <h1 id="gouwuche" @click="goShopCar">购物车</h1>
    <h1 @click="goImage">图片列表</h1>
    <h1 @click="scrollTest">滚动测试</h1>
    <h1 @click="eventTest">事件测试</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
          rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
          rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorldd',
  props: {
    content: {
      type: String,
      default: "happy birthday"
    },
    subject: String
  },
  methods: {
    goShopCar() {
      console.log('123456');
      this.$router.push('/shopCar');
      // // this.$router.push({name:'ShopCar'});
      // // this.$router.push({name:'PeachPage'});
      // this.$router.push('/PeachPage');
      // // this.$router.push({path:'/shopCar'});
    },
    goImage(){
      console.log('goImage');
      this.$router.push('/imagePage');
    },
    scrollTest(){
      console.log('scrollTest');
      this.$router.push('/scrollTest');
    },
    eventTest(){
      console.log('eventTest');
      this.$router.push('/eventTest');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gouwuche {
  color: aquamarine;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
