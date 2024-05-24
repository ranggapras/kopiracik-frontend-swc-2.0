import { createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "./action";

export const getTransactionsSlicer = createSlice({
  name: "transaction",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getTransactions.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getTransactions.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getTransactions.rejected]: (state, action) => {
      // console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default getTransactionsSlicer.reducer;
