// 安装了nodemon,可以监听文件改变实时刷新,启动方式nodemon 文件

const http = require("http")

const server = http.createServer((req, res) => {
  res.end("hello server2");
})

server.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功");
})
