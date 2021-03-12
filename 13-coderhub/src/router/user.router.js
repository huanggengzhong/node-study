const Router = require("koa-router");

const userRouter = new Router({
  prefix: "/user",
});

//请求数据判断中间件
const { verifyUser } = require("../middleware/user.middleware");

// 最后数据处理中间件
const { create } = require("../controller/user.controller");
userRouter.post("/", verifyUser, create);

module.exports = userRouter;
