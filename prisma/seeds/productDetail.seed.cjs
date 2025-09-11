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
        description: product.description || null,
        longDescription: product.detailDescription || null,
        images: product.images || [],
        size: product.size || [],
        SKU: product.SKU || null,
        category: product.category || null,
        tags: product.tags || [],
        material: product.additionalInformation?.material || null,
        warranty: product.additionalInformation?.warranty || null,
        origin: product.additionalInformation?.origin || null,
      }
    })

    count++
    if (count % 20 === 0 || count === products.length) {
      console.log(`Inserted ${count}/${products.length} products...`)
    }
  }

  console.log('ProductDetail seeding complete ✅')
}
