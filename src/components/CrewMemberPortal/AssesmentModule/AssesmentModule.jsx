import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import React from "react";
import Weekly from "./WeeklyAssesment/WeeklyAssesment";
import Monthly from "./MonthylAssesment/MonthylAssesment";
import BarChartIcon from "@mui/icons-material/BarChart";
import WeeklyVisualization from "./Visualization/WeeklyVisualization";
import MonthlyVisualization from "./Visualization/MonthlyVisualization";

const AssesmentModule = () => {
  const [module, setModule] = React.useState("weekly");
  const [visualization, setVisualization] = React.useState(true);
  const handleChange = (event, newValue) => {
    setModule(newValue);
  };

  const handleClickVisualization = () => {
    setVisualization(!visualization);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "550px",
            mt: "100px",
            ml: "80px",
            width: "1150px",
            borderRadius: 5,
          }}
        >
          <Tabs
            value={module}
            onChange={handleChange}
            aria-label="secondary tabs example"
            style={{
              backgroundColor: "#003C5B",
              color: "#fff",
            }}
            TabIndicatorProps={{ style: { backgroundColor: "#fff", height:"3px" } }}
          >
            <Tab
              value="weekly"
              label="Weekly Assesment"
              style={{ color: "#fff", fontWeight: "500", marginLeft:20 }}
            />
            <Tab
              value="monthly"
              label="Monthly Assesment"
              style={{ color: "#fff", fontWeight: "500", marginLeft: 30 }}
            />
            {visualization ? (
              <Button
                size="small"
                style={{
                  marginLeft: 470,
                  alignContent: "right",
                  height: 30,
                  marginBottom: 18,
                  color: "#003c5b",
                  backgroundColor: "#fff",
                  paddingRight: 20,
                  paddingLeft: 2,
                  borderColor: "#fff",
                  marginTop: 10,
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
                  height: 30,
                  marginBottom: 18,
                  color: "#003c5b",
                  backgroundColor: "#fff",
                  paddingRight: 20,
                  paddingLeft: 9,
                  borderColor: "#fff",
                  marginTop: 14,
                }}
                onClick={handleClickVisualization}
              >
                Close Visualization
              </Button>
            )}
          </Tabs>

          <Divider />
          {module === "weekly" && visualization && (
            <Weekly />
          )}
          {module === "monthly" && visualization && <Monthly />}
          {module === "weekly" && !visualization && <WeeklyVisualization />}
          {module === "monthly" && !visualization && <MonthlyVisualization />}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AssesmentModule;
