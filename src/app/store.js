import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { loadState, saveState } from "./persistence";

const preloadedState = loadState();

const store = configureStore({
  reducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
