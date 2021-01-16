/**
 * @description 存储配置
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'bin6264934',
    port: '3006',
    database: 'comic_db'
}

if (isProd) {
    // 线上的配置
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }

    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'bin6264934',
        port: '3006',
        database: 'comic_db'
    }
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}