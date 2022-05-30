import { createReducer } from "@reduxjs/toolkit";
import { ADD, REMOVE } from "./types";

const initialState = [];

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(REMOVE, (state, action) => {
      state.filter((_, index) => index !== action.index);
    });
});

export default todoReducer;
