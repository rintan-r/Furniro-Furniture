import prisma from '@/src/lib/prisma'

export const productTypeDef = `
type Product {
    id: ID!
    title: String!
    shortDescription: String
    price: Float!
    originalPrice: Float
    image: String   # thumbnail, ambil dari ProductDetail.images[0]
    discountValue: Float
    isNew: Boolean
}

extend type Query {
    products: [Product]   # list untuk card
}
`

export const productResolvers = {
  Query: {
    products: async () => {
      return await prisma.product
        .findMany({
          select: {
            id: true,
            title: true,
            shortDescription: true,
            price: true,
            originalPrice: true,
            discountValue: true,
            isNew: true,
            detail: {
              select: {
                images: true
              }
            }
          }
        })
        .then(products =>
          products.map(p => ({
            ...p,
            detail: {
              images: [p.detail?.images?.[0]] // replace array dengan hanya index 0
            }
          }))
        )
    }
  },
  Product: {
    image: parent =>
      parent.detail?.images?.[0] ??
      'https://res.cloudinary.com/dvsgc0qcw/image/upload/v1759112302/picture_f4mvlw.png'
  }
}
