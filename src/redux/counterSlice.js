import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    add: (state, { payload }) => {
      state.count += payload;
    },
    remove: (state, { payload }) => {
      state.count -= 1;
    },
  },
});

export const { add, remove } = counter.actions;

export const counterSlice = counter.reducer;
