import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    sidebarToggle: (state, action) => {
      state.isSidebarOpen = action.payload.isSidebarOpen;
    },
  },
});

export const { sidebarToggle } = uiSlice.actions;

export default uiSlice;
