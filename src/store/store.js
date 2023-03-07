import { configureStore } from "@reduxjs/toolkit";
import customWebsiteReducer from "../features/customWebsite";


export const store = configureStore({
  reducer:{
    customWebsite:customWebsiteReducer
  }
})