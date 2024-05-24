import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from "./action";
export const addTransactionSlicer = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [addTransaction.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [addTransaction.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [addTransaction.rejected]: (state, action) => {
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default addTransactionSlicer.reducer;
