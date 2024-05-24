import { API_BASE } from "data/service/apiConstrants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getCart = createAsyncThunk("cart/getCart", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `cart/${params.data}`,
    };
    console.log(request.uri);
    const response = await axios.get(request.uri, {
      headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
const deleteCart = createAsyncThunk("cart/deleteCart", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `cart/${params.data}`,
    };
    console.log(request.uri);
    const response = await axios.delete(request.uri, {
      headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
const addTransaction = createAsyncThunk("transaction/addTransaction", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `transaction`,
    };
    console.log(request.uri);
    const response = await axios.post(request.uri, params.data, {
      headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
const updateCart = createAsyncThunk("cart/updateCart", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `cart/${params.id}`,
    };
    console.log(request.uri);
    const response = await axios.put(request.uri, params.data, {
      headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export { getCart, deleteCart, addTransaction, updateCart };
