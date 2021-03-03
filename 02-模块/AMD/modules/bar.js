define(function () { //define在require里是定义模块的意思
  const name = "coderwhy";
  const age = 18;
  const sayHello = function (name) {
    console.log("你好" + name);
  }

  return { //导出
    name,
    age,
    sayHello
  }
});
