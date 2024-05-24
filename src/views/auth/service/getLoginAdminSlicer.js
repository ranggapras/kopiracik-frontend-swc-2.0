import { createSlice } from "@reduxjs/toolkit";
import { getLoginAdmin } from "./action";

export const getLoginAdminSlicer = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    isMsg: false,
    msg: "",
  },
  extraReducers: {
    [getLoginAdmin.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getLoginAdmin.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isMsg: false,
      };
    },
    [getLoginAdmin.rejected]: (state, action) => {
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isMsg: true,
      };
    },
  },
});
export default getLoginAdminSlicer.reducer;
