import { styled, Grid, Row } from "@nextui-org/react";

const GridSelector = styled(Grid, {
  color: "warning",

  "&:hover": {
    background: "#8D888F",
  },
});

const Container = styled(Row, {
  svg: {
    path: {
      stroke: "#BCBCBC",
    },
  },
});

export { GridSelector, Container };
