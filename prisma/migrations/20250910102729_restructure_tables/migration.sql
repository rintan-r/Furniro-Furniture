/*
  Warnings:

  - You are about to drop the column `color` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `detailDescription` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `isNew` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `originalPrice` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."DiscountType" AS ENUM ('PERCENTAGE', 'AMOUNT');

-- DropForeignKey
ALTER TABLE "public"."product_detail" DROP CONSTRAINT "product_detail_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_productId_fkey";

-- AlterTable
ALTER TABLE "public"."product_detail" DROP COLUMN "color",
DROP COLUMN "description",
DROP COLUMN "detailDescription",
DROP COLUMN "discount",
DROP COLUMN "images",
DROP COLUMN "isNew",
DROP COLUMN "originalPrice",
DROP COLUMN "price",
DROP COLUMN "shortDescription",
DROP COLUMN "size",
DROP COLUMN "title";

-- AlterTable
ALTER TABLE "public"."reviews" DROP COLUMN "productId",
DROP COLUMN "user",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Products";

-- CreateTable
CREATE TABLE "public"."ProductVariant" (
    "id" TEXT NOT NULL,
    "color" TEXT,
    "size" TEXT,
    "images" TEXT[],
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "longDescription" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "originalPrice" DECIMAL(10,2),
    "image" TEXT,
    "discountType" "public"."DiscountType",
    "discountValue" DECIMAL(10,2),
    "isNew" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."product_detail" ADD CONSTRAINT "product_detail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
