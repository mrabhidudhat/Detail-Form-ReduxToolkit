import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
  selectedData: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData.push(action.payload);
    },

    selectFormData: (state, action) => {
      state.selectedData = action.payload;
    },
  },
});

export const { addFormData, selectFormData } = formSlice.actions;
export default formSlice.reducer;
