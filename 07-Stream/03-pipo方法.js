const fs = require("fs")

// 普通的读写
fs.readFile("./du.txt", (err, data) => {
  console.log(err);
  fs.writeFile("./xie.txt", data, (err2) => {
    console.log(err2);
  })
})

// 流的读写
const reader = fs.ReadStream("duSteam.txt");
const writer = fs.WriteStream("xieSteam.txt");
writer.on('pipe', (src) => {
  console.log('有数据正通过管道流入写入器');
});
reader.pipe(writer);
