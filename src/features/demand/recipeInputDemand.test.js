import { recipeInputDemand } from "./recipeInputDemand";

describe("recipeInputDemand", () => {
  it("demand for most simplistic scenario", () => {
    const recipe = { inputs: { "Iron plate": 1 }, products: 1 };
    expect(recipeInputDemand(recipe, 60)).toEqual({ "Iron plate": 60 });
  });

  it("demand when more then one piece is required", () => {
    const recipe = { inputs: { "Iron plate": 2 }, products: 1 };
    expect(recipeInputDemand(recipe, 60)).toEqual({ "Iron plate": 120 });
  });

  it("demand for more then one input", () => {
    const recipe = {
      inputs: { "Iron plate": 2, "Copper plate": 1 },
      products: 1,
    };
    expect(recipeInputDemand(recipe, 60)).toEqual({
      "Iron plate": 120,
      "Copper plate": 60,
    });
  });

  it(`more then one product at once`, () => {
    const recipe = {
      inputs: { "Iron plate": 2, "Copper plate": 1 },
      products: 2,
    };
    expect(recipeInputDemand(recipe, 60)).toEqual({
      "Iron plate": 60,
      "Copper plate": 30,
    });
  });
});
