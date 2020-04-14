import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "labs",
  initialState: {},
  reducers: {},
});

export const { setGrade } = slice.actions;
export default slice.reducer;
