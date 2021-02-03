/**
 * @description 工具类
 * @authro king
 */

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

module.exports = {
    isEmpty
}