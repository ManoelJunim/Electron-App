import { styled, Button, Row } from "@nextui-org/react";

const ButtonMenu = styled(Button, {
  color: "warning",
  size: "$sm",
  "&:hover": {
    background: "#8D888F",
  },
});

const RowMenu = styled(Row, {
  "&:hover": {
    background: "#8D888F",
  },
});

const ButtonNavi = styled(Button, {
  "&:hover": {
    background: "#8D888F",
  },
});

export { ButtonMenu, RowMenu, ButtonNavi };
