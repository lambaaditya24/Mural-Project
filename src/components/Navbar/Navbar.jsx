import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { useEffect } from "react";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activePortal, setActivePortal] = React.useState("ADMPortal");

  const navigate = useNavigate();
  const navigateToCMPortal = () => {
    setActivePortal("CMPortal");
    navigate("/crew-member-portal");
  };

  const navigateToADMPortal = () => {
    setActivePortal("ADMPortal");
    navigate("/admin-portal");
  };

  const navigateToCCPortal = () => {
    setActivePortal("CCPortal");
    navigate("/crew-chief-portal");
  };

  // useEffect(() => {
  //   if (activePortal === "CMPortal") {
  //     setActivePortal("CMPortal");
  //   } else if (activePortal === "ADMPortal") {
  //     setActivePortal("ADMPortal");
  //   }else if (activePortal === "CCPortal") {
  //     setActivePortal("CCPortal");
  //   }
  // }, [activePortal]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
      <AppBar position="static" style={{ background: "#fff", zIndex: 1 }}>
        <Toolbar style={{ padding: 0 }}>
          <img
            src="/CDC-LogowTag-2021.png"
            alt="Coalfield Logo"
            style={{ width: "250px", marginLeft: 4 }}
          />
          <Button
            variant="h9"
            component="div"
            // style={{ color: "#003C5B" }}
            sx={{
              flexGrow: 0,
              height: 60,
              fontSize: "12px",
              backgroundColor:
                activePortal === "ADMPortal" ? "#003C5B" : "#fff",
              color: activePortal === "ADMPortal" ? "#fff" : "#003C5B",
              ml: 6,
              "&:hover": { color: "#fff", backgroundColor: "#003C5B" },
            }}
            onClick={navigateToADMPortal}
          >
            Admin Portal
          </Button>
          <Button
            variant="h9"
            component="div"
            sx={{
              flexGrow: 0,
              height: 60,
              fontSize: "12px",
              ml: 3,
              backgroundColor: activePortal === "CCPortal" ? "#003C5B" : "#fff",
              color: activePortal === "CCPortal" ? "#fff" : "#003C5B",
              "&:hover": { color: "#fff", backgroundColor: "#003C5B" },
            }}
            onClick={navigateToCCPortal}
          >
            Crew Chief Portal
          </Button>
          <Button
            variant="h9"
            component="div"
            sx={{
              flexGrow: 0,
              ml: 3,
              height: 60,
              fontSize: "12px",
              backgroundColor: activePortal === "CMPortal" ? "#003C5B" : "#fff",
              color: activePortal === "CMPortal" ? "#fff" : "#003C5B",
              "&:hover": { color: "#fff", backgroundColor: "#003C5B" },
            }}
            onClick={navigateToCMPortal}
          >
            Crew Member Portal
          </Button>
          <div style={{ marginLeft: "390px" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
              <Typography
                variant="h9"
                component="div"
                style={{ color: "#003C5B", fontSize: "16px" }}
              >
                Brandon
              </Typography>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
