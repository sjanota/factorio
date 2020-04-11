export function requiredMachines(recipe, targetSupply, speed) {
  return Math.ceil(
    ((recipe.duration / speed) * targetSupply) / 60 / recipe.products
  );
}
