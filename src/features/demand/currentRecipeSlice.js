import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectRecipe } from "../recipes/recipesSlice";
import { recipeInputDemand } from "./recipeInputDemand";
import { selectCurrentRecipe } from "../../app/selectors";

const slice = createSlice({
  name: "currentRecipe",
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

export const selectCurrentRecipeItem = (state) =>
  selectCurrentRecipe(state).item;

export const selectCurrentRecipeTargetSupply = (state) =>
  selectCurrentRecipe(state).targetSupply;

export const selectInputsForRecipe = createSelector(
  [selectRecipe, (_, props) => props.targetSupply],
  (recipe, targetSupply) => {
    if (!recipe) return;
    return recipeInputDemand(recipe, targetSupply);
  }
);
