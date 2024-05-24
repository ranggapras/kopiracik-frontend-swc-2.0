import { createSlice } from "@reduxjs/toolkit";
import { addCart } from "./action";
export const addCartSlicer = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [addCart.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [addCart.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [addCart.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default addCartSlicer.reducer;
