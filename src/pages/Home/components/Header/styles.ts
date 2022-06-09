import { styled, Button, Grid } from "@nextui-org/react";

const ButtonNavi = styled(Button, {
  "&:hover": {
    background: "#8D888F",
  },
});

const Container = styled(Grid, {
  svg: {
    path: {
      stroke: "#BCBCBC",
    },
  },
});

export { ButtonNavi, Container };
