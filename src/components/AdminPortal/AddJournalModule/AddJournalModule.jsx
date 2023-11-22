import React, { useContext } from "react";

import "./AddJournalModule.css";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
  TextareaAutosize,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { JournalContext } from "../../Utils/JournalContext";

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

const imagePreviewStyle = {
  maxWidth: "150px", // Limiting the width to 150px
  maxHeight: "150px", // Limiting the height to 150px
  objectFit: "cover", // This will cover the area without stretching the image
  borderRadius: "8px", // Optional: if you want rounded corners
  marginTop: "10px", // Optional: if you want some space above the image
};

const AddJournalModule = () => {
  const { addJournalEntry } = useContext(JournalContext);

  const [month, setMonth] = React.useState("");
  const [week, setWeek] = React.useState("");
  const [day, setDay] = React.useState("");
  const [heading, setHeading] = React.useState("");
  const [subHeading, setSubHeading] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");
  const [content, setContent] = React.useState("");
  const [biographical, setBiographical] = React.useState("");
  const [suggestedRead, setSuggestedRead] = React.useState("");
  const [questions, setQuestions] = React.useState([]);
  const [journalType, setJournalType] = React.useState("");

  const handleQuestionChange = (index, event) => {
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        return event.target.value;
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]); // Add a new empty question
  };

  const removeQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const newImageURL = URL.createObjectURL(file);
      setImageURL(newImageURL);
    } else {
      alert("Please select a PNG or JPEG image format.");
    }
  };

  const handleAddJournal = () => {
    console.log(month, week, day);
    const entryKey = `${month}-${week}-${day}`;

    const entryData = {
      journalType,
      heading,
      subHeading,
      imageURL,
      content,
      biographical,
      suggestedRead,
      questions,
    };

    addJournalEntry(entryKey, entryData);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{ minHeight: "80vh", mt: 12, maxWidth: "80vw", ml: 30, mb:20 }}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#003C5B",
          }}
        >
          <Toolbar style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1">Add Journal</Typography>
            <Box flexGrow={1}></Box>
          </Toolbar>
        </AppBar>


        <FormControl sx={{ m: 1, minWidth: 220, mt:3 }} size="small">
          <InputLabel id="demo-select-small-label">
            Select Type of Journal
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={journalType}
            label="Select Journal"
            onChange={(e) => setJournalType(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Reading"}>Reading</MenuItem>
            <MenuItem value={"Group"}>Group Activity</MenuItem>
          </Select>
        </FormControl>

            <div style={{ margin: "20px" }} id="select-date">
            <Typography variant="subtitle2" sx={{ color: "#003C5B" }}>
              1. Select a Week to see or edit assessments of Crew Members/Trainee
              in that week.
            </Typography>
            <Divider />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Month</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={month}
                label="Select Month"
                onChange={(e) => setMonth(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Jan"}>January</MenuItem>
                <MenuItem value={"Feb"}>Feburary</MenuItem>
                <MenuItem value={"Mar"}>March</MenuItem>
                <MenuItem value={"Apr"}>April</MenuItem>
                <MenuItem value={"May"}>May</MenuItem>
                <MenuItem value={"Jun"}>June</MenuItem>
                <MenuItem value={"Jul"}>July</MenuItem>
                <MenuItem value={"Aug"}>August</MenuItem>
                <MenuItem value={"Sep"}>September</MenuItem>
                <MenuItem value={"Oct"}>October</MenuItem>
                <MenuItem value={"Nov"}>November</MenuItem>
                <MenuItem value={"Dec"}>December</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Week</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={week}
                label="Select Week"
                onChange={(e) => setWeek(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"W1"}>Week 1</MenuItem>
                <MenuItem value={"W2"}>Week 2</MenuItem>
                <MenuItem value={"W3"}>Week 3</MenuItem>
                <MenuItem value={"W4"}>Week 4</MenuItem>
              </Select>
            </FormControl>
  
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Day</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={day}
                label="Select Day"
                onChange={(e) => setDay(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"D1"}>Day 1</MenuItem>
                <MenuItem value={"D2"}>Day 2</MenuItem>
                <MenuItem value={"D3"}>Day 3</MenuItem>
                <MenuItem value={"D4"}>Day 4</MenuItem>
              </Select>
            </FormControl>
          </div>
        
        <div style={{ margin: "20px" }} id="select-heading">
          <Typography variant="subtitle2" sx={{ color: "#003C5B" }}>
             Add Heading for the activity
          </Typography>
          <Divider />

          <StyledTextarea
            minRows={2}
            sx={{ mt: 1 }}
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>

        {journalType === 'Reading' && (

        <div style={{ margin: "20px" }} id="select-sub-heading">
          <Typography variant="subtitle2" sx={{ color: "#003C5B", mt:2 }}>
             Add sub-heading for the activity
          </Typography>
          <Divider />

          <StyledTextarea
            minRows={2}
            sx={{ mt: 1 }}
            value={subHeading}
            onChange={(e) => setSubHeading(e.target.value)}
          />
        </div>
        )}
          {journalType === 'Reading' && (

        <div style={{ margin: "20px" }} id="select-image">
          <Typography variant="subtitle2" sx={{ color: "#003C5B", mt:2 }}>
             Add image for the activity
          </Typography>
          <Divider />
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/png, image/jpeg"
          />
          {imageURL && (
            <img src={imageURL} alt="Activity" style={imagePreviewStyle} />
          )}
        </div>)}
        <div style={{ margin: "20px" }} id="select-content">
          <Typography variant="subtitle2" sx={{ color: "#003C5B", mt:2 }}>
             Add content for the activity
          </Typography>
          <Divider />

          <StyledTextarea
            minRows={30}
            sx={{ mt: 1 }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {journalType === 'Reading' && (

        <div style={{ margin: "20px" }} id="select-references">
          <Typography variant="subtitle2" sx={{ color: "#003C5B", mt:2 }}>
             Add references for the activity
          </Typography>
          <Divider />
          <Typography variant="subtitle2" sx={{ textDecoration: "bold", mt:2 }}>
            {"(a). Biographical"}
          </Typography>
          <StyledTextarea
            minRows={2}
            sx={{ mt: 1 }}
            value={biographical}
            onChange={(e) => setBiographical(e.target.value)}
          />

          <Typography variant="subtitle2" sx={{ textDecoration: "bold", mt:2 }}>
            {"(b). Suggested Readings"}
          </Typography>
          <StyledTextarea
            minRows={2}
            sx={{ mt: 1 }}
            value={suggestedRead}
            onChange={(e) => setSuggestedRead(e.target.value)}
          />
        </div>)}

        <div style={{ margin: "20px" }} id="select-questionaire">
          <Typography variant="subtitle2" sx={{ color: "#003C5B", mt:2 }}>
             Add questions for the activity
          </Typography>
          <Divider />

          {questions.map((question, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <TextField
                fullWidth
                label={`Question ${index + 1}`}
                value={question}
                onChange={(event) => handleQuestionChange(index, event)}
                variant="outlined"
                size="small"
                style={{ marginRight: "10px" }}
              />
              <IconButton onClick={() => removeQuestion(index)} color="error">
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          <Button startIcon={<AddCircleOutlineIcon />} onClick={addQuestion}>
            Add Question
          </Button>
        </div>

        <Button
          autoFocus
          onClick={handleAddJournal}
          style={{
            marginRight: "30px",
            marginLeft: "20px",
            marginBottom: "40px",
            color: "#fff",
            backgroundColor: "#003C5B",
          }}
        >
          Add Journal
        </Button>
      </Paper>
    </React.Fragment>
  );
};

export default AddJournalModule;
