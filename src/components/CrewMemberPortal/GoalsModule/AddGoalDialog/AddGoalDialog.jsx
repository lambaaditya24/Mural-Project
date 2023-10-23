import { CssBaseline, Dialog, DialogContent, DialogTitle } from "@mui/material";
import "./AddGoalDialog.css";
import dayjs from "dayjs";

import React from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const AddGoalDialog = () => {
  const [goalType,setGoalType] = React.useState(null);
  const [goalCompDate,setGoalCompDate] = React.useState(dayjs('2023-10-19'));
  const [goalName,setGoalName] = React.useState(null);

  const handelTypeChange = (e)=>{
    setGoalType(e.target.value);
  };

  const handleGoalName = (e)=>{
    setGoalName(e.target.value);
  };

  const handleChangeGoalCompDate = (e)=>{
    setGoalCompDate(e.target.value);
  };

  
  return (<React.Fragment>
    <CssBaseline />
    <Dialog
      open={openDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      maxWidth="sm"
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{ backgroundColor: "#003C5B", color: "#fff" }}
      >
        Add New Goal
      </DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-helperText"
          label="Goal Type"
          helperText="Enter Goal Type"
          style={{ marginTop: 20 }}
          value={goalType}
          onChange={handelTypeChange}
        />
        <TextField
          id="outlined-helperText"
          label="Goal Name"
          helperText="Enter Goal Name"
          style={{ marginLeft: 40, marginTop: 20, width: 270 }}
          value={goalName}
          onChange={handleGoalName}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker", "DatePicker"]}
            sx={{ mt: 4 }}
          >
            <MobileDatePicker
              label="Goal Completion Date"
              style={{ width: 170, marginTop: 32, marginRight: 25 }}
              sx={{ width: 225, mr: 3 }}
              value={goalCompDate}
              onChange={handleChangeGoalCompDate}
            />
          </DemoContainer>
        </LocalizationProvider>
      </DialogContent>

      <DialogActions></DialogActions>
    </Dialog>
  </React.Fragment>
)
  };

export default AddGoalDialog;
