import React, { useContext } from "react";
import { Button, Text, Col, Row, Spacer, css } from "@nextui-org/react";
import {
  Computer,
  Download,
  MusicNote,
  Topic,
  VideoCameraBack,
  Image,
} from "@mui/icons-material";

import { SessionContext } from "../../../../contexts";
import * as S from "./styles";

const MenuLeft = () => {
  const { setFiles, setLoading } = useContext(SessionContext);

  const clicked = async (dir: string) => {
    setLoading(true);
    const resp = await window.api.listFiles(dir);
    setFiles(resp);
    setLoading(false);
  };

  const dirDestop = "C:\\Users\\Manoel Farias\\Desktop";
  const dirDocuments = "C:\\Users\\Manoel Farias\\Documents";
  const dirDownloads = "C:\\Users\\Manoel Farias\\Downloads";
  const dirImages = "C:\\Users\\Manoel Farias\\Pictures";
  const dirMusics = "C:\\Users\\Manoel Farias\\Music";
  const dirVideos = "C:\\Users\\Manoel Farias\\Videos";

  return (
    <Row css={{ h: "100%", backgroundColor: "#49444B" }}>
      <Col css={{ h: "100%" }}>
        <Spacer y={2} />
        <Row justify="center">
          <Text b size={12} css={{ color: "#8D888F" }}>
            Favoritos
          </Text>
        </Row>

        <Row justify="flex-start">
          <S.ButtonMenu
            color="warning"
            light
            size={"sm"}
            icon={<Computer />}
            onPress={() => {
              clicked(dirDestop);
            }}
          >
            <Text css={{ color: "White" }}>Desktop</Text>
          </S.ButtonMenu>
        </Row>
        <Row justify="flex-start">
          <Button
            color="warning"
            onPress={() => {
              clicked(dirDocuments);
            }}
            light
            size={"sm"}
            icon={<Topic />}
            css={{
              "&:hover": {
                background: "#8D888F",
              },
            }}
          >
            <Text css={{ color: "White" }}>Documents</Text>
          </Button>
        </Row>
        <Row justify="flex-start">
          <Button
            color="warning"
            onPress={() => {
              clicked(dirDownloads);
            }}
            light
            size={"sm"}
            icon={<Download />}
            css={{
              "&:hover": {
                background: "#8D888F",
              },
            }}
          >
            <Text css={{ color: "White" }}>Downloads</Text>
          </Button>
        </Row>
        <Row justify="flex-start">
          <Button
            color="warning"
            onPress={() => {
              clicked(dirImages);
            }}
            light
            size={"sm"}
            icon={<Image />}
            css={{
              "&:hover": {
                background: "#8D888F",
              },
            }}
          >
            <Text css={{ color: "White" }}>Images</Text>
          </Button>
        </Row>
        <Row justify="flex-start">
          <Button
            color="warning"
            onPress={() => {
              clicked(dirMusics);
            }}
            light
            size={"sm"}
            icon={<MusicNote />}
            css={{
              "&:hover": {
                background: "#8D888F",
              },
            }}
          >
            <Text css={{ color: "White" }}>Musics</Text>
          </Button>
        </Row>
        <Row justify="flex-start">
          <Button
            color="warning"
            onPress={() => {
              clicked(dirVideos);
            }}
            light
            size={"sm"}
            icon={<VideoCameraBack />}
            css={{
              "&:hover": {
                background: "#8D888F",
              },
            }}
          >
            <Text css={{ color: "White" }}>Videos</Text>
          </Button>
        </Row>
        <Spacer y={1} />

        <Spacer y={10} />
        <Row justify="center">
          <Text b size={12} css={{ color: "#8D888F" }}>
            Electron
          </Text>
        </Row>
        <Row justify="center">
          <Text small color="warning">
            NEXT UI | DOC-9 🚀
          </Text>
        </Row>
      </Col>
    </Row>
  );
};

export { MenuLeft };
