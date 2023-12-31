import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PlayerEnum } from "../types/PlayerEnum";
import { StoreStateInterface } from "../types/StoreInteface";
import { Heap } from "./Heap";
import { Match } from "./Match";

interface PlayerHeapProps {
    player: PlayerEnum;
}

const PlayerHeap: FC<PlayerHeapProps> = ({ player }) => {
    const matches: string[] = useSelector(
        (state: StoreStateInterface) => state.round.score[player]
    );

    const getMatches = () => {
        const matchElemets = matches.map((match) => {
            return (
                <Grid item key={match}>
                    <Match active={true} />
                </Grid>
            );
        });

        return matchElemets;
    };

    return (
        <Box className="PlayerHeap">
            <Heap>{getMatches()}</Heap>
        </Box>
    );
};

export { PlayerHeap };
