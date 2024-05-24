import { createSlice } from "@reduxjs/toolkit";
import { putTransaction } from "./action";

export const putTransactionSlicer = createSlice({
  name: "transaction",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [putTransaction.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [putTransaction.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [putTransaction.rejected]: (state, action) => {
      // console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default putTransactionSlicer.reducer;
