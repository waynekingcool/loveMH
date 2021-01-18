/**
 * @description User路由controller
 * @author king
 */

const { createUser } = require('../service/user')
const { SuccessModel, ErrorModel} = require('../model/ResModel')
const { registerUserFailInfo } = require('../model/ErrorInfo')
const { doCrypto } = require('../utils/cryp')

/**
 * 创建用户
 * @param {Object} param0 用户所需参数
 */
async function register(
    {
        userName,
        password,
        email,
        avator,
        isAdmin
    }
) {
    try {
        await createUser({
            userName,
            password: doCrypto(password),
            email,
            avator,
            isAdmin
        })
        return new SuccessModel()
    } catch (error) {
        return new ErrorModel(registerUserFailInfo)
    }
}

module.exports = {
    register
}