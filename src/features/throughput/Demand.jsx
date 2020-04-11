import React from "react";

export const Demand = ({ recipe, inputs }) => {
  return (
    <div>
      <p>Recipe: {recipe.item}</p>
      <p>Target supply: {recipe.targetSupply}</p>
      <ul>
        {Object.entries(inputs).map(([input, demand]) =>
          <li key="input">{input}: {demand}</li>
        )}
      </ul>
    </div>
  );
};
