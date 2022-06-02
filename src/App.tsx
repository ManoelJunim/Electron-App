import React from "react";

import { Routes } from "./routes";
import { globalStyles } from "./styles";
import { SessionProvider } from "./contexts";

const App = () => {
  globalStyles();
  return (
    <SessionProvider>
      <Routes />
    </SessionProvider>
  );
};

export { App };
