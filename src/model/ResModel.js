/**
 * @description 返回的信息model
 * @authro
 */

/**
 * 基类
 */
class BaseResModel {
    constructor({ errno, data, message }) {
        this.errno = errno
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

/**
 * 成功时候返回的模型
 */
class SuccessModel extends BaseResModel {
    constructor(data = {}) {
        super({
            errno: 0,
            data
        })
    }
}

/**
 * 失败时候返回的模型
 */
class ErrorModel extends BaseResModel {
    constructor({errno, message}) {
        super({
            errno,
            message
        })
    }
}


