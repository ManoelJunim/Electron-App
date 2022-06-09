import React, { useContext } from "react";
import { Button, Text, Col, Row, Spacer } from "@nextui-org/react";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Computer,
  Download,
  MusicNote,
  Topic,
  VideoCameraBack,
  Image,
} from "@mui/icons-material";

import { SessionContext } from "../../../../contexts";
import { Typography } from "@mui/material";
import * as S from "./styles";

const MenuLeft = () => {
  const { setCurrentDir, currentDir } = useContext(SessionContext);

  const dirDestop = "C:\\Users\\Manoel Farias\\Desktop";
  const dirDocuments = "C:\\Users\\Manoel Farias\\Documents";
  const dirDownloads = "C:\\Users\\Manoel Farias\\Downloads";
  const dirImages = "C:\\Users\\Manoel Farias\\Pictures";
  const dirMusics = "C:\\Users\\Manoel Farias\\Music";
  const dirVideos = "C:\\Users\\Manoel Farias\\Videos";

  const getPreviousDir = () => {
    // removendo o ultimo elemento da lista
    setCurrentDir(currentDir.split("\\").slice(0, -1).join("\\"));
  };

  return (
    <Col css={{ minHeight: "100%", backgroundColor: "#32383D" }}>
      <Spacer y={0.5} />
      <Row justify="center">
        <S.ButtonNavi
          onPress={() => {
            getPreviousDir();
          }}
          light
          auto
          icon={<ArrowBackIos />}
          color="warning"
        />
        <S.ButtonNavi light auto icon={<ArrowForwardIos />} color="warning" />
      </Row>
      <Spacer y={1} />
      <Row justify="center">
        <Typography variant="body2" color="#8D888F">
          Favorites
        </Typography>
      </Row>
      <S.RowMenu justify="flex-start">
        <Button
          color="warning"
          light
          size={"sm"}
          icon={<Computer fontSize={"small"} />}
          onPress={() => {
            setCurrentDir(dirDestop);
          }}
        >
          <Typography variant="body2" color="#fff">
            Desktop
          </Typography>
        </Button>
      </S.RowMenu>
      <S.RowMenu justify="flex-start">
        <Button
          color="warning"
          onPress={() => {
            setCurrentDir(dirDocuments);
          }}
          light
          size={"sm"}
          icon={<Topic fontSize={"small"} />}
        >
          <Text css={{ color: "White" }}>Documents</Text>
        </Button>
      </S.RowMenu>
      <S.RowMenu justify="flex-start">
        <Button
          color="warning"
          onPress={() => {
            setCurrentDir(dirDownloads);
          }}
          light
          size={"sm"}
          icon={<Download fontSize={"small"} />}
        >
          <Text css={{ color: "White" }}>Downloads</Text>
        </Button>
      </S.RowMenu>
      <S.RowMenu justify="flex-start">
        <Button
          color="warning"
          onPress={() => {
            setCurrentDir(dirImages);
          }}
          light
          size={"sm"}
          icon={<Image fontSize={"small"} />}
        >
          <Text css={{ color: "White" }}>Images</Text>
        </Button>
      </S.RowMenu>
      <S.RowMenu justify="flex-start">
        <Button
          color="warning"
          onPress={() => {
            setCurrentDir(dirMusics);
          }}
          light
          size={"sm"}
          icon={<MusicNote fontSize={"small"} />}
        >
          <Text css={{ color: "White" }}>Musics</Text>
        </Button>
      </S.RowMenu>
      <S.RowMenu justify="flex-start">
        <Button
          color="warning"
          onPress={() => {
            setCurrentDir(dirVideos);
          }}
          light
          size={"sm"}
          icon={<VideoCameraBack fontSize={"small"} />}
        >
          <Text css={{ color: "White" }}>Videos</Text>
        </Button>
      </S.RowMenu>
    </Col>
  );
};

export { MenuLeft };
