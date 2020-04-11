import { combineReducers } from "@reduxjs/toolkit";
import currentRecipeSlice from "../features/demand/currentRecipeSlice";

export const rootReducer = combineReducers({
  currentRecipe: currentRecipeSlice,
});
