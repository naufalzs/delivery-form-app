import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "jakmall-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const jakstore = createStore(rootReducer);
const jakstore = createStore(persistedReducer);
const persistor = persistStore(jakstore);

export default jakstore;
export { persistor };
