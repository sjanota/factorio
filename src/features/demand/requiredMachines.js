export function requiredMachines(recipe, targetSupply) {
  return Math.ceil((recipe.duration * targetSupply) / 60 / recipe.products);
}
