/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductDetail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ProductDetail" DROP CONSTRAINT "ProductDetail_productId_fkey";

-- DropIndex
DROP INDEX "public"."ProductDetail_productId_key";

-- AlterTable
ALTER TABLE "public"."ProductDetail" DROP COLUMN "productId";

-- AddForeignKey
ALTER TABLE "public"."ProductDetail" ADD CONSTRAINT "ProductDetail_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
