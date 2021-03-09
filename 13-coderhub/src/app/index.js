const Koa = require("koa")
const useRoutes = require("../router")

const app = new Koa();

app.useRoutes = useRoutes; //路由函数赋值

app.useRoutes()

module.exports = app;
