import { generateMatches } from "../helpers/generateMatches";
import { AppDispatch, RootState } from "../reducers";
import { actionResetRound, actionSetMatches } from "../reducers/roundReducer";
import { MatchInterface } from "../types/MatchInterface";
import { PlayerEnum } from "../types/PlayerEnum";
import { SettingsReducerStateInterface } from "../types/SettingsInterface";
import { actionSwitchTurn } from "./actionSwitchTurn";

const actionResetRoundFull =
    () => async (dispatch: AppDispatch, getState: () => RootState) => {
        let settings: SettingsReducerStateInterface;
        let newMatches: MatchInterface[];

        await dispatch(actionResetRound());

        settings = getState().settings;
        newMatches = generateMatches(settings.n);

        await dispatch(actionSetMatches(newMatches));
        await dispatch(
            actionSwitchTurn(
                settings.alternativeFirstTurn ? PlayerEnum.AI : PlayerEnum.Human
            )
        );
    };

export { actionResetRoundFull };
