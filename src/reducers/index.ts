import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { roundReducer } from "./roundReducer";

const store = createStore(
    combineReducers({
        round: roundReducer,
    }),
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
