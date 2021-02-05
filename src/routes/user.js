/**
 * @description 用户路由
 */

const router = require('koa-router')()
const { register,
    isUserExist,
    login,
    tokenToUserInfo,
    getAllUser } = require('../controller/user')
const { loginCheck } = require('../middlewares/loginChecks')

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

router.get('/getAllUsers', loginCheck, async(ctx, next) => {
    ctx.body = await getAllUser()
})


module.exports = router