CREATE DATABASE  IF NOT EXISTS `dbschool` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `dbschool`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: dbschool
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `doc` longblob,
  `status` varchar(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `symbol` varchar(45) DEFAULT NULL,
  `pwd` varchar(20) DEFAULT NULL,
  `pid` varchar(25) DEFAULT NULL,
  `student_name` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `grade` int(11) DEFAULT NULL,
  `class` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'dbschool'
--
/*!50003 DROP PROCEDURE IF EXISTS `spa_operation_items` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spa_operation_items`(_operation varchar(40),_id int(11),_title varchar(500),_date varchar(45),_doc longblob,_status varchar(2))
BEGIN
DECLARE tmpsql VARCHAR(800);
if _operation='select' then
select * from items;
elseif _operation='insert' then
insert into dbschool.items(title,date,doc,status) values(_title,_date,_doc,_status);
elseif _operation='update' and _title IS NOT NULL then
update items set title = _title where id = _id;
elseif _operation='update' and _date IS NOT NULL then
update items set date = _date where id = _id;
elseif _operation='update' and _doc IS NOT NULL then
update items set doc = _doc where id = _id;
elseif _operation='update' and _status IS NOT NULL then
update items set status = _status where id = _id;
elseif _operation='selectmixed'then
select * from items where id = IFNULL(_id,id) and title = IFNULL(_title,title) and date = IFNULL(_date,date) and doc = IFNULL(_doc,doc) and status = IFNULL(_status,status);
elseif _operation='delete' then
delete from items where id = _id;
elseif _operation='deletecondition' then
delete from items where id = _id or title = _title or date = _date or doc = _doc or status = _status;
elseif _operation='deletemixed'then
select * from items where id = IFNULL(_id,id) and title = IFNULL(_title,title) and date = IFNULL(_date,date) and doc = IFNULL(_doc,doc) and status = IFNULL(_status,status);
elseif _operation='selectkey' then
select * from items where id = _id;
elseif _operation='selectcondition' then
select * from items where id = _id or title = _title or date = _date or doc = _doc or status = _status;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spa_operation_users` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spa_operation_users`(_operation varchar(40),_id int(11),_symbol varchar(45),_pwd varchar(20),_pid varchar(25),_student_name varchar(20),_name varchar(20),_grade int(11),_class varchar(3))
BEGIN
DECLARE tmpsql VARCHAR(800);
if _operation='select' then
select * from users;
elseif _operation='insert' then
insert into dbschool.users(symbol,pwd,pid,student_name,name,grade,class) values(_symbol,_pwd,_pid,_student_name,_name,_grade,_class);
elseif _operation='update' and _symbol IS NOT NULL then
update users set symbol = _symbol where id = _id;
elseif _operation='update' and _pwd IS NOT NULL then
update users set pwd = _pwd where id = _id;
elseif _operation='update' and _pid IS NOT NULL then
update users set pid = _pid where id = _id;
elseif _operation='update' and _student_name IS NOT NULL then
update users set student_name = _student_name where id = _id;
elseif _operation='update' and _name IS NOT NULL then
update users set name = _name where id = _id;
elseif _operation='update' and _grade IS NOT NULL then
update users set grade = _grade where id = _id;
elseif _operation='update' and _class IS NOT NULL then
update users set class = _class where id = _id;
elseif _operation='selectmixed'then
select * from users where id = IFNULL(_id,id) and symbol = IFNULL(_symbol,symbol) and pwd = IFNULL(_pwd,pwd) and pid = IFNULL(_pid,pid) and student_name = IFNULL(_student_name,student_name) and name = IFNULL(_name,name) and grade = IFNULL(_grade,grade) and class = IFNULL(_class,class);
elseif _operation='delete' then
delete from users where id = _id;
elseif _operation='deletecondition' then
delete from users where id = _id or symbol = _symbol or pwd = _pwd or pid = _pid or student_name = _student_name or name = _name or grade = _grade or class = _class;
elseif _operation='deletemixed'then
select * from users where id = IFNULL(_id,id) and symbol = IFNULL(_symbol,symbol) and pwd = IFNULL(_pwd,pwd) and pid = IFNULL(_pid,pid) and student_name = IFNULL(_student_name,student_name) and name = IFNULL(_name,name) and grade = IFNULL(_grade,grade) and class = IFNULL(_class,class);
elseif _operation='selectkey' then
select * from users where id = _id;
elseif _operation='selectcondition' then
select * from users where id = _id or symbol = _symbol or pwd = _pwd or pid = _pid or student_name = _student_name or name = _name or grade = _grade or class = _class;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-21 14:44:35
