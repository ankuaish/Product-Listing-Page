import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./itemsSlice";
import { fetchStatusSlice } from "./fetchStatusSlice";

export const myntraStore = configureStore({
  reducer: {
    products: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});
