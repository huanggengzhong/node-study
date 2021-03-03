const Koa = require("koa")
const app = new Koa()

app.use((ctx, next) => {
  ctx.response.body = "Hello world"
  console.log("中间件");
})

app.listen(8000, () => {
  console.log("koa启动成功");
})
