-- DropForeignKey
ALTER TABLE `detail` DROP FOREIGN KEY `detail_nutritionId_fkey`;

-- DropForeignKey
ALTER TABLE `detail` DROP FOREIGN KEY `detail_productId_fkey`;

-- AlterTable
ALTER TABLE `detail` MODIFY `allergens` VARCHAR(191) NULL,
    MODIFY `nutritionId` INTEGER NULL,
    MODIFY `productId` INTEGER NULL;

-- CreateTable
CREATE TABLE `_DetailToProduct` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DetailToProduct_AB_unique`(`A`, `B`),
    INDEX `_DetailToProduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DetailToNutrition` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DetailToNutrition_AB_unique`(`A`, `B`),
    INDEX `_DetailToNutrition_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_DetailToProduct` ADD FOREIGN KEY (`A`) REFERENCES `detail`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DetailToProduct` ADD FOREIGN KEY (`B`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DetailToNutrition` ADD FOREIGN KEY (`A`) REFERENCES `detail`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DetailToNutrition` ADD FOREIGN KEY (`B`) REFERENCES `nutrition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
