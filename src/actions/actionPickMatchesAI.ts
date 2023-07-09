import { findBestMove } from "../helpers/findBestMove";
import { actionSelectMatch } from "../reducers/roundReducer";
import { PlayerEnum } from "../types/PlayerEnum";
import { actionAddSelected } from "./actionAddSelected";

const actionPickMatchesAI = () => async (dispatch: any, getState: any) => {
    const heap = getState().round.heap;
    const score = getState().round.score[PlayerEnum.AI];
    const otherScore = getState().round.score[PlayerEnum.Human];

    let toPick: string[] = [...heap].splice(
        0,
        findBestMove(heap.length, score.length, otherScore.length)
    );

    toPick.forEach(async (match) => {
        await dispatch(actionSelectMatch(match));
    });

    await dispatch(actionAddSelected());
};

export { actionPickMatchesAI };
