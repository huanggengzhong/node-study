const {
  NAME_OR_PASSWORD_NULL
} = require("./../constants/error-types")

const verifyUser = (ctx, next) => {
  //1.获取用户名和密码
  const {
    name,
    password
  } = ctx.request.body

  //2.判断用户名和密码是否为空
  if (!name || !password) {
    return ctx.app.emit('error', new Error(NAME_OR_PASSWORD_NULL), ctx);

  }

  //3.判断用户名是否注册过

}


module.exports = {
  verifyUser
}
