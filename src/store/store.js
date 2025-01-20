import { configureStore } from "@reduxjs/toolkit";
import productState from "./productState";

const store = configureStore({
  reducer : {
    products: productState,
  },
  //middleware: [],
  //devTools: process.env.NODE_ENV !== 'production'
});

export default store;