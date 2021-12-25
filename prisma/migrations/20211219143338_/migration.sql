-- DropForeignKey
ALTER TABLE `nutrition` DROP FOREIGN KEY `nutrition_nutritionId_fkey`;

-- AddForeignKey
ALTER TABLE `detail` ADD CONSTRAINT `detail_nutritionId_fkey` FOREIGN KEY (`nutritionId`) REFERENCES `nutrition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
