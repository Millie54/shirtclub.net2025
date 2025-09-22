-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: shirtclub_dev
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `closet_shirt` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `symbol` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `pic` varchar(350) DEFAULT NULL,
  `message_number` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `closet_shirt`
--

LOCK TABLES `closet_shirt` WRITE;
/*!40000 ALTER TABLE `closet_shirt` DISABLE KEYS */;
INSERT INTO `closet_shirt` VALUES (24,'AB0011','star','dfd','DBDtobihN4Fy','ddd'),(25,'AU0045','circle','Gap shirt - August 14, 2020','tuWZOTcSP5QR',''),(26,'AU0045','rectangle','Joe Fresh','jXSaMTDxLqdC',''),(27,'AB0011','circle','','XZEtxbCVUQEE','');
/*!40000 ALTER TABLE `closet_shirt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `message_id` varchar(50) NOT NULL DEFAULT '',
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `content` longtext,
  `link` varchar(300) NOT NULL DEFAULT '',
  `image` varchar(500) NOT NULL DEFAULT '',
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,'M0001','AB0011','123','123','/client/AB0011/pic/1oUDDX2TND_1492092787149.png',NULL),(2,'M0002','AB0011','test123','test123','/client/AB0011/pic/1oUDDX2TND_1492092787149.png',NULL),(3,'M0003','CA0011','Delmonte is a great place for a Muskoka wedding.','www.delmontelodge.ca','/client/CA0011/pic/Main Lodge.jpg',NULL),(4,'M0004','FL0011','I love elaphants','','/client/FL0011/pic/Shuffleboard_LIGHT 3.6mb.png',NULL),(5,'M0005','FL0011','Delmonte is a great place to get married. ','www.delmontelodge.ca','/client/FL0011/pic/Main Lodge.jpg',NULL),(6,'M0006','SA0027','Message test ','www.delmontelodge.ca','/client/SA0027/pic/EM5n4Bdp0rN2',NULL),(7,'M0007','AB0011','','','',NULL),(8,'M0008','0039','Terry Test','123','/client/0039/pic/eSpOB8P0SB5V',NULL),(9,'M0009','AB0011','Terry Test','Terry Test','/client/AB0011/pic/GyJyrLRYs48S',NULL),(10,'ABC000','AB0011','','http://apple.ca/','','managed'),(11,'M00011','AB0011','Terry Test','google.com','/client/AB0011/pic/4ZlkImDx2rgV',NULL),(12,'M00012','AB0011','tt2','google.com','/client/AB0011/pic/d2NWRJSIfyQo',NULL),(13,'M00013','ON0011','Canadian Business Development and Support:\n         Your Canadian partners ....               \nOffering new opportunities to companies seeking to grow and develop business relationships in Canada\nOffering continued support and assistance to help your business succeed in Canada              \nDel-Coin Holdings Inc. Operations:   \nDel-Coin ATM\nwww.shirtclub.net\nwww.theleauge.ca\nwww.delmontelodge.ca\n ','www.delcoin.com','/client/ON0011/pic/y7N9Wb8Q8tiG',NULL),(14,'M00014','SK0036','Delmonte is nestled on 55 secluded acres, with 2000 ft. of shoreline on Sparrow Lake and accessing the Trent- Severn Waterway System. Open June thru September. With seven different accommodations, Delmonte can host 70-100 guests on its property.  The beautiful Muskoka setting is ideal for family holidays, getaways, reunions, events and weddings. If you are interested in fishing, Sparrow Lake is filled with Bass, Pickerel, Pike and Muskie.','https://www.delmontelodge.ca/','/client/SK0036/pic/LJN2dW94Pz0p',NULL),(15,'ABC001','SK0036','','http://delmontelodge.ca','','managed'),(16,'M0016','AB0011','Hihi','hihi','/client/AB0011/pic/GlwMMXIM74yl',NULL),(17,'M0017','ON0043','2020 - the year of quarantine ','','',NULL),(18,'ABC002','AB0011','','google.com','','managed'),(19,'M0019','AB0011','hih','google.com','/client/AB0011/pic/8uLcLVRHZST6',NULL),(20,'M0020','ON0013','I love Henry','https://www.instagram.com/?hl=en','/client/ON0013/pic/8Ao1jd5gMwvK',NULL),(22,'M0022','ON0050','Nice to meet you','','',NULL),(23,'M0023','ON0012','HELLO HELLO TEST TEST TEST','https://www.tripadvisor.ca/Attraction_Review-g3445228-d3442384-Reviews-Torrance_Barrens_Dark_Sky_Preserve-Torrance_Muskoka_Lakes_Muskoka_District_Ontar.html','',NULL),(24,'M0024','0051','Tester','www.birdiegolf.ca','/client/0051/pic/g7gew8qEyNh6',NULL),(30,'GP121','ON0011','I have a favourite place for lunch. I eat there about once a week. They make burritos.Some days I would order a burrito with beef, other days a burrito with chicken even now again a burrito with fish until one day one of my children made me aware of the harm meat agriculture does to our environment, I am an old guy who just never gave much thought to farming. I did some research and educated myself. Now when I go to my favorite place I order the \"Bean Burrito\", no meat. And guess what-I like it better. All the good flavors in the burrito come from the salsa and the sauces and the vegetables. This small change in my life is helping to save the environment. This thing I do with my burritos is not all that significant I know but what if a million people started eating bean burritos? What if one hundred million people ordered burritos without meat. This would be significant. Please help me tell the \"Bean Burrito\" story.<br><br>Help us out: Make a pledge and share it with the world. Start with \"I am a good person\".<br><br>Sample Pledge: I am a good person. I am going to eat less meat.<br><br> Educate Yourself:<br>Google - \"Environmental damage caused by meat consumption\"<br>','','','managed'),(31,'GP122','ON0011','How to Save a Dolphin<br><br>When you go to Sea World do you think the dolphins are happy? I can assure you they are not. Their big toothy mouths make them look like they are smiling. Do you think the dolphins enjoy doing tricks? I can assure you they do not. They perform in order to be fed. There is nothing crueler than keeping a dolphin in captivity. The cruelty starts when a young dolphin is caught in a net and stolen from its family. These are intelligent social animals. <br><br>It is so easy to protect these animals. NEVER give money to the sick bastards who profit from their suffering. So no trips to Sea World, no trips to MarineLand and when on vacation - NEVER pay to pet a dolphin. Throw a volleyball in a swimming pool, get it wet then rub it. This is what it feels like to pet a dolphin.<br><br>Note: you will as well be protecting whales and sea lions.<br><br>Help us out: Make a pledge and share it with the world. Start with \"I am a good person\".<br>Sample Pledge: I am a good person. I do not pet dolphins.<br><br>Educate yourself:<br>Google - \"Dolphins in Captivity\"','','','managed'),(32,'GP123','ON0011','If you live in the city you might think to yourself that people who live in the country are drinking better water. But this is a silly thought. Fact is more times than not well water is dirty. It needs to be filtered and treated to be safe to drink. So where should a person go to find good water? That\'s easy. Turn on your tap. The city or town that you live in spends a lot of money to ensure that the water coming out of your tap is clean and safe to drink.  If you live in New York city the water coming out of your tap is over the top. Google it. So if you take the time to think about it there is nothing stupider than buying water in little plastic bottles. It\'s not just stupid but it is selfish. People who buy these bottles are ruining our planet. <br><br>So what can you do when you see someone coming out of a store with cases of plastic bottles? Not much. Do not say anything. Confronting lowlifes can be dangerous. Just shake your head and hope someday these people will figure it out. Please help me tell the \"Low Life I\" story.<br><br>Note: If you live in a rural area with poor water there is still no excuse for purchasing single use bottles. Buy your water in 5 gallon jugs that can be reused.<br><br>Help us out:<br> Make a pledge and share it with the world. Start with \"I am a good person\".<br><br>Sample Pledge:<br>1. I am a good person. I need water but I do not need it to come from plastic bottles<br><br>Educate yourself:<br>Google - \"Single Use Plastic + Facts\"','','','managed'),(33,'GP124','ON0011','There is something similar to buying water in small plastic bottles, something equally egregious. It\'s people who cannot be bothered to take their own reusable bags with them when grocery shopping. People who use the disposable plastic bags that stores provide are ruining our planet.<br><br>So what can you do when you see someone coming out of a store with groceries in plastic bags? Not much. Do not say anything. Confronting lowlifes can be dangerous. Just shake your head and hope someday these people will figure it out.  If you know of a store that has stopped using plastic bags shop there. If a politician promises to ban the use of plastic bags vote for him. Please help me tell the \"Low Life II\" story.<br><br>Help us out:<br>Make a pledge and share it with the world. Start with \"I am a good person\".<br><br>Sample Pledge:<br>1. I am a good person. I will always take my own bags to the grocery store. No big deal.<br><br>Educate yourself:<br>Google - \"Plastic Grocery Bags + Facts\"','','','managed'),(34,'GP125','ON0011','','','','managed'),(35,'GP126','ON0011','','','','managed'),(36,'GP127','ON0011','','','','managed'),(37,'GP128','ON0011','','','','managed'),(38,'GP129','ON0011','','','','managed'),(39,'GP130','ON0011','','','','managed'),(40,'GP131','ON0011','','','','managed'),(41,'GP132','ON0011','','','','managed'),(42,'GP133','ON0011','','','','managed'),(43,'GP134','ON0011','','','','managed'),(44,'GP135','ON0011','','','','managed'),(45,'GP136','ON0011','','','','managed'),(46,'GP137','ON0011','','','','managed'),(47,'GP138','ON0011','','','','managed'),(48,'GP139','ON0011','','','','managed'),(49,'GP140','ON0011','','','','managed');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cart` text,
  `customer` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_link` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `token` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `retailer_category` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retailer_category`
--

LOCK TABLES `retailer_category` WRITE;
/*!40000 ALTER TABLE `retailer_category` DISABLE KEYS */;
INSERT INTO `retailer_category` VALUES (1,'T-Shirts',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(2,'Long Sleeve Shirts',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(3,'Polo Shirts',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(4,'Tank tops',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(5,'Sweatshirts',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(6,'Sweat Pants',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(7,'Leggings Shorts',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(8,'Hats',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(9,'Bags',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(10,'Jewellery',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(11,'Flip Flops',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(12,'T-Shirts',2,'2020-08-10 16:24:25','2020-08-10 16:24:25'),(13,'Hoodies',2,'2020-08-10 16:24:25','2020-08-10 16:24:25'),(14,'Sweat Pants',2,'2020-08-10 16:24:25','2020-08-10 16:24:25'),(15,'Bags',2,'2020-08-10 16:24:25','2020-08-10 16:24:25'),(16,'T-Shirts',3,'2020-08-10 16:42:26','2020-08-10 16:42:26'),(17,'Long Sleeve Shirts',3,'2020-08-10 16:42:26','2020-08-10 16:42:26'),(18,'Hoodies',3,'2020-08-10 16:42:26','2020-08-10 16:42:26'),(19,'T-Shirts',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(20,'Hoodies',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(21,'Sweat Pants',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(22,'Hats',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(23,'Bags',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(24,'Socks',4,'2020-08-12 15:55:06','2020-08-12 15:55:06'),(25,'T-Shirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(26,'Long Sleeve Shirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(27,'Polo Shirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(28,'Tank tops',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(29,'Sweatshirts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(30,'Hoodies',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(31,'Jackets',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(32,'Sweat Pants',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(33,'Leggings Shorts',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(34,'Hats',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(35,'Bags',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(36,'Phone Case',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(37,'Jewellery',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(38,'Flip Flops',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(39,'Socks',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(40,'Shoes',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(41,'T-Shirts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(42,'Long Sleeve Shirts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(43,'Polo Shirts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(44,'Sweat Pants',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(45,'Leggings Shorts',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(46,'Bags',6,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(47,'T-Shirts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(48,'Long Sleeve Shirts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(49,'Polo Shirts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(50,'Tank tops',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(51,'Sweat Pants',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(52,'Leggings Shorts',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(53,'Bags',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(54,'Phone Case',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(55,'Jewellery',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(56,'Flip Flops',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(57,'T-Shirts',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(58,'Bags',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(59,'T-Shirts',9,'2021-03-03 20:18:42','2021-03-03 20:18:42'),(60,'Polo Shirts',10,'2021-03-05 20:24:05','2021-03-05 20:24:05'),(61,'Leggings Shorts',10,'2021-03-05 20:24:05','2021-03-05 20:24:05'),(62,'Shoes',10,'2021-03-05 20:24:05','2021-03-05 20:24:05');
/*!40000 ALTER TABLE `retailer_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retailer_country`
--

DROP TABLE IF EXISTS `retailer_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `retailer_country` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retailer_country`
--

LOCK TABLES `retailer_country` WRITE;
/*!40000 ALTER TABLE `retailer_country` DISABLE KEYS */;
INSERT INTO `retailer_country` VALUES (1,'USA',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(2,'Canada',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(3,'Mexico',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(4,'South/Central America',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(5,'Europe',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(6,'Asia',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(7,'Japan',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(8,'India',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(9,'Canada',2,'2020-08-10 16:24:25','2020-08-10 16:24:25'),(10,'Canada',3,'2020-08-10 16:42:26','2020-08-10 16:42:26'),(11,'Canada',4,'2020-08-12 15:55:07','2020-08-12 15:55:07'),(12,'USA',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(13,'Canada',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(14,'Mexico',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(15,'South/Central America',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(16,'Europe',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(17,'Asia',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(18,'Japan',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(19,'India',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(20,'Australia',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(21,'New Zealand',5,'2020-08-20 20:08:47','2020-08-20 20:08:47'),(22,'USA',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(23,'Canada',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(24,'Mexico',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(25,'South/Central America',7,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(26,'USA',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(27,'Canada',8,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(28,'USA',9,'2021-03-03 20:18:42','2021-03-03 20:18:42'),(29,'Mexico',9,'2021-03-03 20:18:42','2021-03-03 20:18:42'),(30,'Europe',10,'2021-03-05 20:24:05','2021-03-05 20:24:05');
/*!40000 ALTER TABLE `retailer_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retailer_users`
--

DROP TABLE IF EXISTS `retailer_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `retailer_users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `account_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `company_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `zip` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `bussiness_details` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `mockup_details` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_details` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `printing_capabilities` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `shipping_country` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `trade1_reference_info` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `trade2_reference_info` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `account_status` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_id` (`account_id`),
  UNIQUE KEY `email_id` (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retailer_users`
--

LOCK TABLES `retailer_users` WRITE;
/*!40000 ALTER TABLE `retailer_users` DISABLE KEYS */;
INSERT INTO `retailer_users` VALUES (1,'SC100001','maxine@gmail.com','James','Maxine','Test','Manager','1926 Road','Texas','Toronto','10010','USA','1122334455','www.example.com','Init@123','both','yes','{\"shirt\":{\"t_shirts\":true,\"long_sleeve_shirts\":true,\"polo_shirts\":true,\"tank_tops\":true,\"sweatshirts\":true},\"bottoms\":{\"sweat_pants\":true,\"leggings_shorts\":true,\"hats\":true},\"accessories:\":{\"bags\":true,\"jewellery\":true,\"flip_flops\":true}}','{\"screen_printing\":true,\"direct_to_garment\":true,\"embroidery\":true,\"dye_sublimation_textile_printing\":true}','{\"usa\":true,\"canada\":true,\"mexico\":true,\"south_central_america\":true,\"europe\":true,\"asia\":true,\"japan\":true,\"india\":true}','{\"companyName\":\"Test Company\",\"address\":\"1926 Address\",\"phoneNumber:\":\"1122334455\"}','',1,'2020-08-09 12:00:32','2020-08-09 12:00:32'),(2,'SC100002','john.doe@gmail.com','john','Doe','ABC','Manager','193 Albert St','Ontario','Waterloo','N2E 2K1','Canada','123 456 789','','abc@12345','online_business','yes','{\"shirt\":{\"t_shirts\":true,\"hoodies\":true},\"bottoms\":{\"sweat_pants\":true},\"accessories:\":{\"bags\":true}}','{\"screen_printing\":true}','{\"canada\":true}','{\"companyName\":\"mno\",\"address\":\"1024 main st, waterloo\",\"phoneNumber:\":\"456 789 123\",\"accountnoContactname\":\"123456789\"}','',1,'2020-08-10 16:24:25','2020-08-12 15:55:39'),(3,'SC100003','tosh@delcoin.com','Tosh','Skalosky','Del-coin','President','54 Jarvis St.','Ontario','Orillia','L3V 2A1','Canada','7053259820','www.delcoin.com','Sam@1818','decorating_business','no','{\"shirt\":{\"t_shirts\":true,\"long_sleeve_shirts\":true,\"hoodies\":true}}','{\"direct_to_garment\":true}','{\"canada\":true}','{\"companyName\":\"Stahls\",\"phoneNumber:\":\"800-521-5255\"}','',1,'2020-08-10 16:42:26','2020-08-10 16:42:26'),(4,'SC100004','kantwalakrishna6@gmail.com','Krishna','Kantwala','ABC pvt. ltd.','Manager','193 albert street','Ontario','kitchener','N2E2K1','Canada','879-546-213','www.shirtsold.com','Krishna@1997','online_business','no','{\"shirt\":{\"t_shirts\":true,\"hoodies\":true},\"bottoms\":{\"sweat_pants\":true,\"hats\":true},\"accessories:\":{\"bags\":true,\"socks\":true}}','','{\"canada\":true}','{\"companyName\":\"XYZ\",\"address\":\"103 abc st\",\"phoneNumber:\":\"123 456 789\"}','',1,'2020-08-12 15:55:06','2020-08-12 16:31:46'),(5,'SC100005','info@delcoin.com','Skalosky','Mike','Del-Coin','President','13 Oro-medonte Line 14 S','Ontario','Oro-Medonte','L3V8J3','Canada','7053259820','www.delcoin.com','Sam@1818','both','no','{\"shirt\":{\"t_shirts\":true,\"long_sleeve_shirts\":true,\"polo_shirts\":true,\"tank_tops\":true,\"sweatshirts\":true,\"hoodies\":true},\"jackets\":true,\"bottoms\":{\"sweat_pants\":true,\"leggings_shorts\":true,\"hats\":true},\"accessories:\":{\"bags\":true,\"phone_case\":true,\"jewellery\":true,\"flip_flops\":true,\"socks\":true,\"shoes\":true}}','{\"screen_printing\":true,\"direct_to_garment\":true,\"embroidery\":true,\"dye_sublimation_textile_printing\":true,\"heat_transfers\":true}','{\"usa\":true,\"canada\":true,\"mexico\":true,\"south_central_america\":true,\"europe\":true,\"asia\":true,\"japan\":true,\"india\":true,\"australia\":true,\"new_zealand\":true}','{\"companyName\":\"Stahls\",\"address\":\"90 Snow Blvd. Concord ON. L4K 4C1\",\"phoneNumber:\":\"800-521-5255\"}','',1,'2020-08-20 20:08:46','2020-08-20 20:08:46'),(6,'SC100006','jhon@mailinator.com','John','Doe','ITs','manager','ABCDD','Canada','Toronto','n2l326','Albania','12233333333333','https://www.google.com','Qwe@1234','online_business','yes','{\"shirt\":{\"t_shirts\":true,\"long_sleeve_shirts\":true,\"polo_shirts\":true},\"bottoms\":{\"sweat_pants\":true,\"leggings_shorts\":true},\"accessories:\":{\"bags\":true}}','{\"screen_printing\":true}','','{\"companyName\":\"DDD\",\"address\":\"DDD\",\"phoneNumber:\":\"999999\",\"accountnoContactname\":\"9999\"}','{\"companyName\":\"bhh\",\"address\":\"hhhh\",\"phoneNumber:\":\"9999\",\"accountnoContactname\":\"9999\"}',1,'2020-08-25 17:34:26','2020-08-25 17:34:26'),(7,'SC100007','Christine@mailinator.com','Christine','Martin','ITS','MAnager','1926 jhn son road','TOronto','toronto','N2l 326','Angola','98988 22345','https://www.google.com','Qwe@1234','online_business','yes','{\"shirt\":{\"t_shirts\":true,\"long_sleeve_shirts\":true,\"polo_shirts\":true,\"tank_tops\":true},\"bottoms\":{\"sweat_pants\":true,\"leggings_shorts\":true},\"accessories:\":{\"bags\":true,\"phone_case\":true,\"jewellery\":true,\"flip_flops\":true}}','{\"screen_printing\":true,\"direct_to_garment\":true,\"embroidery\":true,\"dye_sublimation_textile_printing\":true}','{\"usa\":true,\"canada\":true,\"mexico\":true,\"south_central_america\":true}','{\"companyName\":\"NEw company\",\"address\":\"Toronto\",\"phoneNumber:\":\"99999 9999 99\",\"accountnoContactname\":\"Name\"}','',1,'2020-08-25 17:54:31','2020-08-25 17:54:31'),(8,'SC100008','joe.lobo@gmail.com','joe','lobo','ghi ltd','manager','12 john st','Ontario','Toronto','N2K3T4','Canada','456 789 123 ','https://ghi.lts.com','abc@123','online_business','yes','{\"shirt\":{\"t_shirts\":true},\"accessories:\":{\"bags\":true}}','','{\"usa\":true,\"canada\":true}','{\"companyName\":\"ghi org\",\"address\":\"14 joh st\",\"phoneNumber:\":\"789 456 123\",\"accountnoContactname\":\"ghi org ltd\"}','',1,'2020-08-25 18:00:57','2020-08-25 18:00:57'),(9,'SC100009','test@test.com','Test','Test','test','test','test','test','test','232323','land Islands','1231231233','123123123','qwer1234!@#$','decorating_business','no','{\"shirt\":{\"t_shirts\":true}}','{\"direct_to_garment\":true}','{\"usa\":true,\"mexico\":true}','{\"companyName\":\"asdasd\",\"address\":\"asdasd\",\"phoneNumber:\":\"asdasd\",\"accountnoContactname\":\"asdasd\"}','',1,'2021-03-03 20:18:42','2021-03-03 20:18:42'),(10,'SC100010','emm@mailinator.com','emm','em','bla','foo','192 Johnson Rd','Ontario','Toronto','N2L 3E6','Canada','18002242321','','qwe123QWE!@#','both','no','{\"shirt\":{\"polo_shirts\":true},\"bottoms\":{\"leggings_shorts\":true},\"accessories:\":{\"shoes\":true}}','{\"embroidery\":true}','{\"europe\":true}','{\"companyName\":\"Ego Builder\",\"address\":\"Feierstr 300, Germany\",\"phoneNumber:\":\"+498002231432\",\"accountnoContactname\":\"Karl Egon\"}','',1,'2021-03-05 20:24:05','2021-03-05 20:24:05');
/*!40000 ALTER TABLE `retailer_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shirt`
--

DROP TABLE IF EXISTS `shirt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shirt` (
  `id` bigint NOT NULL AUTO_INCREMENT,
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
  `total` int DEFAULT '0',
  `type` varchar(500) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trx` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `hash` varchar(150) NOT NULL,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `is_paid` int NOT NULL DEFAULT '0',
  `is_fulfilled` int NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trx`
--

LOCK TABLES `trx` WRITE;
/*!40000 ALTER TABLE `trx` DISABLE KEYS */;
INSERT INTO `trx` VALUES (10,'aFIaV7tfBptylGhkGnVfZlB5uPbA8dMin0U268MR6RcKJh2xTQ','AB0011',0,1,'2020-06-23 16:30:31'),(11,'52dwNwiulo23IXWRJzwpuhOJWVTHAZz6Sh5qqrT5E07FoDvXI3','AB0011',0,1,'2020-06-23 17:08:07'),(12,'6mjw0ZpKu5bONBfIGzApMVFlRUptuAYqADdX50hhR2ApBvQPc0','AB0011',0,1,'2020-06-23 17:09:11'),(13,'7eKwKHzpOMuDWemq0RAVZ7XegPZbLJ9bcQTbt1Nkg5XYTGmcpN','ON0011',0,1,'2020-06-24 14:13:49'),(14,'41py8cN0hLuWU7y3NOSZ8pzETdHldW3SY8a4lXuMrvkdtSamHg','SK0036',0,1,'2020-06-24 19:16:00'),(15,'katYNoH2p0QUQopaS68C9AMgcCqkFewo41z1y7Nt98DwNAmyfF','SK0036',0,1,'2020-06-25 17:19:01'),(16,'pEUdBd6Y7lrAVZzCXnvLVJQ20wwWobWQimEy3xmFbMhGa66g9q','AB0011',0,1,'2020-06-26 21:29:37'),(17,'5cXTRc27UeIYAMzMPxtGMGvN4e1KtcX3p4bkAtc0xiNIlmjgIq','ON0043',0,1,'2020-07-27 02:19:48'),(18,'PDjT8hcTo8aqOGhEgTlJg4zNgqGz0inZVCSGxzyQb7STp6s1ho','AB0011',0,1,'2020-08-18 02:17:44'),(19,'oD4V7RcLSb0LyCNk77yTyRT5kzwuAX1yiAMjyiTsJqnAkRzFci','AB0011',0,1,'2020-08-18 02:19:24'),(20,'zY5UQN3Tx4uqI464vPahVem0OTy8LhJuKAQgqSdlYyYhRAVdU3','ON0013',0,1,'2020-08-28 20:58:34'),(21,'WyQZ01ZDLxwGHNSpFMZTDrRqQBw4viSUVRlIhT052W6qGgRgT7','ON0011',0,1,'2020-09-01 12:15:18'),(22,'RqrkC7sNpB8x2iKpVoGnvUIeu21mq05XTWnuqdGJEEUHdXZzGU','ON0050',0,1,'2020-09-01 13:49:47'),(23,'rVKKSYWfCivibUzw43blqGal2ljmOaVVvK4jAO09whxincMTuY','ON0012',0,1,'2020-09-02 14:56:00'),(24,'G8mQkrj0fBHVUOuEh0zXGCGhfD1v2Nkgp8wgmtakEkK1xYP5kg','0051',0,1,'2020-09-02 15:18:10');
/*!40000 ALTER TABLE `trx` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
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
  `show_first_name` int NOT NULL DEFAULT '0',
  `show_last_name` int NOT NULL DEFAULT '0',
  `show_nick_name` int NOT NULL DEFAULT '0',
  `show_message` int NOT NULL DEFAULT '0',
  `show_birthday` int NOT NULL DEFAULT '0',
  `show_marital` int NOT NULL DEFAULT '0',
  `show_meeting` int NOT NULL DEFAULT '0',
  `show_school` int NOT NULL DEFAULT '0',
  `show_occupation` int NOT NULL DEFAULT '0',
  `show_like` int NOT NULL DEFAULT '0',
  `show_dislike` int NOT NULL DEFAULT '0',
  `show_buy_me` int NOT NULL DEFAULT '0',
  `show_cheer` int NOT NULL DEFAULT '0',
  `show_prediction` int NOT NULL DEFAULT '0',
  `show_pic` int NOT NULL DEFAULT '0',
  `show_twitter` int NOT NULL DEFAULT '0',
  `num_shirt_purchase` int NOT NULL DEFAULT '0',
  `admin` int DEFAULT '0',
  `medical_alert` varchar(50) DEFAULT '',
  `xray_vision` varchar(50) DEFAULT '',
  `show_medical_alert` int NOT NULL DEFAULT '0',
  `show_xray_vision` int NOT NULL DEFAULT '0',
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `blood_type` varchar(10) DEFAULT NULL,
  `show_blood_type` int NOT NULL DEFAULT '0',
  `facebook` varchar(150) DEFAULT NULL,
  `show_facebook` int NOT NULL DEFAULT '0',
  `instagram` varchar(150) DEFAULT NULL,
  `show_instagram` int NOT NULL DEFAULT '0',
  `youtube` varchar(150) DEFAULT NULL,
  `show_youtube` int NOT NULL DEFAULT '0',
  `membership_status` timestamp NULL DEFAULT NULL,
  `show_closet` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (10,'AB0011','Donald','Trump','','','','','','','','','','','','','wXQxZc6m2cPU','wu63TP5mU0Qy','VV7dQ8ZxTSlf','test12345','masterterrychen@gmail.com','3120 McCarron Crescent','Mississauga','AB','Canada','L5N 3H5','5197816776','business','realDonaldTrump',0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,3,1,'','',0,0,NULL,NULL,'A-',1,'https://www.facebook.com/DonaldTrump/',1,'realdonaldtrump',1,'https://www.youtube.com/watch?v=SSFKpKUKbks',1,'2020-12-25 22:16:36',1),(11,'ON0011','Tosh','Skalosky','Wolf','Join the \"WSBL\" World Shuffle-Board Leaugue. Visit: www.theleague.ca','August 1','Married','Shuffleboard players','','','Irish Whiskey','','Guiness','Montreal Canadiens','','Del Monte in the Pines.jpg','Del Monte.jpg','Red Yellow Blue.jpg','Tshe1818','tosh@delcoin.com','54 Jarvis St.','Orillia','ON','Canada','L3V2A1','7053259820','business','',0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-05-31 08:00:00',1),(12,'AB0012','Terry','Chen','','','','','','','','','','','','','','','','123123','gn02090867@hotmail.com','137 University Ave West','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:42:26',0),(13,'ON0012','Hannah','Skalosky','','HELLO','12/23/1991','Single','Dogs','','CHIRO','Summer\nDelmonte\nDierks & Henry & Gus','','Drinks','COVID to disappear','','','','','#263646Mc','hskalosky@gmail.com','54 Jarvis Street','Orillia','ON','Canada','L3V 2A1','6479721257','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'@hannahskalosky',0,'',0,'2021-09-02 00:00:00',0),(14,'ON0013','Ellie','Skalosky','','I have a dog named Henry I love very much.','March 11','Single','Men with other dogs','Queen\'s University','','brunch, crafts, and sunsets','flavoured mints, tomatoes, and dirty fingernails','brunch and flowers','','','2016-052 OastWebContent_0355.jpg','thumb_DSC_0779_1024.jpg','IMG_0526_2.jpg','henry1818','eskalosky@gmail.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7053275597','home','',1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-09-01 00:00:00',1),(15,'ON0014','Elaine','Skalosky','','','','','','','','','','','','','','','','181818','skaloskyelaine@gmail.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7053275597','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:42:18',0),(16,'ON0015','Elaine','Skalosky','','Hi. do you like my shirt?','April 24, 1957','Married','','','Personal assistant to Shirtclub president','Travelling in Europe','People who litter.','A Gin and Tonic','The Toronto Blue Bays','The shirtclub.net will be a great success.','P6AZVnRcLT9k','v7os18tD1h42','ddDaQOqFRsLP','Tshe1818','elaine@delcoin.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7058262274','cell','',1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,'','',0,0,NULL,NULL,'B-',1,'',0,'',0,'',0,'2021-09-07 00:00:00',0),(17,'NJ0011','Donna','Dominelli','','','','','','','','','','','','','','','','Jeff6899','donna@delcoin.com','645 Park Avenue','Newark',NULL,'USA','64513','2824567832','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'NJ',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:39:11',0),(18,'CA0011','Mike','Meyers','','','','','','','','','','','','','A Day at Delmonte.jpg','Delmonte is Heavenly.jpg','Kayaking.jpg','181818','mike@delcoin.com','Palm St.','Los Angeles','CA','USA','24531','7056872233','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:39:26',0),(19,'FL0011','Minnie','Mouse','Rat','','','Single','Mickey Mouse','','Disney executive','Mickey Mouse','','Swiss Cheese','Orlando Magic','Mickey will marry me','Minnie Mouse.jpg','','','181818','minnie@disney.com','mouse street','Orlanso','FL','USA','19543','7053259820','home','',1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,'allergic to peanuts','',1,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:39:35',0),(20,'AR0011','William','Tell','','','','Single','','Queens','','','','','','','','','','181818','will@arkansas.com','123 Ozark St.','Bentonville','AR','USA','72715','479-273-8876','cell','',0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-04 11:39:47',0),(21,'ON0016','Mary','Skalosky','Baba','','','','','','','','','','','','','','','181818','mary@delcoin.com','26 Dalton Cres. N','Orillia','ON','Canada','L3V5J5','7053257360','home','',0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:39:59',0),(22,'WA0011','nancy','reagan','','','','','','','','','','','','','','','','181818','nancy@whitehouse.com','18 White Street','Washington','WA','USA','87008','222-675-8765','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:40:07',0),(23,'All regions0011','David','Connor','','','','','','','','','','','','','','','','Tshe1818','david@delcoin.com','281 Elm St','Dublin','All regions','Northern Ireland','ABC123','4352674876','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:40:14',0),(24,'EU0024','Jane','Doe','','','','','','','','','','','','','','','','181818','jane@delcoin.com','123 Avenue Street','Rome',NULL,'Europe','87654','876543382','business','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:40:21',0),(25,'SC0025','Donny','Skalosky','','','','','','','','','','','','','','','','181818','donny@delcoin.com','54 Jarvis St.','Orillia',NULL,'Other','L3V2A1','7053259820','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:40:28',0),(26,'SC0026','Will','Gred','','','','','','','','','','','','','','','','181818','will@delcoin.com','54 Jarvis St.','',NULL,'','L3V2A1','7053259820','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:40:36',0),(27,'SA0027','Emily','Johnson','','','','','','','','','','','','','','','','Jeff6899','emily@delcoin.com','123 vero blvd','Buenos Aries',NULL,'South America','23451','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Brazil',NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:40:44',0),(28,'AS0028','Jerry ','Mouse','','','','','','','','','','','','','DPM9DLBK9xBj','dqZilayqAxUQ','rkJxjccZJpwH','181818','jm@delcoin.com','123 Rocky Road','beijing',NULL,'Asia','23452','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'China',NULL,0,'',0,'',0,'',0,'2021-11-03 11:40:50',0),(29,'WA0029','Donald','Trump','','','','','','','','','','','','','','','','test12345','djtrump@gmail.com','1600 Pennsylvania Ave NW','DC',NULL,'USA','20500','123456789','business','realDonaldTrump',1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,'','',0,0,'WA',NULL,NULL,0,'https://www.facebook.com/DonaldTrump/',1,'realdonaldtrump',1,'https://www.youtube.com/watch?v=SSFKpKUKbks',1,'2021-11-03 11:40:59',0),(30,'AF0030','Frank','Smith','','','','','','','','','','','','','','','','181818','frank@delcoin.com','333 street','tttt',NULL,'Africa','76543','2345234','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Zimbawe',NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:41:08',0),(31,'AB0031','Test','Account','','','','','','','','','','','','','','','','123456','kkk@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2020-09-30 06:23:38',0),(32,'AB0032','Test','Account','','','','','','','','','','','','','','','','123456','kkkk@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,NULL,0),(33,'AB0033','Test','Account','','','','','','','','','','','','','','','','123456','kkkky@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2020-09-30 06:23:35',0),(34,'AB0034','Test','Account','','','','','','','','','','','','','','','','123456','terrychen@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2020-09-30 06:23:32',0),(35,'AB0035','Test123','test','','','','','','','','','','','','','','','','123456','xml@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','123',0,1,NULL,NULL,NULL,0,'',0,'',0,'',0,NULL,0),(36,'SK0036','Millie','Regina','','','','Single','','Queens','','Bernese Mountain Dogs ','','','','','','','','161616','tosh@del-coin.com','123 Elm St','Regina','SK','Canada','S4s 4m2','nancy@whitehouse.com','cell','',0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'',0,'',0,'2021-05-31 08:00:00',0),(37,'EU0037','Jane ','Doe','Janey','','','Single','','Queens','','','','Bloody Mary','','','cWh68ybyBY79','','','171717','tm@delcoin.com','456 Elm St.','Rome',NULL,'Europe','02100','','','',0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,'Peanut Allergy','',1,0,NULL,'Italy','O+',1,'',0,'',0,'',0,'2021-05-31 08:00:00',0),(38,'SA0038','Emily ','Johnson','','Hi from Brazil','','','','','','','','A new car','','','','','','181818','tm@del-coin.com','155 Brazilian Blvd.','Rio',NULL,'South America','41000','','','',0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,'','',0,0,NULL,'Brazil','O+',1,'',0,'',0,'',0,'2021-11-03 11:41:28',0),(39,'0039','Terry','Chen','','','','','','','','','','','','','','','','123123','gn02090867xx@hotmail.com','137 University Ave West, 123','Waterloo','','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:41:36',0),(40,'GB0040','','Thomas','Bronny','','August 1','Single','','','Stock Broker','Dogs','Cats','Guiness','','','FqGujhGyWnPB','xFjMar92rGve','XTcrNHLYpGF3','Jeff6899','info@delcoin.com','123 Jarvis','London',NULL,'Great Britain','E1 7AA','5432760987','business','',0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,'peanut allergy','',1,0,NULL,'England','AB+',1,'',0,'',0,'',0,'2021-07-24 00:00:00',0),(41,'AZ0041','Sam','Jon','','','','','','','','','','','','','','','','Init@123','sam@jon.com','1926 Sam','Arizona',NULL,'USA','380052','344553','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AZ',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:41:47',0),(42,'AK0042','Sam','Joan','','','','','','','','','','','','','','','','Init@123','samjoan11@gmail.com','6606 ORANAVE','BUENA PARK',NULL,'USA','90620','1122334455','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'AK',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:41:55',0),(43,'ON0043','Meredith','Micks','','','','','','','','','','','','','','','','Joey2016','meredithmicks@hotmail.com','397 Front Street West','Toronto','ON','Canada','M5V3S1','4163015927','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-03 11:42:04',0),(44,'EU0044','Angelo','Mosca','Nig Ange','','August 15, 1975','Single','A nice girl','','Chemical engineer','Football','Cats','A beer','Milan','Milan wins championship','w7NLfYVBTlwT','URSFWT9HXqt9','','Tshe1818','info@del-coin.com','54 Jarvis St.','Milan',NULL,'Europe','45321','7053259820','business','',1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,'','',0,0,NULL,'Italy','O+',1,'',0,'',0,'',0,'2021-07-28 00:00:00',0),(45,'AU0045','Karen ','Carpenter','Kat','Hello shirt club people','August 9','Single','A nice guy','Adelaide U','Physio Therapist','Dogs and kangaroos','Snakes','A cold beer','Adelaide','We win the cup','UewJbs04g9B0','dwEv8bzxcgiW','0IBRJBXoKPaL','181818','delcoin@gmail.com','54 Jarvis St.','Adealaide',NULL,'Australia','34527','7053259820','home','@karencarpenter',1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,'peanut Allergy','',1,0,NULL,NULL,'AB+',1,'karencarpenter',1,'@karencarpenter',1,'https://www.youtube.com/watch?v=dvFs2F7NK4Q',1,'2021-08-05 00:00:00',1),(46,'AU0046','Bob ','Carpenter','','Hi From Australia','June 24','Married','','','','','','','','','3EK2qJHPRBZN','','','Tshe1818','bob@delcoin.com','3452 James','Adelaide',NULL,'Australia','34562','7053259820','home','',1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,'A+',1,'',0,'',0,'',0,'2021-08-06 00:00:00',0),(47,'AB0047','Test','User','','','','','','','','','','','','','','','','test12345','xyz@gmail.com','137 University Ave West, 123','Waterloo','AB','Canada','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,'A-',1,'',0,'',0,'',0,'2021-08-18 00:00:00',0),(48,'ON0048','Will','Skalosky ','','','','','','','','','','','','','','','','Redbirdfly22','willskalosky@gmail.com','199 Matchedash Street N. ','Orillia ','ON','Canada','L3V 4V3','70534561571','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-08-27 00:00:00',0),(49,'AS0049','Betty ','White','','','','','','','','','','','','','','','','191919','info@shirtclub.net','44 Elm St.','Bejing',NULL,'Asia','34278','325432876','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'China',NULL,0,NULL,0,NULL,0,NULL,0,'2021-08-28 00:00:00',0),(50,'ON0050','Sam','Skalosky','','','','','','','','','','','','','','','','Millie97','s.skalosky@gmail.com','99 Borland St E','Orillia','ON','Canada','L3V2B8','416-884-2406','home','',1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'',0,'',0,'2021-09-01 00:00:00',0),(51,'0051','Tosh','Skalosky','','','','','','','','','','','','','','','','popsicle','skalosky.tosh@gmail.com','129 Hilton Ave','Toronto','','Canada','M5R3E8','6479878674','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2021-09-02 00:00:00',0),(52,'GB0052','Jason','Wang','','','','','','','','','','','','','','','','test12345','terry@bolt.com','137 University Ave West, 123','Waterloo',NULL,'Great Britain','N2L 3E6','5197816776','home','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,'Canada',NULL,0,NULL,0,NULL,0,NULL,0,'2021-11-04 11:12:19',0),(53,'ON0053','Hasmukhsinh','Solanki','','','','','','','','','','','','','','','','Has@9662','hasmukhs44@gmail.com','322 lester st','Waterloo','ON','Canada','N2L3W7','8073554969','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,NULL,0),(54,'ON0054','Henry','Skalosky','','','June 23','Single','','','Gaurd Dog','Cookies','Porcupines','A steak','','','yGau1c0UKQHB','7tafaxmacbEW','1lUV3ZKYLzHc','623623','henry@delcoin.com','54 Jarvis St.','Orillia','ON','Canada','L3V 2A1','7053259820','cell','',1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,'','',0,0,NULL,NULL,NULL,0,'',0,'',0,'',0,'2022-03-05 00:00:00',0),(55,'0055','Hasmukhsinh','Solanki','','','','','','','','','','','','','','','','74107410','hasmukhs44+1@gmail.com',NULL,NULL,'','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-04-27 00:00:00',0),(56,'EU0056','Alice','Martin','','','','','','','','','','','','','','','','181818','alice@delcoin.com',NULL,NULL,NULL,'Europe',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-05-07 00:00:00',0),(57,'0057','John','Test','','','','','','','','','','','','','','','','Has@9662','hawkldce@gmail.com',NULL,NULL,'','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-05-25 00:00:00',0),(58,'ON0058','User1','User1','','qwerty','03031996','married','sdsfsdf','dfsdfsdfds','fsdfsdfsdf','dasdsfafsdfsf','dfsdfsdfsdfsd','dfsdfsdfsdf','fdsfsdfsdfsd','dsfsddsvsd','HuPlzv774YbG','','','74107410','user1@gmail.com',NULL,NULL,'ON','Canada',NULL,'','','',1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,'','dqwdwdwed',0,1,NULL,NULL,'A+',1,'fsdfsdfsdf',1,'fsdfsdfsdf',1,'',0,'2022-06-21 08:00:00',0),(59,'ON0059','Hasmukhsinh','Solanki','','','','','','','','','','','','','','','','Has@9662','has@gmail.com',NULL,NULL,'ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-06-23 08:00:00',0),(60,'NL0060','Hasmukh','hasmukh','','','','','','','','','','','','','','','','74107410','hasmukh@gmail.com',NULL,NULL,'NL','Canada',NULL,'7410741012','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-06-23 08:00:00',0),(61,'Co0061','as','as','','','','','','','','','','','','','','','','74107410','as@gmail.com',NULL,NULL,NULL,'USA',NULL,'7410741025','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,'Co',NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-06-26 08:00:00',0),(62,'MB0062','qq','qq','','','','','','','','','','','','','','','','741074107410','qq@gmail.com',NULL,NULL,'MB','Canada',NULL,'7410741074','cell','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-06-26 08:00:00',0),(63,'ON0063','Hasmu','Solanki','','','','','','','','','','','','','','','','741074107410','hasmukh44@gmail.com',NULL,NULL,'ON','Canada',NULL,'','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,0,NULL,NULL,NULL,0,NULL,0,NULL,0,NULL,0,'2022-06-26 08:00:00',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_message`
--

DROP TABLE IF EXISTS `vendor_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_message` (
  `id` bigint NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
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

-- Dump completed on 2021-06-28  3:53:52
