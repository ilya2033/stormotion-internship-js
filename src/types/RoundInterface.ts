import { MatchInterface } from "./MatchInterface";
import { PlayerEnum } from "./PlayerEnum";

export interface RoundReducerStateInterface {
    turn: PlayerEnum;
    heap: string[];
    score: { [key in PlayerEnum]: string[] };
    matches: MatchInterface[];
    selectedMatches: string[];
}
