import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import notesReducer from "./notes";
import settingsReducer from "./settings";

const persistConfig = {
  key: "notes",
  storage,
};

const rootReducer = combineReducers({
  notes: notesReducer,
  settings: settingsReducer,
});

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
