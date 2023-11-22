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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activePortal, setActivePortal] = React.useState("ADMPortal");

  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPortal = (portalName, route) => {
    setActivePortal(portalName);
    navigate(route);
  };

  useEffect(() => {
    if (location.pathname === "/crew-member-portal") {
      setActivePortal("CMPortal");
    } else if (location.pathname === "/admin-portal") {
      setActivePortal("ADMPortal");
    } else if (location.pathname === "/crew-chief-portal") {
      setActivePortal("CCPortal");
    }
  }, [location.pathname]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1100 }}>
      <AppBar position="static" style={{ background: "#fff"}}>
        <Toolbar
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/CDC-LogowTag-2021.png"
              alt="Coalfield Logo"
              style={{ width: "250px", marginLeft: 4 }}
            />
            <Button
              variant="h9"
              component="div"
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
              onClick={() => navigateToPortal("CCPortal", "/admin-portal")}
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
                backgroundColor:
                  activePortal === "CCPortal" ? "#003C5B" : "#fff",
                color: activePortal === "CCPortal" ? "#fff" : "#003C5B",
                "&:hover": { color: "#fff", backgroundColor: "#003C5B" },
              }}
              onClick={() => navigateToPortal("CCPortal", "/crew-chief-portal")}
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
                backgroundColor:
                  activePortal === "CMPortal" ? "#003C5B" : "#fff",
                color: activePortal === "CMPortal" ? "#fff" : "#003C5B",
                "&:hover": { color: "#fff", backgroundColor: "#003C5B" },
              }}
              onClick={() =>
                navigateToPortal("CCPortal", "/crew-member-portal")
              }
            >
              Crew Member Portal
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "50px",
            }}
          >
            <div
              onClick={handleMenu}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "10px",
                backgroundColor: "#f4f4f4",
                borderRadius: "50%",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e0e0e0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f4f4f4")
              }
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                style={{ padding: "0px" }}
              >
                <AccountCircle style={{ fontSize: "24px", color: "#003C5B" }} />
              </IconButton>
              <Typography
                variant="body1"
                component="span"
                style={{
                  marginLeft: "10px",
                  color: "#003C5B",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Brandon
              </Typography>
            </div>

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
              PaperProps={{
                style: {
                  marginTop: "40px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                style={{ fontSize: "15px", fontWeight: 500 }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ fontSize: "15px", fontWeight: 500 }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
