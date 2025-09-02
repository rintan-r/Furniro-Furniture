import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/src/components/features/cart/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});
