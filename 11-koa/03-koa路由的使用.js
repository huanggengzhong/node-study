const Router = require("koa-router")

const userRouter = new Router({
  prefix: '/users' //前缀
})

userRouter.get("/", (ctx, next) => {
  ctx.response.body = "user list"
})

userRouter.post("/", (ctx, next) => {
  ctx.response.body = "create user info"
})

module.exports = userRouter;
