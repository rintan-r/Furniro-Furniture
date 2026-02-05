import prisma from '../prisma.js'
import superjson from 'superjson'

export async function getProductDetail(id) {
  const detail = await prisma.productDetail.findUnique({
    where: { id },
    include: {
      reviews: true,
      product: true,
    }
  })

    if (!detail) return null

  // Convert Decimal ke string di server
  if (detail.product?.price) {
    detail.product.price = detail.product.price.toString()
  }
  if (detail.product?.originalPrice) {
    detail.product.originalPrice = detail.product.originalPrice?.toString()
  }
  if (detail.product?.discountValue) {
    detail.product.discountValue = detail.product.discountValue?.toString()
  }
  return superjson.serialize(detail)
}

