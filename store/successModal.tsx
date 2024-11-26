import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = { success: false, key: null };

const successSlice: Slice = createSlice({
  name: "success",
  initialState,
  reducers: {
    setSuccessSlice: (state, action) => {
      state.success = action.payload.success;
      state.key = action.payload.key;
    },
    clearSuccessSlice: (state) => {
      state.success = false;
      state.key = null;
    },
  },
});

export const { setSuccessSlice, clearSuccessSlice } = successSlice.actions;

export default successSlice.reducer;
