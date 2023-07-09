import { MatchInterface } from "../types/MatchInterface";
import { v4 as uuid } from "uuid";

function generateMatches(amount: number = 25): MatchInterface[] {
    let matches: MatchInterface[] = [];

    if (amount <= 0) {
        return matches;
    }

    for (let iter = 0; iter < amount; iter++) {
        matches.push({ id: uuid() });
    }
    return matches;
}

export { generateMatches };
