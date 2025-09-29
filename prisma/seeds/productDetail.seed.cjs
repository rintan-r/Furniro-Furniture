const productsData = require('../../src/lib/data/ProductDetail.cjs')

module.exports = async function productDetailSeeder (prisma) {
  console.log(
    'Found',
    Object.keys(productsData).length,
    'products in productsData'
  )

  await prisma.review.deleteMany()
  await prisma.ProductDetail.deleteMany()

  const products = Object.values(productsData)
  let count = 0

  for (const product of products) {
    await prisma.ProductDetail.create({
      data: {
        id: product.id,
        longDescription: product.longDescription || null,
        description: product.description || null,
        images: product.images || [],
        size: product.size || [],
        color: product.color || [],
        SKU: product.SKU || null,
        category: product.category || null,
        tags: product.tags || [],
        material: product.material || null,
        warranty: product.warranty || null,
        origin: product.origin || null,
      }
    })

    count++
    if (count % 20 === 0 || count === products.length) {
      console.log(`Inserted ${count}/${products.length} products...`)
    }
  }

  console.log('ProductDetail seeding complete ✅')
}
