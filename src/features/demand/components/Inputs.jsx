import React, { useState } from "react";
import {
  selectInputsForRecipe,
  selectRequiredMachinesForRecipe,
} from "../demandSlice";
import { connect } from "react-redux";
import { selectRecipe } from "../../recipes/recipesSlice";

const Input = ({ input, demand }) => {
  const [destruct, setDestruct] = useState(false);
  const toggleDestruct = () => setDestruct((d) => !d);
  return (
    <li>
      <span onClick={toggleDestruct}>
        {input}: {demand} pcs/min
      </span>
      {destruct && <InputsDemandForRecipe item={input} targetSupply={demand} />}
    </li>
  );
};

const InputsDemand = ({ inputs, requiredMachines, recipe }) => {
  return (
    <>
      <p>
        Required machines: {requiredMachines} {recipe.machineType}
      </p>
      <ul>
        {inputs &&
          Object.entries(inputs).map(([input, demand]) => (
            <Input key={input} input={input} demand={demand} />
          ))}
      </ul>
    </>
  );
};

const mapState = (state, props) => ({
  inputs: selectInputsForRecipe(state, props),
  requiredMachines: selectRequiredMachinesForRecipe(state, props),
  recipe: selectRecipe(state, props),
});

const InputsDemandForRecipe = connect(mapState)(InputsDemand);

export { InputsDemand, InputsDemandForRecipe };
