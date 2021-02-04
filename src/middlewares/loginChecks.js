/**
 * @description 登录验证的中间件
 * @author king
 */

const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')
const { isEmpty, tokenDeci } = require('../utils/wbutils')

/**
 * API验证登录
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginCheck(ctx, next) {
    const token = ctx.request.header.authorization
    if (isEmpty(token)) {
        // 空
        ctx.body = new ErrorModel(loginCheckFailInfo)
    } else {
        // 非空 执行下一步
        await next()
        return
    }
}

module.exports = {
    loginCheck
}