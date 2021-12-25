/*
  Warnings:

  - Added the required column `nutritionId` to the `detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detail` ADD COLUMN `nutritionId` INTEGER NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `detail` ADD CONSTRAINT `detail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
