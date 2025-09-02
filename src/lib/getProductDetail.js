import prisma from './prisma'

export async function getProductDetail(id) {
  return await prisma.productDetail.findUnique({
    where: { id },
    include: { reviews: true } 
  })
}