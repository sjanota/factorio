import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectRecipe } from "../recipes/recipesSlice";
import { recipeInputDemand } from "./recipeInputDemand";
import { requiredMachines } from "./requiredMachines";
import { selectMachineGradeForRecipe } from "../machineGrades/machineGradesSlice";

const slice = createSlice({
  name: "demand",
  initialState: { item: null, targetSupply: 1 },
  reducers: {
    setCurrentRecipe(state, { payload }) {
      state.item = payload;
    },
    setTargetSupply(state, { payload }) {
      state.targetSupply = payload;
    },
  },
});

export const { setCurrentRecipe, setTargetSupply } = slice.actions;
export default slice.reducer;

export const selectCurrentItem = (state) => state.demand.item;
export const selectTopTargetSupply = (state) => state.demand.targetSupply;

export const selectInputsForRecipe = createSelector(
  [selectRecipe, (_, props) => props.targetSupply],
  (recipe, targetSupply) => {
    if (!recipe || !recipe.inputs) return;
    return recipeInputDemand(recipe, targetSupply);
  }
);

export const selectRequiredMachinesForRecipe = createSelector(
  [selectRecipe, selectMachineGradeForRecipe, (_, props) => props.targetSupply],
  (recipe, machine, targetSupply) => {
    if (!recipe) return;
    return requiredMachines(recipe, targetSupply, machine.speed);
  }
);
