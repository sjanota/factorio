import { connect } from "react-redux";
import { selectCurrentItem, selectTopTargetSupply } from "../demandSlice";
import { IngredientsListForItem } from "./IngredientsListForItem";
import { ifSet } from "../../../components/ifSet";

export const IngredientsListForCurrentItem = connect((state) => ({
  item: selectCurrentItem(state),
  targetSupply: selectTopTargetSupply(state),
}))(ifSet("item")(IngredientsListForItem));
