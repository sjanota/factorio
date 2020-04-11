import { connect } from "react-redux";
import { Demand } from "./Demand";
import { selectCurrentRecipe, selectInputs } from "./currentRecipeSlice";

const mapState = (state) => ({
  recipe: selectCurrentRecipe(state),
  inputs: selectInputs(state),
});

export const CurrentRecipeDemand = connect(mapState)(Demand);
