import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    actionSelectMatch,
    actionUnselectMatch,
} from "../reducers/roundReducer";
import { Heap } from "./Heap";
import { Match } from "./Match";

const GameHeap: FC = () => {
    const dispatch = useDispatch();
    const selectedMatches: string[] = useSelector(
        (state: any) => state?.round?.selectedMatches || []
    );
    const matches: string[] = useSelector(
        (state: any) => state?.round?.heap || []
    );

    const selectMatch = (matchId: string) => {
        if (selectedMatches.includes(matchId)) {
            dispatch(actionUnselectMatch(matchId));
        } else if (selectedMatches.length < 3) {
            dispatch(actionSelectMatch(matchId));
        }
    };

    const checkIsActive = (matchId: string) =>
        selectedMatches.includes(matchId);

    const getMatches = () => {
        const matchElemets = matches.map((match) => {
            return (
                <Grid item key={match}>
                    <Match
                        onClick={() => selectMatch(match)}
                        active={checkIsActive(match)}
                    />
                </Grid>
            );
        });

        return matchElemets;
    };

    return (
        <Box className="GameHeap">
            <Heap>{getMatches()}</Heap>
        </Box>
    );
};

export { GameHeap };
