import { connect } from "react-redux";
import { Demand } from "./Demand";
import {
  setTargetSupply,
  setCurrentRecipe,
  selectCurrentItem,
  selectTopTargetSupply,
} from "../demandSlice";
import { selectRecipes } from "../../recipes/recipesSlice";

const mapState = (state) => ({
  item: selectCurrentItem(state),
  targetSupply: selectTopTargetSupply(state),
  availableRecipes: Object.keys(selectRecipes(state)),
});

const mapDispatch = {
  setTargetSupply,
  setCurrentRecipe,
};

export const CurrentRecipeDemand = connect(mapState, mapDispatch)(Demand);
