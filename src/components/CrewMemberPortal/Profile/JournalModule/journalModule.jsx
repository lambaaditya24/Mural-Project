import React, { useContext, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Button,
  DialogActions,
  DialogContent,
  TextareaAutosize,
  Tooltip,
} from "@mui/material";
// import { styled } from '@mui/system';
import Collapse from "@mui/material/Collapse";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import { JournalContext } from "../../../Utils/JournalContext";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "45px",
  backgroundColor: "#003C5B",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 1000px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const months = [
  {
    name: "Jan",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "Feb",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "Mar",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "Apr",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "May",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "Jun",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "Jul",
    weeks: [
      { name: "W1", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W2", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W3", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W4", days: ["D1", "Day 2", "D3", "D4"] },
    ],
  },
  {
    name: "Aug",
    weeks: [
      { name: "W1", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W2", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W3", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W4", days: ["D1", "Day 2", "D3", "D4"] },
    ],
  },
  {
    name: "Sep",
    weeks: [
      { name: "W1", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W2", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W3", days: ["D1", "Day 2", "D3", "D4"] },
      { name: "W4", days: ["D1", "Day 2", "D3", "D4"] },
    ],
  },
  {
    name: "Oct",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "Nov",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
  {
    name: "Dec",
    weeks: [
      { name: "W1", days: ["D1", "D2", "D3", "D4"] },
      { name: "W2", days: ["D1", "D2", "D3", "D4"] },
      { name: "W3", days: ["D1", "D2", "D3", "D4"] },
      { name: "W4", days: ["D1", "D2", "D3", "D4"] },
    ],
  },
];

const JournalModule = (props) => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [questionsPage, setQuestionsPage] = React.useState(false);

  const { journalEntries } = useContext(JournalContext);
  const [selectedEntry, setSelectedEntry] = React.useState(null);

  const selectDay = (month, week, day) => {
    const entryKey = `${month}-${week}-${day}`;
    const entry = journalEntries[entryKey];

    if (entry) {
      setSelectedEntry(entry);
    } else {
      setSelectedEntry(null);
      alert("No journal entry found for this date.");
    }
  };

  console.log(journalEntries, "Journal Entries");

  const [openMonths, setOpenMonths] = React.useState(
    months.reduce((acc, month) => {
      acc[month.name] = false;
      month.weeks.forEach((week) => {
        acc[week.name] = false;
      });
      return acc;
    }, {})
  );

  const handleItemClick = (item) => {
    setOpenMonths((prevOpen) => ({
      ...prevOpen,
      [item]: !prevOpen[item],
    }));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    setOpenDialog(props.openJournal);
  }, [props.openJournal]);

  // const handleClick = () => {
  //   setOpenAugust(!openAugust);
  // };

  const goToQuestions = () => {
    setQuestionsPage(true);
  };

  const goToJournal = () => {
    setQuestionsPage(false);
  };

  return (
    <Dialog
      open={openDialog}
      //   TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth={true}
      maxWidth="lg"
    >
      {!questionsPage ? (
        <DialogContent
          sx={{ padding: 0, minHeight: "85vh", textAlign: "center" }}
        >
          <Box sx={{ display: "flex", position: "relative" }}>
            <CssBaseline />
            <AppBar open={open}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, mb: 2, ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ mb: 2 }}>
                  Journal Module
                </Typography>
                <Tooltip sx={{ ml: 110  , mb: 2 }} title="Close">
                  <IconButton onClick={handleClose}>
                    <CloseIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </Tooltip>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                minHeight: "85vh",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  position: "relative",
                  backgroundColor: "#003C5B",
                  color: "#fff",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>

              <List>
                {months.map((month) => (
                  <React.Fragment key={month.name}>
                    <ListItemButton onClick={() => handleItemClick(month.name)}>
                      <ListItemText primary={month.name} />
                    </ListItemButton>
                    <Collapse
                      in={openMonths[month.name]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {month.weeks.map((week) => (
                          <React.Fragment key={week.name}>
                            <ListItemButton
                              sx={{ pl: 4 }}
                              onClick={() => handleItemClick(week.name)}
                            >
                              <ListItemText primary={week.name} />
                            </ListItemButton>
                            <Collapse
                              in={openMonths[week.name]}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {week.days.map((day) => (
                                  <ListItemButton
                                    key={day}
                                    sx={{ pl: 8 }}
                                    onClick={() =>
                                      selectDay(month.name, week.name, day)
                                    }
                                  >
                                    <ListItemText primary={day} />
                                  </ListItemButton>
                                ))}
                              </List>
                            </Collapse>
                          </React.Fragment>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                ))}
              </List>
            </Drawer>
            <Main open={open}>
              <DrawerHeader />
              {selectedEntry && (
                <React.Fragment>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ textAlign: "center" }}
                  >
                    {selectedEntry.heading}
                  </Typography>
                  {selectedEntry.journalType === "Reading" && (
                    <div>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ textAlign: "center" }}
                      >
                        {selectedEntry.subHeading}
                      </Typography>
                      <img
                        src={selectedEntry.imageURL}
                        alt="Activity"
                        style={{
                          display: "block",
                          margin: "0 auto",
                          width: "200px",
                          maxHeight: "260px",
                        }}
                      />
                    </div>
                  )}

                  
                      <Typography paragraph>{selectedEntry.content}</Typography>
                      {selectedEntry.journalType === "Reading" && (
                    <div>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          textAlign: "center",
                          textDecoration: "bold",
                          mt: "70px",
                        }}
                      >
                        References
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ textAlign: "left", textDecoration: "bold" }}
                      >
                        Biographical:
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{ textAlign: "left", mt: "20px" }}
                      >
                        {selectedEntry.biographical}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          textAlign: "left",
                          textDecoration: "bold",
                          mt: "50px",
                        }}
                      >
                        Suggested Read:
                      </Typography>
                      <Typography gutterBottom sx={{ textAlign: "left" }}>
                        {selectedEntry.suggestedRead}
                      </Typography>
                      <Button
                        autoFocus
                        onClick={goToQuestions}
                        style={{
                          marginRight: "30px",
                          marginLeft: "20px",
                          color: "#fff",
                          backgroundColor: "#003C5B",
                          marginTop: "40px",
                        }}
                      >
                        Reflections
                      </Button>
                    </div>
                  )}
                  {selectedEntry.journalType === "Group" && (
                    <div>
                      <Typography
                        variant="h6"
                        sx={{ textDecoration: "bold", mt: 2 }}
                      >
                        Write down your thoughts to the following questions and
                        discuss this West Virginian with your crew. React,
                        respond, and share.{" "}
                      </Typography>
                      {selectedEntry &&
                        selectedEntry.questions.map((question, index) => (
                          <div style={{ marginTop: "20px" }}>
                            <Typography variant="body2">
                              {`${index + 1}. ${question}`}
                            </Typography>
                            <StyledTextarea minRows={4} sx={{ mt: 1 }} />
                          </div>
                        ))}
                      <Button
                        autoFocus
                        onClick={goToJournal}
                        style={{
                          marginRight: "20px",
                          marginLeft: "20px",
                          color: "#fff",
                          backgroundColor: "#003C5B",
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        autoFocus
                        onClick={goToJournal}
                        style={{
                          marginRight: "30px",
                          marginLeft: "10px",
                          color: "#fff",
                          backgroundColor: "#003C5B",
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  )}
                </React.Fragment>
              )}
            </Main>
          </Box>
        </DialogContent>
      ) : (
        <DialogContent sx={{ minHeight: "80vh" }}>
          <Button
            autoFocus
            onClick={goToJournal}
            style={{
              marginRight: "30px",
              marginLeft: "20px",
              color: "#fff",
              backgroundColor: "#003C5B",
              margin: 0,
            }}
          >
            <KeyboardBackspaceIcon />
            Back To Journal
          </Button>
          <Typography variant="h6" sx={{ textDecoration: "bold", mt: 2 }}>
            Write down your thoughts to the following questions and discuss this
            West Virginian with your crew. React, respond, and share.{" "}
          </Typography>
          {selectedEntry &&
            selectedEntry.questions.map((question, index) => (
              <div style={{ marginTop: "20px" }}>
                <Typography variant="body2">
                  {`${index + 1}. ${question}`}
                </Typography>
                <StyledTextarea minRows={4} sx={{ mt: 1 }} />
              </div>
            ))}
          <DialogActions sx={{ mt: 4 }}>
            <Button
              autoFocus
              onClick={goToJournal}
              style={{
                marginRight: "20px",
                marginLeft: "20px",
                color: "#fff",
                backgroundColor: "#003C5B",
              }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              onClick={goToJournal}
              style={{
                marginRight: "30px",
                marginLeft: "10px",
                color: "#fff",
                backgroundColor: "#003C5B",
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default JournalModule;
