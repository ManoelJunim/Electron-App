import * as React from "react";
import { Button, Card, Grid, Spacer, Text } from "@nextui-org/react";

const HomePage = () => {
  const clicked = async () => {
    console.log("clicado");
    const resp = await window.api.listFiles(
      "C:\\Users\\Manoel Farias\\Downloads"
    );
    console.log(resp);
  };

  return (
    <Grid.Container gap={1}>
      <Grid xs={12} justify="center">
        <Text h2 color="gradiend" weight="hairline">
          PROJETO ELECTRON
        </Text>
      </Grid>
      <Spacer y={1}></Spacer>
      <Grid xs={12}>
        <Card bordered hoverable color="default">
          <Spacer y={10}></Spacer>
          <Card.Footer>
            <Text small i>
              feito com NEXT UI - DOC-9 🚀
            </Text>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={12} justify="flex-end">
        <Button size="xs" color="default" onPress={clicked}>
          Abrir
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export { HomePage };
