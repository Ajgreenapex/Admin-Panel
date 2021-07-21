import Redcuer from "./Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(Redcuer, applyMiddleware(thunk));
