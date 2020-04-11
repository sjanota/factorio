const recipes = {
  "Iron plate": { inputs: { "Iron ore": 1 }, duration: 5, products: 1 },
  "Iron gear": { inputs: { "Iron plate": 1 }, duration: 5, products: 1 },
  "Copper plate": { inputs: { "Copper ore": 1 }, duration: 5, products: 1 },
  "Copper wire": { inputs: { "Copper plate": 1 }, duration: 2, products: 2 },
  "Electronic circuit": {
    inputs: { "Iron plate": 1, "Copper wire": 2 },
    duration: 2,
    products: 1,
  },
  "Logistic science pack": {
    inputs: { "Copper plate": 1, "Iron gear": 1 },
    duration: 2,
    products: 1,
  },
};

export const selectRecipes = () => recipes;

export const selectRecipe = (state, props) =>
  selectRecipes(state)[props.recipe];
