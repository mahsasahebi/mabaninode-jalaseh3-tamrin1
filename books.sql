-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 13, 2023 at 07:15 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) COLLATE utf8_bin NOT NULL,
  `author` varchar(30) COLLATE utf8_bin NOT NULL,
  `publisher` varchar(30) COLLATE utf8_bin NOT NULL,
  `year` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `publisher`, `year`) VALUES
(1, 'صدسال تنهایی', 'گابریل گارسیا مارکز', 'جامی', 1395),
(2, 'غرور و تعصب', 'جین آستن', 'پارسه', 1400),
(4, 'دراکولا', 'برام استوکر', 'برج', 1401),
(5, 'آرزوهای بزرگ', 'چارلز دیکنز', 'مجید', 1397),
(6, 'ربکا', 'دافنه دوموریه', 'پارسه', 1397),
(7, 'محاکمه', 'کامل روزدار', 'اشاره', 1390),
(8, 'محاکمه', 'کامل روزدار', 'اشاره', 1390);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
