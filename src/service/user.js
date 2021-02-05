/**
 * @description user service
 * @author king
 */

const seq = require('../db/seq')
const { QueryTypes } = require('sequelize')
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

/**
 * 查询用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
    const whereOpt = { userName }

    // 如果密码存在
    if (password) {
        Object.assign(whereOpt, { password })
    }

    const user = await User.findOne({
        where: whereOpt
    })

    console.log('查询到的用户:', user)

    if (user) {
        return user.dataValues
    } else {
        return user
    }
    
}

/**
 * 获取所有用户信息 使用sql查询
 */
async function getAllUserInfo() {
    // const result = await User.findAll()
    const result = await seq.query(`
        select id,userName,password,email,avator,isAdmin from users
    `, {
        model: User,
        mapToModel: true
    })
    const arr = result.map( item => {
        return item.dataValues
    })
    return arr
}

/**
 * 更新用户信息
 * @param {Object} param0 需要修改的参数
 * @param {Object}} param1 where条件
 */
async function updateUserInfo(
    { newName, newPassword, newEmail, newAvator, isAdmin },
    { id }
) {
    // 拼接内容
    const updateData = {}
    if (newName) {
        updateData.userName = newName
    }

    if (newPassword) {
        updateData.password = newPassword
    }

    if (newEmail) {
        updateData.email = newEmail
    }

    if (newAvator) {
        updateData.avator = newAvator
    }

    if (isAdmin) {
        updateData.isAdmin = true
    }else {
        updateData.isAdmin = false
    }

    // 拼接查询条件
    const whereData = { id }

    const result = await User.update(updateData, {
        where: whereData
    })

    return result[0] > 0
}

module.exports = {
    createUser,
    getUserInfo,
    getAllUserInfo,
    updateUserInfo
}