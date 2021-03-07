const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'root',
  password: 'gengzhong',
  database: 'coderhub'
})
const sql = "INSERT INTO products SET ?;"
const phoneJson = require('./lib/phone.json');

// 执行插入语句
for (let phone of phoneJson) {
  connection.query(sql, phone);
}
