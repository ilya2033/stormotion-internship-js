import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Modal,
    TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { actionResetRoundFull } from "../actions/actionResetRoundFull";
import { actionUpdateSettings } from "../reducers/settingsReducer";
import { StoreStateInterface } from "../types/StoreInteface";

const SettingsModal: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const alternativeFirstTurn = useSelector(
        (state: StoreStateInterface) => state.settings.alternativeFirstTurn
    );
    const mValue = useSelector(
        (state: StoreStateInterface) => state.settings.m
    );
    const nValue = useSelector(
        (state: StoreStateInterface) => state.settings.n
    );
    const updateMValue = (value: number) => {
        if (value < 1) {
            return;
        }
        dispatch(actionUpdateSettings({ m: value }));
    };

    const updateAlternativeFirstTurn = (value: boolean) => {
        dispatch(actionUpdateSettings({ alternativeFirstTurn: value }));
    };

    const updateNValue = (value: number) => {
        if (value < 1) {
            return;
        }
        dispatch(actionUpdateSettings({ n: value }));
    };
    return (
        <Box>
            <Button
                variant="contained"
                color="secondary"
                className="SettingsModalButton"
                sx={{ position: "fixed", bottom: 5, right: 5 }}
                onClick={() => setIsOpen(true)}
            >
                Setting
            </Button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="Modal">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={alternativeFirstTurn}
                                onChange={() =>
                                    updateAlternativeFirstTurn(
                                        !alternativeFirstTurn
                                    )
                                }
                            />
                        }
                        label="AI first turn"
                    />

                    <TextField
                        value={mValue}
                        label="m"
                        onChange={(e) => updateMValue(+e.target.value)}
                        type="number"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="n"
                        value={nValue}
                        onChange={(e) => updateNValue(+e.target.value)}
                        type="number"
                        sx={{ mb: 2 }}
                    />
                    <Button
                        sx={{ margin: "5px auto" }}
                        variant="contained"
                        onClick={() =>
                            dispatch(
                                actionResetRoundFull() as unknown as AnyAction
                            ) && setIsOpen(false)
                        }
                    >
                        Save
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export { SettingsModal };
