# 外键

#  创建品牌表(id,名字,网站,世值)
CREATE TABLE IF NOT EXISTS brand (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
website VARCHAR(100),
worldRank INT
);

# 插入数据
INSERT INTO brand (name,website,worldRank) VALUES(
'华为','www.huawei.com',1
);
INSERT INTO brand (name,website,worldRank) values(
'小米', 'www.mi.com', 10
);
INSERT INTO brand (name ,website,worldRank) VALUES (
'苹果', 'www.apple.com', 5
);
INSERT into brand (name,website,worldRank) VALUES(
'oppo', 'www.oppo.com', 15
);
INSERT INTO brand(name,website,worldRank) VALUES(
'京东', 'www.jd.com', 3
);
INSERT INTO brand(name,website,worldRank) VALUES (
'Google', 'www.google.com', 8
);

# products表增加外键
ALTER TABLE products ADD brand_id int;

ALTER TABLE products add FOREIGN KEY (brand_id) REFERENCES brand(id);

# 给products设置brand_id值
UPDATE products SET brand_id=1 WHERE brand='华为';
UPDATE products set brand_id=2 WHERE brand='小米';
UPDATE products set brand_id=3 WHERE brand='苹果';
update products set brand_id=4 WHERE brand='OPPO';

-- 当设置了外键之后下面无法更新
 UPDATE `brand` SET `id` = 101 WHERE `id` = 1;
 # 解决方法1:直接改设计表更新为CASCADE,保存后再次执行即可;
 # 解决方法2:语句操作三个步骤:
 show CREATE TABLE products;
--  CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `voteCnt` int DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `pid` int DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `products_ibfk_1` (`brand_id`),
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
-- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
ALTER TABLE products drop FOREIGN KEY products_ibfk_1;
ALTER table products add FOREIGN KEY (brand_id) REFERENCES brand(id) ON UPDATE CASCADE ON DELETE CASCADE;






