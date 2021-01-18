/**
 * @description 用户路由
 */

const router = require('koa-router')()

// 前缀
router.prefix = '/api/user'


router.post('/register', async (ctx, next) => {
    const { userName, password, email, avator, isAdmin} = ctx.request.body
    //=>c

})


module.exports = router