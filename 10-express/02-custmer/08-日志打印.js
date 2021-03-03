const express = require("express")
const fs = require("fs")
const morgan = require("morgan")
const app = express();
const writeStream = fs.createWriteStream("./logs/access.log", {
  flags: "a+"
})

app.use(morgan('combined', {
  stream: writeStream
})) //combined是打印格式

app.get("/home", (req, res, next) => {
  res.end("hello world")
})


app.listen(8000, () => {
  console.log("启动成功");
})
