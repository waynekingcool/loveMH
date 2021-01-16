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