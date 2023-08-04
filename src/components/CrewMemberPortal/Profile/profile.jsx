import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import JournalModule from "./JournalModule/journalModule";

const ProfileModule = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };
  return (
    <React.Fragment>
      <Container>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "550px",
            mt: "100px",
            ml: "140px",
            width: "1050px",
            borderRadius: 5,
          }}
        >
          <Button  onClick={handleOpen}>
            Journal Module
          </Button>
          <JournalModule openJournal={openDialog} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ProfileModule;
