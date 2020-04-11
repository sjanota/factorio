import { combineReducers } from "@reduxjs/toolkit";
import currentRecipe from "../features/demand/currentRecipeSlice";

const reducer = combineReducers({
  currentRecipe,
});

export default reducer;
