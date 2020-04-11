// targetSupply in pcs/min = pcs/60s
// recipeInputDemand in s/pcs
export function recipeInputDemand(recipe, targetSupply) {
  const inputs = Object.entries(recipe.inputs);
  const demands = inputs.reduce(
    (acc, [key, value]) => [
      ...acc,
      [key, (value * targetSupply) / recipe.products],
    ],
    []
  );
  return Object.fromEntries(demands);
}
