# 数据表的操作

# 查看所有数据表
show TABLES;

# 查看某一个表结构
DESC users;

# 查看创建表结构的完整语句
SHOW CREATE TABLE `users`;

# 完整的创建表

CREATE TABLE IF NOT EXISTS users(name VARCHAR(20),age INT ,height DOUBLE);

# 删除表
DROP TABLE IF EXISTS users;
