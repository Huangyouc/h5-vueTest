<template>
    <div id="hello">
        <div>组件测试</div>
        <testTest message="123" v-bind:propC="proppCc" v-bind:propE="proppEe" propF="success" v-on:increment1="incrementTotal"></testTest>
    
    <div>total={{total}}</div>
    <testTest v-on:click.native="dothething" :propC="proppCc"></testTest>
    <testTest :propC="proppCc" v-model="num"></testTest>
    <div>{{num}}</div>

    <testTest2 v-model="lovingVue"></testTest2>
    <div v-show="lovingVue"> 
        如果选择框打勾我就会显示。 
    </div>
    </div>
</template>
<script>
    import testTest from "./test.vue"
    import testTest2 from "./test2.vue"
export default {
    name: "componentTest",
    components:{
        testTest,
        testTest2
    },
    data(){
        return{
           proppCc:456777,
           proppEe:{
            message: "bbbbb"
           },
           total:0,
           num:100,
           lovingVue: true
        }
    },
    methods:{
        incrementTotal(){

            this.total++;
            
        },
        dothething(){
            alert('dothething')
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
</style>