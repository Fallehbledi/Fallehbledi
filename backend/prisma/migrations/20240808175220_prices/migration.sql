/*
  Warnings:

  - You are about to drop the column `title` on the `prices` table. All the data in the column will be lost.
  - Added the required column `image` to the `prices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `prices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `prices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prices" DROP COLUMN "title",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
