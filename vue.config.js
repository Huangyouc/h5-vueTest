const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'localhost',
    port:'8080',
   proxy:{
    "/api":{
      changeOrigin:true,
      target:"https://www.runoob.com/",
      secure:false,
      pathRewrite:{
        '^/api':''
      }
    }
   }
  }
})
