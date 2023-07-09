import { evaluateScore } from "./evaluateScore";

function minimax(
    matches: number,
    totalPickedMatches: number,
    depth: number,
    isMaximizingPlayer: boolean,
    memo: number[][]
): number {
    if (depth === 0 || matches === 0) {
        return evaluateScore(matches, totalPickedMatches);
    }

    if (memo[matches][totalPickedMatches] !== undefined) {
        return memo[matches][totalPickedMatches];
    }

    if (isMaximizingPlayer) {
        let maxEval = -Infinity;
        for (let i = 1; i <= 3; i++) {
            if (matches >= i) {
                const evaluation = minimax(
                    matches - i,
                    totalPickedMatches + i,
                    depth - 1,
                    false,
                    memo
                );
                maxEval = Math.max(maxEval, evaluation);
            }
        }
        memo[matches][totalPickedMatches] = maxEval;
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 1; i <= 3; i++) {
            if (matches >= i) {
                const evaluation = minimax(
                    matches - i,
                    totalPickedMatches + i,
                    depth - 1,
                    true,
                    memo
                );
                minEval = Math.min(minEval, evaluation);
            }
        }
        memo[matches][totalPickedMatches] = minEval;
        return minEval;
    }
}

export { minimax };
