import { configureStore } from "@reduxjs/toolkit";
import expirationReducer from "./expirationSlice";
import contentReducer from "./contentSlice";
import titleReducer from "./titleSlice";
import errorReducer from "./errorSlice";
import successReducer from "./successModal";
export const store = configureStore({
  reducer: {
    expiration: expirationReducer,
    content: contentReducer,
    title: titleReducer,
    error: errorReducer,
    success: successReducer,
  },
});
