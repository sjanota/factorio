export const MachineType = {
  Assembly: "Assembly",
  Drill: "Drill",
  Furnace: "Furnace",
};

export const recipes = {
  "Military science pack": {
    inputs: { Wall: 2, Grenade: 1, "Piercing rounds magazine": 1 },
    duration: 0.5,
    products: 1,
    machineType: MachineType.Assembly,
  },
  Stone: {
    duration: 1,
    products: 1,
    machineType: MachineType.Furnace,
  },
  Coal: {
    duration: 1,
    products: 1,
    machineType: MachineType.Furnace,
  },
  "Stone brick": {
    inputs: { Stone: 2 },
    duration: 3.2,
    products: 1,
    machineType: MachineType.Furnace,
  },
  Wall: {
    inputs: { "Stone brick": 5 },
    duration: 0.5,
    products: 1,
    machineType: MachineType.Assembly,
  },
  Grenade: {
    inputs: { Coal: 10, "Iron plate": 5 },
    duration: 8,
    products: 1,
    machineType: MachineType.Assembly,
  },
  "Piercing rounds magazine": {
    inputs: { "Copper plate": 5, "Firearm magazine": 1, "Steel plate": 1 },
    duration: 3,
    products: 1,
    machineType: MachineType.Assembly,
  },
  "Steel plate": {
    inputs: { "Iron plate": 5 },
    duration: 16,
    products: 1,
    machineType: MachineType.Furnace,
  },
  "Firearm magazine": {
    inputs: { "Iron plate": 4 },
    duration: 1,
    products: 1,
    machineType: MachineType.Assembly,
  },
  "Logistic science pack": {
    inputs: { Inserter: 1, "Transport belt": 1 },
    duration: 6,
    products: 1,
    machineType: MachineType.Assembly,
  },
  Inserter: {
    inputs: { "Electronic circuit": 1, "Iron plate": 1, "Iron gear wheel": 1 },
    duration: 0.5,
    products: 1,
    machineType: MachineType.Assembly,
  },
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
  "Iron gear wheel": {
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
  "Automation science pack": {
    inputs: { "Copper plate": 1, "Iron gear wheel": 1 },
    duration: 5,
    products: 1,
    machineType: MachineType.Assembly,
  },
  "Transport belt": {
    inputs: { "Iron plate": 1, "Iron gear wheel": 1 },
    duration: 0.5,
    products: 2,
    machineType: MachineType.Assembly,
  },
};

export const selectRecipes = () => recipes;

export const selectRecipe = (state, props) => selectRecipes(state)[props.item];
