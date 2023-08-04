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
        <Button variant="text" value="profile" style={{marginRight:"105px", fontSize:"12px",color: "#fff",marginTop:'20px', textAlign:'left', padding:0 }} onClick={()=>{childToParent(event.target.value)}}>
          Profile
        </Button>
        <Button variant="text" value="gaModule" style={{  fontSize:"12px",color: "#fff",marginTop:'25px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          Goals and Actions Module
        </Button>
        <Button variant="text" value="academicAchievments" style={{  fontSize:"12px",color: "#fff",marginTop:'25px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          Academic Achievments
        </Button>
        {/* <Button variant="text" value="sjModule" style={{ fontSize:"12px", color: "#fff",marginTop:'25px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          Submit Journals Module
        </Button> */}
        <Button variant="text" value="vaModule" style={{ fontSize:"12px", color: "#fff",marginTop:'25px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          View Assessment Module
        </Button>
        <Button variant="text" value="cmModule" style={{ fontSize:"12px", color: "#fff",marginTop:'25px', textAlign:'left' }} onClick={()=>{childToParent(event.target.value)}}>
          Course Material Module
        </Button>
      </Drawer>
    </Box>
  );
};

export default SideNav;
