import * as React from "react";
import {
  Button,
  Card,
  Grid,
  Loading,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import {
  VideoCameraBack,
  Image,
  MusicNote,
  Download,
  Computer,
  Topic,
} from "@mui/icons-material";

const HomePage = () => {
  const [files, setFiles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

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
    <Grid.Container gap={1}>
      <Grid xs={12} justify="center" alignItems="center">
        <Text h1 size={30} color="warning" weight="light">
          Electron |
        </Text>
        <Text size={15} color="#0f1114" weight="light">
          explorer de arquivos
        </Text>
      </Grid>
      <Grid xs={2} justify="flex-start" direction="column" alignItems="center">
        <Button
          color="warning"
          ghost
          size={"sm"}
          onPress={() => clicked(dirDestop)}
          icon={<Computer />}
        >
          Desktop
        </Button>
        <Spacer y={1} />
        <Button
          color="warning"
          ghost
          size={"sm"}
          onPress={() => clicked(dirDocuments)}
          icon={<Topic />}
        >
          Documents
        </Button>
        <Spacer y={1} />
        <Button
          color="warning"
          ghost
          size={"sm"}
          onPress={() => clicked(dirDownloads)}
          icon={<Download />}
        >
          Downloads
        </Button>
        <Spacer y={1} />
        <Button
          color="warning"
          ghost
          size={"sm"}
          onPress={() => clicked(dirImages)}
          icon={<Image />}
        >
          Images
        </Button>
        <Spacer y={1} />
        <Button
          color="warning"
          ghost
          size={"sm"}
          onPress={() => clicked(dirMusics)}
          icon={<MusicNote />}
        >
          Musics
        </Button>
        <Spacer y={1} />
        <Button
          color="warning"
          ghost
          size={"sm"}
          onPress={() => clicked(dirVideos)}
          icon={<VideoCameraBack />}
        >
          Videos
        </Button>
      </Grid>
      <Grid xs={10}>
        <Card css={{ minHeight: "450px" }}>
          {loading ? (
            <Grid css={{ marginTop: "200px", marginLeft: "300px" }}>
              <Loading color="warning" type="points" size="lg" />
            </Grid>
          ) : (
            files.map((f, index) => {
              return (
                <div key={index}>
                  {" "}
                  {index < 3 ? "" : f.trim().split(":")[1]}
                </div>
              );
            })
          )}

          <Card.Footer
            css={{
              borderTop: "$borderWeights$light solid $gray700",
              bottom: 0,
              zIndex: 1,
              bgColor: "#0f1114",
            }}
          >
            <Row justify="flex-end" css={{ paddingRight: "25px" }}>
              <Text small color="warning">
                NEXT UI | DOC-9 🚀
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export { HomePage };
