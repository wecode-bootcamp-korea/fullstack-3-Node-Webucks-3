/*
  Warnings:

  - You are about to drop the column `nutritionId` on the `detail` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `detail` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `detail_nutritionId_fkey` ON `detail`;

-- DropIndex
DROP INDEX `detail_productId_fkey` ON `detail`;

-- AlterTable
ALTER TABLE `detail` DROP COLUMN `nutritionId`,
    DROP COLUMN `productId`;
