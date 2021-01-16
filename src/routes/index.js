const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = '这是首页'
})

module.exports = router
