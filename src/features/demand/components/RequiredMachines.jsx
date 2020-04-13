import React from "react";
import { selectRequiredMachinesForRecipe } from "../demandSlice";
import { connect } from "react-redux";
import { selectRecipe } from "../../recipes/recipesSlice";
import { ifSet } from "../../../components/ifSet";

const RequiredMachines = ({ requiredMachines, recipe }) => {
  return (
    <span>
      {requiredMachines} {recipe.machineType}
    </span>
  );
};

const mapState = (state, props) => ({
  requiredMachines: selectRequiredMachinesForRecipe(state, props),
  recipe: selectRecipe(state, props),
});

export const RequiredMachinesForItem = connect(mapState)(
  ifSet("item")(RequiredMachines)
);
