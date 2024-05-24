import { API_BASE } from "data/service/apiConstrants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getLogin = createAsyncThunk("login/getLogin", async (data, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + "register",
    };
    const config = {
      headers: { Authorization: `Basic YWRtaW5Ad29ya2RvdXQuY29tOndvcmtkb3V0` },
    };
    const response = await axios.post(request.uri, data, config);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export { getLogin };
