import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "../Slice/Slice"

export const store = configureStore({
  reducer: {
    questions: questionSlice
  },
});

export default store;
