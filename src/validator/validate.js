/**
 * @description 校验工具
 * @author king
 */

const Ajv = require('ajv').default
const ajv = new Ajv()

/**
 * 
 * @param {Object} schema json校验规则
 * @param {Object} data 待校验的数据
 */
function validate(schema, data = {}) {
    const valid = ajv.validate(schema, data)
    if (!valid) {
        return ajv.errors[0]
    }
}

module.exports = validate