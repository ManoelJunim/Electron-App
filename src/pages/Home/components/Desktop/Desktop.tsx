import React, { useContext } from "react";
import { Col, Grid, Loading, Row, Text } from "@nextui-org/react";
import { SessionContext } from "../../../../contexts";

const Desktop = () => {
  const { files, loading } = useContext(SessionContext);

  return (
    <Row css={{ minHeight: "94vh", bgColor: "#4C555C" }}>
      <Col>
        {loading ? (
          <Grid css={{ marginTop: "200px", marginLeft: "300px" }}>
            <Loading color="warning" type="points" size="lg" />
          </Grid>
        ) : (
          files.map((f, index) => {
            return (
              <Text css={{ color: "white" }}>
                {index < 3 ? "" : f.trim().split(":")[1]}
              </Text>
            );
          })
        )}
      </Col>
    </Row>
  );
};

export { Desktop };
