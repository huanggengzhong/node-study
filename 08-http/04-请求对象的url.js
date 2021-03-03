const http = require("http")
const url = require("url") //内置解析url
const qs = require("querystring") //内置解析参数
const server = http.createServer((req, res) => {
  // console.log(url.parse(req.url)); //里面有url对象,可以解析地址和参数
  const {
    pathname,
    query
  } = url.parse(req.url)
  if (pathname === '/login') {
    const obj = qs.parse(query)
    console.log(obj.name);
    return res.end("欢迎回来!")

  }
  res.end("server")
})

server.listen(8888, "0.0.0.0", () => {
  console.log("启动成功");
})
