const express = require("express")

const app = express();

app.use((req, res, next) => {
  console.log("common middleware");
  next()
})

app.get("/home", (req, res, next) => {
  res.end("hello home1");
  next()
})

app.post("/home", (req, res, next) => {
  console.log("hello  home2");

}, (req, res, next) => {
  console.log("hello home3");
  next()
}, (req, res, next) => {
  console.log("end");
  res.end("end")
})

app.listen(8000, () => {
  console.log("启动成功");
})
