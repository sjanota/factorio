import { connect } from "react-redux";
import { Demand } from "./Demand";
import {
  selectInputs,
  selectCurrentRecipeItem,
  selectCurrentRecipeTargetSupply,
  setTargetSupply,
} from "./currentRecipeSlice";

const mapState = (state) => ({
  recipe: selectCurrentRecipeItem(state),
  inputs: selectInputs(state),
  targetSupply: selectCurrentRecipeTargetSupply(state),
});

const mapDispatch = {
  setTargetSupply,
};

export const CurrentRecipeDemand = connect(mapState, mapDispatch)(Demand);
