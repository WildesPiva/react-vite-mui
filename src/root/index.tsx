import { Provider as ReduxProvider } from "react-redux";
import { PersistGate as ReduxPersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";

import { persistor, store } from "@/redux/store";
import { Router } from "@/routes/router";
import { materialTheme } from "@/theme";

export const Root = () => {
  return (
    <ReduxProvider store={store}>
      <ReduxPersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={materialTheme}>
          <Router />
        </ThemeProvider>
      </ReduxPersistGate>
    </ReduxProvider>
  );
};
