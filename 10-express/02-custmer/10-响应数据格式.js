const express = require("express")

const app = express();

app.get("/user", (req, res, next) => {
  // res.type("application/json")
  // res.end(JSON.stringify({
  //   name: "why",
  //   age: 18
  // }))

  //设置响应码
  res.status(201)

  // 简写
  res.json({
    name: "why",
    age: 18
  })
})


app.listen(8000, () => {
  console.log("启动成功");
})
