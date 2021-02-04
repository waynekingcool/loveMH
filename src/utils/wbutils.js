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
    // 获取token
    if (!isEmpty(token) && token.indexOf('Bearer') == 0){
        //不为空,并且包含Bearer
        let temp = token.slice(7)
        const userInfo = await verify(temp, JWT_SECRET_KEY)
        if (userInfo) {
            // 解密成功
            return userInfo
        } else {
            // 解密失败
            return null
        }
    } else {
        return null
    }
}

module.exports = {
    isEmpty,
    tokenDeci
}