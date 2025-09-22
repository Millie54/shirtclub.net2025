DROP DATABASE IF EXISTS shirtclub;

CREATE DATABASE `shirtclub` DEFAULT CHARSET utf8;
USE `shirtclub`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(50) NOT NULL DEFAULT '',
  `nick_name` varchar(50) DEFAULT '',
  `medical_alert` varchar(50) DEFAULT '',
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
  `email` varchar(100) NOT NULL UNIQUE,
  `street` varchar(150) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `phone` varchar(20) NOT NULL DEFAULT '',
  `phone_type` varchar(20) NOT NULL DEFAULT '',
  `twitter` varchar(20) NOT NULL DEFAULT '',
  `xray_vision` varchar(50) NOT NULL DEFAULT '',
  `show_first_name` int(5) NOT NULL DEFAULT 0,
  `show_last_name` int(5) NOT NULL DEFAULT 0,
  `show_nick_name` int(5) NOT NULL DEFAULT 0,
  `show_medical_alert` int(5) NOT NULL DEFAULT 0,
  `show_message` int(5) NOT NULL DEFAULT 0,
  `show_birthday` int(5) NOT NULL DEFAULT 0,
  `show_marital` int(5) NOT NULL DEFAULT 0,
  `show_meeting` int(5) NOT NULL DEFAULT 0,
  `show_school` int(5) NOT NULL DEFAULT 0,
  `show_occupation` int(5) NOT NULL DEFAULT 0,
  `show_like` int(5) NOT NULL DEFAULT 0,
  `show_dislike` int(5) NOT NULL DEFAULT 0,
  `show_buy_me` int(5) NOT NULL DEFAULT 0,
  `show_cheer` int(5) NOT NULL DEFAULT 0,
  `show_prediction` int(5) NOT NULL DEFAULT 0,
  `show_pic` int(5) NOT NULL DEFAULT 0,
  `show_twitter` int(5) NOT NULL DEFAULT 0,
  `show_xray_vision` int(5) NOT NULL DEFAULT 0,
  `num_shirt_purchase` int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10;

CREATE TABLE IF NOT EXISTS `message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `message_id` varchar(50) NOT NULL DEFAULT '',
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `content` varchar(1000) NOT NULL DEFAULT '',
  `link` varchar(300) NOT NULL DEFAULT '',
  `image` varchar(500) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10;

CREATE TABLE IF NOT EXISTS `shirt` (
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
  `total` int(5) DEFAULT 0,
  `type` varchar(500) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10;

CREATE TABLE IF NOT EXISTS `vendor_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `message_id` varchar(50) NOT NULL UNIQUE,
  `address` varchar(300) DEFAULT null,
  `contact` varchar(300) DEFAULT null,
  `iwt` varchar(100) DEFAULT null,
  `ibt` varchar(100) DEFAULT null,
  `lat` DOUBLE DEFAULT null,
  `lng` DOUBLE DEFAULT null,
  `content` varchar(1000) NOT NULL DEFAULT '',
  `link` varchar(300) NOT NULL DEFAULT '',
  `pic1` varchar(350) DEFAULT null,
  `pic2` varchar(350) DEFAULT null,
  `pic3` varchar(350) DEFAULT null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10;

CREATE TABLE IF NOT EXISTS `order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cart` text DEFAULT null,
  `customer` varchar(50) DEFAULT null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10;


ALTER TABLE `user`
ADD `admin` int(4) DEFAULT 0;

UPDATE `shirtclub`.`user` SET `admin`= '1' WHERE `id`='10';

CREATE TABLE IF NOT EXISTS `password_reset_link` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `token` varchar(200) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10;


ALTER TABLE `user` CHANGE COLUMN `country` `zone` varchar(50) DEFAULT NULL;
ALTER TABLE `user` ADD `state` varchar(50) DEFAULT NULL;
ALTER TABLE `user` ADD `country` varchar(50) DEFAULT NULL;

ALTER TABLE `user` ADD `blood_type` varchar(10) DEFAULT NULL;
ALTER TABLE `user` ADD `show_blood_type` int(5) NOT NULL DEFAULT 0;
ALTER TABLE `user` ADD `facebook` varchar(150) DEFAULT NULL;
ALTER TABLE `user` ADD `show_facebook` int(5) NOT NULL DEFAULT 0;
ALTER TABLE `user` ADD `instagram` varchar(150) DEFAULT NULL;
ALTER TABLE `user` ADD `show_instagram` int(5) NOT NULL DEFAULT 0;
ALTER TABLE `user` ADD `youtube` varchar(150) DEFAULT NULL;
ALTER TABLE `user` ADD `show_youtube` int(5) NOT NULL DEFAULT 0;

ALTER TABLE `user` ADD `membership_status` TIMESTAMP NULL;

ALTER TABLE `message` ADD `type` varchar(20) DEFAULT NULL;
CREATE TABLE IF NOT EXISTS `trx` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `hash` varchar(150) NOT NULL,
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `is_paid` int(5) NOT NULL DEFAULT 0,
  `is_fulfilled` int(5) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10;