# 数据表的操作

# 查看所有数据表
show TABLES;

# 查看某一个表结构
DESC users;

# 查看创建表结构的完整语句
SHOW CREATE TABLE `users`;

# 创建表,VARCHAR代表唯一性,NOT NULL代表不能为空

-- CREATE TABLE IF NOT EXISTS users(name VARCHAR(20),age INT ,height DOUBLE,phone VARCHAR(20) );
-- 完整的创建
-- primary key主键,auto_increment自动递增,UNIQUE不能重复
CREATE TABLE IF NOT EXISTS `students` (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
age INT DEFAULT 0,
phoneNum VARCHAR(20) UNIQUE DEFAULT '',
createTime TIMESTAMP
);


# 删除表
DROP TABLE students;
DROP TABLE IF EXISTS students;

# 修改表名
ALTER TABLE `users` RENAME TO `user`;
