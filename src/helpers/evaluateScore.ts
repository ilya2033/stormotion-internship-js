import { isEven } from "./isEven";

function evaluateScore(matches: number, totalPickedMatches: number): number {
    if (matches === 0) {
        return isEven(totalPickedMatches) ? 1 : -1;
    }
    return 0;
}

export { evaluateScore };
