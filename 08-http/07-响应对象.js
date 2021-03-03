const http = require("http")

const server = http.createServer((req, res) => {

  // 设置状态码:两种方式
  // res.statusCode = 400
  // res.writeHead(201)

  // 响应头设置两种方式
  // res.setHeader("Content-Type", "application/json;charset=utf8")
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  })



  //  响应结果的两种写法
  // write方法：这种方式是直接写出数据，但是并没有关闭流；
  // end方法：这种方式是写出最后的数据，并且写出后会关闭流；
  // res.write("write")
  res.end("<h1>hello server2</h1>");
})

server.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功");
})
