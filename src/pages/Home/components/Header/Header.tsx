import React from "react";
import { Row, Text } from "@nextui-org/react";

const Header = () => {
  return (
    <Row
      align="center"
      justify="flex-end"
      css={{ backgroundColor: "#39343B", marginRight: "10px" }}
    >
      <Text h1 size={30} color="warning" weight="light">
        Electron |
      </Text>
      <Text size={15} color="#FFFFFF" weight="light">
        explorer de arquivos
      </Text>
    </Row>
  );
};

export { Header };
