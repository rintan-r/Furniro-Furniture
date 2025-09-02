// src/features/cart/cartReducer.js
import { createAction, createReducer } from '@reduxjs/toolkit'

// Action creators
export const addToCart = createAction('cart/addToCart')
export const removeFromCart = createAction('cart/removeFromCart')
export const clearCart = createAction('cart/clearCart')

// State awal
const initialState = {
  items: []
}

// Reducer dengan builder callback
const cartReducer = createReducer(initialState, builder => {
  builder
    .addCase(addToCart, (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    })
    .addCase(removeFromCart, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    })
    .addCase(clearCart, state => {
      state.items = []
    })
})

export default cartReducer
