import React from "react";
import "./UserManagement.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Divider } from "@mui/material";
import CrewChiefManager from "./CrewChief/CrewChief";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CrewMemberManager from "./CrewMember/CrewMember";

const UserManagement = () => {
  const [value, setValue] = React.useState("one");
  const [open, setOpen] = React.useState(false);
  const [openCM, setOpenCrewMember] = React.useState(false);



  const handleClickAddNewCM = () =>{
    setOpenCrewMember(true);
  };

  const handleClickAddNew = () => {
    setOpen(true);
  };

  const handleCrewMemberClose = () => {
    setOpenCrewMember(false);
  };

  const handleCrewChiefClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let page;

  if (value == "one") {
    page = (
      <CrewChiefManager
        openCrewChief={open}
        onCloseCrewChief={handleCrewChiefClose}
      />
    );
  } else if (value == "two") {
    page = <CrewMemberManager openCrewMember={openCM} onCloseCrewMember={handleCrewMemberClose} />;
  }

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
          <Tabs
            value={value}
            onChange={handleChange}
            // TabIndicatorProps={{ style: { background: "#fff" } }}
            aria-label="secondary tabs example"
            style={{
              // indicatorColor: "#fff",
              backgroundColor: "#003C5B",
              color: "#fff",
            }}
          >
            <Tab
              value="one"
              label="Crew Chief"
              style={{ color: "#fff", fontWeight: "500" }}
            />
            <Tab
              value="two"
              label="Crew Member"
              style={{ color: "#fff", fontWeight: "500", marginLeft: 30 }}
            />
            {value=='one'?(
              <Button
              size="small"
              style={{
                marginLeft: 520,
                height: 32,
                marginTop: 8,
                color: "#003c5b",
                backgroundColor: "#fff",
                paddingRight: 20,
                paddingLeft: 2,
                borderColor: "#fff",
              }}
              onClick={handleClickAddNew}
            >
              <AddIcon />
              Add Crew Chief
            </Button>
            ):(
              <Button
              size="small"
              style={{
                marginLeft: 520,
                height: 32,
                marginTop: 8,
                color: "#003c5b",
                backgroundColor: "#fff",
                paddingRight: 20,
                paddingLeft: 2,
                borderColor: "#fff",
              }}
              onClick={handleClickAddNewCM}
            >
              <AddIcon />
              Add Crew Member
            </Button>
            )}
            
          </Tabs>

          <Divider />
          {page}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default UserManagement;
