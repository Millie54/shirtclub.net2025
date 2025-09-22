-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: shirtclub_dev
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

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
-- Current Database: `shirtclub_dev`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `shirtclub_dev` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `shirtclub_dev`;

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
  `content` varchar(1000) NOT NULL DEFAULT '',
  `link` varchar(300) NOT NULL DEFAULT '',
  `image` varchar(500) NOT NULL DEFAULT '',
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `total` int(5) DEFAULT '0',
  `type` varchar(500) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `is_paid` int(5) NOT NULL DEFAULT '0',
  `is_fulfilled` int(5) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `show_first_name` int(5) NOT NULL DEFAULT '0',
  `show_last_name` int(5) NOT NULL DEFAULT '0',
  `show_nick_name` int(5) NOT NULL DEFAULT '0',
  `show_message` int(5) NOT NULL DEFAULT '0',
  `show_birthday` int(5) NOT NULL DEFAULT '0',
  `show_marital` int(5) NOT NULL DEFAULT '0',
  `show_meeting` int(5) NOT NULL DEFAULT '0',
  `show_school` int(5) NOT NULL DEFAULT '0',
  `show_occupation` int(5) NOT NULL DEFAULT '0',
  `show_like` int(5) NOT NULL DEFAULT '0',
  `show_dislike` int(5) NOT NULL DEFAULT '0',
  `show_buy_me` int(5) NOT NULL DEFAULT '0',
  `show_cheer` int(5) NOT NULL DEFAULT '0',
  `show_prediction` int(5) NOT NULL DEFAULT '0',
  `show_pic` int(5) NOT NULL DEFAULT '0',
  `show_twitter` int(5) NOT NULL DEFAULT '0',
  `num_shirt_purchase` int(5) NOT NULL DEFAULT '0',
  `admin` int(4) DEFAULT '0',
  `medical_alert` varchar(50) DEFAULT '',
  `xray_vision` varchar(50) DEFAULT '',
  `show_medical_alert` int(5) NOT NULL DEFAULT '0',
  `show_xray_vision` int(5) NOT NULL DEFAULT '0',
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `blood_type` varchar(10) DEFAULT NULL,
  `show_blood_type` int(5) NOT NULL DEFAULT '0',
  `facebook` varchar(150) DEFAULT NULL,
  `show_facebook` int(5) NOT NULL DEFAULT '0',
  `instagram` varchar(150) DEFAULT NULL,
  `show_instagram` int(5) NOT NULL DEFAULT '0',
  `youtube` varchar(150) DEFAULT NULL,
  `show_youtube` int(5) NOT NULL DEFAULT '0',
  `membership_status` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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

-- Dump completed on 2020-08-18  4:19:32


-- Added 2020/09/05 Add closet_shirt

DROP TABLE IF EXISTS `closet_shirt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `closet_shirt` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `symbol` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `pic` varchar(350) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

ALTER TABLE `user` ADD `show_closet` int(5) NOT NULL DEFAULT 0;

ALTER TABLE `closet_shirt` ADD `message_number` varchar(10) NOT NULL DEFAULT '';
