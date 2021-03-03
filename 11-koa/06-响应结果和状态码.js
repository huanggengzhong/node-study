const Koa = require("koa")
const app = new Koa()
// 响应内容

app.use((ctx, next) => {
  // ctx.response.body = "hello world"
  // ctx.body = "hello world" //效果一样

  // ctx.body = {
  //   name: "why",
  //   age: 18,
  //   height: 1.88
  // };

  //状态设置
  // ctx.response.status = 206
  ctx.status = 302

  ctx.body = ["abc", "cba", "nba"];
  next()


})

app.listen(8000, () => {
  console.log("koa启动了");
})
