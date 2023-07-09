import { Stack } from "@mui/material";
import { FC } from "react";
import { PlayerEnum } from "../types/PlayerEnum";
import { GameHeap } from "./GameHeap";
import { PlayerHeap } from "./PlayerHeap";

const Field: FC = () => {
    return (
        <Stack className="Field" spacing={2}>
            <PlayerHeap player={PlayerEnum.AI} />
            <GameHeap />
            <PlayerHeap player={PlayerEnum.Human} />
        </Stack>
    );
};

export { Field };
