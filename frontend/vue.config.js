/*
 * @Date: 2022-12-07 17:29:15
 * @LastEditors: 李志祥
 * @LastEditTime: 2022-12-08 11:50:35
 * @FilePath: \electron-egg\frontend\vue.config.js
 */
module.exports = {
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    //zhengkai.blog.csdn.net
    runtimeCompiler: true,
    configureWebpack: (config) => {
      config["performance"] = {
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000,
      }
    },
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          //args[0].title= '' // 设置title
          return args
        })
    },
    css: {
      loaderOptions: {
          less: {
              modifyVars: {
                //在此处设置，也可以设置直角、边框色、字体大小等
                'primary-color': '#9E2F02',
              },
              javascriptEnabled: true
          }
      }
    },  
  }