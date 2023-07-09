import { store } from "../reducers";
import { isEven } from "./isEven";
import { minimax } from "./minimax";

function findBestMove(
    matches: number,
    totalPickedMatches: number,
    matchesPickedByOtherPlayer: number
): number {
    const memo: number[][] = Array.from({ length: matches + 1 }, () =>
        Array.from({ length: matches + 1 })
    );
    const m = store.getState()?.settings?.m || 3;
    let bestScore = -Infinity;
    let bestMove: number = 1;
    if (matches <= m && isEven(totalPickedMatches + matches)) {
        return matches;
    }

    if (matches <= m) {
        bestMove = matches;
        while (bestMove > 1) {
            if (isEven(totalPickedMatches + bestMove)) {
                return bestMove;
            }
            bestMove--;
        }
    }

    for (let i = 1; i <= m; i++) {
        if (matches >= i) {
            let score = minimax(
                matches - i,
                totalPickedMatches + i,
                4,
                false,
                memo
            );
            if (isEven(matchesPickedByOtherPlayer + i)) {
                score--;
            }

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    while (matches > m + 2 && matches - bestMove <= m) {
        bestMove--;
    }

    if (matches <= m + 2 && matches - bestMove <= m) {
        bestMove = m;
        while (bestMove > 1) {
            if (isEven(totalPickedMatches + bestMove)) {
                return bestMove;
            }
            bestMove--;
        }
    }
    if (
        matches <= m + 2 &&
        bestMove > 1 &&
        !isEven(totalPickedMatches + bestMove)
    ) {
        bestMove--;
    }

    return bestMove;
}
export { findBestMove };
