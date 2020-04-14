import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "research",
  initialState: {
    labsCount: 0,
    speedBonus: 0,
  },
  reducers: {
    setLabsCount(state, { payload }) {
      state.labsCount = payload;
    },
    setSpeedBonus(state, { payload }) {
      state.speedBonus = payload;
    },
  },
});

export const { setLabsCount, setSpeedBonus } = slice.actions;
export default slice.reducer;

export const selectLabsCount = (state) => state.research.labsCount;
export const selectSpeedBonus = (state) => state.research.speedBonus;

export const selectProbesDemand = (state) => {
  const lc = selectLabsCount(state);
  const sb = selectSpeedBonus(state);

  function calcDemand(cycleTime) {
    const ERS = 1 + sb / 100;
    const ACT = cycleTime / 60 / ERS;

    return lc / ACT;
  }

  return [
    { cycleTime: 15 },
    { cycleTime: 30 },
    { cycleTime: 60 },
  ].map((it) => ({ ...it, demand: calcDemand(it.cycleTime) }));
};
