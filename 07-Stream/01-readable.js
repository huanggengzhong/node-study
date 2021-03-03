const fs = require('fs');

// 普通读取,无法控制
// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// })

//流的读取,流读取可控制
const reader = fs.createReadStream("./foo.txt", {
  start: 3,
  end: 10,
  highWaterMark: 2
})
// 监听data事件
reader.on("data", (data) => {
  console.log(data);
  reader.pause() //读取暂停
  setTimeout(() => {
    reader.resume() //恢复读取
  }, 1000)
})


reader.on("open", () => {
  console.log("文件被打开");
})
reader.on("close", () => {
  console.log("文件被关闭");
})
