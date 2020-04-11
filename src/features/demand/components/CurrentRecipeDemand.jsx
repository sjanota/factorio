import { connect } from "react-redux";
import { Demand } from "./Demand";
import {
  selectCurrentRecipeItem,
  selectCurrentRecipeTargetSupply,
  setTargetSupply,
  setCurrentRecipe,
} from "../demandSlice";
import { selectRecipes } from "../../recipes/recipesSlice";

const mapState = (state) => ({
  recipe: selectCurrentRecipeItem(state),
  targetSupply: selectCurrentRecipeTargetSupply(state),
  availableRecipes: Object.keys(selectRecipes(state)),
});

const mapDispatch = {
  setTargetSupply,
  setCurrentRecipe,
};

export const CurrentRecipeDemand = connect(mapState, mapDispatch)(Demand);
