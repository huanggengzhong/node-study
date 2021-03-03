const name = "coderwhy"
const age = 18;

function sayHello(name) {
  console.log(`hello,${name}`);
}

//记住: exports是一个对象
// exports.name = name;
// exports.age = age;
// exports.sayHello = sayHello

// module.exports==exports,所以上面可以改为
module.exports = {
  name,
  age,
  sayHello
}
