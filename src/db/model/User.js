/**
 * @description 用户数据模型
 * @author king
 */

const seq = require('../seq')
const { STRING, BOOLEAN } = require('../type')

const User = seq.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '用户名唯一'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    email: {
        type: STRING,
        allowNull: false,
        comment: '邮箱'
    },
    avator: {
        type: STRING,
        comment: '头像'
    },
    isAdmin: {
        type: BOOLEAN,
        comment: '是否为管理员',
        // 默认为false
        defaultValue: false
    },
    // isDelte: {
    //     type: BOOLEAN,
    //     comment: '软删除1删除 0 未删除',
    //     defaultValue: false
    // }
})

module.exports = {
    User
}