import { actionAddPlayerScore } from "../reducers/roundReducer";
import { actionSwitchTurn } from "./actionSwitchTurn";

const actionAddSelected = () => async (dispatch: any, getState: any) => {
    const selectedMatches = getState().round.selectedMatches;

    if (!selectedMatches?.length || selectedMatches.length > 3) {
        return;
    }

    await dispatch(actionAddPlayerScore());
    await dispatch(actionSwitchTurn());
};

export { actionAddSelected };
