import { API_BASE } from "data/service/apiConstrants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getTransactions = createAsyncThunk("transaction/getTrasactions", async (token, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `transactions`,
    };
    console.log(token);
    const response = await axios.get(request.uri, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
const putTransaction = createAsyncThunk("transaction/putTrasactions", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `transaction/${params.id}`,
    };
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
const getTransactionById = createAsyncThunk("transaction/getTrasactionsById", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `transaction/${params.id}`,
    };
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
const getSummary = createAsyncThunk("summary/getSummary", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `summary/`,
    };
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

export { getTransactions, putTransaction, getTransactionById, getSummary };
