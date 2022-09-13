<template>
  <div id="main">
    <meta name="referrer" content="no-referrer" />
   
      <div @click="getImageList">点击获取图片列表</div>
      <div v-if="this.data.length>0">
        <div v-for="item in data" :key="item.id">
          <div>
            <h3>{{item.title}}</h3>
            <img :src="item.url" alt="" style="width:200px;height:100px" />
          </div>
        </div>
      </div>
      <div v-else>暂无数据</div>
    
  </div>

</template>
<script>

export default {
  name: "requestImage",
  components: {
    
  },
  data() {
    return {
      data: [] // 属性data用于存储请求返回来的数据，默认值null
    }
  },
  methods: {
    getImageList() {
      const url = "https://api.apiopen.top/api/getImages?page=0&size=10";
      this.axios.get(url)
        .then((result) => {
          console.log(result);
          this.data = result.data.result["list"];
          console.log('data>>>>>>>>>>');
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
<style>
#main {
  position: fixed;
  top: 0px;

}
</style>