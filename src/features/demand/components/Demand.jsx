import React from "react";
import { useRef } from "react";
import { InputsDemandForRecipe } from "./Inputs";

export const Demand = ({
  availableRecipes,
  item,
  targetSupply,
  setTargetSupply,
  setCurrentRecipe,
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
              defaultValue={item}
              onChange={(e) => setCurrentRecipe(e.target.value)}
            >
              <option value={item}>{item}</option>
              {availableRecipes.sort().map(
                (r) =>
                  r !== item && (
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
      {!!item && (
        <InputsDemandForRecipe item={item} targetSupply={targetSupply} />
      )}
    </div>
  );
};
