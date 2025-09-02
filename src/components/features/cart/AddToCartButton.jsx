"use client"
import { useDispatch } from "react-redux"
import { addToCart } from "@/src/components/features/cart/cartReducer"
import Button from "@/src/components/ui/Button"
import { sanitizeProduct } from "@/src/components/features/cart/sanitizeProduct"

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(sanitizeProduct(product)))
    console.log("Adding to cart:", sanitizeProduct(product))
  }

  return (
    <Button onClick={handleAddToCart} variant="cart" size="md">
      Add to Cart
    </Button>
  )
}
