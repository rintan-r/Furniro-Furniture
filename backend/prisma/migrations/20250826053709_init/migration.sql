-- CreateTable
CREATE TABLE "public"."product_detail" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT,
    "detailDescription" TEXT,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "originalPrice" INTEGER,
    "discount" INTEGER,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],
    "size" TEXT[],
    "color" TEXT[],
    "SKU" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "material" TEXT,
    "warranty" TEXT,
    "origin" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reviews" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_detail_SKU_key" ON "public"."product_detail"("SKU");

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product_detail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
