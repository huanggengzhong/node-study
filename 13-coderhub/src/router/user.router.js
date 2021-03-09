const Router = require("koa-router")

const userRouter = new Router({
  prefix: "/user"
})

userRouter.post("/", (ctx, next) => {
  console.log("user路由");
})

module.exports = userRouter;
