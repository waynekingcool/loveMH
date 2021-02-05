/**
 * @description user数据验证
 * @authro king
 */

const validate = require('./validate')

const SCHEMA = {
    type: 'object',
    properties: {
        userName: {
            type: 'string',
            // 字母开头,包含字母数字下划线
            pattern: '^[a-zA-Z][a-zA-Z0-9_]+$',
            maxLength: 15,
            minLength: 3
        },
        password: {
            type: 'string',
            maxLength: 15,
            minLength: 3
        },
        email: {
            type: 'string',
            maxLength:50,
            minLength: 5
        },
        avator: {
            type: 'string',
            maxLength: 255,
        },
        isAdmin: {
            type: 'boolean',
        }
    }
}

// 校验
function userValidate(data = {}) {
    return validate(SCHEMA, data)
}

module.exports = userValidate