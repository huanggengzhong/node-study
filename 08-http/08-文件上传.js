// 正确的上传方式:
const fs = require("fs")
const http = require("http")


const qs = require("querystring")

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      // 图片文件必须要设置二进制编码
      req.setEncoding("binary")

      let body = ''
      const totalBoundary = req.headers['content-type'].split(";")[1]
      const boundary = totalBoundary.split("=")[1]


      req.on("data", (data) => {
        body += data;
      })
      req.on("end", () => {
        // console.log(body); //发现里面有多余的文件信息
        // 1.处理图片数据
        const payload = qs.parse(body, "\r\n", ":") //以\r\n分割,用:后面值作为对象键值对
        const type = payload["Content-Type"];

        //2.开始在image/jpeg的位置进行截取
        const typeIndex = body.indexOf(type)
        const typeLength = type.length;
        let imageData = body.substring(typeIndex + typeLength)

        // 3.去掉中间的两个空格
        // imageData = imageData.replace("\r\n\r\n", "");
        imageData = imageData.replace(/^\s\s*/, ""); //正则空格去除两个空格

        //4.将尾部的boundary去除
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`)) //包括多余的"--"

        // 最后写入文件
        fs.writeFile("./dist/copy.jpeg", imageData, {
          encoding: 'binary'
        }, (err) => { //写入binary二进制文件
          // console.log("文件上传成功:", imageData);
          res.end("上传成功");
        })

      })
    }
  }


})

server.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功");
})
