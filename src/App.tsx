import React from "react";
import { SessionProvider } from "./contexts";
import { Routes } from "./routes";

const App = () => {
  return (
    <SessionProvider>
      <Routes />
    </SessionProvider>
  );
};

export { App };
