const fs = require("fs")

// 普通方式写入
// fs.writeFile("write.txt", "hello world1", {
//   encoding: "utf8",
//   flag: "a"
// }, (err) => {
//   console.log(err);
// })

// 流的方式写入

const writer = fs.createWriteStream("write.txt", {
  flags: "r+", //指修改文件
  start: 4
})

writer.write("你好啊", (err) => {
  if (err) {

    console.log(err);
  }
  console.log("写入成功");
})
writer.write("第二次写入", (err) => {
  console.log(err);
})
//尾部写入
writer.end("end")

writer.on("close", () => {
  console.log("关闭文件");
})
