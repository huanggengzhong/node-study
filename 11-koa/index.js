const Koa = require("koa")
const app = new Koa()

app.use((ctx, next) => {
  const isLogin = false;
  if (!isLogin) {
    // 抛出错误点,从上下文拿到app(特别是路由中取app方便)
    ctx.status = 402
    ctx.app.emit("error", new Error("你还没有登录"), ctx)
  }
  next()
})

// 监听错误并输出错误信息
app.on("error", (err, ctx) => {
  // ctx.status = 401
  ctx.body = err.message
})

app.listen(8000, () => {
  console.log("开启了");
})
