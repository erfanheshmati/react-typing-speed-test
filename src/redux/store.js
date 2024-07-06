import { configureStore } from "@reduxjs/toolkit";
import typingTestReducer from "./features/TypingTestSlice";

export const store = configureStore({
  reducer: {
    typingTest: typingTestReducer,
  },
});
