(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"使用vue-cli3-0创建vue项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用vue-cli3-0创建vue项目"}},[e._v("#")]),e._v(" 使用vue-cli3.0创建vue项目")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("vue create <project-name>\n")])])]),n("p",[e._v("可以通过vue ui创建项目／管理项目依赖 vue ui")]),e._v(" "),n("h3",{attrs:{id:"配置vue-config-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置vue-config-js"}},[e._v("#")]),e._v(" 配置vue-config.js")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let path = require('path')\nmodule.exports = {\n    publicPath:process.env.NODE_ENV === 'production'? '/vue-project':'/',\n    outputDir:'myassets', // 输出路径\n    assetsDir:'static', // 生成静态目录的文件夹\n    runtimeCompiler: true, // 是否可以使用template模板\n    parallel:require('os').cpus().length > 1, //多余1核cpu时 启动并行压缩\n    productionSourceMap:false, //生产环境下 不使用soruceMap\n\n    // https://github.com/neutrinojs/webpack-chain\n    chainWebpack:config=>{\n        // 控制webpack内部配置\n        config.resolve.alias.set('component',path.resolve(__dirname,'src/components'));\n    },\n    // https://github.com/survivejs/webpack-merge\n    configureWebpack:{\n        // 新增插件等\n        plugins:[]\n    },\n    devServer:{ // 配置代理\n        proxy:{\n            '/api':{\n                target:'http://a.zf.cn:3000',\n                changeOrigin:true\n            }\n        }\n    },\n    // 第三方插件配置\n    pluginOptions: {\n                'style-resources-loader': {\n                        preProcessor: 'less',\n                        patterns: [\n                // 插入全局样式\n                path.resolve(__dirname,'src/assets/common.less'), \n                        ],\n                }\n        }}\n")])])]),n("h3",{attrs:{id:"_1-什么是jwt？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是jwt？"}},[e._v("#")]),e._v(" 1.什么是jwt？")]),e._v(" "),n("ul",[n("li",[e._v("JSON Web Token（JWT）是目前最流行的跨域身份验证解决方案\n"),n("strong",[e._v("解决问题")]),e._v("：session不支持分布式架构，无法支持横向扩展，只能通过数据库来保存会话数据实现共享。如果持久层失败会出现认证失败。\n"),n("strong",[e._v("优点")]),e._v("：服务器不保存任何会话数据，即服务器变为无状态，使其更容易扩展。")])]),e._v(" "),n("h4",{attrs:{id:"jwt包含了使用-分隔的三部分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jwt包含了使用-分隔的三部分"}},[e._v("#")]),e._v(" JWT包含了使用.分隔的三部分")]),e._v(" "),n("ul",[n("li",[e._v("Header 头部")]),e._v(" "),n("li")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{ "alg": "HS256", "typ": "JWT"}   \n// algorithm => HMAC SHA256// type => JWT\n')])])]),n("ul",[n("li",[e._v("Payload 负载、载荷")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("JWT 规定了7个官方字段\niss (issuer)：签发人\nexp (expiration time)：过期时间\nsub (subject)：主题\naud (audience)：受众\nnbf (Not Before)：生效时间\niat (Issued At)：签发时间\njti (JWT ID)：编号\n")])])]),n("ul",[n("li",[e._v("Signature 签名")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('HMACSHA256(\n  base64UrlEncode(header) + "." +\n  base64UrlEncode(payload),\n  secret)\n')])])]),n("p",[e._v("JWT 作为一个令牌（token），有些场合可能会放到 URL（比如 api.example.com/?token=xxx）。Base64 有三个字符+、/和=，在 URL 里面有特殊含义，所以要被替换掉：=被省略、+替换成-，/替换成_ 。这就是 Base64URL 算法。")]),e._v(" "),n("h4",{attrs:{id:"使用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),n("p",[e._v("HTTP 请求的头信息Authorization字段里面")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Authorization: Bearer <token>\n")])])]),n("p",[e._v("通过url传输")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("http://www.xxx.com/pwa?token=xxxxx\n")])])]),n("h3",{attrs:{id:"_2-服务端返回token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务端返回token"}},[e._v("#")]),e._v(" 2.服务端返回TOKEN")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let express = require('express');let app = express();let bodyParser = require('body-parser');let jwt = require('jsonwebtoken');\napp.use((req,res,next)=>{\n    res.header(\"Access-Control-Allow-Origin\", \"http://localhost:8080\");\n    res.header(\"Access-Control-Allow-Methods\", \"GET,HEAD,OPTIONS,POST,PUT\");\n    res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept, Authorization\");\n    if(req.method.toLowerCase() === 'options'){\n        return res.end();\n    }\n    next();})\napp.use(bodyParser.json());let secret = 'zfjg';\napp.get('/test',(req,res)=>{\n    res.end({test:'test'})})\napp.post('/login',(req,res)=>{\n   let {username} = req.body;\n   if(username === 'admin'){ // 如果访问的是admin 种植cookie\n        res.json({\n            code:0,\n            username:'admin',\n            token:jwt.sign({username:'admin'},secret,{\n                expiresIn:20  \n            })\n        })\n   }else{\n       res.json({\n           code:1,\n           data:'用户名不存在'\n       })\n   }});\napp.get('/validate',(req,res)=>{\n    let token = req.headers.authorization;\n    jwt.verify(token,secret,(err,decode)=>{ // 验证token的可靠性\n        if(err){\n            return res.json({\n                code:1,\n                data:'token失效了'\n            })\n        }else{\n            res.json({\n                username:decode.username,\n                code:0, // 延长tokne的过期时间\n                token:jwt.sign({username:'admin'},secret,{\n                    expiresIn:20\n                })\n            })\n        }\n    });});\n\napp.listen(3000);\n")])])]),n("h3",{attrs:{id:"_3-路由配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-路由配置"}},[e._v("#")]),e._v(" 3.路由配置")]),e._v(" "),n("ul",[n("li",[e._v("Home.vue 首页")]),e._v(" "),n("li",[e._v("Profile.vue 个人中心")]),e._v(" "),n("li",[e._v("Login.vue 登录页面")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export default new Router({\n  mode: 'history',\n  base: process.env.BASE_URL,\n  routes: [\n    {\n      path: '/',\n      name: 'home',\n      component: Home,\n    },\n    {\n      path: '/profile',\n      name: 'profile',\n      component: Profile,\n      meta: { needLogin: true }, // 必须要登录才能访问\n    },\n    {\n      path: '/login',\n      name: 'login',\n      component: Login,\n    },\n  ],});\n")])])]),n("h3",{attrs:{id:"_4-axios封装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-axios封装"}},[e._v("#")]),e._v(" 4.axios封装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import axios from 'axios';\n\n\nclass FetchData {\n  constructor() {\n    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'; // 请求路径 \n    this.timeout = 3000; // 设置超时时间\n  }\n\n  setInterceptor(instance) { // 设置拦截器\n    instance.interceptors.request.use(config => {\n      config.headers.Authorization = `${localStorage.getItem('token')}`;\n      return config; // 增加token\n    }, (err) => {\n      Promise.reject(err);\n    });\n\n    instance.interceptors.response.use(res => res.data, (err) => {\n      Promise.reject(err);\n    });\n  }\n\n  request(request) {\n    const instance = axios.create();\n    const config = {\n      baseURL: this.baseURL,\n      timeout: this.timeout,\n      ...request,\n    }; // 合并配置\n    this.setInterceptor(instance);\n    return instance(config);\n  }}\n\nexport default new FetchData();\n")])])]),n("h3",{attrs:{id:"_5-测试接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试接口"}},[e._v("#")]),e._v(" 5.测试接口")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export const getTest = () => fetchData.request({ url: '/test' });export const login = username => fetchData.request({\n  url: '/login',\n  method: 'POST',\n  data: {\n    username,\n  },});\n  export const validate = () => fetchData.request({ url: '/validate' });\n")])])]),n("h3",{attrs:{id:"_6-在vuex中发送请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-在vuex中发送请求"}},[e._v("#")]),e._v(" 6.在vuex中发送请求")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export default new Vuex.Store({\n  state: {\n    username: '',\n  },\n  mutations: {\n    setUsername(state, username) {\n      state.username = username;\n    },\n  },\n  actions: {\n    async login({ commit }, username) {\n      const r = await login(username); // 登录成功后返回用户名信息\n      if (r.token) { // 如果有返回token说明成功\n        commit('setUsername', username); // 将用户存入state中\n        localStorage.setItem('token', r.token); // 将token存放起来\n      } else { // 否则返回失败的promise\n        return Promise.reject(r);\n      }\n    },\n  },});\n")])])]),n("h3",{attrs:{id:"_7-权限认证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-权限认证"}},[e._v("#")]),e._v(" 7.权限认证")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("async validate({ commit }) {\n    const r = await validate();\n    if (r.code === 1) {\n        return false;\n    }\n    commit('setUsername', r.username);\n    localStorage.setItem('token', r.token); // 将token存放起来\n    return true;\n}\n")])])]),n("p",[e._v("判断用户访问权限")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("router.beforeEach(async (to, from, next) => {\n  // 如果不需要校验可以设置白名单\n  const isLogin = await store.dispatch('validate');\n  if (isLogin) {\n    // 如果是登录\n    if (to.name === 'login') {\n      next('/profile');\n    } else {\n      next();\n    }\n  } else {\n    const flag = to.matched.some(item => item.meta.needLogin);\n    if (flag) {\n      next('/login');\n    } else {\n      next();\n    }\n  }\n});\n")])])]),e._v(" "),n("comment-comment"),e._v(" "),n("comment-comment"),e._v(" "),n("comment-comment"),e._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);t.default=s.exports}}]);