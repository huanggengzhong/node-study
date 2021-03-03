const express = require("express")

const app = express();

app.post("/login", (req, res, next) => {
  console.log("req:", req.body);
  res.end("登录成功")
})

app.listen(8000, () => {
  console.log("启动成功");
})
