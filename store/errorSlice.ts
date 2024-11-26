import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = { title: false, content: false };

const errorSlice: Slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorSlice: (state: { title: boolean; content: boolean }, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    clearErrorSlice: (state) => {
      state.title = false;
      state.content = false;
    },
  },
});

export const { setErrorSlice, clearErrorSlice } = errorSlice.actions;

export default errorSlice.reducer;
