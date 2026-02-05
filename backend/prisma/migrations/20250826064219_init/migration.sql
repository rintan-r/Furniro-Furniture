-- DropForeignKey
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_productId_fkey";

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product_detail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
