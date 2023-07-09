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

    let bestScore = -Infinity;
    let bestMove: number = 1;

    if (matches <= 3 && isEven(matches - 1)) {
        return matches - 1;
    }

    if (
        matchesPickedByOtherPlayer >= 2 &&
        matchesPickedByOtherPlayer % 2 === 0
    ) {
        const trapMove = matchesPickedByOtherPlayer % 4;
        if (trapMove > 0 && matches >= trapMove) {
            return trapMove;
        }
    }

    for (let i = 1; i <= 3; i++) {
        if (matches >= i) {
            const score = minimax(
                matches - i,
                totalPickedMatches + i,
                4,
                false,
                memo
            );
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    return bestMove;
}
export { findBestMove };
