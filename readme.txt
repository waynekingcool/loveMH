配置:
1. koa2 loveMH 创建项目
2. npm install 安装依赖
3. npm install cross-env --save-dev , 添加cross-env NODE_ENV=dev
4. 将public routes views app.js移到src文件夹中,在www.js文件中修改app引入路径

ORM:
1. npm install mysql2 --save
2. npm install sequelize --save

Redis:
1.npm install redis --save
2.npm install koa-redis --save

jwt:
1.npm install koa-jwt --save
2.npm install jsonwebtoken --save

数据库:
1.创建utils文件夹, 创建env.js文件, 包含环境变量.
2.创建conf文件夹,创建db.js文件,包含数据环境变量.
3.创建db文件夹,创建seq.js文件,包含seq实例. 创建sync.js文件同步到数据库.
4.创建db/type.js文件,包含数据类型.
5.创建db/model文件夹,创建User.js模型文件.
6.创建db/model/index.js文件,引入User模型.
7.node src/db/sync.js 创建表同步到mysql中.

路由:
1.创建route/user.js文件, 建立用户路由,并且在app.js中引入.
2.创建src/controller/user.js文件
3.创建src/service/user.js文件
4.创建src/model/ResModel.js文件,返回信息model
5.创建src/model/ErrorInfo.js文件,返回错误信息
service用于和数据库交互,返回查询数据库的结果.
controller用于接收service返回的数据,并且相关逻辑也在controller中.
route用于接收客户端传递来的参数,并且将参数分发给对应的controller,并结果返回给客户端.

用户注册:
1.创建src/conf/secretKeys.js文件,用于保存加密密钥.
2.创建src/utils/cryp.js文件,用于对字段进行加密.
3.注册的时候(controller)对密码进行加密.

用户登录jwt:
1.在app.js中引入
    const jwt = require('koa-jwt')
    app.use(jwt({
        secret: 'wanbin'
    }).unless({
        path: [/^\/users\/login/]   //忽略那些路由需要jwt
    }))
2.安装加密工具 npm install jsonwebtoken --save.
3.在需要生成token的js文件中引入
    const jwt = require('jsonwebtoken')
    // 需要加密的用户信息, 秘钥, 过期时间1小时
    let token = jwt.sign(userInfo, SECRET, { expiresIn: '1h' })
4.解密
    const util = require('util') 自带工具
    const verify = util.promisify(jwt.verify)  将callback转为promise
    const payload = await verify(token.split(' ')[1], SECRET)  解密后即为用户信息

CORS跨域问题:
1. npm install koa2-cors --save
2. 在app.js文件中引入koa2-cors,并进行相关设置即可.

上传图片:
1. npm install formidable-upload-koa --save  上传图片
2. npm install fs-extra --save  文件模块扩展
3. 在app.js中添加图片保存路径.
4. 增加middlewares/loginCheck.js文件,用于判断用户是否登录
5. 增加utils/uploadUtil.js文件,用于保存上传好的图片,成功的话先移动图片到uploadFiles文件夹,然后在删除之前的图片.
6. 增加routes/uploadUtil.js 作为上传图片api,在app.js中引入该路由