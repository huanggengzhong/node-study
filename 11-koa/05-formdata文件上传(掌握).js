const Koa = require('koa')
const Router = require("koa-router")
const multer = require("koa-multer")
const path = require("path")

const app = new Koa();



const uploadRouter = new Router({
  prefix: "/upload"
}) //上传前缀

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

app.use(uploadRouter.routes())



const upload = multer({
  // dest: "./uploads"
  storage
})

uploadRouter.post("/avater", upload.single("file"), (ctx, next) => { //file是上传name名
  console.log(ctx.request.file);
  ctx.response.body = "上传头像成功"
})


app.listen("8000", () => {
  console.log("启动成功");
})
