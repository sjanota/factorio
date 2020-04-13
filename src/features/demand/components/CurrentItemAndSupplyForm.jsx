import {
  selectCurrentItem,
  selectTopTargetSupply,
  selectRequiredMachinesForRecipe,
  setTargetSupply,
  setCurrentRecipe,
} from "../demandSlice";
import { connect } from "react-redux";
import { selectRecipes, selectRecipe } from "../../recipes/recipesSlice";
import { ItemAndSupplyForm } from "./ItemAndSupplyForm";

const mapState = (state, props) => ({
  item: selectCurrentItem(state),
  targetSupply: selectTopTargetSupply(state),
  availableRecipes: Object.keys(selectRecipes(state)),
  requiredMachines: selectRequiredMachinesForRecipe(state, props),
  recipe: selectRecipe(state, props),
});

const mapDispatch = {
  setTargetSupply,
  setCurrentRecipe,
};

export const CurrentItemAndSupplyForm = connect(
  mapState,
  mapDispatch
)(ItemAndSupplyForm);
