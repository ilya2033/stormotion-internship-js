import { generateMatches } from "../helpers/generateMatches";
import { MatchInterface } from "../types/MatchInterface";
import { PlayerEnum } from "../types/PlayerEnum";

interface RoundReducerStateInterface {
    turn: PlayerEnum;
    heap: string[];
    score: { [key in PlayerEnum]: string[] };
    matches: MatchInterface[];
    selectedMatches: string[];
}

export interface RoundReducerProps {
    type: ActionsRoundReducerEnum;
    playerId?: PlayerEnum;
    matchId?: string;
}

enum ActionsRoundReducerEnum {
    SET_TURN = "SET_TURN",
    ADD_PLAYER_SCORE = "ADD_PLAYER_SCORE",
    REDUCE_HEAP_SIZE = "REDUCE_HEAP_SIZE",
    ROUND_RESET = "ROUND_RESET",
    SELECT_MATCH = "SELECT_MATCH",
    UNSELECT_MATCH = "UNSELECT_MATCH",
}

function generateDefaultState(): RoundReducerStateInterface {
    let state: RoundReducerStateInterface = {
        score: {
            [PlayerEnum.Human]: [],
            [PlayerEnum.AI]: [],
        },
        matches: [],
        selectedMatches: [],
        heap: [],
        turn: PlayerEnum.Human,
    };
    state.matches = generateMatches();
    state.heap = state.matches.map((match) => match.id);
    return state;
}

function roundReducer(
    state: RoundReducerStateInterface | null = null,
    { type, playerId, matchId }: RoundReducerProps
) {
    if (!state) {
        state = generateDefaultState();
    }
    if (type === ActionsRoundReducerEnum.SET_TURN) {
        return {
            ...state,
            turn: playerId,
        };
    }

    if (type === ActionsRoundReducerEnum.ADD_PLAYER_SCORE) {
        const toAdd = state.selectedMatches;
        const newHeap = state.heap.filter(
            (item: string) => !state?.selectedMatches.includes(item)
        );

        return {
            ...state,
            heap: newHeap,
            selectedMatches: [],
            score: {
                ...state.score,
                [state.turn]: [...state.score[state.turn], ...toAdd],
            },
        };
    }

    if (type === ActionsRoundReducerEnum.SELECT_MATCH) {
        if (!matchId) {
            return state;
        }

        if (!state.heap.includes(matchId)) {
            return state;
        }

        return {
            ...state,
            selectedMatches: [...state.selectedMatches, matchId],
        };
    }

    if (type === ActionsRoundReducerEnum.UNSELECT_MATCH) {
        if (!matchId) {
            return state;
        }

        if (!state.selectedMatches.includes(matchId)) {
            return state;
        }

        const matchIndex = state.selectedMatches.indexOf(matchId);

        if (matchIndex === undefined) {
            return state;
        }

        const selectedMatches = state.selectedMatches.filter(
            (match: string) => match !== matchId
        );

        return {
            ...state,
            selectedMatches: [...selectedMatches],
        };
    }

    if (type === ActionsRoundReducerEnum.ROUND_RESET) {
        return generateDefaultState();
    }
    return state;
}

const actionSetTurn = (playerId: PlayerEnum) => ({
    type: ActionsRoundReducerEnum.SET_TURN,
    playerId,
});
const actionAddPlayerScore = () => ({
    type: ActionsRoundReducerEnum.ADD_PLAYER_SCORE,
});
const actionReduceHeapSize = (matchId: number) => ({
    type: ActionsRoundReducerEnum.REDUCE_HEAP_SIZE,
    matchId,
});
const actionResetRound = () => ({
    type: ActionsRoundReducerEnum.ROUND_RESET,
});

const actionSelectMatch = (matchId: string) => ({
    type: ActionsRoundReducerEnum.SELECT_MATCH,
    matchId,
});
const actionUnselectMatch = (matchId: string) => ({
    type: ActionsRoundReducerEnum.UNSELECT_MATCH,
    matchId,
});

export {
    ActionsRoundReducerEnum,
    roundReducer,
    actionSetTurn,
    actionReduceHeapSize,
    actionResetRound,
    actionAddPlayerScore,
    actionSelectMatch,
    actionUnselectMatch,
};
