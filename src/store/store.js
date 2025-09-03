import { configureStore } from "@reduxjs/toolkit";
//import cartReducer from "@/src/components/features/cart/cartReducer";
import cartReducer from "../components/features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});
