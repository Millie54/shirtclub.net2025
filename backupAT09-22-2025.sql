-- MySQL dump 10.13  Distrib 5.7.44, for Linux (x86_64)
--
-- Host: localhost    Database: shirtclub
-- ------------------------------------------------------
-- Server version	5.7.44

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
-- Table structure for table `closet_shirt`
--

DROP TABLE IF EXISTS `closet_shirt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `closet_shirt` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `symbol` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `pic` varchar(350) DEFAULT NULL,
  `message_number` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `closet_shirt`
--

LOCK TABLES `closet_shirt` WRITE;
/*!40000 ALTER TABLE `closet_shirt` DISABLE KEYS */;
INSERT INTO `closet_shirt` VALUES (24,'AB0011','star','dfd','DBDtobihN4Fy','ddd'),(25,'AU0045','circle','Gap shirt - August 14, 2020','tuWZOTcSP5QR',''),(26,'AU0045','rectangle','Joe Fresh','jXSaMTDxLqdC',''),(27,'AB0011','circle','','XZEtxbCVUQEE',''),(28,'ON0011','circle','Texas Riddle','','GP126'),(29,'SC0049','circle','Test description','YrzxuCCCFcM6','B001');
/*!40000 ALTER TABLE `closet_shirt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `message_id` varchar(50) NOT NULL DEFAULT '',
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `content` longtext,
  `link` varchar(300) NOT NULL DEFAULT '',
  `image` varchar(500) NOT NULL DEFAULT '',
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,'M0001','AB0011','123','123','/client/AB0011/pic/1oUDDX2TND_1492092787149.png',NULL),(2,'M0002','AB0011','test123','test123','/client/AB0011/pic/1oUDDX2TND_1492092787149.png',NULL),(3,'M0003','CA0011','Delmonte is a great place for a Muskoka wedding.','www.delmontelodge.ca','/client/CA0011/pic/Main Lodge.jpg',NULL),(4,'M0004','FL0011','I love elaphants','','/client/FL0011/pic/Shuffleboard_LIGHT 3.6mb.png',NULL),(5,'M0005','FL0011','Delmonte is a great place to get married. ','www.delmontelodge.ca','/client/FL0011/pic/Main Lodge.jpg',NULL),(6,'M0006','SA0027','Message test ','www.delmontelodge.ca','/client/SA0027/pic/EM5n4Bdp0rN2',NULL),(7,'M0007','AB0011','','','',NULL),(8,'M0008','0039','Terry Test','123','/client/0039/pic/eSpOB8P0SB5V',NULL),(9,'M0009','AB0011','Terry Test','Terry Test','/client/AB0011/pic/GyJyrLRYs48S',NULL),(10,'ABC000','AB0011','','http://apple.ca/','','managed'),(11,'M00011','AB0011','Terry Test','google.com','/client/AB0011/pic/4ZlkImDx2rgV',NULL),(12,'M00012','AB0011','tt2','google.com','/client/AB0011/pic/d2NWRJSIfyQo',NULL),(13,'M00013','ON0011','Canadian Business Development and Support:\n         Your Canadian partners ....               \nOffering new opportunities to companies seeking to grow and develop business relationships in Canada\nOffering continued support and assistance to help your business succeed in Canada              \nDel-Coin Holdings Inc. Operations:   \nDel-Coin ATM\nwww.shirtclub.net\nwww.theleauge.ca\nwww.delmontelodge.ca\n ','www.delcoin.com','/client/ON0011/pic/y7N9Wb8Q8tiG',NULL),(14,'M00014','SK0036','Delmonte is nestled on 55 secluded acres, with 2000 ft. of shoreline on Sparrow Lake and accessing the Trent- Severn Waterway System. Open June thru September. With seven different accommodations, Delmonte can host 70-100 guests on its property.  The beautiful Muskoka setting is ideal for family holidays, getaways, reunions, events and weddings. If you are interested in fishing, Sparrow Lake is filled with Bass, Pickerel, Pike and Muskie.','https://www.delmontelodge.ca/','/client/SK0036/pic/LJN2dW94Pz0p',NULL),(15,'ABC001','SK0036','','http://delmontelodge.ca','','managed'),(16,'M0016','AB0011','Hihi','hihi','/client/AB0011/pic/GlwMMXIM74yl',NULL),(17,'M0017','ON0043','2020 - the year of quarantine ','','',NULL),(18,'ABC002','AB0011','','google.com','','managed'),(19,'M0019','AB0011','hih','google.com','/client/AB0011/pic/8uLcLVRHZST6',NULL),(20,'M0020','ON0013','I love Henry','https://www.instagram.com/?hl=en','/client/ON0013/pic/8Ao1jd5gMwvK',NULL),(22,'M0022','ON0050','Nice to meet you','','',NULL),(23,'M0023','ON0012','HELLO HELLO TEST TEST TEST','https://www.tripadvisor.ca/Attraction_Review-g3445228-d3442384-Reviews-Torrance_Barrens_Dark_Sky_Preserve-Torrance_Muskoka_Lakes_Muskoka_District_Ontar.html','',NULL),(24,'M0024','0051','Tester','www.birdiegolf.ca','/client/0051/pic/g7gew8qEyNh6',NULL),(27,'ABC121','ON0011','','delcoin.com/abc121.html','','managed'),(28,'GP122','ON0011','','https://shirttok.com/gp122app/','','managed'),(29,'GP123','ON0011','','https://shirttok.com/gp123app/','','managed'),(50,'GP124','ON0011',NULL,'https://shirttok.com/gp124app/','','managed'),(51,'GP125','ON0011','','shirttok.com/gp125app','','managed'),(52,'GP126','ON0011',NULL,'https://shirttok.com/gp126app/','','managed'),(53,'GP127','ON0011',NULL,'https://shirttok.com/gp127app/','','managed'),(54,'GP128','ON0011',NULL,'https://shirttok.com/gp128app/','','managed'),(55,'GP129','ON0011',NULL,'https://shirttok.com/gp129app/','','managed'),(56,'GP130','ON0011',NULL,'https://shirttok.com/gp130app/','','managed'),(57,'GP121','ON0011',NULL,'https://shirttok.com/gp121app/','','managed'),(58,'ABC122','ON0011',NULL,'','','managed'),(59,'ABC123','ON0011',NULL,'https://www.shirttok.com/abc123/','','managed'),(60,'ABC124','ON0011',NULL,'','','managed'),(61,'ABC125','ON0011',NULL,'','','managed'),(62,'ABC126','ON0011',NULL,'','','managed'),(63,'ABC127','ON0011',NULL,'','','managed'),(64,'ABC128','ON0011',NULL,'','','managed'),(65,'ABC129','ON0011',NULL,'','','managed'),(66,'ABC130','ON0011',NULL,'www.delcoin.com/abcnan','','managed'),(67,'GP131','ON0011',NULL,'https://shirttok.com/gp131app/','','managed'),(68,'GP132','ON0011',NULL,'https://shirttok.com/gp132app/','','managed'),(69,'GP133','ON0011',NULL,'https://shirttok.com/gp133app/','','managed'),(70,'GP134','ON0011',NULL,'https://shirttok.com/gp134app/','','managed'),(71,'GP135','ON0011',NULL,'https://shirttok.com/gp135app/','','managed'),(72,'GP136','ON0011',NULL,'','','managed'),(73,'GP137','ON0011',NULL,'','','managed'),(74,'GP138','ON0011',NULL,'','','managed'),(75,'GP139','ON0011',NULL,'','','managed'),(76,'GP140','ON0011',NULL,'','','managed'),(77,'GP141','ON0011',NULL,'','','managed'),(78,'GP142','ON0011',NULL,'','','managed'),(79,'GP143','ON0011',NULL,'','','managed'),(80,'GP144','ON0011',NULL,'','','managed'),(81,'GP145','ON0011',NULL,'','','managed'),(82,'GP146','ON0011',NULL,'','','managed'),(83,'GP147','ON0011',NULL,'','','managed'),(84,'GP148','ON0011',NULL,'','','managed'),(85,'GP149','ON0011',NULL,'','','managed'),(86,'GP150','ON0011',NULL,'','','managed'),(87,'GP151','ON0011',NULL,'','','managed'),(88,'GP152','ON0011',NULL,'','','managed'),(89,'GP153','ON0011',NULL,'','','managed'),(90,'GP154','ON0011',NULL,'','','managed'),(91,'GP155','ON0011',NULL,'','','managed'),(92,'GP156','ON0011',NULL,'','','managed'),(93,'GP157','ON0011',NULL,'','','managed'),(94,'GP158','ON0011',NULL,'','','managed'),(95,'GP159','ON0011',NULL,'','','managed'),(96,'GP160','ON0011',NULL,'','','managed'),(97,'M0097','SC0049','This is a test Standard Shirt Message to verify the system works.\n','https://shirtclub.net','',NULL),(98,'M0098','SC0049','Old animals deserve love, care, and respect. They’ve given their best years to this world, and now it’s our responsibility to protect them, provide them with comfort, and save their lives. Saving old animals is saving kindness itself.','https://bilalelmarbouh.com/','/client/SC0049/pic/3WhW1JeVy1ls',NULL);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cart` text,
  `customer` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (10,'{\"print_id_type\":\"member_id\",\"print_id\":\"AB0011\",\"gender\":\"Men\",\"symbol\":\"Triangle\",\"type\":\"Crew Neck T-Shirt\",\"size\":\"Medium\",\"quantity\":\"2\",\"unit_price\":\"15\",\"total_price\":\"30\"}','AB0011'),(11,'{\"print_id_type\":\"member_id\",\"print_id\":\"AB0011\",\"gender\":\"Men\",\"symbol\":\"Rectangle\",\"type\":\"Crew Neck T-Shirt\",\"size\":\"X-large\",\"quantity\":\"4\",\"unit_price\":\"15\",\"total_price\":\"60\"}','AB0011'),(12,'{\"print_id_type\":\"member_id\",\"print_id\":\"CA0011\",\"gender\":\"Men\",\"symbol\":\"Triangle\",\"type\":\"Crew Neck T-Shirt\",\"size\":\"Medium\",\"quantity\":\"1\",\"unit_price\":\"15\",\"total_price\":\"15\"}','CA0011'),(13,'{\"print_id_type\":\"member_id\",\"print_id\":\"0051\",\"gender\":\"Men\",\"symbol\":\"Triangle\",\"size\":\"Large\",\"quantity\":\"1\",\"unit_price\":\"20\",\"total_price\":\"20\",\"product\":\"ActualBlue\"}','0051');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_link`
--

DROP TABLE IF EXISTS `password_reset_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_link` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `token` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_link`
--

LOCK TABLES `password_reset_link` WRITE;
/*!40000 ALTER TABLE `password_reset_link` DISABLE KEYS */;
INSERT INTO `password_reset_link` VALUES (12,10,'1KoP3g01jEqasCqEqs1m','2020-04-26 15:29:05');
/*!40000 ALTER TABLE `password_reset_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retailer_category`
--

DROP TABLE IF EXISTS `retailer_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `retailer_category` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retailer_category`
--

LOCK TABLES `retailer_category` WRITE;
/*!40000 ALTER TABLE `retailer_category` DISABLE KEYS */;
INSERT INTO `retailer_category` VALUES (19,'T-Shirts',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(20,'Hoodies',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(21,'Sweat Pants',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(22,'Hats',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(23,'Bags',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(24,'Socks',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(25,'T-Shirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(26,'Long Sleeve Shirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(27,'Polo Shirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(28,'Tank tops',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(29,'Sweatshirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(30,'Hoodies',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(31,'Jackets',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(32,'Sweat Pants',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(33,'Leggings Shorts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(34,'Hats',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(35,'Bags',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(36,'Phone Case',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(37,'Jewellery',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(38,'Flip Flops',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(39,'Socks',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(40,'Shoes',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(41,'T-Shirts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(42,'Long Sleeve Shirts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(43,'Polo Shirts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(44,'Sweat Pants',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(45,'Leggings Shorts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(46,'Bags',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(47,'T-Shirts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(48,'Long Sleeve Shirts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(49,'Polo Shirts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(50,'Tank tops',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(51,'Sweat Pants',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(52,'Leggings Shorts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(53,'Bags',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(54,'Phone Case',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(55,'Jewellery',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(56,'Flip Flops',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(57,'T-Shirts',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(58,'Bags',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(59,'T-Shirts',9,'2021-03-03 20:18:42','2021-03-03 20:18:42'),(60,'Polo Shirts',10,'2021-03-05 20:24:05','2021-03-05 20:24:05'),(61,'Leggings Shorts',10,'2021-03-05 20:24:05','2021-03-05 20:24:05'),(62,'Shoes',10,'2021-03-05 20:24:05','2021-03-05 20:24:05'),(63,'T-Shirts',1,'2021-08-25 07:32:57','2021-08-25 07:32:57'),(64,'Long Sleeve Shirts',1,'2021-08-25 07:32:57','2021-08-25 07:32:57'),(65,'T-Shirts',2,'2021-08-27 04:30:48','2021-08-27 04:30:48'),(66,'T-Shirts',3,'2021-08-29 15:46:58','2021-08-29 15:46:58');
/*!40000 ALTER TABLE `retailer_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retailer_country`
--

DROP TABLE IF EXISTS `retailer_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `retailer_country` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retailer_country`
--

LOCK TABLES `retailer_country` WRITE;
/*!40000 ALTER TABLE `retailer_country` DISABLE KEYS */;
INSERT INTO `retailer_country` VALUES (11,'Canada',4,'2020-08-12 15:55:07','2020-08-12 15:55:07'),(12,'USA',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(13,'Canada',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(14,'Mexico',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(15,'South/Central America',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(16,'Europe',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(17,'Asia',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(18,'Japan',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(19,'India',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(20,'Australia',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(21,'New Zealand',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(22,'USA',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(23,'Canada',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(24,'Mexico',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(25,'South/Central America',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(26,'USA',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(27,'Canada',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(28,'USA',9,'2021-03-03 20:18:42','2021-03-03 20:18:42'),(29,'Mexico',9,'2021-03-03 20:18:42','2021-03-03 20:18:42'),(30,'Europe',10,'2021-03-05 20:24:05','2021-03-05 20:24:05'),(31,'Mexico',1,'2021-08-25 07:32:57','2021-08-25 07:32:57'),(32,'South/Central America',1,'2021-08-25 07:32:57','2021-08-25 07:32:57');
/*!40000 ALTER TABLE `retailer_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retailer_users`
--

DROP TABLE IF EXISTS `retailer_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `retailer_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zip` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_no` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `bussiness_details` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mockup_details` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_details` text COLLATE utf8_unicode_ci,
  `printing_capabilities` text COLLATE utf8_unicode_ci,
  `shipping_country` text COLLATE utf8_unicode_ci,
  `trade1_reference_info` text COLLATE utf8_unicode_ci,
  `trade2_reference_info` text COLLATE utf8_unicode_ci,
  `account_status` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_id` (`account_id`),
  UNIQUE KEY `email_id` (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retailer_users`
--

LOCK TABLES `retailer_users` WRITE;
/*!40000 ALTER TABLE `retailer_users` DISABLE KEYS */;
INSERT INTO `retailer_users` VALUES (1,'SC100001','hasmukh@mailinator.com','hasmukh','solanki','iii','d','candaa','aj','toronto','22222','Albania','88888888888','','Qwe@1234','decorating_business','yes','{\"shirt\":{\"t_shirts\":true,\"long_sleeve_shirts\":true}}','{\"embroidery\":true,\"dye_sublimation_textile_printing\":true}','{\"mexico\":true,\"south_central_america\":true}','{\"companyName\":\"ICS\",\"address\":\"abccc\",\"phoneNumber:\":\"9999999\"}','{\"companyName\":\"aaa\"}',1,'2021-08-25 07:32:57','2021-08-25 07:32:57'),(2,'SC100002','abc@gmail.com','abc','abc','abc','abc','abc','Ontario','toronto','N2L3W8','Canada','7410741010','abc.com','test@123','both','no','{\"shirt\":{\"t_shirts\":true}}','','','{\"companyName\":\"XYZ\",\"address\":\"xyz\",\"phoneNumber:\":\"7410741010\",\"accountnoContactname\":\"74107410\"}','',1,'2021-08-27 04:30:48','2021-08-27 04:30:48'),(3,'SC100003','tosh@delcoin.com','Tosh','Skalosky','Del-Coin','President','54 Jarvis St.','Ontario','Orillia','L3V 2A1','Canada','7053259820','www.shirtclub.net','Sam@1818','both','no','{\"shirt\":{\"t_shirts\":true}}','{\"screen_printing\":true,\"direct_to_garment\":true,\"heat_transfers\":true}','','{\"companyName\":\"Stahls Canada\",\"phoneNumber:\":\"7053259820\"}','',1,'2021-08-29 15:46:58','2021-08-29 15:46:58');
/*!40000 ALTER TABLE `retailer_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shirt`
--

DROP TABLE IF EXISTS `shirt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shirt` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sn` varchar(50) DEFAULT '',
  `member_id` varchar(50) DEFAULT '',
  `brand` varchar(500) DEFAULT '',
  `color` varchar(500) DEFAULT '',
  `gender` varchar(500) DEFAULT '',
  `image` varchar(500) DEFAULT '',
  `messageNumber` varchar(500) DEFAULT '',
  `messagePosition` varchar(1000) DEFAULT '',
  `messagePurchase` varchar(50) DEFAULT '',
  `position` varchar(1000) DEFAULT '',
  `size` varchar(500) DEFAULT '',
  `total` int(11) DEFAULT '0',
  `type` varchar(500) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shirt`
--

LOCK TABLES `shirt` WRITE;
/*!40000 ALTER TABLE `shirt` DISABLE KEYS */;
INSERT INTO `shirt` VALUES (10,'SN00010','10','Blue_Popsicle_Shirts','Black','woman','w_cnt.jpg','','{}','false','{\"right\":true,\"left\":true,\"front\":false,\"back\":false}','X-Large',15,'Crew_Neck_T-Shirt'),(11,'SN00011',NULL,'Blue_Popsicle_Shirts','Blue','woman','w_vnt.jpg','','{}','false','{\"right\":false,\"left\":false,\"front\":true,\"back\":false}','Small',15,'V-Neck_T-Shirt'),(12,'SN00012','10','Hudson_Bay_Company','White','man','m_pol.jpg','','{}','false','{\"right\":true,\"left\":false,\"front\":false,\"back\":false}','Medium',25,'Polo'),(13,'SN00013','19','Hudson_Bay_Company','Black','woman','w_vnt.jpg','M0004','{\"front\":\"message\",\"back\":\"message\",\"left\":\"member\",\"right\":\"member\"}','true','{}','Medium',20,'V-Neck_T-Shirt'),(14,'SN00014',NULL,'Blue_Popsicle_Shirts','Brown','man','m_vnt.jpg','M0005','{\"right\":\"member\",\"left\":\"member\",\"front\":\"message\",\"back\":\"message\"}','true','{}','Medium',20,'V-Neck_T-Shirt'),(15,'SN00015','10','Hudson_Bay_Company','White','man','m_vnt.jpg','','{}','false','{\"right\":true,\"left\":false,\"front\":false,\"back\":false}','Medium',15,'V-Neck_T-Shirt');
/*!40000 ALTER TABLE `shirt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trx`
--

DROP TABLE IF EXISTS `trx`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trx` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `hash` varchar(150) NOT NULL,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `is_paid` int(11) NOT NULL DEFAULT '0',
  `is_fulfilled` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trx`
--

LOCK TABLES `trx` WRITE;
/*!40000 ALTER TABLE `trx` DISABLE KEYS */;
INSERT INTO `trx` VALUES (10,'aFIaV7tfBptylGhkGnVfZlB5uPbA8dMin0U268MR6RcKJh2xTQ','AB0011',0,1,'2020-06-23 16:30:31'),(11,'52dwNwiulo23IXWRJzwpuhOJWVTHAZz6Sh5qqrT5E07FoDvXI3','AB0011',0,1,'2020-06-23 17:08:07'),(12,'6mjw0ZpKu5bONBfIGzApMVFlRUptuAYqADdX50hhR2ApBvQPc0','AB0011',0,1,'2020-06-23 17:09:11'),(13,'7eKwKHzpOMuDWemq0RAVZ7XegPZbLJ9bcQTbt1Nkg5XYTGmcpN','ON0011',0,1,'2020-06-24 14:13:49'),(14,'41py8cN0hLuWU7y3NOSZ8pzETdHldW3SY8a4lXuMrvkdtSamHg','SK0036',0,1,'2020-06-24 19:16:00'),(15,'katYNoH2p0QUQopaS68C9AMgcCqkFewo41z1y7Nt98DwNAmyfF','SK0036',0,1,'2020-06-25 17:19:01'),(16,'pEUdBd6Y7lrAVZzCXnvLVJQ20wwWobWQimEy3xmFbMhGa66g9q','AB0011',0,1,'2020-06-26 21:29:37'),(17,'5cXTRc27UeIYAMzMPxtGMGvN4e1KtcX3p4bkAtc0xiNIlmjgIq','ON0043',0,1,'2020-07-27 02:19:48'),(18,'PDjT8hcTo8aqOGhEgTlJg4zNgqGz0inZVCSGxzyQb7STp6s1ho','AB0011',0,1,'2020-08-18 02:17:44'),(19,'oD4V7RcLSb0LyCNk77yTyRT5kzwuAX1yiAMjyiTsJqnAkRzFci','AB0011',0,1,'2020-08-18 02:19:24'),(20,'zY5UQN3Tx4uqI464vPahVem0OTy8LhJuKAQgqSdlYyYhRAVdU3','ON0013',0,1,'2020-08-28 20:58:34'),(21,'WyQZ01ZDLxwGHNSpFMZTDrRqQBw4viSUVRlIhT052W6qGgRgT7','ON0011',0,1,'2020-09-01 12:15:18'),(22,'RqrkC7sNpB8x2iKpVoGnvUIeu21mq05XTWnuqdGJEEUHdXZzGU','ON0050',0,1,'2020-09-01 13:49:47'),(23,'rVKKSYWfCivibUzw43blqGal2ljmOaVVvK4jAO09whxincMTuY','ON0012',0,1,'2020-09-02 14:56:00'),(24,'G8mQkrj0fBHVUOuEh0zXGCGhfD1v2Nkgp8wgmtakEkK1xYP5kg','0051',0,1,'2020-09-02 15:18:10'),(25,'mhP0jEhmZ498rfhn4Bqcd2VN6gcfS3WP5m1fL782scxqETFUO0','ON0011',0,0,'2021-08-25 08:21:32'),(26,'eGDoiXfmnGlXhObmg6vy5yepUR65n7Z1HoYyTt6dXnYVP1bcKc','ON0011',0,1,'2021-10-09 11:55:12'),(27,'9ekoaMHLfqOlRRSBCnqV4481dUVRljILGaGa0GuOTr7mI7mCZv','AF0031',0,0,'2022-02-07 21:18:57'),(28,'FMxfZQesHcs6twEc7Mkya2iB0jaRjRniTnvbbqOIp4maWaYSn4','ON0011',0,0,'2025-09-01 18:20:32'),(29,'v5v3PDLAqZcFMiimmHtyrEwBkuE7aB5BSRXW3Z6U4TnXL8E19N','SC0049',0,1,'2025-09-01 19:44:29'),(30,'SGd6CnZ2ctPJXgZs1rgz8S7CGsvPcriakwSlK0G0Z5TwbFOUd7','SC0049',0,1,'2025-09-11 18:15:22');
/*!40000 ALTER TABLE `trx` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(50) NOT NULL DEFAULT '',
  `nick_name` varchar(50) DEFAULT '',
  `message` varchar(350) DEFAULT '',
  `birthday` varchar(50) DEFAULT '',
  `marital` varchar(50) DEFAULT '',
  `meeting` varchar(350) DEFAULT '',
  `school` varchar(110) DEFAULT '',
  `occupation` varchar(110) DEFAULT '',
  `like` varchar(350) DEFAULT '',
  `dislike` varchar(350) DEFAULT '',
  `buy_me` varchar(350) DEFAULT '',
  `cheer` varchar(350) DEFAULT '',
  `prediction` varchar(350) DEFAULT '',
  `pic1` varchar(350) DEFAULT '',
  `pic2` varchar(350) DEFAULT '',
  `pic3` varchar(350) DEFAULT '',
  `password` varchar(100) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL,
  `street` varchar(150) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `zone` varchar(50) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `phone` varchar(20) NOT NULL DEFAULT '',
  `phone_type` varchar(20) NOT NULL DEFAULT '',
  `twitter` varchar(20) NOT NULL DEFAULT '',
  `show_first_name` int(11) NOT NULL DEFAULT '0',
  `show_last_name` int(11) NOT NULL DEFAULT '0',
  `show_nick_name` int(11) NOT NULL DEFAULT '0',
  `show_message` int(11) NOT NULL DEFAULT '0',
  `show_birthday` int(11) NOT NULL DEFAULT '0',
  `show_marital` int(11) NOT NULL DEFAULT '0',
  `show_meeting` int(11) NOT NULL DEFAULT '0',
  `show_school` int(11) NOT NULL DEFAULT '0',
  `show_occupation` int(11) NOT NULL DEFAULT '0',
  `show_like` int(11) NOT NULL DEFAULT '0',
  `show_dislike` int(11) NOT NULL DEFAULT '0',
  `show_buy_me` int(11) NOT NULL DEFAULT '0',
  `show_cheer` int(11) NOT NULL DEFAULT '0',
  `show_prediction` int(11) NOT NULL DEFAULT '0',
  `show_pic` int(11) NOT NULL DEFAULT '0',
  `show_twitter` int(11) NOT NULL DEFAULT '0',
  `num_shirt_purchase` int(11) NOT NULL DEFAULT '0',
  `admin` int(11) DEFAULT '0',
  `medical_alert` varchar(50) DEFAULT '',
  `xray_vision` varchar(50) DEFAULT '',
  `show_medical_alert` int(11) NOT NULL DEFAULT '0',
  `show_xray_vision` int(11) NOT NULL DEFAULT '0',
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `blood_type` varchar(10) DEFAULT NULL,
  `show_blood_type` int(11) NOT NULL DEFAULT '0',
  `facebook` varchar(150) DEFAULT NULL,
  `show_facebook` int(11) NOT NULL DEFAULT '0',
  `instagram` varchar(150) DEFAULT NULL,
  `show_instagram` int(11) NOT NULL DEFAULT '0',
  `youtube` varchar(150) DEFAULT NULL,
  `show_youtube` int(11) NOT NULL DEFAULT '0',
  `membership_status` timestamp NULL DEFAULT NULL,
  `show_closet` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=100021 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (10,'AB0011','Donald','Trump','','','','','','','','','','','','',NULL,NULL,NULL,'test12345','masterterrychen@gmail.com','3120 McCarron Crescent','Mississauga','AB','Canada','L5N 3H5','5197816776','business','realDonaldTrump',0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,3,1,'','',0,0,NULL,NULL,'A-',1,'https://www.facebook.com/DonaldTrump/',1,'realdonaldtrump',1,'https://www.youtube.com/watch?v=SSFKpKUKbks',0,'2024-06-16 12:38:05',1),(11,'ON0011','Tosh','Skalosky','Wolf','Join the \"WSBL\" World Shuffle-Board Leaugue. Visit: www.theleague.ca','August 1','Married','Shuffleboard players','','','Irish Whiskey','','Guiness','Montreal Canadiens','','3w1jfevxTFOv','PBVsYQX34uQr','','Tshe1818','tosh@delcoin.com','54 Jarvis St.','Orillia','ON','Canada','L3V2A1','7053259820','business','',0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,'','',0,0,NULL,NULL,NULL,0,'',0,'',0,'',0,'2025-12-10 00:00:00',1),(12,'AB0012','Terry','Chen','','','','','','','','','','','','','','','','123123','gn02090867@hotmail.com','137 University Ave West','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:31:52',0),(13,'ON0012','Hannah','Skalosky','','HELLO','12/23/1991','Single','Dogs','','CHIRO','Summer\nDelmonte\nDierks & Henry & Gus','','Drinks','COVID to disappear','','','','','#263646Mc','hskalosky@gmail.com','54 Jarvis Street','Orillia','ON','Canada','L3V 2A1','6479721257','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'@hannahskalosky',0,'',0,'2024-06-16 12:31:45',0),(14,'ON0013','Ellie','Skalosky','','I have a dog named Henry I love very much.','March 11','Single','Men with other dogs','Queen\'s University','','brunch, crafts, and sunsets','flavoured mints, tomatoes, and dirty fingernails','brunch and flowers','','',NULL,NULL,NULL,'henry1818','eskalosky@gmail.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7053275597','home','',1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:31:39',1),(15,'ON0014','Elaine','Skalosky','','','','','','','','','','','','','','','','181818','skaloskyelaine@gmail.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7053275597','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:31:32',0),(16,'ON0015','Elaine','Skalosky','','Hi. do you like my shirt?','April 24, 1957','Married','','','Personal assistant to Shirtclub president','Travelling in Europe','People who litter.','A Gin and Tonic','The Toronto Blue Bays','The shirtclub.net will be a great success.',NULL,NULL,NULL,'Tshe1818','elaine@delcoin.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7058262274','cell','',1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,'','',0,0,NULL,NULL,'B-',1,'',0,'',0,'',0,'2024-06-16 12:31:25',0),(17,'NJ0011','Donna','Dominelli','','','','','','','','','','','','','','','','Jeff6899','donna@delcoin.com','645 Park Avenue','Newark',NULL,'USA','64513','2824567832','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'NJ',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:31:19',0),(18,'CA0011','Mike','Meyers','','','','','','','','','','','','','A Day at Delmonte.jpg','Delmonte is Heavenly.jpg','Kayaking.jpg','181818','mike@delcoin.com','Palm St.','Los Angeles','CA','USA','24531','7056872233','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:31:12',0),(19,'FL0011','Minnie','Mouse','Rat','','','Single','Mickey Mouse','','Disney executive','Mickey Mouse','','Swiss Cheese','Orlando Magic','Mickey will marry me',NULL,NULL,NULL,'181818','minnie@disney.com','mouse street','Orlanso','FL','USA','19543','7053259820','home','',1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,'allergic to peanuts','',1,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:28:24',0),(20,'AR0011','William','Tell','','','','Single','','Queens','','','','','','','','','','181818','will@arkansas.com','123 Ozark St.','Bentonville','AR','USA','72715','479-273-8876','cell','',0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:28:12',0),(21,'ON0016','Mary','Skalosky','Baba','','','','','','','','','','','','','','','181818','mary@delcoin.com','26 Dalton Cres. N','Orillia','ON','Canada','L3V5J5','7053257360','home','',0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:28:05',0),(22,'WA0011','nancy','reagan','','','','','','','','','','','','','','','','181818','nancy@whitehouse.com','18 White Street','Washington','WA','USA','87008','222-675-8765','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:27:59',0),(23,'All regions0011','David','Connor','','','','','','','','','','','','','','','','Tshe1818','david@delcoin.com','281 Elm St','Dublin','All regions','Northern Ireland','ABC123','4352674876','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:27:52',0),(24,'EU0024','Jane','Doe','','','','','','','','','','','','','','','','181818','jane@delcoin.com','123 Avenue Street','Rome',NULL,'Europe','87654','876543382','business','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:27:44',0),(25,'SC0025','Donny','Skalosky','','','','','','','','','','','','','','','','181818','donny@delcoin.com','54 Jarvis St.','Orillia',NULL,'Other','L3V2A1','7053259820','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:27:37',0),(26,'SC0026','Will','Gred','','','','','','','','','','','','','','','','181818','will@delcoin.com','54 Jarvis St.','',NULL,'','L3V2A1','7053259820','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:27:30',0),(27,'SA0027','Emily','Johnson','','','','','','','','','','','','','','','','Jeff6899','emily@delcoin.com','123 vero blvd','Buenos Aries',NULL,'South America','23451','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Brazil',NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:27:24',0),(28,'AS0028','Jerry ','Mouse','','','','','','','','','','','','','DPM9DLBK9xBj','dqZilayqAxUQ','rkJxjccZJpwH','181818','jm@delcoin.com','123 Rocky Road','beijing',NULL,'Asia','23452','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'China',NULL,0,'',0,'',0,'',0,'2024-06-16 12:27:18',0),(29,'WA0029','Donald','Trump','','','','','','','','','','','','','','','','test12345','djtrump@gmail.com','1600 Pennsylvania Ave NW','DC',NULL,'USA','20500','123456789','business','realDonaldTrump',1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,'','',0,0,'WA',NULL,NULL,0,'https://www.facebook.com/DonaldTrump/',1,'realdonaldtrump',1,'https://www.youtube.com/watch?v=SSFKpKUKbks',1,'2024-06-16 12:27:10',0),(30,'AF0030','Frank','Smith','','','','','','','','','','','','','','','','181818','frank@delcoin.com','333 street','tttt',NULL,'Africa','76543','2345234','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Zimbawe',NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:27:00',0),(31,'AB0031','Test','Account','','','','','','','','','','','','','','','','123456','kkk@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:38:16',0),(32,'AB0032','Test','Account','','','','','','','','','','','','','','','','123456','kkkk@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:38:22',0),(33,'AB0033','Test','Account','','','','','','','','','','','','','','','','123456','kkkky@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:38:28',0),(34,'AB0034','Test','Account','','','','','','','','','','','','','','','','123456','terrychen@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:38:34',0),(35,'AB0035','Test123','test','','','','','','','','','','','','','','','','123456','xml@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','123',0,1,NULL,NULL,NULL,0,'',0,'',0,'',0,'2024-06-16 12:26:52',0),(36,'SK0036','Millie','Regina','','','','Single','','Queens','','Bernese Mountain Dogs ','','','','','','','','161616','tosh@del-coin.com','123 Elm St','Regina','SK','Canada','S4s 4m2','nancy@whitehouse.com','cell','',0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'',0,'',0,'2024-06-16 12:26:44',0),(37,'EU0037','Jane ','Doe','Janey','','','Single','','Queens','','','','Bloody Mary','','',NULL,NULL,NULL,'171717','tm@delcoin.com','456 Elm St.','Rome',NULL,'Europe','02100','','','',0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,'Peanut Allergy','',1,0,NULL,'Italy','O+',1,'',0,'',0,'',0,'2024-06-16 12:26:38',0),(38,'SA0038','Emily ','Johnson','M','Hi from Brazil','September 18','Single','A nice guy','','Student','','','A new car','','',NULL,NULL,NULL,'181818','tm@del-coin.com','155 Brazilian Blvd.','Rio',NULL,'South America','41000','','','',1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,'','',0,0,NULL,'Brazil','O+',1,'',0,'',0,'',0,'2024-06-16 12:26:30',0),(39,'0039','Terry','Chen','','','','','','','','','','','','','','','','123123','gn02090867xx@hotmail.com','137 University Ave West, 123','Waterloo','','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:26:22',0),(40,'GB0040','','Thomas','Bronny','','August 1','Single','','','Stock Broker','Dogs','Cats','Guiness','','',NULL,NULL,NULL,'Jeff6899','info@delcoin.com','123 Jarvis','London',NULL,'Great Britain','E1 7AA','5432760987','business','',0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,'peanut allergy','',1,0,NULL,'England','AB+',1,'',0,'',0,'',0,'2024-06-16 12:26:15',0),(41,'AZ0041','Sam','Jon','','','','','','','','','','','','','','','','Init@123','sam@jon.com','1926 Sam','Arizona',NULL,'USA','380052','344553','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AZ',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:26:06',0),(42,'AK0042','Sam','Joan','','','','','','','','','','','','','','','','Init@123','samjoan11@gmail.com','6606 ORANAVE','BUENA PARK',NULL,'USA','90620','1122334455','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AK',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:25:56',0),(43,'ON0043','Meredith','Micks','','','','','','','','','','','','','','','','Joey2016','meredithmicks@hotmail.com','397 Front Street West','Toronto','ON','Canada','M5V3S1','4163015927','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:25:50',0),(44,'EU0044','Angelo','Mosca','Nig Ange','','August 15, 1975','Single','A nice girl','','Chemical engineer','Football','Cats','A beer','Milan','Milan wins championship',NULL,NULL,NULL,'Tshe1818','info@del-coin.com','54 Jarvis St.','Milan',NULL,'Europe','45321','7053259820','business','',1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,'','',0,0,NULL,'Italy','O+',1,'',0,'',0,'',0,'2024-06-16 12:25:43',0),(45,'AU0045','Karen ','Carpenter','Kat','Hello shirt club people','August 9','Single','A nice guy','Adelaide U','Physio Therapist','Dogs and kangaroos','Snakes','A cold beer','Adelaide','We win the cup',NULL,NULL,NULL,'181818','delcoin@gmail.com','54 Jarvis St.','Adealaide',NULL,'Australia','34527','7053259820','home','@karencarpenter',1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,'peanut Allergy','',1,0,NULL,NULL,'AB+',1,'karencarpenter',1,'@karencarpenter',1,'https://www.youtube.com/watch?v=dvFs2F7NK4Q',1,'2024-06-16 12:25:37',1),(46,'AU0046','Bob ','Carpenter','','Hi From Australia','June 24','Married','','','','','','','','','3EK2qJHPRBZN','','','Tshe1818','bob@delcoin.com','3452 James','Adelaide',NULL,'Australia','34562','7053259820','home','',1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,'A+',1,'',0,'',0,'',0,'2024-06-16 12:25:24',0),(47,'AB0047','Test','User','','','','','','','','','','','','','','','','test12345','xyz@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,'A-',1,'',0,'',0,'',0,'2024-12-08 13:27:27',0),(48,'ON0048','Will','Skalosky ','','','','','','','','','','','','','','','','Redbirdfly22','willskalosky@gmail.com','199 Matchedash Street N. ','Orillia ','ON','Canada','L3V 4V3','70534561571','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:25:18',0),(49,'AS0049','Betty ','White','','','','','','','','','','','','','','','','191919','info@shirtclub.net','44 Elm St.','Bejing',NULL,'Asia','34278','325432876','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'China',NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:25:10',0),(50,'ON0050','Sam','Skalosky','','','','','','','','','','','','','','','','Millie97','s.skalosky@gmail.com','99 Borland St E','Orillia','ON','Canada','L3V2B8','416-884-2406','home','',1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'',0,'',0,'2024-06-16 12:24:55',0),(51,'0051','Tosh','Skalosky','','','','','','','','','','','','','','','','popsicle','skalosky.tosh@gmail.com','129 Hilton Ave','Toronto','','Canada','M5R3E8','6479878674','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:24:47',0),(52,'GB0052','Jason','Wang','','','','','','','','','','','','','','','','test12345','terry@bolt.com','137 University Ave West, 123','Waterloo',NULL,'Great Britain','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Canada',NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:24:39',0),(53,'ON0053','Hasmukhsinh','Solanki','','','','','','','','','','','','','','','','Has@9662','hasmukhs44@gmail.com','322 lester st','Waterloo','ON','Canada','N2L3W7','8073554969','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:24:30',0),(54,'ON0054','Henry','Skalosky','','','June 23','Single','','','Gaurd Dog','Cookies','Porcupines','A steak','','',NULL,NULL,NULL,'623623','henry@delcoin.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7053259820','cell','',1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'',0,'',0,'2024-06-16 12:25:01',0),(55,'0055','Hasmukhsinh','Solanki','','','','','','','','','','','','','','','','74107410','hasmukhs44+1@gmail.com',NULL,NULL,'','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:27:06',0),(56,'EU0056','Alice','Martin','','','','','','','','','','','','','','','','181818','alice@delcoin.com',NULL,NULL,NULL,'Europe',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:27:00',0),(57,'0057','John','Test','','','','','','','','','','','','','','','','Has@9662','hawkldce@gmail.com',NULL,NULL,'','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:26:50',0),(58,'ON0058','User1','User1','','qwerty','03031996','married','sdsfsdf','dfsdfsdfds','fsdfsdfsdf','dasdsfafsdfsf','dfsdfsdfsdfsd','dfsdfsdfsdf','fdsfsdfsdfsd','dsfsddsvsd','HuPlzv774YbG','','','74107410','user1@gmail.com',NULL,NULL,'ON','Canada',NULL,'','','',1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,'','dqwdwdwed',0,1,NULL,NULL,'A+',1,'fsdfsdfsdf',1,'fsdfsdfsdf',1,'',0,'2024-12-08 13:26:43',0),(59,'ON0059','Hasmukhsinh','Solanki','','','','','','','','','','','','','','','','Has@9662','has@gmail.com',NULL,NULL,'ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:26:35',0),(60,'NL0060','Hasmukh','hasmukh','','','','','','','','','','','','','','','','74107410','hasmukh@gmail.com',NULL,NULL,'NL','Canada',NULL,'7410741012','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:26:27',0),(61,'Co0061','as','as','','','','','','','','','','','','','','','','74107410','as@gmail.com',NULL,NULL,NULL,'USA',NULL,'7410741025','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'Co',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:26:15',0),(62,'MB0062','qq','qq','','','','','','','','','','','','','','','','741074107410','qq@gmail.com',NULL,NULL,'MB','Canada',NULL,'7410741074','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:26:07',0),(63,'ON0063','Hasmu','Solanki','','','','','','','','','','','','','','','','741074107410','hasmukh44@gmail.com',NULL,NULL,'ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:59',0),(64,'ON0064','testuser','testuser','','','','','','','','','','','','','','','','74107410','testuser@gmail.com','testuser','testuser','ON','Canada','N2L 3W7','7410741041','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-02 13:49:57',0),(65,'AZ0065','hasmukh','hasmukh','','','','','','','','','','','','','','','','Qwe@1234','hasmukh@mailinator.com','19235 johnson street','Toronto',NULL,'USA','N2L 326','9999999999','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AZ',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-02 13:50:08',0),(66,'ON0066','qqq','qqq','','','','','','','','','','','','','','','','74107410','qqq@gmail.com','qqq','qqq','ON','Canada','N2L 3W7','7410741074','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-02 13:50:31',0),(67,'SC0027','Wendy','Russell','','','','','','','','','','','','','','','','181818','gp123@delcoin.com','28 Elm St','Willmington',NULL,'USA','76543','7985544321','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'SC',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-02 13:50:45',0),(68,'ON0067','Test','Test','','','','','','','','','','','','','','','','123123','gn02090867+1@hotmail.com','565 Wilson Ave.','Toronto','ON','Canada','M3H 0C6','6479661591','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-02 13:51:04',0),(69,'MS000','Ellie','Morris','','','','','','','','','','','','','','','','Tshe1818','ellie@delcoin.com',NULL,'',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'MS',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-02 13:51:10',0),(71,'AK0043','Terry','Chen','','','','','','','','','','','','','','','','test12345','gn02090867+3@hotmail.com',NULL,'Toronto',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AK',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:24:33',0),(72,'AL000','Terry','Chen','','','','','','','','','','','','','','','','test12345','gn02090867+4@hotmail.com',NULL,'Toronto',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:53',0),(73,'MS001','Hannah','Morriss','','','','','','','','','','','','','','','','Tshe1818','hannah@delcoin.com',NULL,'',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'MS',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:24:44',0),(74,'SC0028','Aadil','Mir','','','','','','','','','','','','','','','','purelove8055','aadilmir114@gmail.com',NULL,'Rajouri ',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:47',1),(75,'MO000','Alice','Smith','','','','','','','','','','','','','','','','Tshe1818','shirttok@delcoin.com',NULL,'',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'MO',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:40',0),(76,'ON0068','Smeet','Darbar','','','','','','','','','','','','','','','','Smeet@26','smeetdarbar26@gmail.com',NULL,'Toronto','ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:31',0),(77,'ON0069','jatin','khatri','','','','','','','','','','','','','','','','Chelsea123#','jk2291999@gmail.com',NULL,'Etobicoke','ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:25',0),(78,'ON0070','Subham','Negi','','','','','','','','','','','','','','','','subunegi@P12','subhamn@live.com',NULL,'Toronto','ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:18',0),(79,'SC0029','fahad','shah','','','','','','','','','','','','','','','','fahad123@','fahadshah697@gmail.com',NULL,'',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:12',0),(80,'AS0050','Mohsin','Shah','','','','','','','','','','','','','','','','mohsin@123','shahmohsinsyed13@gmail.com',NULL,'Budgam',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-02 13:49:43',0),(81,'AF0031','Bonalis','Alexis','','','','','','','','','','','','','','','','alexinoo30#','bonalisalexis@gmail.com',NULL,'Abuja',NULL,'Africa',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Nigeria',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:09',0),(82,'SC0030','Abu','Sahed','','','','','','','','','','','','','','','','sahed1','ontora88@gmail.com',NULL,'Cumilla ',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Bangladesh ',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:16',0),(83,'AF0032','Trixie','Di','','','','','','','','','','','','','','','','Bakhita1969','khitwiz@gmail.com',NULL,'Nairobi',NULL,'Africa',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Kenya',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:22',0),(84,'AS0051','PAWAN','KUMAR','','','','','','','','','','','','','','','','Pawan@1978','pawansunaina78@gmail.com',NULL,'MADHUBANI',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:28',0),(85,'EU0057','Aleksandra','Krsteska','','','','','','','','','','','','','','','','Ivsashakiki..','yvanna.kr@gmail.com',NULL,'Madrid',NULL,'Europe',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Spain',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:35',0),(86,'AF0033','Amgad','Osama','','','','','','','','','','','','','','','','Vodafone30','amgad.osama1983@gmail.com',NULL,'Jiza',NULL,'Africa',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Egypt',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:42',0),(87,'AS0052','joan','ocampo`','','','','','','','','','','','','','','','','joan08231999!','joanocampo1999@gmail.com',NULL,'Manila',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Philippines',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:49',0),(88,'SC0031','Syed','nadeem Iqbal','','','','','','','','','','','','','','','','Zeerak-2003','syediqbal.talentworldgroup@gmail.com',NULL,'Islamabad',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:04:56',0),(89,'SC0032','James','roger','','','','','','','','','','','','','','','','Salman121','jamesrogerwrites@gmail.com',NULL,'Cairo',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Egypt',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:05:03',0),(90,'SC0033','shahzaib','kamal','','','','','','','','','','','','','','','','Karachi123','shahzaibkamal2010@gmail.com',NULL,'karachi',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:05:08',0),(91,'SC0034','KAMAL','VERMA','','','','','','','','','','','','','','','','Huw57BiYkevQ5ZQ','kamalv051@gmail.com',NULL,'Lucknow',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:05:15',0),(92,'GB0053','Louise','Day','','','','','','','','','','','','','','','','Tiazara11','loudtiazara9119@gmail.com',NULL,'London',NULL,'Great Britain',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'',NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 15:03:57',0),(93,'SC0035','Eunice','Awosanya','','','','','','','','','','','','','','','','yetunde88','euniceyetunde@yahoo.com',NULL,'Lagos',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Nigeria',NULL,0,NULL,0,NULL,0,NULL,0,'2024-04-26 19:28:55',0),(94,'FL0012','Nav','Neet','','','','','','','','','','','','','','','','nav@aidigitalhub.com','nav@aidigitalhub.com',NULL,'Miami',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'FL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-04-26 19:29:03',0),(95,'NJ0012','vijay','nokhwal','','','','','','','','','','','','','','','','vijay123','vj.vjnokhwal@gmail.com',NULL,'',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'NJ',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-04-26 19:29:10',0),(96,'AF0034','Fab-Emerenini','Eziokwu','','','','','','','','','','','','','','','','kumasimeda619','soldieroflight50@gmail.com',NULL,'Owerri',NULL,'Africa',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Nigeria',NULL,0,NULL,0,NULL,0,NULL,0,'2024-04-26 19:29:17',0),(97,'AS0053','Reji philip','Ambili','','','','','','','','','','','','','','','','ambili91','rejiphilipambili27@gmail.com','Aluva vazhakulam','Aluva',NULL,'Asia','683112','7994348534','business','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-16 12:24:15',0),(98,'AS0054','Samson','Thipparapu','','','','','','','','','','','','','','','','1234567sam','samsonthipparapu@mail.com',NULL,'Warangal',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Indai',NULL,0,NULL,0,NULL,0,NULL,0,'2024-12-08 13:25:02',0),(99,'AS0055','HEMANTA','DEKA','','','','','','','','','','','','','','','','hunter786','hdeka822@gmail.com',NULL,'DERGAON',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2025-01-16 13:24:37',0),(100,'GB0054','Nadine','Schioldan','','','','','','','','','','','','','','','','Fespa2023!','nadine.schioldan@fespa.com',NULL,'Dorking',NULL,'Great Britain',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'England',NULL,0,NULL,0,NULL,0,NULL,0,'2024-01-23 00:00:00',0),(101,'NY000','Jerry','Smith','','','','','','','','','','','','','','','','Tshe1818','abms@delcoin.com',NULL,'New York',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'NY',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-02-15 00:00:00',0),(102,'AS0056','Bhavana','L','','','','','','','','','','','','','','','','bhhavvana3','lbhavanagowda123@gmail.com',NULL,'Bangalore ',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-03-07 00:00:00',0),(103,'AS0057','Sugam','Rai','','','','','','','','','','','','','','','','sugam7043','sugamrai485@gmail.com',NULL,'Delhi',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-03-12 00:00:00',0),(104,'SC0036','Tannu','Tannu','','','','','','','','','','','','','','','','tyagi06','tannutyagi2210@gmail.com',NULL,'Gurgaon ',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India ',NULL,0,NULL,0,NULL,0,NULL,0,'2024-04-11 00:00:00',0),(105,'SC0037','Vansh','Galhotra','','','','','','','','','','','','','','','','vansh1234','vanshgalhotra980@gmail.com',NULL,'Sri ganganagar',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-04-25 00:00:00',0),(106,'SC0038','546541','65432','','','','','','','','','','','','','','','','111111','545165484@gmail.com',NULL,'mumbai',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'india',NULL,0,NULL,0,NULL,0,NULL,0,'2024-05-02 00:00:00',0),(107,'EU0058','Amin','Hashi ','','','','','','','','','','','','','','','','Rayaan123','M.amiin06h@gmail.com',NULL,'Malmö',NULL,'Europe',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Sweden',NULL,0,NULL,0,NULL,0,NULL,0,'2024-05-08 00:00:00',0),(108,'SC0039','Divya ','Tiwari ','','','','','','','','','','','','','','','','divya123','divyatiwari1239@gmail.com',NULL,'Katni',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'IND ',NULL,0,NULL,0,NULL,0,NULL,0,'2024-05-25 00:00:00',0),(109,'AS0058','Kuldeep','Kotad','','','','','','','','','','','','','','','','kuld33p@','Kuldeepkotad9@gmail.com',NULL,'Ahmedabad',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'India',NULL,0,NULL,0,NULL,0,NULL,0,'2024-06-08 00:00:00',0),(110,'PA000','Jerry','Springer','','','','','','','','','','','','','','','','Tshe1818','test1@delcoin.com',NULL,'',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'PA',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-07-09 00:00:00',0),(111,'CA0012','Donna ','Smith','','','','','','','','','','','','','','','','Tshe1818','test2@delcoin.com',NULL,'San Fransisco',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'CA',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-08-22 00:00:00',0),(112,'ON0071','Joyce','Wangsa','','','','','','','','','','','','','','','','Asdfghjkl14!','joyzzz178@gmail.com',NULL,'Waterloo','ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-10-25 00:00:00',0),(113,'AL001','Laurel','Mercado','','','','','','','','','','','','','','','','Pa$$w0rd!','sigegi@mailinator.com',NULL,'Delectus ut delectu',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-11 00:00:00',0),(114,'AL002','dev','test','','','','','','','','','','','','','','','','dev123','dev@gmail.com',NULL,'Toronto',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-11 00:00:00',0),(115,'AL003','bilal','dev','','','','','','','','','','','','','','','','bilal123','bilal@gmail.com',NULL,'new york',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-11 00:00:00',0),(116,'MI000','Joe','Blow','','','','','','','','','','','','','','','','Tshe1818','test3@delcoin.com',NULL,'Detroit',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'MI',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-11 00:00:00',0),(117,'AL004','test','dev','','','','','','','','','','','','','','','','test123','bilal-dev@gmail.com',NULL,'toronto',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-11 00:00:00',0),(118,'ON0072','who','who','','','','','','','','','','','','','','','','Asdfghjkl14!','whoamiwhoami026@gmail.com',NULL,'Toronto','ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-14 00:00:00',0),(119,'AL005','Joyce','Wangsa','','','','','','','','','','','','','','','','Asdfghjkl14!','thepeakjakarta@gmail.com',NULL,'somewhere',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-14 00:00:00',0),(120,'AS0059','blah','blah','','','','','','','','','','','','','','','','Asdfghjkl14!','joycewangsa@yahoo.com',NULL,'Jakarta',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Indonesia',NULL,0,NULL,0,NULL,0,NULL,0,'2024-11-14 00:00:00',0),(121,'GB0055','dynamo','jhonson','','','','','','','','','','','','','','','','Abdel2002','gatgherin@malik.com',NULL,'dakar',NULL,'Great Britain',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Senegal',NULL,0,NULL,0,NULL,0,NULL,0,'2025-01-16 00:00:00',0),(122,'BC000','Mama','Namica','','','','','','','','','','','','','','','','Baba2002','dhshshs@gmail.com',NULL,'Toronto','BC','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2025-01-16 00:00:00',0),(123,'NB000','dada','afkjasd','','','','','','','','','','','','','','','','papa2002','sadfasf@gmail.com',NULL,'wefas','NB','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2025-01-17 00:00:00',0),(124,'MB0063','dynamo','jhonson','','','','','','','','','','','','','','','','sasa2002','adda@gmail.com',NULL,'dakar','MB','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2025-01-17 00:00:00',0),(125,'GB0056','patteka','dla7aa','','','','','','','','','','','','','','','','Popo2002','sadfasfee@gmail.com',NULL,'edsa',NULL,'Great Britain',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Senegal',NULL,0,NULL,0,NULL,0,NULL,0,'2025-01-17 00:00:00',0),(126,'SA0039','solo','hercules','','','','','','','','','','','','','','','','nono2002','addaa@gmail.com',NULL,'saopaolo',NULL,'South America',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Brazil',NULL,0,NULL,0,NULL,0,NULL,0,'2025-01-17 00:00:00',0),(128,'AL006','YourAWS','YourAWS','','','','','','','','','','','','','','','','YourAWS','YourAWS@gmail.com',NULL,'USA',NULL,'USA',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AL',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2025-08-23 00:00:00',0),(129,'EU0059','Mike','Johnson','','','','','','','','','','','','','','','','Tshe1818','tmike@delcoin.com',NULL,'Rome',NULL,'Europe',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Italy',NULL,0,NULL,0,NULL,0,NULL,0,'2025-08-26 00:00:00',0),(100000,'SC0040','','','','','','','','','','','','','','','','','','4fim-n9hVgmiXg','',NULL,NULL,NULL,NULL,NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2025-09-01 00:00:00',0),(100004,'AF0035','bilal','bilal','','','','','','','','','','','','','','','','bilalbilal','bilal@test.com',NULL,'tangier',NULL,'Africa',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'maroc',NULL,0,NULL,0,NULL,0,NULL,0,'2025-12-12 00:00:00',0),(100005,'AF0036','bilal','bilal','','','','','','','','','','','','','','','','123456','team.work240@gmail.com','null','tangier',NULL,'Africa','null','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'maroc',NULL,0,NULL,0,NULL,0,NULL,0,'2025-12-14 00:00:00',0),(100006,'GB0057','bilal','bilal','','','','','','','','','','','','','','','','789456','team@gmail.com','null','tangier',NULL,'Great Britain','null','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'maroc',NULL,0,NULL,0,NULL,0,NULL,0,'2025-12-14 00:00:00',0),(100007,'AK0044','bilal','bilal','','','','','','','','','','','','','','','','123456','team.work@gmail.com','null','tangier',NULL,'USA','null','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AK',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2025-12-14 00:00:00',0),(100008,'BC001','bilal','bilal','','','','','','','','','','','','','','','','123456','team.work2400@gmail.com',NULL,'tangier','BC','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2025-12-14 00:00:00',0),(100009,'AB0048','Al','Calgary','','','','','','','','','','','','','','','','181818','al@delcoin.com',NULL,'Calgary','AB','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2026-01-30 00:00:00',0),(100010,'AS0060','Irfan','khan','','','','','','','','','','','','','','','','123456','mohammad.irfan9117@gmail.com',NULL,'Lahore',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2026-05-24 00:00:00',0),(100011,'SC0041','Mehmoona','Batool','','','','','','','','','','','','','','','','hunza789','mehmoona733@gmail.com',NULL,'Islamabad',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2026-07-17 00:00:00',0),(100012,'SC0042','Shoaib','Ali','','','','','','','','','','','','','','','','noreen89','shoaibaliali2571@gmail.com',NULL,'Lahore',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2026-07-17 00:00:00',0),(100013,'SC0043','Mahnoor','Faitima','','','','','','','','','','','','','','','','mishi890','mahnoorf6789@gmail.com',NULL,'Sialkot',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2026-07-17 00:00:00',0),(100014,'SC0044','Asif','Ali','','','','','','','','','','','','','','','','allah2345','boyshia58@gmail.com',NULL,'Islamabad',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2026-07-17 00:00:00',0),(100015,'SC0045','Muhammad','Tanveer','','','','','','','','','','','','','','','','farhi6789','suriyab076@gmail.com',NULL,'Lahore',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2026-07-17 00:00:00',0),(100016,'AS0061','Shoaib ','Akhtar ','','','','','','','','','','','','','','','','ayeshaM776','ayeshasafdar.ma@gmail.com',NULL,'Layyah ',NULL,'Asia',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'',NULL,0,NULL,0,NULL,0,NULL,0,'2026-07-17 00:00:00',0),(100017,'SC0046','Shah','Waiz','','','','','','','','','','','','','','','','shahwaiz786','mahnoor6614@gmail.com',NULL,'layyah',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Pakistan',NULL,0,NULL,0,NULL,0,NULL,0,'2026-07-17 00:00:00',1),(100018,'SC0047','bilal','el marbouh','','','','','','','','','','','','','','','','Bilal132','bilalelmarbouh@gmail.com',NULL,'ouazzane',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Morocco',NULL,0,'',0,'',0,'',0,'2026-08-29 00:00:00',0),(100019,'SC0048','bilaltest','bilaltest','','','','','','','','','','','','','','','','123456789','bilaltest@gmail.com',NULL,'ouazzane',NULL,'Other',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Morocco',NULL,0,NULL,0,NULL,0,NULL,0,'2026-08-31 00:00:00',0),(100020,'SC0049','bilal','el marbouh','Bill','Bilal message test 11/09/2025','01012000','Married','Test Meeting','PHD','CEO','Testing','Not Testing','Book','Humanity','','7PkXjwFzhMLc','YUaSz1O08cjg','zpfg9Mfplud5','yourawsmanagement@2025','yourawsmanagement@gmail.com',NULL,'Tanger',NULL,'Other',NULL,'','','Test',1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,'','',0,0,NULL,'Morocco','A+',0,'',0,'testtweet',1,'',0,'2026-09-01 00:00:00',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_message`
--

DROP TABLE IF EXISTS `vendor_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendor_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `message_id` varchar(50) NOT NULL,
  `address` varchar(300) DEFAULT NULL,
  `contact` varchar(300) DEFAULT NULL,
  `iwt` varchar(100) DEFAULT NULL,
  `ibt` varchar(100) DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `content` varchar(1000) NOT NULL DEFAULT '',
  `link` varchar(300) NOT NULL DEFAULT '',
  `pic1` varchar(350) DEFAULT NULL,
  `pic2` varchar(350) DEFAULT NULL,
  `pic3` varchar(350) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `message_id` (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_message`
--

LOCK TABLES `vendor_message` WRITE;
/*!40000 ALTER TABLE `vendor_message` DISABLE KEYS */;
INSERT INTO `vendor_message` VALUES (10,'IWTtest','545 Wilson, toronto, on','nice',NULL,NULL,43.7344196,-79.4476844,'tt','tt','IMG_0003.JPG','',''),(12,'iii123','77 Finch Ave. E. Toronto, Ontario, Canada M2N 6H8','Nice',NULL,NULL,43.7804436,-79.4112835,'Nice','Nice','','',''),(13,'IBT0001','1711 Delmonte Road Kilworthy, Ontario  P0E 1G0','PH: 705-325-7360',NULL,NULL,44.8280331,-79.3727253,'Delmonte is just 1-1/2 hours north of Toronto. A secluded family lodge nestled on 60 acres of tall whispering pines with 2000 feet of shoreline on Sparrow Lake. Enjoy the relaxed atmosphere of our beautiful Muskoka property with it\'s spectacular sunset and calling loons.','www.delmontelodge.ca','Delmonte is Heavenly.jpg','Kayaking.jpg','Jogging on Delmonte Road.jpg'),(14,'IWT007','','',NULL,NULL,NULL,NULL,'love my test','','11021267_10205344009413873_8377101224929210202_n.jpg','IMG_6432.JPG',''),(15,'IWT008','','',NULL,NULL,NULL,NULL,'','','IMG_6577.JPG','',''),(16,'IWT009','','',NULL,NULL,NULL,NULL,'','','HKIgqkX6Dktz','',''),(17,'IWT020','','',NULL,NULL,NULL,NULL,'','','hQwsIWLdZk8k','WIQDAKlGQfdf','Ffgyfacl9fxS');
/*!40000 ALTER TABLE `vendor_message` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-22 19:20:31
