import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState: string | null = null;

const titleSlice: Slice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitleSlice: (state: string | null, action) => {
      return action.payload;
    },
    clearTitleSlice: () => {
      return null;
    },
  },
});
export const { setTitleSlice, clearTitleSlice } = titleSlice.actions;

export default titleSlice.reducer;
