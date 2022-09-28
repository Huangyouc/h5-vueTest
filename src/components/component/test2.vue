<template>
   <div>
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
</div>
</template>

<!-- 由于 v-model 默认传的是 value，不是 checked，所以对于复选框或者单选框的组件时，我们需要使用 model 选项，model 选项可以指定当前的事件类型和传入的 props。 -->

<script>
export default {
    name: "testTest2",
    model: {
    prop: 'checked',
    event: 'change'  // onchange 事件
  },
  props: {
    checked: Boolean
  },
    data(){
        return{
            count:0,
        }
    },
    methods:{
        incrementHandler(){
            this.count++;
            this.$emit('increment1');
        }
    }
}
</script>
<style>
#test {
    background-color: blueviolet;
    height: 100px;
    width: fit-content;
}
</style>