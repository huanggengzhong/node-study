const http = require("http")
const server = http.createServer((req, res) => {
  res.end("hello world");
})
server.listen("8888", "0.0.0.0", () => {
  console.log("8888启动成功");
})

// const server2 = http.createServer((req, res) => {
//   res.end("hello world");
// })
// server2.listen("9999", "0.0.0.0", () => {
//   console.log("9999启动成功");
// })

// 看源码发现createServer实际就是调用了new Server,所以我们可以写成下面方式

const server2 = new http.Server((req, res) => {
  res.end("hello world2")
})

server2.listen(9999, "0.0.0.0", () => {
  console.log("9999启动成功");
})
