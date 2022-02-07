import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { app: appSlice.reducer, ui: uiSlice.reducer },
});

export default store;
