<template>
  <div id="hello">
    <div v-on:click="greet">
      点我
    </div>
    <div class="stopclass" v-on:click="clickStopParent">
      <div v-on:click.stop="clickStop">
        clickStop
      </div>
    </div>

    <div v-on:click.once="clickOnce">
      clickOnce
    </div>
    <div class="selfclass" v-on:click.self="clickSelf">
      <div v-on:click.self="clickSelfChild">
        clickSelfChild
    </div>
    </div>

    <div>
      <input v-model="age1" typ="number">{{age1}}
      <input v-model.lazy="age2" typ="number">{{age2}}
      <input v-model.trim="age3" typ="number">{{age3}}
    </div>
    
  </div>
</template>

<script>
export default {
  name: "eventTest",
  components: {},
  data(){
    return{
      age1:0,
      age2:0,
      age3:0
    }
  },
  methods: {
    greet(event) {
      alert(event.target.tagName)
    },
    clickStopParent() {
      alert('clickStopParent');
    },
    clickStop() {
      alert('clickStop');
    },
    clickOnce() {
      alert('clickOnce');
    },
    clickSelf() {
      alert('clickSelf');
    },
    clickSelfChild() {
      alert('clickSelfChild');
    },
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

.stopclass {
  height: 100px;
  width: 100px;
  background-color: aqua;
}
.selfclass{
  height: 100px;
  width: 100px;
  background-color: beige;
}
</style>