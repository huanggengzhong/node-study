# 聚合函数的使用

# 求所有手机的价格的总和
SELECT SUM(price) totalPrice FROM products ;

# 求一下华为手机的价格的总和
SELECT SUM(price) huaweiPrice FROM products WHERE brand='华为';
 
# 求华为手机的平均价格
SELECT AVG(price) FROM products WHERE brand='华为';

# 最高手机的价格和最低手机的价格
SELECT MAX(price) FROM products ;
SELECT MIN(price) FROM products;

# 求华为手机的个数
SELECT COUNT(*) FROM products WHERE brand ='华为';
SELECT COUNT(*) FROM products WHERE brand='苹果';
-- 带上url会过滤url为空后的个数
SELECT COUNT(url) FROM products WHERE brand='苹果';
SELECT COUNT(price) FROM products;
-- DISTINCT price去除重复的价格个数
SELECT COUNT(DISTINCT price )FROM products;

#GROUP BY分组的使用
SELECT brand brandname,AVG(price) avgPrice, COUNT(*) count,AVG(score) avgScore FROM products GROUP BY brand;
-- 对分组的结果数据再增加一些筛选
SELECT brand ,AVG(price) AS avgPrice,COUNT(*),AVG(score) FROM products GROUP BY brand HAVING avgPrice>2000;


-- 案例
# 4.需求：求评分score > 7.5的手机的，平均价格是多少？
SELECT AVG(price) AS avgPrice FROM products WHERE score>7.5;
# 升级：平均分大于7.5的手机，按照品牌进行分类，求出平均价格。
SELECT brand, AVG(price) FROM products WHERE score>7.5 GROUP BY brand;
