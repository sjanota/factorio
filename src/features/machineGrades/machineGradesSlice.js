import { createSlice, createSelector } from "@reduxjs/toolkit";
import { MachineType, selectRecipe } from "../recipes/recipesSlice";

export const MachineGrades = {
  [MachineType.Assembly]: [{ speed: 0.5 }, { speed: 0.75 }, { speed: 1.25 }],
  [MachineType.Drill]: [{ speed: 0.25 }, { speed: 0.5 }],
  [MachineType.Furnace]: [{ speed: 1 }, { speed: 2 }, { speed: 2 }],
};

const slice = createSlice({
  name: "machineGrades",
  initialState: Object.fromEntries(
    Object.values(MachineType).map((t) => [t, 0])
  ),
  reducers: {
    useGrade(state, { payload }) {
      const { type, grade } = payload;
      state[type] = grade;
    },
  },
});

export const { useGrade } = slice.actions;
export default slice.reducer;

export const selectMachineGrades = (state) => state.machineGrades;

export const selectMachineGradeForRecipe = createSelector(
  [selectMachineGrades, selectRecipe],
  (state, recipe) => {
    const idx = state[recipe.machineType];
    return MachineGrades[recipe.machineType][idx];
  }
);
