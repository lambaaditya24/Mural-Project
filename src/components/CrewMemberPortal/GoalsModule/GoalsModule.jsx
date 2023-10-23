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
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./GoalsModule.css";
import Checkbox from "@mui/material/Checkbox";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

function createGoal(goalType, goalName, completionDate, actions) {
  return {
    goalType,
    goalName,
    completionDate,
    actions,
  };
}



const handleEdit = () =>{};

const handleDelete = () =>{};

function Row(props) {
  const { goal } = props;
  const [open, setOpen] = React.useState(false);
  

  return (
    <React.Fragment>
      <TableRow>
        <TableCell
          padding="checkbox"
          style={{ fontSize: "12px", border: "none" }}
        >
          <Checkbox size="small" onChange={props.handleCheckboxChange(goal)} />
        </TableCell>
        <TableCell
          style={{ fontSize: "12px", border: "none", color: "#003C5B" }}
        >
          {goal.goalType}
        </TableCell>
        <TableCell
          style={{ fontSize: "12px", border: "none", color: "#003C5B" }}
        >
          {goal.goalName}
        </TableCell>
        <TableCell
          style={{ fontSize: "12px", border: "none", color: "#003C5B" }}
        >
          {goal.completionDate}
        </TableCell>

        <TableCell />


        <TableCell>
          <Tooltip title="Edit">
            <IconButton
              style={{ marginRight: "35px", marginBottom: "5px", alignItems: "center" }}
              onClick={() => handleEdit()}
            >
              <BorderColorIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={() => handleDelete()}
              style={{ marginBottom: "5px", alignItems: "center" }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </TableCell>



        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
              }}
            >
              {/* <Typography variant="h6" gutterBottom component="div">
                Actions
              </Typography> */}
              <Table
                size="small"
                aria-label="actions"
                style={{ width: "90%", margin: "auto", textAlign: "center" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      Action Item
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      Action Item Completion Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {goal.actions.map((action) => (
                    <TableRow key={action.name}>
                      <TableCell
                        style={{
                          fontSize: "10px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {action.name}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "10px",
                          border: "none",
                          color: "#003C5B",
                          textAlign: "center",
                        }}
                      >
                        {action.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



const GoalsModule = () => {

  const [goals,setGoals] = React.useState([
    createGoal("Milestone", "Buy a Car", "01-June-2023", [
      { name: "Save", date: "01-June-2023" },
      { name: "Research Cars", date: "18-June-2023" },
    ]),
    createGoal("Financial Literacy", "Invest in Stocks", "01-June-2023", []),
  ]);
  
  const [completedGoals,setCompletedGoals] = React.useState([
    createGoal("Gaming", "Complete Assassin Creed Mirage!", "27-September-2023"),
    createGoal("Trading", "Make 5k dollars a month", "30-October-2023"),
  ]);

  const handleCheckboxChange = (goalname) => (event) => {
    if(event.target.checked){
      const matchedGoal = goals.find(goal => goal.goalName === goalname.goalName);

      if (matchedGoal) {
        // Set the new goals without the matched goal
        setGoals(prevGoals => prevGoals.filter(goal => goal.goalName !== goalname.goalName));
        
        // Add the matched goal to the completedGoals
        setCompletedGoals(prevCompletedGoals => [...prevCompletedGoals, matchedGoal]);
    }
    };
  };
  
  const handleAddNewGoal = () => {
    console.log("Adding new goal!");
    
  };

  return (
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
            <CheckBoxIcon />
            <Typography variant="subtitle1">Goals & Action Module</Typography>
            <Box flexGrow={1}></Box>
            <Button
              size="small"
              style={{
                color: "#003c5b",
                backgroundColor: "#fff",
                padding: 6,
                borderColor: "#fff",
              }}
              onClick={handleAddNewGoal}
            >
              Add Goal
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
            Ongoing Taks
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
                    Goal Type
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "10px", textDecoration: "underline" }}
                  >
                    Goal Name
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "10px", textDecoration: "underline" }}
                  >
                    Goal Completion Date
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
                {goals.map((goal) => (
                  <Row key={goal.goalName} goal={goal} handleCheckboxChange={handleCheckboxChange} />
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
            Completed Taks
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
                    Goal Type
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "10px",
                      textDecoration: "underline",
                      textAlign: "center",
                    }}
                  >
                    Goal Name
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "10px",
                      textDecoration: "underline",
                      textAlign: "center",
                    }}
                  >
                    Goal Completion Date
                  </TableCell>

                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {completedGoals.map((goal) => (
                  <TableRow key={goal.goalName}>
                    <TableCell />
                    <TableCell
                      style={{
                        fontSize: "12px",
                        border: "none",
                        color: "#003C5B",
                        textAlign: "center",
                      }}
                    >
                      {goal.goalType}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "12px",
                        border: "none",
                        color: "#003C5B",
                        textAlign: "center",
                      }}
                    >
                      {goal.goalName}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "12px",
                        border: "none",
                        color: "#003C5B",
                        textAlign: "center",
                      }}
                    >
                      {goal.completionDate}
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

export default GoalsModule;
