import { combineReducers } from "@reduxjs/toolkit";
import currentRecipeSlice from "../features/throughput/currentRecipeSlice";

export const rootReducer = combineReducers({
  currentRecipe: currentRecipeSlice,
});
