import React, { useContext, useState } from "react";
import { Button, Grid, Input, Text, Modal } from "@nextui-org/react";
import { Search } from "@mui/icons-material";
import { Typography } from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

import * as S from "./styles";
import { SessionContext } from "../../../../contexts";

const Header = () => {
  const { currentDir } = useContext(SessionContext);
  const [visible, setVisible] = useState(false);
  const [folder, setFolder] = useState<string>("");
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const setNameFolder = (name: string) => {
    window.creatFolder.creatFolder(`${currentDir}\\${name}`);
    setVisible(false);
  };

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{ bg: "#32383D" }}
      >
        <Modal.Body>
          <Input
            onChange={(event) => {
              setFolder(event.target.value);
            }}
            clearable
            placeholder="nome da pasta"
            css={{ padding: 5 }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="warning"
            size="xs"
            onPress={() => {
              setNameFolder(folder);
            }}
          >
            <Text b>Criar</Text>
          </Button>
        </Modal.Footer>
      </Modal>

      <Grid.Container css={{ backgroundColor: "#202529" }}>
        <Grid.Container xs={7} alignItems="center" justify="flex-start" gap={2}>
          <Grid>
            <Typography variant="body1" color="#fff" fontSize={14}>
              {currentDir}
            </Typography>
          </Grid>
        </Grid.Container>
        <Grid.Container xs={5} justify="flex-end" alignItems="center" gap={1}>
          <Grid>
            <S.ButtonNavi
              onPress={handler}
              light
              auto
              icon={<CreateNewFolderIcon />}
              color="warning"
            />
          </Grid>
          <Grid>
            <Input
              shadow={false}
              size="xs"
              placeholder="Search"
              color="warning"
              status="default"
              contentRight={<Search fontSize="inherit" />}
            />
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </>
  );
};

export { Header };
