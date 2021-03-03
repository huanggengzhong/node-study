const Koa = require('koa')
const serve = require("koa-static")
const app = new Koa()
app.use(serve("./dist"))
app.listen(8000, () => {
  console.log("服务器开启成功");
})
