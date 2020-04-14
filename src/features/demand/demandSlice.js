import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectRecipe, selectRecipes } from "../recipes/recipesSlice";
import { recipeInputDemand } from "./recipeInputDemand";
import { requiredMachines } from "./requiredMachines";
import { selectMachineGradeForRecipe } from "../machineGrades/machineGradesSlice";
import { gatherAllRecipeDemands } from "./gatherAllRecipeDemands";
import { selectScience } from "../science/scienceSlice";
import { MachineType } from "../recipes/MachineType";

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

export const selectAllIngredientsDemandForItem = createSelector(
  [selectRecipe, selectRecipes, (_, props) => props.targetSupply],
  (recipe, availableRecipes, targetSupply) => {
    if (!recipe) return;
    if (!recipe.inputs) return {};
    return gatherAllRecipeDemands(recipe, availableRecipes, targetSupply);
  }
);

export const selectRequiredMachinesForRecipe = createSelector(
  [
    selectRecipe,
    selectMachineGradeForRecipe,
    selectScience,
    (_, props) => props.targetSupply,
  ],
  (recipe, machine, science, targetSupply) => {
    if (!recipe) return;
    let speed = machine.speed;
    if (recipe.machineType === MachineType.Drill) {
      speed *= 1 + science.mining * 0.1;
    }
    return requiredMachines(recipe, targetSupply, speed);
  }
);
