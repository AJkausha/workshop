/*
 Navicat MySQL Data Transfer

 Source Server         : LOCALHOST
 Source Server Type    : MySQL
 Source Server Version : 100408
 Source Host           : localhost:3306
 Source Schema         : mini_site

 Target Server Type    : MySQL
 Target Server Version : 100408
 File Encoding         : 65001

 Date: 26/11/2019 12:25:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for pages
-- ----------------------------
DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `menu` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `is_home` tinyint(1) NOT NULL DEFAULT 0,
  `is_visible` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `position` smallint(5) UNSIGNED NULL DEFAULT NULL,
  `last_update` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `created_on` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pages
-- ----------------------------
INSERT INTO `pages` VALUES (1, 'HOME', 'Welcome to home', 'home content', 0, 1, 1, '2019-11-26 11:52:59', '2019-11-26 09:55:53');
INSERT INTO `pages` VALUES (2, 'WORK', 'Welcome to work', 'work content', 1, 1, 2, '2019-11-26 11:49:37', '2019-11-26 09:56:09');
INSERT INTO `pages` VALUES (3, 'BLOG', 'Welcome to Blog', 'blog content', 0, 1, 4, '2019-11-26 11:13:45', '2019-11-26 09:58:32');
INSERT INTO `pages` VALUES (4, 'CONTACT', 'Welcome to contact', 'contact content', 0, 1, 3, '2019-11-26 11:14:06', '2019-11-26 09:59:22');
INSERT INTO `pages` VALUES (5, 'TEMP', 'Temp page', 'TEMP', 0, 1, 5, '2019-11-26 11:45:05', '2019-11-26 10:34:37');
INSERT INTO `pages` VALUES (6, 'KAUSHA', 'The games I like', 'KAUSHA AJS', 0, 1, 6, '2019-11-26 12:01:35', '2019-11-26 11:28:31');

-- ----------------------------
-- Table structure for pages_langs
-- ----------------------------
DROP TABLE IF EXISTS `pages_langs`;
CREATE TABLE `pages_langs`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pageid` smallint(5) UNSIGNED NOT NULL,
  `lang` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `menu` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `level` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'Kaushalya Stephen', 'kausha2923@gmail.com', 'futurepassword', 4);

SET FOREIGN_KEY_CHECKS = 1;
