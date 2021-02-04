const Koa = require('koa')
const app = new Koa()
// const views = require('koa-views')
const path = require('path')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// jwt
const jwt = require('koa-jwt')
const { JWT_SECRET_KEY } = require('./conf/secretKeys')

// 引入路由
const index = require('./routes/index')
const userApiRouter = require('./routes/user')
const utilApiRouter = require('./routes/uploadUtils')

const cors = require('koa2-cors')

// error handler
onerror(app)


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(
  cors({
      origin: function(ctx) { //设置允许来自指定域名请求
          // if (ctx.url === '/test') {
              return '*'; // 允许来自所有域名请求
          // }
          // return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
      },
      maxAge: 5, //指定本次预检请求的有效期，单位为秒。
      credentials: true, //是否允许发送Cookie
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
// 图片保存路径
app.use(require('koa-static')(path.join(__dirname, '../uploadFiles')))

app.use(jwt({
  secret: JWT_SECRET_KEY
}).unless({
  path: [/^\/api\/user/]   //忽略那些不需要jwt的路由
}))

// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(userApiRouter.routes(), userApiRouter.allowedMethods())
app.use(utilApiRouter.routes(), utilApiRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
