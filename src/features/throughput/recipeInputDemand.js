// targetSupply in pcs/min = pcs/60s
// recipeInputDemand in s/pcs
export default function recipeInputDemand(recipe, targetSupply) {
  return recipe.inputs.map(input => ({demand: input.count * targetSupply / recipe.products}))
}