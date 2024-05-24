import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "./action";
export const getCartSlicer = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getCart.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getCart.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getCart.rejected]: (state, action) => {
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default getCartSlicer.reducer;
