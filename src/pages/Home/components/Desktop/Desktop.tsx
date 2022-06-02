import React, { Fragment, useContext } from "react";
import { Col, Grid, Loading, Row, Spacer } from "@nextui-org/react";
import {
  GrDocumentTxt,
  GrDocumentConfig,
  GrDocumentExcel,
  GrDocumentPdf,
  GrDocumentSound,
  GrDocumentVideo,
  GrDocumentWindows,
  GrDocumentWord,
  GrDocumentZip,
  GrDocumentImage,
  GrFolder,
} from "react-icons/gr";
import { Divider, Typography } from "@mui/material";

import { SessionContext } from "../../../../contexts";
import * as S from "./styles";

const Desktop = () => {
  const { files, loading, dirFile } = useContext(SessionContext);

  const openFiles = (fileName: string) => {
    window.openFile.openFile(dirFile, fileName);
  };

  const getIconType = (typeFile: string) => {
    if (typeFile === "txt") {
      return <GrDocumentTxt size={20} />;
    } else if (typeFile === "pdf") {
      return <GrDocumentPdf size={20} />;
    } else if (typeFile === "xls" || typeFile === "xlsx") {
      return <GrDocumentExcel size={20} />;
    } else if (typeFile === "docx") {
      return <GrDocumentWord size={20} />;
    } else if (typeFile === "mp3") {
      return <GrDocumentSound size={20} />;
    } else if (typeFile === "zip") {
      return <GrDocumentZip size={20} />;
    } else if (typeFile === "mp4") {
      return <GrDocumentVideo size={20} />;
    } else if (typeFile === "exe") {
      return <GrDocumentWindows size={20} />;
    } else if (
      typeFile === "jpg" ||
      typeFile === "jpeg" ||
      typeFile === "png"
    ) {
      return <GrDocumentImage size={20} />;
    } else if (
      typeFile === "py" ||
      typeFile === "ipynb" ||
      typeFile === "json" ||
      typeFile === "lnk"
    ) {
      return <GrDocumentConfig size={20} />;
    } else if (typeFile.length > 0) {
      return <GrFolder size={20} />;
    }
  };

  return (
    <S.Container
      css={{
        overflowY: "auto",
        maxHeight: "93vh",
        minHeight: "93vh",
        padding: 10,
        bgColor: "#4C555C",
      }}
    >
      <Col>
        {loading ? (
          <Grid css={{ marginTop: "200px", marginLeft: "300px" }}>
            <Loading color="warning" type="points" size="lg" />
          </Grid>
        ) : (
          <>
            <Grid.Container gap={1}>
              <Grid xs={8} alignItems="center" justify="flex-start">
                <Typography variant="body2" color="#fff">
                  {" "}
                  Nome{" "}
                </Typography>
              </Grid>
              <Grid xs={4} alignItems="center" justify="center">
                <Typography variant="body2" color="#fff">
                  {" "}
                  Data{" "}
                </Typography>
              </Grid>
            </Grid.Container>
            <Grid>
              <Divider />
              <Spacer />
            </Grid>
            {files.map((f, index) => {
              return (
                <Fragment key={index}>
                  <Grid.Container
                    css={{
                      color: "warning",
                      cursor: "pointer",

                      "&:hover": {
                        background: "#8D888F",
                      },
                    }}
                  >
                    <Grid.Container gap={0.5} xs={8}>
                      <Grid>{getIconType(`${f.trim().split(".").pop()}`)}</Grid>
                      <Grid
                        onClick={() => {
                          openFiles(
                            `${f
                              .trim()
                              .split(" ")
                              .filter((item) => item !== "")
                              .slice(3)
                              .join(" ")}`
                          );
                        }}
                      >
                        <Typography variant="body2" color="white">
                          {f
                            .trim()
                            .split(" ")
                            .filter((item) => item !== "")
                            .slice(3)
                            .join(" ")}
                        </Typography>
                      </Grid>
                    </Grid.Container>
                    <Grid.Container xs={4} gap={1} justify="flex-end">
                      <Grid>
                        <Typography variant="body2" color="white">
                          {f.trim().split(" ", 1)}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant="body2" color="white">
                          {f.trim().split(" ")[2]}
                        </Typography>
                      </Grid>
                    </Grid.Container>
                  </Grid.Container>
                </Fragment>
              );
            })}
          </>
        )}
      </Col>
    </S.Container>
  );
};

export { Desktop };
