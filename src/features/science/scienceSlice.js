import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "science",
  initialState: {
    mining: 0,
  },
  reducers: {
    setMiningLevel(state, { payload }) {
      state.mining = payload;
    },
  },
});

export const { setMiningLevel } = slice.actions;
export default slice.reducer;

export const selectScience = (state) => state.science;
