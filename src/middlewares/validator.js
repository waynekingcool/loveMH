/**
 * @description 用户信息验证
 * @author king
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

function genValidator(validateFn) {
    // 闭包
    async function validator(ctx, next) {
        // 校验
        const data = ctx.request.body
        const error = validateFn(data)
        if (error) {
            // 验证失败
            ctx.body = new ErrorModel(jsonSchemaFileInfo)
            return
        }
        // 验证成功,继续
        await next()
    }
    return validator
}

module.exports = {
    genValidator
}