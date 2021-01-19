/**
 * @description 用户路由
 */

const router = require('koa-router')()
const { register, isUserExist } = require('../controller/user')

// 前缀
router.prefix('/api/user')

// 注册
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

router.post('/isExist', async (ctx, next) => {
    const { userName } = ctx.request.body
    ctx.body = await isUserExist(userName)
})


module.exports = router