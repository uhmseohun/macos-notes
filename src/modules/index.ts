import { combineReducers } from "redux";

import notesReducer from "./notes";
import settingsReducer from "./settings";

const rootReducer = combineReducers({
  notes: notesReducer,
  settings: settingsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
