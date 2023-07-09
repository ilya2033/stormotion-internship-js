import { AppDispatch, RootState } from "../reducers";
import { actionAddPlayerScore } from "../reducers/roundReducer";
import { actionSwitchTurn } from "./actionSwitchTurn";

const actionAddSelected =
    () => async (dispatch: AppDispatch, getState: () => RootState) => {
        const selectedMatches = getState().round.selectedMatches;
        const settings = getState().settings;

        if (
            !settings.m ||
            !selectedMatches?.length ||
            selectedMatches.length > settings.m
        ) {
            return;
        }

        await dispatch(actionAddPlayerScore());
        await dispatch(actionSwitchTurn());
    };

export { actionAddSelected };
