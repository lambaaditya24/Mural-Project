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
        <Button variant="text" value="weekly" style={{marginRight:"27px", fontSize:"12px",color: "#fff",marginTop:'20px', textAlign:'left', padding:0 }} onClick={()=>{childToParent(event.target.value)}}>
          Weekly Assesment
        </Button>
        <Button variant="text" value="monthly" style={{ marginRight:"20px", fontSize:"12px",color: "#fff",marginTop:'35px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          Monthly Assesment
        </Button>
        <Button variant="text" value="current" style={{ marginRight:"20px", fontSize:"12px",color: "#fff",marginTop:'35px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          Current Assesment
        </Button>
        <Button variant="text" value="learning" style={{ fontSize:"12px", color: "#fff",marginTop:'35px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          Learning Categories Module
        </Button>
      </Drawer>
    </Box>
  );
};

export default SideNav;
