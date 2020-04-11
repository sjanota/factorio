import { combineReducers } from "@reduxjs/toolkit";
import demand from "../features/demand/demandSlice";
import machineGrades from "../features/machineGrades/machineGradesSlice";

const reducer = combineReducers({
  demand,
  machineGrades,
});

export default reducer;
