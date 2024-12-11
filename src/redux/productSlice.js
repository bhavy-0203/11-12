import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push({ ...payload, id: Date.now() });
    },
    deleteProduct: (state, { payload }) => {
      state.products = state.products.filter((ele) => ele.id != payload.id);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
