import { createSlice } from "@reduxjs/toolkit";
import { deleteCart } from "./action";
export const deleteCartSlicer = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [deleteCart.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [deleteCart.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [deleteCart.rejected]: (state, action) => {
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default deleteCartSlicer.reducer;
