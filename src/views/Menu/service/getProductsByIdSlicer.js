import { createSlice } from "@reduxjs/toolkit";
import { getProductsById } from "./action";
export const getProductsByIdSlicer = createSlice({
  name: "product",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getProductsById.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getProductsById.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getProductsById.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default getProductsByIdSlicer.reducer;
