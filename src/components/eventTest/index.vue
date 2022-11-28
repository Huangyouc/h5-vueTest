<template>
  <div id="hello">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
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
    
    <div id="heightdemo" @click="checkSafeArea">
         121212121
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
    clickdiv() {
      // var height=document.getElementById("heightdemo").offsetHeight
      // document.getElementById("heightdemo").innerText=height;
      alert('evn(safe-area-inset-top)');
    },
    checkSafeArea() {
  const $body = $(document.body);
  const $div = $('<div style="padding-top: env(safe-area-inset-top); padding-top: constant(safe-area-inset-top);"></div>');

  $div.appendTo($body);

  const safeAreaInsetTop = $div.outerHeight();

  if (!safeAreaInsetTop) {
    $body.addClass('app-android-safe-area');
  }

  $div.remove();
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
#heightdemo{
    padding-top:40px;
    background-color: blue;
}
#heightdemo{
  padding-top:constant(safe-area-inset-top);
  padding-top:evn(safe-area-inset-top);
  /* padding-top:10px; */
  /* height:50px; */
  background-color: blue;
}
body.app-ts-mobile{
  margin-top: 20px;
  margin-top: constant(safe-area-inset-top);
  margin-top: env(safe-area-inset-top);
}

body.app-ts-mobile.app-android-safe-area{
  margin-top: 20px;
}

</style>