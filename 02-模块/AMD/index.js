(function () {
  // require是requireJS导出的对象
  require.config({
    baseUrl: '',
    paths: { //这是映射关系
      "bar": "./modules/bar", //不用加后缀名.js
      "foo": "./modules/foo"
    }
  })

  require(['foo'], function (foo) {

  });
})();
