/**
 * @description 用户路由
 */

const router = require('koa-router')()
const { register, isUserExist, login, tokenToUserInfo } = require('../controller/user')

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

router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body
    ctx.body = await login(userName, password)
})

router.post('/getUserInfo', async (ctx, next) => {
    // 获取在header中的token
    const token  = ctx.request.header.authorization
    ctx.body = await tokenToUserInfo(token)
})


module.exports = router