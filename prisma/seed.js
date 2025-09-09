
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const productsData = require('../src/lib/getProductDetail.cjs');

async function main() {
  console.log("Found", Object.keys(productsData).length, "products in productsData");
  await prisma.review.deleteMany();
  await prisma.productDetail.deleteMany();

  const products = Object.values(productsData);
  let count = 0;

  for (const product of products) {
    await prisma.productDetail.create({
      data: {
        id: product.id,
        title: product.title,
        shortDescription: product.shortDescription || null,
        detailDescription: product.detailDescription || null,
        description: product.description || null,
        price: product.price || 0,
        originalPrice: product.originalPrice || null,
        discount: product.discount || null,
        isNew: product.isNew || false,
        images: product.images || [],
        size: product.size || [],
        color: product.color || [],
        SKU: product.SKU || null,
        category: product.category || null,
        tags: product.tags || [],
        material: product.additionalInformation?.material || null,
        warranty: product.additionalInformation?.warranty || null,
        origin: product.additionalInformation?.origin || null,
        reviews: {
          create: (product.reviews || []).map(r => ({
            user: r.user,
            rating: r.rating,
            comment: r.comment,
          }))
        }
      }
    });

    count++;
    if (count % 20 === 0 || count === products.length) {
      console.log(`Inserted ${count}/${products.length}`);
    }
  }

  console.log("Seeding complete");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
