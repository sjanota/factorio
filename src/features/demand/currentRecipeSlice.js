import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectRecipes } from "../recipes/recipesSlice";
import { recipeInputDemand } from "./recipeInputDemand";

const slice = createSlice({
  name: "currentRecipe",
  initialState: { item: "Copper wire", targetSupply: 60 },
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

export const selectCurrentRecipe = (state) => state.currentRecipe;
export const selectCurrentRecipeItem = (state) => state.currentRecipe.item;
export const selectCurrentRecipeTargetSupply = (state) =>
  state.currentRecipe.targetSupply;

const selectRecipe = (state, props) => selectRecipes(state)[props.recipe];

export const selectInputsForRecipe = createSelector(
  [selectRecipe, (_, props) => props.targetSupply],
  (recipe, targetSupply) => {
    if (!recipe) return;
    return recipeInputDemand(recipe, targetSupply);
  }
);
