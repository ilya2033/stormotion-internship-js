import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { actionAddSelected } from "../actions/actionAddSelected";
import { PlayerEnum } from "../types/PlayerEnum";
import { StoreStateInterface } from "../types/StoreInteface";

const EndTurnButton: FC = () => {
    const dispatch = useDispatch();
    const [isEnabled, setIsEnable] = useState(false);
    const turn = useSelector((state: StoreStateInterface) => state.round.turn);
    const selectedMatches = useSelector(
        (state: StoreStateInterface) => state.round.selectedMatches
    );

    useEffect(() => {
        setIsEnable(
            turn === PlayerEnum.Human && selectedMatches.length ? true : false
        );
    }, [turn, selectedMatches]);

    return (
        <Button
            className="EndTurnButton"
            variant="contained"
            onClick={() =>
                dispatch(actionAddSelected() as unknown as AnyAction)
            }
            disabled={!isEnabled}
        >
            END TURN
        </Button>
    );
};

export { EndTurnButton };
