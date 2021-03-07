-- 创建products表
CREATE TABLE IF NOT EXISTS `products` (
id INT PRIMARY KEY AUTO_INCREMENT,
brand VARCHAR(20),
title VARCHAR(100) NOT null,
price DOUBLE NOT NULL,
score DECIMAL(2,1),
voteCnt INT,
url VARCHAR(100),
pid INT
);
-- 执行node插入数据

# 基本查询

-- 查询表中所有的字段以及所有的数据
SELECT * FROM products;
-- 查询指定的字段
SELECT title ,price FROM products;
-- 对字段结果起一个别名
SELECT title as newTitle,price as newPrice FROM products;

# 带条件查询
SELECT title,price FROM products WHERE price<1000;
SELECT title,price FROM products WHERE price=988;
-- 排序:asc升序,desc降序
SELECT title,price FROM products WHERE price!=988 ORDER BY price DESC;
-- 间隔
SELECT * FROM products WHERE price BETWEEN 1899 AND 2000;
SELECT * FROM products WHERE brand ='华为';

-- UPDATE products SET url=NULL WHERE id >=85 AND id<=88;
-- 查询空(注意写法)
SELECT * FROM products WHERE url IS null;
-- SELECT * FROM products WHERE url = NULL;//无效
SELECT * FROM products WHERE url is NOT NULL;

# 模糊查询
SELECT * FROM products WHERE title LIKE '%M%'; 
SELECT * FROM products WHERE title LIKE '%MHA%';
SELECT * FROM products WHERE title LIKE '__P%';

#分页查询
SELECT * from  products LIMIT 20 OFFSET 0;
SELECT * FROM products LIMIT 20 OFFSET 20;
SELECT * FROM products LIMIT 40,20;

