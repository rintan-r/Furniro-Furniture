"use client"
import { useDispatch } from "react-redux"
import Button from "@/src/components/ui/Button"
import { addToCart } from "@/src/components/features/cart/cartSlice"
import { sanitizeProduct } from "./sanitizeProduct"

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const cartProduct = sanitizeProduct(product)
    dispatch(addToCart(cartProduct)) 
    console.log(JSON.stringify(cartProduct, null, 2));
  }

  return (
    <Button onClick={handleAddToCart} variant="cart" size="md">
      Add to Cart
    </Button>
  )
}