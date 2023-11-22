import React, { useState } from "react";
import './AcademicModule.css';

import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Paper,
    Toolbar,
    Tooltip,
    Typography,
  } from "@mui/material";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const AcademicModule = () =>{
    const [currentCourse,setCurrentCourse] = React.useState([
        {name:'Software Security',college:'ASU',startDate:'20 August 2023'},
        {name:'Data Mining',college:'Marshall University',startDate:'20 August 2023'},
        {name:'Data Visualization',college:'ASU',startDate:'20 August2023'}
    ]);

    const [completedCourse,setCompletedCourse] = React.useState([
        {name:'Data Structures',college:'ASU',startDate:'20 August 2023',endDate:'10 August 2023',grade:'A-'},
        {name:'Software Design',college:'ASU',startDate:'20 August 2023',endDate:'10 August 2023',grade:'B+'}
    ]);

    return(
        <React.Fragment>
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{ minHeight: "80vh", mt: 12, maxWidth: "80vw", ml: 30 }}
        >
          <AppBar
            sx={{
              position: "relative",
              backgroundColor: "#003C5B",
            }}
          >
            <Toolbar style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">Academic Achievments</Typography>
              <Box flexGrow={1}></Box>
              <Button
                size="small"
                style={{
                  color: "#003c5b",
                  backgroundColor: "#fff",
                  padding: 6,
                  borderColor: "#fff",
                }}
                // onClick={handleAddNewAchievment}
              >
                Add Course
              </Button>
            </Toolbar>
          </AppBar>
  
          {/* /* Content of the table divided among Ongoing and Completed tasks */}
  
          <div className="ongoing">
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: 600,
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              Ongoing Course
            </Typography>
            <Divider />
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell
                      style={{ fontSize: "10px", textDecoration: "underline" }}
                    >
                      Course Name
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "10px", textDecoration: "underline" }}
                    >
                      College
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "10px", textDecoration: "underline" }}
                    >
                      Course Start Date
                    </TableCell>
                    <TableCell />
                    <TableCell
                      style={{ fontSize: "10px", textDecoration: "underline" }}
                    >
                      Actions
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                {currentCourse.map((course) => (
                <TableRow key={course.name}>
                      <TableCell />
                      <TableCell
                        style={{
                          fontSize: "12px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {course.college}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "12px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {course.name}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "12px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {course.startDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="completed">
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: 600,
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              Completed Courses
            </Typography>
            <Divider />
            <TableContainer component={Paper}>
              <Table aria-label="completed tasks table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell
                      style={{
                        fontSize: "10px",
                        textDecoration: "underline",
                        textAlign: "center",
                      }}
                    >
                      College
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "10px",
                        textDecoration: "underline",
                        textAlign: "center",
                      }}
                    >
                      Course
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "10px",
                        textDecoration: "underline",
                        textAlign: "center",
                      }}
                    >
                      Course Completion Date
                    </TableCell>
  
                    <TableCell />
                    <TableCell
                      style={{
                        fontSize: "10px",
                        textDecoration: "underline",
                        textAlign: "center",
                      }}
                    >
                      Grade
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {completedCourse.map((course) => (
                    <TableRow key={course.goalName}>
                      <TableCell />
                      <TableCell
                        style={{
                          fontSize: "12px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {course.college}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "12px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {course.name}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "12px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {course.endDate}
                      </TableCell>
                      <TableCell />

                      <TableCell
                        style={{
                          fontSize: "12px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                          textDecoration:'bold'
                        }}
                      >
                        {course.grade}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Paper>
      </React.Fragment>
    );
};


export default AcademicModule;