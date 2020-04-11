import { requiredMachines } from "./requiredMachines";

describe("requiredMachines", () => {
  it("most simplistic target", () => {
    const recipe = { duration: 1, products: 1 };
    expect(requiredMachines(recipe, 60, 1)).toEqual(1);
  });

  it("longer duration", () => {
    const recipe = { duration: 5, products: 1 };
    expect(requiredMachines(recipe, 60, 1)).toEqual(5);
  });

  it("more products", () => {
    const recipe = { duration: 1, products: 2 };
    expect(requiredMachines(recipe, 120, 1)).toEqual(1);
  });

  it("only integral results", () => {
    expect(requiredMachines({ duration: 1, products: 2 }, 60, 1)).toEqual(1);
    expect(requiredMachines({ duration: 3, products: 2 }, 60, 1)).toEqual(2);
  });

  it("takes speed into account", () => {
    expect(requiredMachines({ duration: 1, products: 1 }, 60, 0.5)).toEqual(2);
    expect(requiredMachines({ duration: 3, products: 2 }, 60, 2)).toEqual(1);
  });
});
