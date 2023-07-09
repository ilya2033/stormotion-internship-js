import { AppDispatch, RootState } from "../reducers";
import { actionSetTurn } from "../reducers/roundReducer";
import { PlayerEnum } from "../types/PlayerEnum";
import { actionPickMatchesAI } from "./actionPickMatchesAI";

const actionSwitchTurn =
    (turn?: PlayerEnum) =>
    async (dispatch: AppDispatch, getState: () => RootState) => {
        let newTurn = turn;
        const currentTurn: PlayerEnum = getState().round.turn;

        if (!newTurn) {
            if (currentTurn === PlayerEnum.Human) {
                newTurn = PlayerEnum.AI;
            } else {
                newTurn = PlayerEnum.Human;
            }
        }

        await dispatch(actionSetTurn(newTurn));

        if (newTurn === PlayerEnum.AI) {
            await dispatch(actionPickMatchesAI());
        }
    };

export { actionSwitchTurn };
