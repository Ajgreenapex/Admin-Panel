import Redcuer from "./Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./LocalStorage";

const persistedState = loadState();
export const store = createStore(
  Redcuer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});
