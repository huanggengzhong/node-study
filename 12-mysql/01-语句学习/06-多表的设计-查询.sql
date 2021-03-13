# 多表的查询
-- 结果:108*6=648条,每条重复了6次
SELECT * FROM products ,brand;
-- where进行筛选得到81条(108-27条brand_id空数据)
SELECT * FROM products ,brand WHERE products.brand_id=brand.id;
SELECT * FROM products WHERE brand_id IS NOT NULL;

# 链接表的使用(一定要先了解链接图,可以搜sql多表之间的连接图)
-- 1.左链接
-- 获取到的是左边所有的数据（以左表为主）：意思是坐标全部(不管左表有没有null)

-- 结果左表全部查到,108条
SELECT * FROM products LEFT JOIN brand ON products.brand_id=brand.id;
-- 结果右表不存在的左表,27条
SELECT * FROM products LEFT JOIN brand ON products.brand_id=brand.id WHERE brand.id IS null;

-- 2.右链接
-- 获取到的是右边所有的数据（以右表为主）：

-- 结果这个时候就表示右表中有id的数据都会查出来(含左表null的数据),83条
SELECT * FROM products RIGHT JOIN brand ON products.brand_id=brand.id;
-- 单独右表(记得要products.brand_id IS NULL),2条
SELECT * FROM products RIGHT JOIN brand ON products.brand_id=brand.id WHERE products.brand_id IS NULL;

-- 3.内链接
-- 获取左边的表和右边的表都有对应关联的数据,81条
SELECT * FROM products INNER JOIN brand ON products.brand_id=brand.id;
-- 下面普通查询结果一致
SELECT * FROM products ,brand WHERE products.brand_id=brand.id;
-- 上面两者区别:1是建立关系后的查询结果;2.是笛卡尔乘积后的筛选结果;

-- 4.全链接
-- 查询左表加右表的全部,110条(含右表null的数据)
(SELECT * FROM products LEFT JOIN brand ON products.brand_id=brand.id)
UNION
(SELECT * FROM products RIGHT JOIN brand ON products.brand_id=brand.id);
-- 查两表不关联的数据,29条
(SELECT * FROM products LEFT JOIN brand ON products.brand_id=brand.id WHERE brand.id is null)
UNION
(SELECT * FROM products RIGHT JOIN brand on products.brand_id=brand.id WHERE products.brand_id IS NULL);
