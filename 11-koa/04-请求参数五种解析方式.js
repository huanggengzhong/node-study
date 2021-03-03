const Koa = require("koa")

const Router = require("koa-router")

const bodyParser = require("koa-bodyparser")

const multer = require("koa-multer")
const upload = multer({
  dest: "uploads"
}) //存储目录
const app = new Koa()
app.use(bodyParser())
app.use(upload.any()) //formdata数据解析要调用这个

const userRouter = new Router({
  prefix: '/users'
})




// 方式一：通过get请求中的URL的params；
// 方式二：通过get请求中的URL的query；

userRouter.get("/:id", (ctx, next) => {
  console.log("params:", ctx.request.params); //路由是/users/12,返回{ id: '12' }
  ctx.response.body = "hello lilei"
  next()
})

userRouter.get("/", (ctx, next) => {
  console.log("query:", ctx.request.query); //路由是/users?id=12,返回{ id: '12' }
  // 补充下面知识
  console.log(ctx.request.url); ///users?id=12&age=18
  console.log(ctx.request.path); ///users

  ctx.response.body = "hello lilei"
  next()
})


// 方式三：通过post请求中的body的json格式；(要安装koa-bodyparser插件)
userRouter.post("/post", (ctx, next) => {
  console.log(ctx.request.body); //{ name: '小明', age: 18 }
  ctx.response.body = "post success"
  next()
})


// 方式四：通过post请求中的body的x-www-form-urlencoded格式；
userRouter.post("/xxx", (ctx, next) => {
  console.log("xxx方式:", ctx.request.body); //和json方式一样,{ name: '小张', age: '20' }
  ctx.response.body = "xxx success"
  next()
})

// 方式五：通过post请求中的form-data格式；(要安装koa-multer插件)
userRouter.post("/form", (ctx, next) => {
  // console.log(ctx.request.body);//空
  console.log(ctx.req.body); //记得要用req,{ name: '小方', age: '18' }
  ctx.response.body = "form success"
  next()
})
