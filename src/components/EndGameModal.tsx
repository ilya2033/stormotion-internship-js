import { Box, Button, Modal, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionResetRound } from "../reducers/roundReducer";
import { PlayerEnum } from "../types/PlayerEnum";

const EndGameModal: FC = () => {
    const dispatch = useDispatch();
    const score = useSelector(
        (state: any) => state.round.score[PlayerEnum.Human]
    );
    const heap = useSelector((state: any) => state.round.heap);
    const [isOpen, setIsOpen] = useState(false);
    const [isWinner, setIsWinner] = useState(false);

    useEffect(() => {
        if (heap.length === 0) {
            console.log(score.length);
            console.log(score.length % 2);
            setIsWinner(score.length % 2 === 0);
            setIsOpen(true);
        }
    }, [heap]);

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="Modal">
                {isWinner ? (
                    <Typography textAlign="center" variant="h4">
                        YOU WON
                    </Typography>
                ) : (
                    <Typography textAlign="center" variant="h4">
                        YOU LOST
                    </Typography>
                )}
                <Button
                    sx={{ margin: "5px auto" }}
                    variant="contained"
                    onClick={() =>
                        dispatch(actionResetRound()) && setIsOpen(false)
                    }
                >
                    Repeat
                </Button>
            </Box>
        </Modal>
    );
};

export { EndGameModal };
