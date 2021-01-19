/**
 * @description User路由controller
 * @author king
 */

const { createUser, getUserInfo } = require('../service/user')
const { SuccessModel, ErrorModel} = require('../model/ResModel')
const { 
    registerUserFailInfo, 
    userIsExistInfo, 
    loginFailInfo, 
    getUserInfoFailInfo 
} = require('../model/ErrorInfo')
const { doCrypto } = require('../utils/cryp')
// jsonwebtoken
const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../conf/secretKeys')
// token解密
const util = require('util')
const verify = util.promisify(jwt.verify)

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

/**
 * 用户登录
 * @param {string} userName 用户登录
 * @param {string} password 用户密码
 */
async function login(userName, password) {
    const result = await getUserInfo(userName, doCrypto(password))
    if (result) {
        // 登录成功
        let token = jwt.sign(result, JWT_SECRET_KEY, { expiresIn: '2days' })
        console.log("登录后获得的token:",token);
        
        return new SuccessModel(token)
    } else {
        // 登录失败
        return new ErrorModel(loginFailInfo)
    }
}

/**
 * 获取用户信息
 * @param {string} token token
 */
async function tokenToUserInfo(token) {
    // 将callback转为promise
    const userInfo = await verify(token, JWT_SECRET_KEY)
    if (userInfo) {
        //存在
        return new SuccessModel(userInfo)
    } else {
        //不存在
        return new ErrorModel(getUserInfoFailInfo)
    }
}

module.exports = {
    register,
    isUserExist,
    login,
    tokenToUserInfo
}