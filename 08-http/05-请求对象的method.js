const http = require("http")
const url = require("url") //内置解析url
const qs = require("querystring") //内置解析参数
const server = http.createServer((req, res) => {
  // console.log(url.parse(req.url)); //里面有url对象,可以解析地址和参数
  const {
    pathname,
    query
  } = url.parse(req.url)
  if (pathname === '/user') {
    // 获取post 方法中的参数
    if (req.method === 'POST') {
      // req.setEncoding = "utf-8"//写了可以省略下面的toString()方法
      req.on("data", (data) => {
        console.log("data", data.toString());
        const {
          name,
          age
        } = JSON.parse(data.toString())
        console.log(name,
          age);
      })
      res.end("create user success");
    }


  }

})

server.listen(8888, "0.0.0.0", () => {
  console.log("启动成功");
})
