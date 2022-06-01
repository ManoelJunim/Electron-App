import * as React from "react";
import { Grid } from "@nextui-org/react";

import { Desktop, Header, MenuLeft } from "./components";

const HomePage = () => {
  return (
    <Grid.Container>
      <Grid xs={2}>
        <MenuLeft />
      </Grid>
      <Grid xs={10} direction="column">
        <Header />
        <Desktop />
      </Grid>
    </Grid.Container>
  );
};

export { HomePage };
