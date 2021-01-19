/**
 * @description User路由controller
 * @author king
 */

const { createUser, getUserInfo } = require('../service/user')
const { SuccessModel, ErrorModel} = require('../model/ResModel')
const { registerUserFailInfo, userIsExistInfo } = require('../model/ErrorInfo')
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

/**
 * 查询用户是否存在
 * @param {string} userName 用户名
 */
async function isUserExist(userName) {
    const result = await getUserInfo(userName)
    if (!result) {
        // 不存在
        return new SuccessModel()
    }else {
        // 存在
        return new ErrorModel(userIsExistInfo)
    }
}

module.exports = {
    register,
    isUserExist
}