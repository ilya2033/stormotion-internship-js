import { Grid } from "@mui/material";
import { FC, ReactElement, ReactNode, useState } from "react";

interface HeapProps {
    children?: ReactNode | ReactElement;
}

const Heap: FC<HeapProps> = ({ children }) => {
    return (
        <Grid container className="Heap" spacing={1}>
            {children}
        </Grid>
    );
};

export { Heap };
