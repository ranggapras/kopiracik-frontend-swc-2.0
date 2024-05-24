import { createSlice } from "@reduxjs/toolkit";
import { getLogin } from "./action";
export const getLoginSlicer = createSlice({
  name: "login",
  initialState: {
    data: [],
    isLoading: false,
    isLogin: false,
    msg: "",
  },
  extraReducers: {
    [getLogin.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isLogin: true,
      };
    },
    [getLogin.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
      };
    },
  },
});
export default getLoginSlicer.reducer;
