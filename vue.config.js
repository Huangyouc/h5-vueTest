const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open: true,
      host: 'localhost',
      port: 8080,
      https: true,
   proxy:{
    "/api":{
      changeOrigin:true,
      target:"https://www.runoob.com",
      pathRewrite:{
        '^/api':''
      }
    }
   }
  }
})
