import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
//use：将第三方模块 注入到Vue实例对象中的方法
Vue.use(VueAxios, axios)