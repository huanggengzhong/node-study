const Koa = require("koa")
const app = new Koa()


// koa中间件只能通过use注册
app.use((ctx, next) => {
  console.log("中间件");
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      ctx.response.body = "login success"
    }
  } else {
    ctx.response.body = "other request"
  }
})

app.listen(8000, () => {
  console.log("koa启动成功");
})
