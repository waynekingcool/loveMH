/**
 * @description 使用sequelize同步到数据库
 */

const seq = require('./seq')

//引入model
require('./model/index')

//测试连接
seq.authenticate().then(() => {
    console.log('连接数据库成功...')
}).catch(() => {
    console.log('连接数据库出错....T_T')
})

// 执行同步 true的话则前置覆盖已有的table
seq.sync({ force: true }).then(() => {
    console.log('同步已完成')
    // 退出
    process.exit()
})