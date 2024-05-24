import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./action";
export const getProductsSlicer = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getProducts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isMsg: true,
        msg: action.payload.message,
      };
    },
  },
});
export default getProductsSlicer.reducer;
