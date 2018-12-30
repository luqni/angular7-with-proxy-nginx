-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 20, 2018 at 04:26 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coba3`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `traac` (IN `id` INT(11))  NO SQL
SELECT * FROM transaction WHERE accountid = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `tracus` (IN `id` INT(11))  NO SQL
SELECT
a.id, a.opendate, a.balance, c.id idcus, c.firsname, c.lastname
FROM account a, customer c 
WHERE a.customerid = id AND c.id = a.customerid$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `accountnumber` int(11) NOT NULL,
  `opendate` datetime NOT NULL,
  `balance` int(11) NOT NULL,
  `customerid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`accountnumber`, `opendate`, `balance`, `customerid`) VALUES
(2, '2018-12-12 00:00:00', 50000000, 2),
(3, '2018-12-12 13:59:59', 20000000, 3),
(4, '2018-12-13 09:59:59', 40000000, 4),
(5, '2018-12-15 09:59:59', 50000000, 5),
(7, '2018-12-16 09:59:59', 60000000, 6),
(9, '2018-12-01 13:59:59', 10000000, 11),
(10, '2018-12-01 13:59:59', 100000000, 11),
(11, '2019-02-22 00:00:00', 10000000, 1),
(12, '2018-12-12 00:00:00', 20000000, 2),
(13, '2018-12-20 00:00:00', 1213, 4),
(15, '2018-12-21 00:00:00', 1, 3),
(16, '2018-12-14 00:00:00', 11, 4),
(17, '2018-12-10 00:00:00', 123, 2);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `firsname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `birthdate` varchar(45) DEFAULT NULL,
  `phonetype` varchar(45) DEFAULT NULL,
  `phonenumber` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `username`, `password`, `firsname`, `lastname`, `birthdate`, `phonetype`, `phonenumber`) VALUES
(1, 'luqni', '1313211', 'kosong', 'baehaqi', '1997-03-26', 'iphone', '0876546323'),
(2, 'admin', 'admin', 'Tri Rahmat', 'Aribowo', '1996-03-26', 'android', '082278526882'),
(3, 'dewa', 'dewa', 'dewa', 'gede', '1996-03-26', 'android', '34'),
(4, 'luqni', 'reza', 'baehaqi', 'aja', '1996-03-26', 'android', '44'),
(5, 'tika', 'tika', 'tika', 'yesi', '1996-03-26', 'android', '54'),
(6, 'jupe', 'jupe', 'jupe', 'amin', '1996-03-26', 'android', '343'),
(11, 'tra', 'tra', 'uhuhu', 'lastname', '1997-03-26', 'Android', '082278818535'),
(13, 'via', 'sayang', 'Via', 'Vallen', '1997-03-26', 'android', '08765463'),
(14, 'nella', 'jaran', 'nella', 'kharisma', '1997-03-26', 'android', '08765463'),
(15, 'nella2', 'jaran', 'nella', 'kharisma', '1997-03-26', 'android', '08765463'),
(18, 'nella2', 'jaran', 'nella', 'kharisma', '1997-03-26', 'android', '08765463'),
(20, 'abd', '12345', 'abdullah', 'mas\'ud', '2018-12-11', 'Iphone', '0875557422'),
(21, 'bang', '12345', 'bang', 'arip', '2018-12-04', 'Iphone', '0698857443'),
(29, 'chn', '1234', 'choniyu', 'Azwan', '1997-12-12', 'android', '0847773898098');

-- --------------------------------------------------------

--
-- Table structure for table `customer2`
--

CREATE TABLE `customer2` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `amount` int(11) NOT NULL,
  `amountsign` varchar(45) NOT NULL,
  `accountid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `type`, `amount`, `amountsign`, `accountid`) VALUES
(10, 'harga', 7900000, 't', 4),
(11, 'token listrik', 900000, 'T', 4),
(12, 'sdaad', 414141, 'fafaf', 3),
(13, 'top up gojek', 10000, 'debit', 2),
(14, 'bayar bukalapak', 5000, 'kredit', 2);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vtra`
-- (See below for the actual view)
--
CREATE TABLE `vtra` (
);

-- --------------------------------------------------------

--
-- Structure for view `vtra`
--
DROP TABLE IF EXISTS `vtra`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vtra`  AS  select `a`.`username` AS `username`,`a`.`firsname` AS `firsname`,`a`.`phonenumber` AS `phonenumber`,`b`.`opendate` AS `opendate`,`b`.`balance` AS `balance`,`c`.`type` AS `type`,`c`.`amount` AS `amount`,`c`.`amountsign` AS `amountsign` from ((`customer` `a` join `account` `b`) join `transaction` `c`) where ((`a`.`id` = `b`.`customerid`) and (`b`.`id` = `c`.`accountid`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accountnumber`),
  ADD KEY `customerid_idx` (`customerid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer2`
--
ALTER TABLE `customer2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountid_idx` (`accountid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `accountnumber` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `customer2`
--
ALTER TABLE `customer2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `customerid` FOREIGN KEY (`customerid`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `accountid` FOREIGN KEY (`accountid`) REFERENCES `account` (`accountnumber`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
