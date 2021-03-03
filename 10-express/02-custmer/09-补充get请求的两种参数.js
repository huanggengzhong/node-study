const express = require("express")

const app = express();


// params方式
// app.get("/detail/:id/:name", (req, res, next) => {
//   console.log("params:", req.params);
//   res.end("hello world")
// })

// query方式
app.get("/detail", (req, res, next) => {
  console.log("query:", req.query);
  res.end("hello world")
})


app.listen(8000, () => {
  console.log("启动成功");
})
