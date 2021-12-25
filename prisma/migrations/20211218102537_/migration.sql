/*
  Warnings:

  - You are about to drop the column `name` on the `Categories` table. All the data in the column will be lost.
  - You are about to drop the `Allergies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductAllergies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Categories` DROP COLUMN `name`;

-- DropTable
DROP TABLE `Allergies`;

-- DropTable
DROP TABLE `Images`;

-- DropTable
DROP TABLE `ProductAllergies`;

-- DropTable
DROP TABLE `Products`;

-- DropTable
DROP TABLE `Users`;
