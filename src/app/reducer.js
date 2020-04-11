import { combineReducers } from "@reduxjs/toolkit";
import demand from "../features/demand/demandSlice";

const reducer = combineReducers({
  demand,
});

export default reducer;
