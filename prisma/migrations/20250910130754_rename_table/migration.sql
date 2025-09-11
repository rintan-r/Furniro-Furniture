/*
  Warnings:

  - You are about to drop the `product_detail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."product_detail" DROP CONSTRAINT "product_detail_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_productDetailId_fkey";

-- DropForeignKey
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- DropTable
DROP TABLE "public"."product_detail";

-- DropTable
DROP TABLE "public"."reviews";

-- CreateTable
CREATE TABLE "public"."ProductDetail" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "longDescription" TEXT,
    "images" TEXT[],
    "SKU" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "material" TEXT,
    "warranty" TEXT,
    "origin" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Reviews" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "productDetailId" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetail_SKU_key" ON "public"."ProductDetail"("SKU");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetail_productId_key" ON "public"."ProductDetail"("productId");

-- AddForeignKey
ALTER TABLE "public"."ProductDetail" ADD CONSTRAINT "ProductDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reviews" ADD CONSTRAINT "Reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reviews" ADD CONSTRAINT "Reviews_productDetailId_fkey" FOREIGN KEY ("productDetailId") REFERENCES "public"."ProductDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
