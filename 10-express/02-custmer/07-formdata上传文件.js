const express = require("express")
const path = require("path")
const multer = require("multer")

//自定义文件信息
const storage = multer.diskStorage({
  // 目的地
  destination: (req, file, cb) => {
    cb(null, "./uploads/")
  },
  // 文件名
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) //path.extname(文件)返回文件的拓展名,比如返回.jpeg
  }
})

const upload = multer({
  // dest: "./uploads/" //上传文件存放的目录
  //自定义文件信息
  storage
});

const app = express();

// app.use(upload.any()); //解析formdata数据,如果是上传文件要去掉,官方文档说不能写在全局,可以写在局部

app.post("/login", (req, res, next) => {
  console.log("req:", req.body);
  res.end("登录成功")
})
//upload.single("file")上传单个文件,"file"是上传字段名

// app.post("/upload", upload.single("file"), (req, res, next) => {
app.post("/upload", upload.array("file"), (req, res, next) => {
  console.log(req.files);
  res.end("文件上传成功")
})

app.listen(8000, () => {
  console.log("启动成功");
})
