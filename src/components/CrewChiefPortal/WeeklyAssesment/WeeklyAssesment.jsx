import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import DialogAssesment from "./DialogAssesment/DialogAssesment";
import Box from "@mui/material/Box";
import BarChartIcon from "@mui/icons-material/BarChart";
import Visualization from "./Visualization/Visaluzation";

const WeeklyAssesment = () => {
  const [rows, setRows] = React.useState([
    { name: "Shane Loyd", score: 80 },
    { name: "Devon Heyes", score: 80 },
    { name: "Brandon Dennison", score: 80 },
    { name: "Aditya", score: 80 },
    { name: "Josiah", score: 80 },
    { name: "Amanda", score: 80 },
  ]);
  const [startDate, setStartDate] = React.useState(dayjs("2023-09-04"));
  const [endDate, setEndDate] = React.useState(dayjs("2023-09-08"));
  const [openDialog, setOpenDialog] = React.useState(false);
  const [editRow, setEditRow] = React.useState(null);
  const [showVisualization, setShowVisualization] = React.useState(false);

  const handleAssesment = (row) => {
    console.log(row);
    setEditRow(row);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditRow(null);
  };

  const handleClickVisualization = () => {
    setShowVisualization(!showVisualization);
  };

  // const handleChangeWeek = () => {};

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{ minHeight: "80vh", mt: 15, width: "1500px", ml: 40 }}
      >
        <AppBar
          sx={{
            position: "relative",
            height: "40px",
            backgroundColor: "#003C5B",
          }}
        >
          <Toolbar>
            <CalendarMonthIcon sx={{ mb: 3, mr: 1 }} />
            <Typography variant="subtitle2" sx={{ mb: 3 }}>
              Weekly Assesment
            </Typography>
            <Box flexGrow={1}></Box>
            {!showVisualization ? (<Button
              size="small"
              style={{
                marginLeft: 520,
                alignContent: "right",
                height: 28,
                marginBottom: 18,
                color: "#003c5b",
                backgroundColor: "#fff",
                paddingRight: 20,
                paddingLeft: 2,
                borderColor: "#fff"
              }}
              onClick={handleClickVisualization}
            > 
            <BarChartIcon />
              Click here to Visualize
              
            </Button>):(
              <Button
              size="small"
              style={{
                marginLeft: 520,
                alignContent: "right",
                height: 28,
                marginBottom: 18,
                color: "#003c5b",
                backgroundColor: "#fff",
                paddingRight: 20,
                paddingLeft: 2,
                borderColor: "#fff",
              }}
              onClick={handleClickVisualization}
            > 
              Close Visualization
              
            </Button>
            )}
            
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <Typography variant="subtitle2" sx={{ color: "#003C5B" }}>
            Select a Week to see or edit assessments of Crew Members/Trainee in
            that week.
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker", "DatePicker"]}
              sx={{ mt: 4 }}
            >
              <MobileDatePicker
                label="Start Date"
                // style={{ width: 170, marginTop: 32, marginRight: 25 }}
                sx={{ width: 150, mr: 3 }}
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                slotProps={{ textField: { size: "small" } }}
              />
              <MobileDatePicker
                label="End Date"
                // style={{ width: 170, marginTop: 32, marginLeft: 25 }}
                sx={{ width: 150 }}
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                slotProps={{ textField: { size: "small" } }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <Divider sx={{ mt: 4 }} />
        {!showVisualization && (
          <TableContainer
            component={Paper}
            style={{
              width: "100%",
              minHeight: "600px",
              position: "relative",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{
                      fontWeight: "light",
                      fontSize: "10px",
                      textDecoration: "underline",
                      marginLeft: "40px",
                    }}
                  >
                    Crew Member
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "light",
                      fontSize: "10px",
                      textDecoration: "underline",
                    }}
                  >
                    Score (Out of 100)
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "light",
                      fontSize: "10px",
                      textDecoration: "underline",
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      style={{ fontSize: "12px" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      style={{ fontSize: "12px" }}
                    >
                      {row.score}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Take Assesment">
                        <IconButton
                          //   style={{ marginRight: "35px", marginBottom: "5px" }}
                          onClick={() => handleAssesment(row)}
                        >
                          <BorderColorIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Showing th visualization with conditional rendering based on showVisualization */}
        {showVisualization && <Visualization />}

        <DialogAssesment
          openDialog={openDialog}
          editRow={editRow}
          handleClose={handleCloseDialog}
        />
      </Paper>
    </React.Fragment>
  );
};

export default WeeklyAssesment;
