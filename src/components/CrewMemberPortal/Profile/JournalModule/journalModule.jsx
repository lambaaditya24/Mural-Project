import React, { useEffect } from "react";
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
  DialogTitle,
  TextField,
  TextareaAutosize,
  Tooltip,
} from "@mui/material";
// import { styled } from '@mui/system';
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close';

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
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
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
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);


const JournalModule = (props) => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openAugust, setOpenAugust] = React.useState(false);
  const [openAugustWeek1, setOpenAugustWeek1] = React.useState(false);
  const [questionsPage, setQuestionsPage] = React.useState(false);

  const handleClickAugustWeek1 = () => {
    setOpenAugustWeek1(!openAugustWeek1);
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

  const handleClick = () => {
    setOpenAugust(!openAugust);
  };

  const goToQuestions = () => {
    setQuestionsPage(true);
  };

  const goToJournal = () =>{
    setQuestionsPage(false)
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
                <Tooltip sx={{ml:112,mb:2}} title="Close">
                  <IconButton onClick={handleClose} >
                    <CloseIcon sx={{color:'#fff'}} />
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
              {/* <Divider /> */}

              <List
                sx={{ padding: 0 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                // sx={{fontSize:6}}
                // subheader={
                //   <ListSubheader component="div" id="nested-list-subheader">
                //     Select Journal Day
                //   </ListSubheader>
                // }
              >
                <ListItemButton>
                  <ListItemText primary="January" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Feburary" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="March" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="April" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="May" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="June" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="July" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary="August" />
                </ListItemButton>
                <Collapse in={openAugust} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={handleClickAugustWeek1}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: "14px",
                              textDecoration: "underline",
                            }}
                            variant="body1"
                          >
                            Week1
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <Collapse in={openAugustWeek1} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 8 }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{ fontSize: "12px" }}
                                variant="body1"
                              >
                                Day 1
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 8 }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{ fontSize: "12px" }}
                                variant="body1"
                              >
                                Day 2
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 8 }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{ fontSize: "12px" }}
                                variant="body1"
                              >
                                Day 3
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 8 }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{ fontSize: "12px" }}
                                variant="body1"
                              >
                                Day 4
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Collapse>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: "14px",
                              textDecoration: "underline",
                            }}
                            variant="body1"
                          >
                            Week2
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: "14px",
                              textDecoration: "underline",
                            }}
                            variant="body1"
                          >
                            Week3
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: "14px",
                              textDecoration: "underline",
                            }}
                            variant="body1"
                          >
                            Week4
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton>
                  <ListItemText primary="September" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="October" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="November" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="December" />
                </ListItemButton>
              </List>
            </Drawer>
            <Main open={open}>
              <DrawerHeader />
              <Typography
                variant="h4"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Month 1-Week 1 | Day 1-West Virginian Reading Professional
                Theme-Safety | 45 Minutes
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Mary Harris “Mother” Jones | 1837 – November 30, 1930
              </Typography>
              <img
                src="/Mother_Jones_1902-11-04.jpg"
                alt="mother-jones-image"
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "200px",
                  maxHeight: "260px",
                }}
              />

              <Typography paragraph>
                Mother Jones was a prominent Irish-American community and labor
                organizer who fiercely advocated for safer working conditions in
                Appalachia’s coal mines. Widely heralded as a raucous agitator,
                Jones’s unwavering support of worker safety led to profound
                changes in West Virginia’s coalfields and company towns. Jones
                was born Mary Harris in Ireland to Roman Catholic tenant farmers
                Richard and Ellen Harris. The Harris family was victimized by
                the great Irish Famine of the late 1840s, sending them, along
                with millions of other Irish emigrants, to North America in
                search of a new life. Arriving in Boston in 1850, the Harris
                family followed its patriarch throughout Massachusetts, and
                later Canada, as a railroad laborer. Harris and her family faced
                heavy discrimination due to their Irish immigrant and Catholic
                status—this would have an effect on Jones and influence her
                unforgiving public speaking style . Jones began working her
                influence on others as a teacher first in Michigan and then
                Chicago, describing her initial school as a “depressing place.”
                She abandoned the world of teaching to work as a dressmaker in
                Memphis, Tennessee, where her husband George, and four children
                would tragically die in an 1867 yellow fever epidemic. Upon
                losing her entire family, Jones packed up and returned to
                Chicago to open a new dressmaking shop. While sewing in the
                Windy City, Jones became aware of the stark contrast between the
                haves and the have-nots. “I would look out of the plate glass
                windows and see the poor, shivering wretches, jobless and
                hungry, walking alongside the frozen lake front,” she said. “The
                tropical contrast of their condition with that of the tropical
                comfort of the people for whom I sewed was painful to me. My
                employers seemed neither to notice nor to care.”
              </Typography>
              <Typography paragraph>
                Tragedy would continue to test Jones’s grit when her business
                and all of her belongings were destroyed in Chicago’s Great Fire
                of 1871. In her autobiography, Jones attributed the loss of her
                family and destruction of her belongings in the Chicago Fire as
                her life’s two turning points that led her to the labor
                movement. Following the fire, Jones joined with many others in
                rebuilding the city and their lives. It was here that she joined
                the Knights of Labor, where she led strikes and organized
                protests. After tumultuous and violent outcomes resulted in the
                demise of the Knights of Labor, Jones became affiliated with the
                United Mine Workers in West Virginia. Jones earned her endearing
                activist surname of Mother by claiming a birth year of 1830
                (seven years prior to her recorded date), dressing in lace and
                outdated black garments, and referring to the laborers she
                defended as “her boys.” Her organizational tactics were far
                ahead of her time—Jones Month 1-Week 1 | Day 1-West Virginian
                Reading Professional Theme-Safety | 45 Minutes Coalfield
                Development | Personal Development Journal 1 6 encouraged
                African Americans to join in her protests, inspired women and
                their daughters to block strikebreakers at mine entrances with
                brooms, and staged children with signs in parades and other
                public events. Jones’s abrasive personality and socialist
                political leanings contributed to her quick rise in the UMW’s
                activist ranks. She was so effective at rousing up thousands of
                men that she was sent to the decrepit company towns of West
                Virginia’s coalfields to sign miners with the union. Upon
                surveying the scene in West Virginia during December of 1900,
                Jones reported that “conditions there were worse than those in
                Czarist Russia.” In West Virginia’s infamous and bloody Paint
                Creek-Cabin Creek strike of 1912, violence broke out between
                striking miners and company militias directed by the Kanawha
                County mine operators. Jones, now 86 years old, arrived in July
                as tensions began to boil over, rallying workers and busting
                through armed guards to persuade other regional miners to join
                the strike. She covertly organized a secret march of 3,000 armed
                miners to Charleston to read a declaration of war to Governor
                William E. Glasscock on the capitol steps.
              </Typography>
              <Button
                autoFocus
                onClick={goToQuestions}
                style={{
                  marginRight: "30px",
                  marginLeft: "20px",
                  color: "#fff",
                  backgroundColor: "#003C5B",
                }}
              >
                Take Assessment
              </Button>
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
                  margin:0
                }}
              >
                <KeyboardBackspaceIcon />
                Back To Journal
              </Button>
          <Typography variant="h6" sx={{textDecoration:'underline',mt:2}}>
            Write down your thoughts to the following questions and discuss this
            West Virginian with your crew. React, respond, and share.{" "}
          </Typography>
          <div style={{marginTop:'20px'}}>
            <Typography variant="body2">
              What about Mother Jones inspired you?
            </Typography>
            <StyledTextarea  
              minRows={4}
              sx={{mt:1}}

            />

            {/* <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              fullWidth
              size="small"
              maxRows={10}
            /> */}
          </div>
          <div style={{marginTop:'30px'}}>
            <Typography variant="body2">
              Why do you think Mother Jones assumed the persona of an older
              grandmother? What effect do you think this had on her supporters
              and her enemies?
            </Typography>
            <StyledTextarea  
              minRows={4}
              sx={{mt:1}}

            />
          </div>
          <div style={{marginTop:'30px'}}>
            <Typography variant="body2">
              As the profile highlights, Mother Jones used organizing tactics
              that were ahead of her time. In what specific ways do you think
              her inclusion of African Americans, women and children increased
              her effectiveness?
            </Typography>
            <StyledTextarea  
              minRows={4}
              sx={{mt:1}}

            />
          </div>
          <DialogActions sx={{mt:4}}>
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
                  backgroundColor: "#003C5B"
                }}
              >
                Save
              </Button>
          </DialogActions>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default JournalModule;
