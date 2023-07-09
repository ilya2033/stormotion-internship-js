import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    actionSelectMatch,
    actionUnselectMatch,
} from "../reducers/roundReducer";
import { StoreStateInterface } from "../types/StoreInteface";
import { Heap } from "./Heap";
import { Match } from "./Match";

const GameHeap: FC = () => {
    const dispatch = useDispatch();
    const selectedMatches: string[] = useSelector(
        (state: StoreStateInterface) => state?.round?.selectedMatches || []
    );
    const matches: string[] = useSelector(
        (state: StoreStateInterface) => state?.round?.heap || []
    );
    const settings = useSelector(
        (state: StoreStateInterface) => state?.settings || { m: 3 }
    );

    const selectMatch = (matchId: string) => {
        if (selectedMatches.includes(matchId)) {
            dispatch(actionUnselectMatch(matchId));
        } else if (settings.m && selectedMatches.length < settings.m) {
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
