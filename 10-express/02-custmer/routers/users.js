//这里是用户有关的操作路由
const express = require("express")

const router = express.Router();

// 获取用户接口
router.get("/", (req, res, next) => {
  res.json(["why", "kobe", "lilei"])
})

// 查询用户接口
router.post("/:id", (req, res, next) => {
  res.json(`${req.params.id}用户的信息`)
})

//创建用户接口

router.post("/", (req, res, next) => {
  res.json("创建一个新用户")
})


module.exports = router;
