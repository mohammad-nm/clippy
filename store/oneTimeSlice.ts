import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const oneTimeSlice: Slice = createSlice({
  name: "oneTime",
  initialState,
  reducers: {
    setOneTimeSlice: (state: boolean, action) => {
      return action.payload;
    },
    clearOneTimeSlice: () => {
      return false;
    },
  },
});

export const { setOneTimeSlice, clearOneTimeSlice } = oneTimeSlice.actions;

export default oneTimeSlice.reducer;
