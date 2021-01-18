/**
 * @description 用户路由
 */

const router = require('koa-router')()
const { register } = require('../controller/user')

// 前缀
router.prefix('/api/user')
// router.prefix('/api/user')


router.post('/register', async (ctx, next) => {
    const { userName, password, email, avator, isAdmin} = ctx.request.body
    ctx.body = await register({
        userName,
        password,
        email,
        avator,
        isAdmin
    })
})


module.exports = router