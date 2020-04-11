import React from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import { selectInputsForRecipe } from "./currentRecipeSlice";
import { useState } from "react";

export const Demand = ({
  availableRecipes = [],
  recipe,
  inputs,
  targetSupply,
  setTargetSupply,
  setCurrentRecipe = console.log,
}) => {
  const targetSupplyInput = useRef();

  function onTargetSupplyChange(event) {
    event.preventDefault();
    const n = Number.parseInt(targetSupplyInput.current.value);
    setTargetSupply(n);
  }

  return (
    <div>
      <div>
        <form onSubmit={onTargetSupplyChange}>
          <label>
            Recipe:
            <select
              defaultValue={recipe}
              onChange={(e) => setCurrentRecipe(e.target.value)}
            >
              <option value={recipe}>{recipe}</option>
              {availableRecipes.sort().map(
                (r) =>
                  r !== recipe && (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  )
              )}
            </select>
          </label>
        </form>
      </div>
      <div>
        <form onSubmit={onTargetSupplyChange}>
          <label>
            Target supply:
            <input
              type="number"
              step="1"
              defaultValue={targetSupply}
              ref={targetSupplyInput}
            />
            pcs/min
          </label>
        </form>
      </div>
      <InputsForRecipe recipe={recipe} targetSupply={targetSupply} />
    </div>
  );
};

const Input = ({ input, demand }) => {
  const [destruct, setDestruct] = useState(false);
  const toggleDestruct = () => setDestruct((d) => !d);
  return (
    <li>
      <span onClick={toggleDestruct}>
        {input}: {demand} pcs/min
      </span>
      {destruct && <InputsForRecipe recipe={input} targetSupply={demand} />}
    </li>
  );
};

const Inputs = ({ inputs }) => {
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

const InputsForRecipe = connect(mapState)(Inputs);
