import React from "react";
import { Col, Grid, Input, Row, Switch } from "@nextui-org/react";
import {
  ArrowBackIos,
  ArrowForwardIos,
  DarkMode,
  GridView,
  LightMode,
  Search,
} from "@mui/icons-material";

import * as S from "./styles";

const Header = () => {
  return (
    <Grid.Container css={{ backgroundColor: "#202529" }}>
      <Grid.Container xs={6}>
        <Grid>
          <S.ButtonNavi light auto icon={<ArrowBackIos />} color="warning" />
        </Grid>
        <Grid>
          <S.ButtonNavi light auto icon={<ArrowForwardIos />} color="warning" />
        </Grid>
      </Grid.Container>
      <Grid.Container xs={6} justify="flex-end" alignItems="center" gap={1}>
        <Grid>
          <Input
            shadow={false}
            size="xs"
            placeholder="Search"
            color="warning"
            status="default"
            contentRight={<Search fontSize="inherit" />}
          />
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};

export { Header };
