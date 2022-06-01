import React from "react";
import { Button, Col, Row, Text } from "@nextui-org/react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import * as S from "./styles";

const Header = () => {
  return (
    <Row css={{ backgroundColor: "#202529" }}>
      <Col>
        <Row align="center" justify="flex-start">
          <S.ButtonNavi light auto icon={<ArrowBackIos />} color="warning" />
          <S.ButtonNavi light auto icon={<ArrowForwardIos />} color="warning" />
        </Row>
      </Col>
      <Col>
        <Row align="center" justify="flex-end" css={{ marginRight: "10px" }}>
          <Text h1 size={30} color="warning" weight="light">
            |
          </Text>
          <Text size={15} color="#FFFFFF" weight="light">
            Explorer
          </Text>
        </Row>
      </Col>
    </Row>
  );
};

export { Header };
