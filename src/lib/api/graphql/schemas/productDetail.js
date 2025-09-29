import prisma from '../../../prisma'

export const productDetailTypeDef = `
type ProductDetail {
    id: ID!
    description: String
    longDescription: String
    images: [String]
    size: [String]
    SKU: String
    category: String
    tags: [String]
    material: String
    warranty: String
    origin: String
    createdAt: String
    product: Product   # optional, kalau mau relasi balik
}

extend type Query {
    product(id: ID!): Product   # ambil 1 produk lengkap dengan detail
}
`

export const productDetailResolvers = {
  Query: {
    product: async (_, { id }) => {
      return await prisma.product.findUnique({
        where: { id },
        include: { detail: true }   // join detail full
      })
    }
  }
}
