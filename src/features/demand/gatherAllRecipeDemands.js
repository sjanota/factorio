import { recipeInputDemand } from "./recipeInputDemand";

export function gatherAllRecipeDemands(
  recipe,
  avaialableRecipes,
  targetSupply
) {
  if (!recipe.inputs) return {};
  const demands = recipeInputDemand(recipe, targetSupply);
  return Object.entries(demands).reduce((acc, [item, demand]) => {
    return merge(
      acc,
      gatherAllRecipeDemands(avaialableRecipes[item], avaialableRecipes, demand)
    );
  }, demands);
}

function merge(obj1, obj2) {
  const obj2Keys = Object.keys(obj2);
  const commonKeys = Object.keys(obj1).filter((k) => obj2Keys.includes(k));
  const base = { ...obj1, ...obj2 };
  return commonKeys.reduce(
    (acc, k) => ({ ...acc, [k]: obj1[k] + obj2[k] }),
    base
  );
}
