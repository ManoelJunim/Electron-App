import React from "react";
import { SessionProvider } from "./contexts";
import { Routes } from "./routes";
import { globalStyles } from "./styles";

const App = () => {
  globalStyles();
  return (
    <SessionProvider>
      <Routes />
    </SessionProvider>
  );
};

export { App };
