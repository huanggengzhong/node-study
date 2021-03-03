const http = require("http")
const server = http.createServer((req, res) => {
  console.log("url:", req.url); //第一次是正确的,第二次还有一个favison图标
  console.log("http:", req.headers);
  console.log("method:", req.method);
  res.end("server")
})

server.listen(8888, "0.0.0.0", () => {
  console.log("启动成功");
})
