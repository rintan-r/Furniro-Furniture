
const productsData = require('../../src/lib/data/products.cjs');

module.exports = async function productSeeder (prisma) {
  console.log("Found", Object.keys(productsData).length, "products in productsData");

  // Hapus semua dulu biar fresh
  await prisma.products.deleteMany();

  const products = Object.values(productsData);

  // Insert sekaligus (lebih cepat)
  await prisma.products.createMany({
    data: products.map(product => ({
      id: product.id,
      title: product.title,
      shortDescription: product.shortDescription || null,
      price: product.price || 0,
      originalPrice: product.originalPrice || null,
      image: product.image || null, // string tunggal (URL Cloudinary)
      discount: product.discount || null,
      isNew: product.isNew || false,
    })),
    skipDuplicates: true, // biar ga error kalau id udah ada
  });

  console.log(`Inserted ${products.length} products`);
  console.log("Seeding complete ✅");
}
