import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PlayerEnum } from "../types/PlayerEnum";
import { StoreStateInterface } from "../types/StoreInteface";
import { EndTurnButton } from "./EndTurnButton";
import { SettingsModal } from "./SettingsModal";

const SideMenu: FC = () => {
    const humanScore = useSelector(
        (state: StoreStateInterface) => state.round.score[PlayerEnum.Human]
    ).length;
    const AIScore = useSelector(
        (state: StoreStateInterface) => state.round.score[PlayerEnum.AI]
    ).length;
    return (
        <Stack className="SideMenu" spacing={1} justifyContent="space-around">
            <Box>
                <Typography variant="h3" textAlign="center">
                    {AIScore}
                </Typography>
            </Box>
            <EndTurnButton />
            <Box>
                <Typography variant="h3" textAlign="center">
                    {humanScore}
                </Typography>
                <SettingsModal />
            </Box>
        </Stack>
    );
};

export { SideMenu };
