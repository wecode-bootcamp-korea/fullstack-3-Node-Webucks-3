/*
  Warnings:

  - You are about to drop the column `englishName` on the `Detail` table. All the data in the column will be lost.
  - You are about to drop the column `koreanName` on the `Detail` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `englishName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `koreanName` on the `Product` table. All the data in the column will be lost.
  - Added the required column `english_name` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `korean_name` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `english_name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `korean_name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Detail` DROP COLUMN `englishName`,
    DROP COLUMN `koreanName`,
    ADD COLUMN `english_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `korean_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `categoryId`,
    DROP COLUMN `englishName`,
    DROP COLUMN `imageUrl`,
    DROP COLUMN `koreanName`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `english_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_url` TEXT NOT NULL,
    ADD COLUMN `korean_name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
