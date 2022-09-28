<template>
    <div>
        <div id="test">这是一个组件</div>
        <div>{{message}}</div>
        <div>{{propC}}</div>
        <div>{{propE.message}}</div>
        <div>{{propF}}</div>
        <button v-on:click="incrementHandler">{{count}}</button>
        <div>自定义v-model</div>
        <div >这是一个组件</div>
        <input
       ref="input"
       :value="value" 
       @input="$emit('input', $event.target.value)"
      >
    </div>
</template>

<!-- 由于 v-model 默认传的是 value，不是 checked，所以对于复选框或者单选框的组件时，我们需要使用 model 选项，model 选项可以指定当前的事件类型和传入的 props。 -->

<script>
export default {
    name: "testTest",
    props: {
        value:Number,
        message: String,
        propC: {
            type: Number,
            required: true
        },
        // 带有默认值的对象
        propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { message: 'hello' }
            }
        },
        // 自定义验证函数
        propF: {
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
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