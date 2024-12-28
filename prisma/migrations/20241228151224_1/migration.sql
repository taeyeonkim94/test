/*
  Warnings:

  - You are about to drop the column `area` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `isConfirmed` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `detailDescription` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gallery` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `serviceArea` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `serviceType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tripType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Nofitication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChatToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[planId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `details` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceArea` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropForeignKey
ALTER TABLE "Nofitication" DROP CONSTRAINT "Nofitication_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ChatToUser" DROP CONSTRAINT "_ChatToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChatToUser" DROP CONSTRAINT "_ChatToUser_B_fkey";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "isDeletedAt" TIMESTAMP(3),
ADD COLUMN     "users" TEXT[];

-- AlterTable
ALTER TABLE "Follow" ADD COLUMN     "isDeletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "isDeletedAt" TIMESTAMP(3),
ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "area",
DROP COLUMN "isCompleted",
DROP COLUMN "isConfirmed",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "isDeletedAt" TIMESTAMP(3),
ADD COLUMN     "serviceArea" "ServiceArea" NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL;

-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "isDeletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "isDeletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "description",
DROP COLUMN "detailDescription",
DROP COLUMN "gallery",
DROP COLUMN "image",
DROP COLUMN "serviceArea",
DROP COLUMN "serviceType",
DROP COLUMN "tripType",
ADD COLUMN     "isDeletedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "Nofitication";

-- DropTable
DROP TABLE "_ChatToUser";

-- CreateTable
CREATE TABLE "DreamerProfile" (
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeletedAt" TIMESTAMP(3),
    "tripTypes" "TripType"[],
    "image" "ProfileImage" NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MakerProfile" (
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeletedAt" TIMESTAMP(3),
    "image" "ProfileImage" NOT NULL,
    "serviceTypes" "TripType"[],
    "serviceArea" "ServiceArea" NOT NULL,
    "gallery" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "detailDescription" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeletedAt" TIMESTAMP(3),
    "userId" TEXT,
    "content" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DreamerProfile_userId_key" ON "DreamerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MakerProfile_userId_key" ON "MakerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_planId_key" ON "Review"("planId");

-- AddForeignKey
ALTER TABLE "DreamerProfile" ADD CONSTRAINT "DreamerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MakerProfile" ADD CONSTRAINT "MakerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
