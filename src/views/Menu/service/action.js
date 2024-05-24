import { API_BASE } from "data/service/apiConstrants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const addCart = createAsyncThunk("cart/addCart", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + "cart",
    };
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
const getTopping = createAsyncThunk("topping/gettopping", async (data, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + "toppings",
    };
    const response = await axios.get(request.uri, {
      headers: { Authorization: `Bearer ${data}` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
const getProducts = createAsyncThunk("products/getproducts", async (data, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + "products",
    };

    const response = await axios.get(request.uri, {
      headers: { Authorization: `Bearer ${data}` },
    });

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
const getProductsById = createAsyncThunk("products/getproductsbyid", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `product/${params.id}`,
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
const putProduct = createAsyncThunk("products/putProduct", async (params, { rejectWithValue }) => {
  try {
    const request = {
      uri: API_BASE + `product/${params.id}`,
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
export { addCart, getTopping, getProducts, getProductsById, putProduct };
