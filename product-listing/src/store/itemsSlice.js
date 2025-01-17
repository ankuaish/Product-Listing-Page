import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemActions = itemsSlice.actions;
