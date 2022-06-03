import React, { useContext } from "react";
import { Grid, Input } from "@nextui-org/react";
import { ArrowBackIos, ArrowForwardIos, Search } from "@mui/icons-material";

import * as S from "./styles";
import { SessionContext } from "../../../../contexts";
import { Typography } from "@mui/material";

const Header = () => {
  const { currentDir, setCurrentDir } = useContext(SessionContext);

  const getPreviousDir = () => {
    // removendo o ultimo elemento da lista
    setCurrentDir(currentDir.split("\\").slice(0, -1).join("\\"));
  };

  return (
    <Grid.Container css={{ backgroundColor: "#202529" }}>
      <Grid.Container xs={8} alignItems="center">
        <Grid>
          <S.ButtonNavi
            onPress={() => {
              getPreviousDir();
            }}
            light
            auto
            icon={<ArrowBackIos />}
            color="warning"
          />
        </Grid>
        <Grid>
          <S.ButtonNavi light auto icon={<ArrowForwardIos />} color="warning" />
        </Grid>
        <Grid>
          <Typography variant="body1" color="#fff" fontSize={13}>
            {currentDir}
          </Typography>
        </Grid>
      </Grid.Container>
      <Grid.Container xs={4} justify="flex-end" alignItems="center" gap={1}>
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
