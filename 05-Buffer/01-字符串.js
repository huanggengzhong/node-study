// 创建Buffer的方法
const buffer = Buffer.from("why", "utf8")
console.log(buffer); //<Buffer 77 68 79>

//中文Buffer:utf8的编码下,一个中文占用3个字节
const message = Buffer.from("中文");
console.log(message); //<Buffer e4 b8 ad e6 96 87>
