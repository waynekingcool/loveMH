/**
 * @description 加密
 * @author king
 */

const crypto = require('crypto')
// 密钥
const { CRYPTO_SECRET_KEY } = require('../conf/secretKeys')

/**
 * MD5加密
 * @param {string} content 加密内容
 */
function _md5 (content) {
    const md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

/**
 * 加密方法
 * @param {string} content 明文
 */
function doCrypto(content) {
    const str = `password=${content}&key=${CRYPTO_SECRET_KEY}`
    return _md5(str)
}

module.exports = {
    doCrypto
}