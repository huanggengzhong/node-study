const express = require("express")

const app = express();

// 自己解析json参数
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     //监听数据
//     req.on("data", (data) => {
//       const info = JSON.parse(data.toString())
//       console.log("info", info);
//       req.body = info; //这里直接添加一个body属性
//     })

//     req.on("end", () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

// 使用内置的json方法
// app.use(express.json());

// 使用x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true //true代表使用第三方库qs,false代表内置的queryString模块
}))

app.post("/login", (req, res, next) => {
  console.log("res", req.body); //得到数据
  res.end("欢迎回来")
})


app.listen(8000, () => {
  console.log("启动成功");
})
