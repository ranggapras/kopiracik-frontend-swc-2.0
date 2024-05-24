import { createSlice } from "@reduxjs/toolkit";
import { getSummary } from "./action";

export const getSummarySlicer = createSlice({
  name: "transaction",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getSummary.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getSummary.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getSummary.rejected]: (state, action) => {
      // console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default getSummarySlicer.reducer;
