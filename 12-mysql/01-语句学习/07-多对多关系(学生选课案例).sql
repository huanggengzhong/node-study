# 1.基本数据的模拟
-- 建表
CREATE TABLE IF not EXISTS students (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT null,
age INT
);

CREATE TABLE IF NOT EXISTS courses (
id int PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT null,
price DOUBLE not null
);



-- 插入数据
insert INTO students (name,age) VALUES('why',18);
INSERT INTO `students` (name, age) VALUES('tom', 22);
INSERT INTO `students` (name, age) VALUES('lilei', 25);
INSERT INTO `students` (name, age) VALUES('lucy', 16);
INSERT INTO `students` (name, age) VALUES('lily', 20);

INSERT INTO courses (`name`,price) VALUES('英语',100);
INSERT INTO `courses` (name, price) VALUES ('语文', 666);
INSERT INTO `courses` (name, price) VALUES ('数学', 888);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('物理', 888);
INSERT INTO `courses` (name, price) VALUES ('地理', 333);


# 2.建立关系表(重要)
CREATE TABLE IF NOT EXISTS students_select_courses (
id INT PRIMARY KEY auto_increment,
student_id INT NOT null,
course_id int not NULL,
FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
);



# 3.学生选课
-- why选择了英语、数学、历史
INSERT INTO students_select_courses (student_id, course_id) VALUES(1,1);
INSERT INTO students_select_courses (student_id, course_id) VALUES(1,3);
INSERT INTO students_select_courses (student_id, course_id) VALUES(1,4);

-- lilei选修了语文和数学和历史
INSERT INTO students_select_courses(student_id,course_id) VALUES (3,2);
INSERT INTO students_select_courses(student_id,course_id) VALUES (3,3);
INSERT INTO students_select_courses(student_id,course_id) VALUES (3,4);

-- lily选修了语文,数学,历史
INSERT INTO students_select_courses(student_id,course_id) VALUES(5,2);
INSERT INTO students_select_courses(student_id,course_id) VALUES(5,3);
INSERT INTO students_select_courses(student_id,course_id) VALUES(5,4);


# 4.多表链表查询
# 4.1. 查询所有有选课的学生，选择了哪些课程(普通链表查询)
SELECT stu.id studentId,stu.name studentName,cs.id courseId,cs.name courseName,cs.price coursePrice FROM students stu
JOIN students_select_courses ssc ON stu.id= ssc.student_id 
JOIN courses cs ON ssc.course_id=cs.id;


# 4.2. 查询所有的学生的选课情况(左链接查询)
SELECT stu.id studentId,stu.name studentName,cs.id courseId,cs.name courseName,cs.price coursePrice FROM students stu
LEFT JOIN students_select_courses ssc ON stu.id=ssc.student_id
LEFT JOIN courses cs ON cs.id=ssc.course_id;


# 4.3. 哪些学生是没有选课
select stu.id studentId,stu.name studentName,cs.id courseId,cs.name courseName,cs.price coursePrice FROM students stu
LEFT JOIN students_select_courses  ssc ON stu.id=ssc.student_id
LEFT JOIN courses cs ON cs.id=ssc.course_id WHERE cs.id IS null;


# 4.4. 查询哪些课程是没有被选择的(记得不要要WHERE sc.id is NULL,换成stu.id或者ssc.id都可以,因为它有一个先后的问题)
SELECT stu.id studentId,stu.name studentName,cs.id courseId,cs.name courseName,cs.price coursePrice FROM students stu
RIGHT JOIN students_select_courses ssc ON stu.id=ssc.student_id
RIGHT JOIN courses cs on cs.id=ssc.course_id
WHERE stu.id is NULL; 


# 4.5. 某一个学生选了哪些课程

# why同学选择了哪些课程(错误做法,应该使用下面左链接去查询,可以对比stu.id=2两者结果就知道了)

SELECT stu.id studentId,stu.name studentName,cs.id courseId,cs.name courseName,cs.price coursePrice FROM students stu
JOIN students_select_courses ssc ON stu.id=ssc.student_id
JOIN courses cs ON cs.id=ssc.course_id WHERE stu.id=1;
-- 正确做法
SELECT stu.id studentId,stu.name studentName,cs.id courseId,cs.name courseName,cs.price coursePrice from students stu
LEFT JOIN students_select_courses ssc ON stu.id=ssc.student_id
LEFT JOIN courses cs ON cs.id=ssc.course_id WHERE stu.id=1;

# lily同学选择了哪些课程(注意，这里必须用左连接，事实上上面(why同学)也应该使用的是左连接,不使用左链接的话会漏掉两条空的数据去筛选)
SELECT stu.id studentId,stu.name studentName,cs.id courseId,cs.name courseName,cs.price coursePrice from students stu
LEFT JOIN students_select_courses ssc ON stu.id=ssc.student_id
LEFT JOIN courses cs ON cs.id=ssc.course_id WHERE stu.id=2;







