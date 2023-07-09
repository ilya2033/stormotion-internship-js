import { actionSetTurn } from "../reducers/roundReducer";
import { PlayerEnum } from "../types/PlayerEnum";
import { actionPickMatchesAI } from "./actionPickMatchesAI";

const actionSwitchTurn = () => async (dispatch: any, getState: any) => {
    let newTurn = null;
    const currentTurn: PlayerEnum = getState().round.turn;

    if (currentTurn === PlayerEnum.Human) {
        newTurn = PlayerEnum.AI;
    } else {
        newTurn = PlayerEnum.Human;
    }

    await dispatch(actionSetTurn(newTurn));

    if (newTurn === PlayerEnum.AI) {
        await dispatch(actionPickMatchesAI());
    }
};

export { actionSwitchTurn };
