import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "./action";
export const updateCartSlicer = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [updateCart.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [updateCart.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [updateCart.rejected]: (state, action) => {
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default updateCartSlicer.reducer;
