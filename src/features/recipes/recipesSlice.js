import { recipes } from "./recipes";

export const selectRecipes = () => recipes;

export const selectRecipe = (state, props) => selectRecipes(state)[props.item];
