<template>
  <div id="hello">
    <div id="app">
      <!-- <h1 :class={fontSize,fontColor}>{{tit}}</h1> -->
      <h1 :class="getStyle()">{{tit}}</h1>

      <label for="r1">修改颜色</label>

      <input type="checkbox" v-model="use" id="r1" />
      <div v-bind:class="{'class1': use}">
        v-bind:class 指令
      </div>

      <!-- <div >
        <form class="formtest" v-on:submit.prevent="onSubmit"></form>
      </div> -->
      <div id="watch_props">
        千米:<input type="text" v-model="kilometers" />
        米:<input type="text" v-model="meters" />
      </div>
      <p id="info"></p>
      <div v-bind:class="[activeClass,errorClass]"></div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'scrollTest',
  components: {},
  data() {
    return {
      use: false,
      tit: "this is title",
      // fontSize: "font-size:60px;",
      // fontSize: "fontSize",
      // fontColor: "color:beige;"
      fontSize: true,
      fontColor: true,
      kilometers: 0,
      meters: 0,
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  },
  methods: {
    getStyle() {
      var fontSize = this.fontSize;
      var fontColor = this.fontColor;
      return { fontSize, fontColor };
    },
  },
  watch: {
    kilometers(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      // 这个回调将在 vm.kilometers 改变后调用
      document.getElementById("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;

      this.kilometers = newValue;
      this.meters = this.kilometers * 1000;
    },
    // meters(value) {
    //   this.meters = value;
    //   this.kilometers = this.meters / 1000;
    // }
  },
}
</script>
  
<style>
.fontSize {
  font-size: 50px;
}

.fontColor {
  color: grey;
}

.class1 {
  color: red;
}

.formtest {
  background-color: #42b983;
  width: 100px;
  height: 50px;
}

.active {
	width: 200px;
	height: 100px;
	background: green;
}
.text-danger {
	background: red;
}

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