/*
Navicat MySQL Data Transfer

Source Server         : serverLocalhost
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : angular

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2014-08-30 12:26:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `prueba`
-- ----------------------------
DROP TABLE IF EXISTS `prueba`;
CREATE TABLE `prueba` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `back` varchar(100) DEFAULT NULL,
  `profile` varchar(100) DEFAULT NULL,
  `genre` varchar(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of prueba
-- ----------------------------
INSERT INTO `prueba` VALUES ('1', '', '', '', '');
INSERT INTO `prueba` VALUES ('2', '', '', '', '');
INSERT INTO `prueba` VALUES ('3', '', '', '', '');
INSERT INTO `prueba` VALUES ('4', '', '', '', '');
INSERT INTO `prueba` VALUES ('5', '', '', '', '');
INSERT INTO `prueba` VALUES ('6', '', '', '', '');
INSERT INTO `prueba` VALUES ('7', '', '', '', '');
INSERT INTO `prueba` VALUES ('8', 'C:fakepathmk.jpg', 'C:fakepathimagen.fw.png', 'male', 'male');
INSERT INTO `prueba` VALUES ('9', 'C:fakepathimagen.fw.png', 'C:fakepathmk.jpg', '02', '02');
