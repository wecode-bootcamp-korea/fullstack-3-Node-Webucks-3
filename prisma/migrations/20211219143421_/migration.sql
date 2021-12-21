/*
  Warnings:

  - You are about to drop the column `nutritionId` on the `nutrition` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `nutrition_nutritionId_fkey` ON `nutrition`;

-- AlterTable
ALTER TABLE `nutrition` DROP COLUMN `nutritionId`;
