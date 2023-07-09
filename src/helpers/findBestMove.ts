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

    if (matches <= 3 && isEven(totalPickedMatches + matches)) {
        return totalPickedMatches + matches;
    }

    for (let i = 1; i <= 3; i++) {
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

    while (matches > 4 && matches - bestMove <= 3) {
        bestMove--;
    }

    return bestMove;
}
export { findBestMove };
