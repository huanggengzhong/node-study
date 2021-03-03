const express = require("express")

const app = express();

app.use((req, res, next) => {
  console.log("common middleware");
  next()
})

app.get("/", (req, res, next) => {
  console.log("/");
  res.end("hello express")
})

app.post("/login", (req, res, next) => {
  console.log("login");
  res.end("hello login")
})

app.listen(8000, () => {
  console.log("启动成功");
})
