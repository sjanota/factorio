import { connect } from "react-redux";
import { Demand } from "./Demand";
import {
  selectCurrentRecipeItem,
  selectCurrentRecipeTargetSupply,
  setTargetSupply,
  setCurrentRecipe,
} from "./currentRecipeSlice";
import { selectRecipes } from "../recipes/recipesSlice";

const mapState = (state, props) => ({
  recipe: selectCurrentRecipeItem(state),
  targetSupply: selectCurrentRecipeTargetSupply(state),
  availableRecipes: Object.keys(selectRecipes(state)),
});

const mapDispatch = {
  setTargetSupply,
  setCurrentRecipe,
};

export const CurrentRecipeDemand = connect(mapState, mapDispatch)(Demand);
