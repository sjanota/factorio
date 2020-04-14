import { combineReducers } from "@reduxjs/toolkit";
import demand from "../features/demand/demandSlice";
import machineGrades from "../features/machineGrades/machineGradesSlice";
import science from "../features/science/scienceSlice";
import research from "../features/research/researchSlice";

const reducer = combineReducers({
  demand,
  machineGrades,
  science,
  research,
});

export default reducer;
