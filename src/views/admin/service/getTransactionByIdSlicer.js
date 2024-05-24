import { createSlice } from "@reduxjs/toolkit";
import { getTransactionById } from "./action";

export const getTransactionByIdSlicer = createSlice({
  name: "transaction",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getTransactionById.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getTransactionById.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getTransactionById.rejected]: (state, action) => {
      // console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default getTransactionByIdSlicer.reducer;
