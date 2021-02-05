/**
 * @description 失败信息集合
 */

module.exports = {
    userIsExistInfo: {
        errno: 10001,
        message: '用户已存在'
    },
    registerUserFailInfo: {
        errno: 10002,
        message: '创建用户失败'
    },
    loginFailInfo: {
        errno: 10003,
        message: '登录失败'
    },
    getUserInfoFailInfo: {
        errno: 100004,
        message: '获取用户信息失败'
    },
    usernameCantBeNull: {
        errno: 100005,
        message: '用户名不能为空'
    },
    passwordCanBeNull: {
        errno: 100006,
        message: '密码不能为空'
    },
    uploadFileSizeFailInfo: {
        errno: 100007,
        message: '图片尺寸过大'
    },
    loginCheckFailInfo: {
        errno: 100008,
        message: '您尚未登录'
    },
    getAllUserFailInfo: {
        errno: 100009,
        message: '获取所有用户失败'
    },
    jsonSchemaFileInfo: {
        error: 100010,
        message: '数据格式有误'
    },
    idIsNullInfo: {
        errno: 100011,
        message: 'id不能为空'
    },
    updateInfoFailInfo: {
        errno: 100012,
        message: '更新用户信息失败'
    }
}