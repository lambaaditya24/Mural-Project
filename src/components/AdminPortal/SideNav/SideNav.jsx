import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const drawerWidth = 180;

const SideNav = ({childToParent}) => {

  return (
    <Box
      sx={{
        position: "absolute",
        top: 40,
        zIndex: 0
      }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            mt: "65px",
            backgroundColor: "#003C5B"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <Button variant="text" value="socialEnterprise" style={{ color: "#fff",marginTop:'20px', textAlign:'left', paddingLeft:0,fontSize:'12px', marginRight:"20px" }} onClick={()=>{childToParent(event.target.value)}}>
          Social Enterprise
        </Button>
        <Button variant="text" value="UserManagement" style={{ color: "#fff",marginTop:'35px', textAlign:'left', fontSize:'12px' }} onClick={()=>{childToParent(event.target.value)}}>
          User Management Module
        </Button>
        <Button variant="text" value="LearningModule" style={{ color: "#fff",marginTop:'35px', textAlign:'left',fontSize:'12px' }} onClick={()=>{childToParent(event.target.value)}}>
          Learning Categories Module
        </Button>
        <Button variant="text" value="journal" style={{ color: "#fff",marginTop:'35px', textAlign:'left',fontSize:'12px' }} onClick={()=>{childToParent(event.target.value)}}>
          Add Journal Content 
        </Button>
      </Drawer>
    </Box>
  );
};

export default SideNav;
