import { Box, Stack } from "@mui/material";
import { FC } from "react";
import { Provider } from "react-redux";
import { EndGameModal } from "./components/EndGameModal";
import { Field } from "./components/Field";
import { SideMenu } from "./components/SideMenu";
import { store } from "./reducers";

const App: FC = () => {
    return (
        <Provider store={store}>
            <Stack className="App" flexDirection="row">
                <Field />
                <SideMenu />
                <EndGameModal />
            </Stack>
        </Provider>
    );
};

export default App;
