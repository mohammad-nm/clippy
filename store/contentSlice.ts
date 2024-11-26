import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState: string | null = null;

const contentSlice: Slice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContentSlice: (state: string | null, action) => {
      return action.payload;
    },
    clearContentSlice: () => {
      return null;
    },
  },
});

export const { setContentSlice, clearContentSlice } = contentSlice.actions;

export default contentSlice.reducer;
