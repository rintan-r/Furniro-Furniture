/*
  Warnings:

  - You are about to drop the `product_detail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_productId_fkey";

-- DropTable
DROP TABLE "public"."product_detail";

-- DropTable
DROP TABLE "public"."reviews";
