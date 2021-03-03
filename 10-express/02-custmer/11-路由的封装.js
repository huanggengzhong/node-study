const express = require("express")
const usersRouter = require("./routers/users")
const app = express();
app.use("/users", usersRouter) //使用封装的路由


app.listen(8000, () => {
  console.log("启动成功");
})
