import { RoundReducerStateInterface } from "./RoundInterface";
import { SettingsReducerStateInterface } from "./SettingsInterface";

export interface StoreStateInterface {
    round: RoundReducerStateInterface;
    settings: SettingsReducerStateInterface;
}
