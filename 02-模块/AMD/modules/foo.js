define(['bar'], function (bar) { //['bar']导入依赖模块
  console.log(bar.name);
  console.log(bar.age);
  bar.sayHello("kobe");
});
