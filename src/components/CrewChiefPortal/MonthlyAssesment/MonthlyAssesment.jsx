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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import BarChartIcon from "@mui/icons-material/BarChart";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MonthylAssesment = () => {
  const [rows, setRows] = React.useState([
    { name: "Shane Loyd", perosnalScore: 80, professionalScore: 90 },
    { name: "Devon Heyes", perosnalScore: 80, professionalScore: 90 },
    { name: "Brandon Dennison", perosnalScore: 80, professionalScore: 90 },
    { name: "Aditya", perosnalScore: 80, professionalScore: 90 },
    { name: "Josiah", perosnalScore: 80, professionalScore: 90 },
    { name: "Amanda", perosnalScore: 80, professionalScore: 90 },
  ]);
  // const [startDate, setStartDate] = React.useState(dayjs("2023-09-04"));
  // const [endDate, setEndDate] = React.useState(dayjs("2023-09-08"));
  const [openDialog, setOpenDialog] = React.useState(false);
  const [editRow, setEditRow] = React.useState(null);
  const [showVisualization, setShowVisualization] = React.useState(false);
  const [assesment, setAssesment] = React.useState("personal");

  const handleAssesment = (row) => {
    console.log(row);
    setEditRow(row);
    setOpenDialog(true);
  };

  const onChangeAssesment = (event) => {
    setAssesment(event.target.value);
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
              Monthly Assesment
            </Typography>
            <Box flexGrow={1}></Box>
            {!showVisualization ? (
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
                <BarChartIcon />
                Click here to Visualize
              </Button>
            ) : (
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
            Select a Month to see or edit assessments of Crew Members/Trainee in
            that month.
          </Typography>
          <Box display="flex" alignItems="flex-start">
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={["DatePicker"]} sx={{ mt:2 }}>
              <DatePicker
                label={'Select month and year'}
                views={["month", "year"]}
                defaultValue={dayjs("2023-09")}
                slotProps={{ textField: { size: "small" } }}
              />
            </DemoContainer>
          </LocalizationProvider>

          <FormControl sx={{ ml: 4,mt:3, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">
              Select Assesment
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={assesment}
              label="Select Assesment"
              onChange={onChangeAssesment}
            >
              <MenuItem value={"personal"}>
                Perosnal and Academic Scholarship Rubric
              </MenuItem>
              <MenuItem value={"professional"}>
                Professional Themes Measurement of Progress
              </MenuItem>
            </Select>
          </FormControl>
          </Box>
        </div>

        <Divider sx={{ mt: 4 }} />
        {!showVisualization && (
          <TableContainer
            component={Paper}
            style={{
              width: "100%",
              minHeight: "600px",
              position: "relative",
              //   margin: "auto",
              //   marginLeft: "20%",
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
                      {assesment=='personal'?(row.perosnalScore):(row.professionalScore)}
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

        {/* <DialogAssesment
          openDialog={openDialog}
          editRow={rows}
          handleClose={handleCloseDialog}
        /> */}
      </Paper>
    </React.Fragment>
  );
};

export default MonthylAssesment;
