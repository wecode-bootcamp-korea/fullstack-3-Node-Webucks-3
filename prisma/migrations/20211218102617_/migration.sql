/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Categories`;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `koreanName` VARCHAR(191) NOT NULL,
    `englishName` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `imageUrl` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `koreanName` VARCHAR(191) NOT NULL,
    `englishName` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `allergens` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nutrition` (
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
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nutrition` ADD CONSTRAINT `Nutrition_nutritionId_fkey` FOREIGN KEY (`nutritionId`) REFERENCES `Detail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
