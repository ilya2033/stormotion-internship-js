import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { roundReducer } from "./roundReducer";
import { settingsReducer } from "./settingsReducer";

const store = createStore(
    combineReducers({
        round: roundReducer,
        settings: settingsReducer,
    }),
    applyMiddleware(thunk)
);
type voidPromiseCallback = (...args: any[]) => Promise<void>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | voidPromiseCallback;
export { store };
