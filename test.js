const seq = require('./src/db/seq')
const { QueryTypes } = require('sequelize')
const { User } = require('./src/db/model/index')

// 使用sequelize框架
async function getAllUser() {
    const result = await User.findAll()
    const arr = result.map( (item, index) => {
        return item.dataValues
    })
    console.log(arr);
    
}

// 原始sql查询
async function getAllUserBySql() {
    const [results, metadata] = await seq.query(`
        select id, userName,password,email,avator,isAdmin from users
    `, { model: User,
        mapToModel: true
        })
    // console.log(results);
    console.log(metadata);
}

async function getAllUserBySql2() {
    const result = await seq.query(`
        select id,userName from users where id = 7
    `,{
        model: User,
        mapToModel: true,
        type: QueryTypes.SELECT
    })
    const arr = result.map( item => {
        return item.dataValues
    })
    console.log(arr);
    
}

// getAllUser()
// getAllUserBySql()
getAllUserBySql2()