create database listwithme;

use listwithme


CREATE TABLE `burgers` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `fname` VARCHAR( 255) NOT NULL,
  `lname` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 255) NOT NULL,
  `password` VARCHAR( 255) NOT NULL,
  `devoured` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP,

  PRIMARY KEY ( `id` ) );