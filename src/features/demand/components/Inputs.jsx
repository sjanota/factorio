import React, { useState } from "react";
import { selectInputsForRecipe } from "../currentRecipeSlice";
import { connect } from "react-redux";

const Input = ({ input, demand }) => {
  const [destruct, setDestruct] = useState(false);
  const toggleDestruct = () => setDestruct((d) => !d);
  return (
    <li>
      <span onClick={toggleDestruct}>
        {input}: {demand} pcs/min
      </span>
      {destruct && (
        <InputsDemandForRecipe recipe={input} targetSupply={demand} />
      )}
    </li>
  );
};

const InputsDemand = ({ inputs }) => {
  if (!inputs) {
    return null;
  }

  return (
    <ul>
      {Object.entries(inputs).map(([input, demand]) => (
        <Input key={input} input={input} demand={demand} />
      ))}
    </ul>
  );
};

const mapState = (state, props) => ({
  inputs: selectInputsForRecipe(state, props),
});

const InputsDemandForRecipe = connect(mapState)(InputsDemand);

export { InputsDemand, InputsDemandForRecipe };
