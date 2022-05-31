import React, { useContext } from "react";
import { Card, Grid, Loading } from "@nextui-org/react";
import { SessionContext } from "../../../../contexts";

const Desktop = () => {
  const { files, loading } = useContext(SessionContext);

  const Cliked = () => {
    console.log("clicado");
  };

  return (
    <Card css={{ minHeight: "500px" }}>
      {loading ? (
        <Grid css={{ marginTop: "200px", marginLeft: "300px" }}>
          <Loading color="warning" type="points" size="lg" />
        </Grid>
      ) : (
        files.map((f, index) => {
          return (
            <div key={index} onClick={Cliked}>
              {index < 3 ? "" : f.trim().split(":")[1]}{" "}
            </div>
          );
        })
      )}
    </Card>
  );
};

export { Desktop };
