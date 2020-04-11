export const MachineType = {
  Assembly: "Assembly",
  Drill: "Drill",
  Furnace: "Furnace",
};

export const MachineGrades = {
  [MachineType.Assembly]: [{ speed: 0.5 }, { speed: 0.75 }, { speed: 1.25 }],
  [MachineType.Drill]: [{ speed: 0.25 }, { speed: 0.5 }],
  [MachineType.Furnace]: [{ speed: 1 }, { speed: 2 }, { speed: 2 }],
};

const recipes = {
  "Iron ore": {
    duration: 1,
    products: 1,
    machineType: MachineType.Drill,
  },
  "Copper ore": {
    duration: 1,
    products: 1,
    machineType: MachineType.Drill,
  },
  "Iron plate": {
    inputs: { "Iron ore": 1 },
    duration: 3.2,
    products: 1,
    machineType: MachineType.Furnace,
  },
  "Iron gear": {
    inputs: { "Iron plate": 2 },
    duration: 0.5,
    products: 1,
    machineType: MachineType.Assembly,
  },
  "Copper plate": {
    inputs: { "Copper ore": 1 },
    duration: 3.2,
    products: 1,
    machineType: MachineType.Furnace,
  },
  "Copper wire": {
    inputs: { "Copper plate": 1 },
    duration: 0.5,
    products: 2,
    machineType: MachineType.Assembly,
  },
  "Electronic circuit": {
    inputs: { "Iron plate": 1, "Copper wire": 3 },
    duration: 0.5,
    products: 1,
    machineType: MachineType.Assembly,
  },
  "Logistic science pack": {
    inputs: { "Copper plate": 1, "Iron gear": 1 },
    duration: 5,
    products: 1,
    machineType: MachineType.Assembly,
  },
};

export const selectRecipes = () => recipes;

export const selectRecipe = (state, props) =>
  selectRecipes(state)[props.recipe];
