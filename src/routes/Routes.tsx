import React from "react";
import { MemoryRouter, Route, Routes as Switch } from "react-router-dom";

import { HomePage } from "../pages";

const Routes = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route path="" element={<HomePage />} />
      </Switch>
    </MemoryRouter>
  );
};

export { Routes };
