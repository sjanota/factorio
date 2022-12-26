import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectRecipe } from "../recipes/recipesSlice";
import { MachineType } from "../recipes/MachineType";

export const MachineGrades = {
  [MachineType.Assembly]: [
    { speed: 0.5, name: "Mk1" },
    { speed: 0.75, name: "Mk2" },
    { speed: 1.25, name: "Mk3" },
  ],
  [MachineType.Drill]: [
    { speed: 0.25, name: "Burning" },
    { speed: 0.5, name: "Electric" },
  ],
  [MachineType.Furnace]: [
    { speed: 1, name: "Stone" },
    { speed: 2, name: "Steel" },
    { speed: 2, name: "Electric" },
  ],
  [MachineType.ChemicalPlant]: [{ speed: 1, name: "Regular" }],
};

const slice = createSlice({
  name: "machineGrades",
  initialState: Object.fromEntries(
    Object.values(MachineType).map((t) => [t, 0])
  ),
  reducers: {
    setGrade(state, { payload }) {
      const { type, grade } = payload;
      state[type] = grade;
    },
  },
});

export const { setGrade } = slice.actions;
export default slice.reducer;

export const selectMachineGrades = (state) => state.machineGrades;

export const selectMachineGradeForRecipe = createSelector(
  [selectMachineGrades, selectRecipe],
  (state, recipe) => {
    if (!recipe) return;
    const idx = state[recipe.machineType];
    return MachineGrades[recipe.machineType][idx];
  }
);
