import { gatherAllRecipeDemands } from "./gatherAllRecipeDemands";

import { recipes } from "../recipes/recipes";

describe("gatherAllRecipeDemands", () => {
  it("gathers demands for recipe wihtout inputs", () => {
    expect(gatherAllRecipeDemands(recipes["Iron ore"], recipes, 120)).toEqual(
      {}
    );
  });

  it("gathers demands for recipe with raw inputs only", () => {
    expect(
      gatherAllRecipeDemands(recipes["Iron plate"], recipes, 120)
    ).toEqual({ "Iron ore": 120 });
  });

  it("gathers demands for recipe with complex inputs only", () => {
    expect(
      gatherAllRecipeDemands(recipes["Iron gear wheel"], recipes, 120)
    ).toEqual({
      "Iron ore": 240,
      "Iron plate": 240,
    });
  });

  it("gathers demands for recipe with duplicated inputs", () => {
    expect(
      gatherAllRecipeDemands(recipes["Transport belt"], recipes, 120)
    ).toEqual({
      "Iron ore": 360,
      "Iron plate": 360,
      "Iron gear wheel": 120,
    });
  });
});
