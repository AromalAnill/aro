// import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "react";

// const store = configureStore({
//     reducer{
//         user:useReducer
//     }
// })


// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";


const store = configureStore({
  reducer: {
    user: reducer
  },
});

export default store;
