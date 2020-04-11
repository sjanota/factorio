export const selectRecipes = () => ({
  "Iron plate": { inputs: { "Iron ore": 1 }, duration: 5, products: 1 },
  "Copper plate": { inputs: { "Copper ore": 1 }, duration: 5, products: 1 },
  "Copper wire": { inputs: { "Copper plate": 1 }, duration: 2, products: 2 },
});
