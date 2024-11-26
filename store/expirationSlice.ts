import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

const initialState = { expire: 1 };

const expirationSlice: Slice = createSlice({
  name: "expiration",
  initialState,
  reducers: {
    setExpirationSlice: (
      state: { expire: number },
      action: PayloadAction<number>
    ) => {
      state.expire = action.payload;
    },
    clearExpirationSlice: (state: { expire: number }) => {
      state.expire = initialState.expire;
    },
  },
});
export const { setExpirationSlice, clearExpirationSlice } =
  expirationSlice.actions;

export default expirationSlice.reducer;
