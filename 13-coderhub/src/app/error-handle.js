const {
  NAME_OR_PASSWORD_NULL
} = require("./../constants/error-types")
const errorHandle = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case NAME_OR_PASSWORD_NULL:
      status = 400;
      message = "用户名或者密码不能为空"
      break;

    default:
      break;
  }

  ctx.status = status
  ctx.body = message
}
module.exports = errorHandle
