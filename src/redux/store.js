import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { productReducer } from "./productSlice";
import { BlogReducer } from "./blogSlice";

export const Store = configureStore({
  reducer: {
    counter: counterSlice,
    product:productReducer,
    blog:BlogReducer
  },
});

