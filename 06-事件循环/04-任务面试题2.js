// 记住一个理论:await关键字后面的代码可以看做是包裹在(resole,reject)=>{函数执行}中的代码


async function async1() {
  console.log('async1 start')
  await async2();
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 10000)

async1();

new Promise(function (resolve) {
  console.log('promise1')
  resolve();
}).then(function () {
  console.log('promise2')
})

console.log('script end')
