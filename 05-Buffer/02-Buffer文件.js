const fs = require("fs")
const sharp = require('sharp');
// 记得一定要node去运行
// 读取文本文件
// fs.readFile("./foo.txt", "utf-8", (err, data) => {

//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
//   // console.log(data.toString());
// })

// fs.readFile("./bar.png", (err, data) => {
//   fs.writeFile("./bar-copy.png", data, err => {
//     console.log(err);
//   })
// })

// 裁剪库sharp的使用
sharp("./bar.png").resize(200, 200).toBuffer().then(
  data => {
    fs.writeFile("bar-x.png", data, err => {
      console.log(err);
    })
  }
)
