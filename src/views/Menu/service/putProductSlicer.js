import { createSlice } from "@reduxjs/toolkit";
import { putProduct } from "./action";
export const putProductSlicer = createSlice({
  name: "putProduct",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [putProduct.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [putProduct.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [putProduct.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isMsg: true,
        msg: action.payload.message,
      };
    },
  },
});
export default putProductSlicer.reducer;
