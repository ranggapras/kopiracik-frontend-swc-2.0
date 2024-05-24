import { API_BASE } from "data/service/apiConstrants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getLoginAdmin = createAsyncThunk("loginAdmin/getLoginAdmin", async (data, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `login-admin/`,
    };
    console.log(request.uri);
    const response = await axios.post(request.uri, data, {
      headers: { Authorization: `Basic YWRtaW5Ad29ya2RvdXQuY29tOndvcmtkb3V0` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export { getLoginAdmin };
