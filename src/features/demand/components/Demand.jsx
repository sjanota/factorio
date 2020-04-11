import React from "react";
import { useRef } from "react";
import { InputsDemandForRecipe } from "./Inputs";

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
      <InputsDemandForRecipe recipe={recipe} targetSupply={targetSupply} />
    </div>
  );
};
