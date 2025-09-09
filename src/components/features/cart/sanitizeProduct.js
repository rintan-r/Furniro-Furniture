export function sanitizeProduct(product) {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    originalPrice: product.originalPrice,
    image: product.images?.[0] || null,
    quantity: 1,
  }
}
