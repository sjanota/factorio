import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectRecipe } from "../recipes/recipesSlice";
import { recipeInputDemand } from "./recipeInputDemand";

const slice = createSlice({
  name: "demand",
  initialState: { recipe: null, targetSupply: 1 },
  reducers: {
    setCurrentRecipe(state, { payload }) {
      state.recipe = payload;
    },
    setTargetSupply(state, { payload }) {
      state.targetSupply = payload;
    },
  },
});

export const { setCurrentRecipe, setTargetSupply } = slice.actions;
export default slice.reducer;

export const selectCurrentItem = (state) => state.demand.recipe;
export const selectTopTargetSupply = (state) => state.demand.targetSupply;

export const selectInputsForRecipe = createSelector(
  [selectRecipe, (_, props) => props.targetSupply],
  (recipe, targetSupply) => {
    if (!recipe) return;
    return recipeInputDemand(recipe, targetSupply);
  }
);
