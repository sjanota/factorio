import React from "react";
import { useRef } from "react";

export const Demand = ({ recipe, inputs, targetSupply, setTargetSupply }) => {
  const targetSupplyInput = useRef();

  function onTargetSupplyChange(event) {
    event.preventDefault();
    const n = Number.parseInt(targetSupplyInput.current.value);
    setTargetSupply(n);
  }

  return (
    <div>
      <p>Recipe: {recipe}</p>
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
      <ul>
        {Object.entries(inputs).map(([input, demand]) => (
          <li key="input">
            {input}: {demand} pcs/min
          </li>
        ))}
      </ul>
    </div>
  );
};
