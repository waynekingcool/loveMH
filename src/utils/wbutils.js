/**
 * @description 工具类
 * @authro king
 */

// token解密
const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../conf/secretKeys')
const util = require('util')
const verify = util.promisify(jwt.verify)

/**
  * 判断是否为空 true为空 false不为空
  * @param {string} str 需要判断是否为空的字符串
  */
function isEmpty (str) {
    if (typeof str == 'undefined' || str == null || str == "") {
        return true
    }else {
        return false
    }
}

/**
 * 将token解析为用户信息
 * @param {string} token 后台给的token
 */
async function tokenDeci (token) {
    const userInfo = await verify(token, JWT_SECRET_KEY)
    if (userInfo) {
        return userInfo
    } else {
        return null
    }
}

module.exports = {
    isEmpty,
    tokenDeci
}