import prisma from '../prisma.js'

export async function getProductDetail(id) {
  return await prisma.productDetail.findUnique({
    where: { id },
    include: { reviews: true } 
  })
}