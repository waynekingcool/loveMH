/**
 * @description user service
 * @author king
 */

const { User } = require('../db/model/index')

/**
 * 创建用户
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {string} email 邮箱
 * @param {string} avator 头像
 * @param {boolean} isAdmin 是否管理员     
 */
async function createUser(
    {
        userName,
        password,
        email,
        avator,
        isAdmin
    }
) {
    const result = await User.create({
        userName,
        password,
        email,
        avator,
        isAdmin
    })
    return result.dataValues
}

module.exports = {
    createUser
}