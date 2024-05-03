import { Action, combineReducers } from "redux";
import { RootState } from "src/types/store-types";
import { appReducer } from "./app/reducer";

const projectReducer = combineReducers({
  app: appReducer,
});

const rootReducer = (state: any | undefined, action: Action): RootState => {
  return projectReducer(state, action);
};

export default rootReducer;
