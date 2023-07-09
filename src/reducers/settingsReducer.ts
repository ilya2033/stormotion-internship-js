import { SettingsReducerStateInterface } from "../types/SettingsInterface";

interface SettingsReducerProps {
    type: ActionsSettingsReducerEnum;
    settings: SettingsReducerStateInterface;
}

enum ActionsSettingsReducerEnum {
    UPDATE_SETTINGS = "UPDATE_SETTINGS",
    RESET_SETTINGS = "RESET_SETTINGS",
}

function generateDefaultState(): SettingsReducerStateInterface {
    let state: SettingsReducerStateInterface = {
        alternativeFirstTurn: false,
        m: 3,
        n: 12,
    };

    return state;
}

function settingsReducer(
    state: SettingsReducerStateInterface | null = null,
    { type, settings }: SettingsReducerProps
) {
    if (!state) {
        state = generateDefaultState();
    }
    if (type === ActionsSettingsReducerEnum.UPDATE_SETTINGS) {
        return {
            ...state,
            ...settings,
        };
    }

    if (type === ActionsSettingsReducerEnum.RESET_SETTINGS) {
        return generateDefaultState();
    }
    return state;
}

const actionUpdateSettings = (settings: SettingsReducerStateInterface) => ({
    type: ActionsSettingsReducerEnum.UPDATE_SETTINGS,
    settings,
});
const actionResetSettings = () => ({
    type: ActionsSettingsReducerEnum.RESET_SETTINGS,
});

export {
    ActionsSettingsReducerEnum,
    settingsReducer,
    actionUpdateSettings,
    actionResetSettings,
};
