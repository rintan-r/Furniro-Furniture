// src/providers/Providers.jsx
"use client";

import { Provider } from "react-redux";
import { store } from "@/src/store/store";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
