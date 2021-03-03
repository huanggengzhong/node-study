// console.log(process);
// console.log(process.argv); //参数
// console.clear;
// 
// process.argv.forEach((v) => {
//   console.log(v);
// })

setImmediate(() => {
  console.log("immediate"); //后执行
})

process.nextTick(() => {
  console.log("process.nextTick"); //先执行
})
