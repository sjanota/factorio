import { combineReducers } from "@reduxjs/toolkit";
import demand from "../features/demand/demandSlice";
import machineGrades from "../features/machineGrades/machineGradesSlice";
import science from "../features/science/scienceSlice";

const reducer = combineReducers({
  demand,
  machineGrades,
  science,
});

export default reducer;
