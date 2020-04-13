import { selectAllIngredientsDemandForItem } from "../demandSlice";
import { connect } from "react-redux";
import { IngredientsList } from "./IngredientsList";

const mapState = (state, props) => ({
  ingredients: selectAllIngredientsDemandForItem(state, props),
});

export const IngredientsListForItem = connect(mapState)(IngredientsList);
