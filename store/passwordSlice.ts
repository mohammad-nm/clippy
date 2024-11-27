import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState: string | null = null;

const passwordSlice: Slice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPasswordSlice: (state: string | null, action) => {
      return action.payload;
    },
    clearPasswordSlice: () => {
      return null;
    },
  },
});

export const { setPasswordSlice, clearPasswordSlice } = passwordSlice.actions;

export default passwordSlice.reducer;
