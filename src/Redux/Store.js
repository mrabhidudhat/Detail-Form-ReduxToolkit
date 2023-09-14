import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./Slice";

const store = configureStore({
  reducer: {
    formData: formSlice,
  },
});

export default store;
