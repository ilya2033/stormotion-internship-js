import { PlayerEnum } from "../types/PlayerEnum";

interface RoundReducerStateInterface {
    turn: PlayerEnum;
    heap: number;
    score: { [key in PlayerEnum]: number };
}

interface RoundReducerProps {
    type: ActionsRoundReducerEnum;
    playerId?: PlayerEnum;
    count?: number;
}

enum ActionsRoundReducerEnum {
    SET_TURN = "SET_TURN",
    ADD_PLAYER_SCORE = "ADD_PLAYER_SCORE",
    REDUCE_HEAP_SIZE = "REDUCE_HEAP_SIZE",
    ROUND_RESET = "ROUND_RESET",
}

const defaultState: RoundReducerStateInterface = {
    score: {
        [PlayerEnum.Human]: 0,
        [PlayerEnum.AI]: 0,
    },
    heap: 25,
    turn: PlayerEnum.Human,
};

function roundReducer(
    state = defaultState,
    { type, playerId, count }: RoundReducerProps
) {
    if (type === ActionsRoundReducerEnum.SET_TURN) {
        return {
            ...state,
            turn: playerId,
        };
    }
    if (type === ActionsRoundReducerEnum.ADD_PLAYER_SCORE) {
        if (!playerId || !count) return state;
        return {
            ...state,
            score: {
                ...state.score,
                [playerId]: state.score[playerId] + count,
            },
        };
    }
    if (type === ActionsRoundReducerEnum.REDUCE_HEAP_SIZE) {
        if (!count) return state;

        return {
            ...state,
            heap: state.heap - count,
        };
    }
    if (type === ActionsRoundReducerEnum.ROUND_RESET) {
        return defaultState;
    }
    return state;
}

const actionSetTurn = (playerId: PlayerEnum) => ({
    type: ActionsRoundReducerEnum.SET_TURN,
    playerId,
});
const actionAddPlayerScore = (playerId: PlayerEnum, count: number) => ({
    type: ActionsRoundReducerEnum.ADD_PLAYER_SCORE,
    playerId,
    count,
});
const actionReduceHeapSize = (count: number) => ({
    type: ActionsRoundReducerEnum.REDUCE_HEAP_SIZE,
    count,
});
const actionResetRound = () => ({
    type: ActionsRoundReducerEnum.SET_TURN,
});

export {
    ActionsRoundReducerEnum,
    roundReducer,
    actionSetTurn,
    actionReduceHeapSize,
    actionResetRound,
    actionAddPlayerScore,
};
