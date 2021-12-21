/*
  Warnings:

  - You are about to drop the `Detail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nutrition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Nutrition` DROP FOREIGN KEY `Nutrition_nutritionId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_category_id_fkey`;

-- DropTable
DROP TABLE `Detail`;

-- DropTable
DROP TABLE `Nutrition`;

-- DropTable
DROP TABLE `Product`;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `korean_name` VARCHAR(191) NOT NULL,
    `english_name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `category_id` INTEGER NOT NULL,
    `image_url` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `korean_name` VARCHAR(191) NOT NULL,
    `english_name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `allergens` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calories` DECIMAL(65, 30) NOT NULL,
    `fat` DECIMAL(65, 30) NOT NULL,
    `sodium` DECIMAL(65, 30) NOT NULL,
    `protein` DECIMAL(65, 30) NOT NULL,
    `caffein` DECIMAL(65, 30) NOT NULL,
    `nutritionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutrition` ADD CONSTRAINT `nutrition_nutritionId_fkey` FOREIGN KEY (`nutritionId`) REFERENCES `detail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
