import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import addCartSlicer from "../../views/Menu/service/addCartSlicer";
import getLoginSlicer from "../../views/landing/service/getLoginSlicer";
import getProductsSlicer from "../../views/Menu/service/getProductsSlicer";
import getToppingSlicer from "../../views/Menu/service/getToppingSlicer";
import getCartSlicer from "../../views/detailPesanan/service/getCartSlicer";
import deleteCartSlicer from "../../views/detailPesanan/service/deleteCartSlicer";
import addTransactionSlicer from "../../views/detailPesanan/service/addTransactionSlicer";
import getLoginAdminSlicer from "../../views/auth/service/getLoginAdminSlicer";
import getProductsByIdSlicer from "../../views/Menu/service/getProductsByIdSlicer";
import putProductSlicer from "../../views/Menu/service/putProductSlicer";
import getTransactionsSlicer from "../../views/admin/service/getTransactionsSlicer";
import storage from "redux-persist/lib/storage";
import putTransactionSlicer from "../../views/admin/service/putTransactionSlicer";
import updateCartSlicer from "../../views/detailPesanan/service/updateCartSlicer";
import getTransactionByIdSlicer from "../../views/admin/service/getTransactionByIdSlicer";
import getSummarySlicer from "../../views/admin/service/getSummarySlicer";
const reducers = combineReducers({
  addCart: addCartSlicer,
  getCart: getCartSlicer,
  deleteCart: deleteCartSlicer,
  getLogin: getLoginSlicer,
  getProducts: getProductsSlicer,
  getTopping: getToppingSlicer,
  addTransaction: addTransactionSlicer,
  getLoginAdmin: getLoginAdminSlicer,
  getProductsById: getProductsByIdSlicer,
  putProduct: putProductSlicer,
  getTransactions: getTransactionsSlicer,
  putTransaction: putTransactionSlicer,
  updateCart: updateCartSlicer,
  getTransactionById: getTransactionByIdSlicer,
  getSummary: getSummarySlicer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["getLogin", "getLoginAdmin"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);
export { store, persistor };
