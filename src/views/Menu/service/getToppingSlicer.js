import { createSlice } from "@reduxjs/toolkit";
import { getTopping } from "./action";
export const getToppingSlicer = createSlice({
  name: "topping",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getTopping.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getTopping.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getTopping.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isMsg: true,
        msg: action.payload.message,
      };
    },
  },
});
export default getToppingSlicer.reducer;
