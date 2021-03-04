# 数据库的操作(一)

# 查看所有数据库
show DATABASES;

# 使用某个数据库

use coderhub;

# 创建表

CREATE table user(name varchar(20));

# 查看正在使用的数据库

SELECT DATABASE();

# 创建新的数据库
CREATE DATABASE bilibili;
# 真实创建库要判断是否为空
CREATE DATABASE IF not EXISTS bilibili2;
# 创建库设置字符集合排序规则
CREATE DATABASE IF NOT EXISTS huya DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci; 

# 删除数据库
DROP DATABASE huya;

# 修改数据库的字符集和排序规则
ALTER DATABASE blog CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
