import { Box, Stack } from "@mui/material";
import { FC } from "react";

interface MatchInterface {
    active?: boolean;
    onClick?: () => void;
}

const Match: FC<MatchInterface> = ({ active, onClick }) => {
    return (
        <Stack className={`Match ${active ? "active" : ""}`} onClick={onClick}>
            <Box className="Match__head"></Box>
            <Box className="Match__body"></Box>
        </Stack>
    );
};

export { Match };
