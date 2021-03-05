# 数据表的操作

# 查看所有数据表
show TABLES;

# 查看某一个表结构
DESC users;

# 查看创建表结构的完整语句
SHOW CREATE TABLE `users`;

# 新建表,VARCHAR代表唯一性,NOT NULL代表不能为空

-- CREATE TABLE IF NOT EXISTS users(name VARCHAR(20),age INT ,height DOUBLE,phone VARCHAR(20) );
-- 完整的创建
-- primary key主键,auto_increment自动递增,UNIQUE不能重复
CREATE TABLE IF NOT EXISTS `products` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(20) NOT NULL,
`description` VARCHAR(200),
`price` INT ,
`phoneNum` VARCHAR(20) UNIQUE DEFAULT '',
`publishTime` TIMESTAMP
);

# 往表插入数据(记得值要用单引号)
INSERT INTO `products`(`title`,`description`,`price`,`publishTime`,`phoneNum`)
							values('iphone','只要899',998.11,'2020-10-10','13800138000');

# 删除汇总

# 删除表
DROP TABLE `user2`;
DROP TABLE IF EXISTS students;

# 删除表中所有数据
DELETE FROM `user`;
# 删除符合条件的指定数据
DELETE FROM `products` WHERE `phoneNum`='13800138000';


# 修改表汇总

# 修改表名
ALTER TABLE `users` RENAME TO `user`;
# 添加一个新的列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP; 
# 删除一列
ALTER TABLE `user` DROP `updateTime`;
# 修改列的名称
ALTER TABLE `user` CHANGE `name` `id` DATE;
# 修改列的数据类型
ALTER TABLE `user` MODIFY `id` INT;
# 删除某一个表字段
alter TABLE `user` DROP `phone`;

# 修改表中所有数据
UPDATE `products` SET `title`='newTitle',`price`=1299.88;
# 修改表中符合条件的数据
UPDATE `products` SET `title`='title222',`price`=699.99 WHERE phoneNum='13800138000';

#修改完数据后，增加直接可以显示最新的更新时间(显示最新更改的时间)
ALTER TABLE `products` ADD `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

# 根据表复制一张新表(只复制结构)
CREATE TABLE 	`user2` LIKE `user`;
# 根据表复制一张新表(复制内容)
CREATE TABLE 	`user3` AS (SELECT * FROM `user`);

