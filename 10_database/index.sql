-- ---------database 관련 명령어

-- DB 목록 확인
SHOW DATABASES;


-- DATABASE 삭제
DROP DATABASE sesac;
DROP DATABASE mydatabase;

-- CREATE : DATABASE 생성
create database sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/* 
dobong 이라는 데이터 베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
utf8mb4 는 utf8보다 더많은 문자 지원(이모지 저장 가능)
>>이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
 */
create database dobong character set utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 이 데이터 베이스를 사용하겠다!(use 명령어, 데이터 베이스 사용 선언)
USE sesac;

-- ---------table 관련 명령어
-- 1. 테이블 생성
/* 
create table products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건
)
 */

--  제약조건
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키(중복 허용x, null값 허용 x)
-- DEFAULT: 기본값
-- UNIQUE: 중복허용 x, null값 허용
create table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_model VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
show tables;

-- products 테이블에 어떤 컬럼이 있는지 확인(테이블 구조 확인)
desc products;

-- 테이블 삭제
drop table products;
TRUNCATE TABLE products;

-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정 (varchar 를 int 로 수정)
ALTER TABLE products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제
ALTER TABLE products DROP new_column;

-- -----------------DML
-- Data manipulation language (데이터 조작어)
-- user TABLE
-- id: int not null AUTO_INCREMENT PRIMARY KEY, 
-- name: VARCHAR(10) not null, 
-- age:int not null, 
-- address: varchar(100))

create table user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address varchar(100)
);

show tables;
desc user;

--1.CREATE(데이터 추가) >>INSERT INTO
-- INSERT INTO 테이블이름 (컬럼1, 컬럼2 ,..) VALUES(값1, 값2, ..);
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');


select * from user; -- 테이블 전체 조회

-- 2. 데이터 수정
-- UPDATE 테이블이름 SET 데이터 어떻게 수정할건지 where 어떤 데이터를;
update user set name="김민지" where id=1;

-- 3. 데이터 삭제
-- DELETE FROM 테이블이름 where 삭제 조건;
DELETE FROM user WHERE id=1; -- where이후 조건에 따른 데이터 삭제
DELETE FROM user; -- 전체 데이터 삭제

truncate table user; -- 전체 데이터 삭제

select name from user where name like "이%" and age=22;

-- 실습1 --
create DATABASE sesacdobong DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
DROP DATABASE dobong;

USE sesacdobong;
USE dobong;

create table member (
    id varchar(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

show tables;
show tables;
DESC member;

-- 실습 2 --
alter table member add interest VARCHAR(100);
alter table member MODIFY id VARCHAR(10);
alter table member drop age;
desc member;

--  실습3 --
create table user(
    id VARCHAR(10) not null PRIMARY KEY,
    pw VARCHAR(20) not null,
    name VARCHAR(5) not null,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age int(3) not null DEFAULT 0
);

desc user

-- 실습 4 --
insert into user VALUES('hong123', '8o4bkg', '홍길동', 'M', '1990-01-31',33);
insert into user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31',31);
insert into user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02',53);
insert into user VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18',39);

insert into user VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27',47);
insert into user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03',22);
insert into user VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11',24);

select * from user
-- 실습5 --
SELECT *
FROM user
ORDER BY birthday ASC;

SELECT *
FROM user
WHERE gender LIKE 'M'
ORDER BY name DESC;

SELECT id, name
FROM user
WHERE birthday LIKE '199%';

SELECT *
FROM user
WHERE birthday LIKE '%-06-%'
ORDER BY birthday ASC;

SELECT *
FROM user
WHERE gender LIKE 'M'
AND birthday LIKE '197%';

SELECT *
FROM user
ORDER BY age DESC
LIMIT 3;

SELECT *
FROM user
WHERE age >= 25 && age <= 50;

UPDATE user
SET pw='12345678'
WHERE id = 'hong123';

DELETE FROM user
WHERE id = 'jungkrat';

select * from user;