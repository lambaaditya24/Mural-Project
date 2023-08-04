import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LearningModule = () => {
  const [rows, setRows] = React.useState([
    {
      categoryType: "Weekly",
      categoryName: "Weekly Participation score",
      subCategories: [
        {
          subCategoryName: "Attendance",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "0 means No and 1 means Yes",
          templateAttachment: "",
        },
        {
          subCategoryName: "Completed Tasks",
          minAssessmentValue: 0,
          maxAssessmentValue: 80,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Attendance at Community College",
          minAssessmentValue: 0,
          maxAssessmentValue: 100,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Additional Support needed",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
      ],
    },
    {
      categoryType: "Monthly",
      categoryName: "Monthly Work Assessment",
      subCategories: [
        {
          subCategoryName: "Safety",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Respect",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Promptness",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Initiative",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Focus",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Communication",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Attitude",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Follows instructions",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Work quality",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Planning",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Teamwork",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Problem solving",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
      ],
    },
    {
      categoryType: "Monthly",
      categoryName: "Personal Development Reflection",
      subCategories: [
        {
          subCategoryName: "Physical Health",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Mental Health",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Financial Health",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Perseverance",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "life-long-learning",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "optimism",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Volition",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "life management",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Integrity",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "regulation of emotion",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Long-range decision making",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
        {
          subCategoryName: "Citizenship",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
      ],
    },
    {
      categoryType: "Current",
      categoryName: "Greenhat Assessment",
      subCategories: [
        {
          subCategoryName: "Do they qualify for Green hat",
          minAssessmentValue: 0,
          maxAssessmentValue: 1,
          description: "",
          templateAttachment: "",
        },
      ],
    },
  ]);

  const [selectedCategoryType, setSelectedCategoryType] = React.useState("");

  const handleCategoryTypeChange = (event) => {
    setSelectedCategoryType(event.target.value);
  };

  return (
    <React.Fragment>
      <Container>
        <AppBar
          position="static"
          style={{
            width: "1100px",
            position: "relative",
            marginTop: 90,
            marginLeft: "12%",
            backgroundColor: "#003c5b",
            // height: "50px",
            borderRadius: "3px 3px 0 0",
          }}
        >
          <Toolbar style={{ padding: "0" }}>
            <MenuBookIcon
              style={{
                paddingBottom: "10px",
                paddingRight: 5,
                paddingLeft: 10,
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "18px", paddingBottom: "10px" }}
            >
              Learnings Category Module
            </Typography>
            <FormControl
              variant="outlined"
              size="small"
              style={{ marginRight: 50, minWidth: 270
            }}
            >
              <InputLabel id="category-type-label">
                Select Category Type
              </InputLabel>
              <Select
                labelId="category-type-label"
                id="category-type-select"
                value={selectedCategoryType}
                onChange={handleCategoryTypeChange}
                label="Select Category Type"
                displayEmpty
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                {Array.from(new Set(rows.map((row) => row.categoryType))).map(
                  (type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              size="small"
              style={{
                marginRight: 30,
                color: "#003c5b",
                backgroundColor: "#fff",
                paddingRight: 20,
                paddingLeft: 2,
              }}
            >
              <AddIcon />
              Add New
            </Button>
          </Toolbar>
        </AppBar>
        <TableContainer
          component={Paper}
          style={{
            width: "1100px",
            maxHeight: "450px",
            marginLeft: "12%",
          }}
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="learning-categories-table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Category Type
                </TableCell>
                <TableCell style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Category
                </TableCell>
                <TableCell style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Sub Category
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Min Assessment Value
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Max Assessment Value
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Description
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Template (Attachment)
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((category, index) => {
                if (
                  selectedCategoryType === "" ||
                  category.categoryType === selectedCategoryType
                ) {
                  return (
                    <React.Fragment key={index}>
                      <TableRow>
                        <TableCell rowSpan={category.subCategories.length + 1}>
                          {category.categoryType}
                        </TableCell>
                      </TableRow>
                      {category.subCategories.map((subCategory, subIndex) => (
                        <TableRow key={`${index}-${subIndex}`}>
                          <TableCell style={{ fontSize: "12px" }}>
                            {category.categoryName}
                          </TableCell>
                          <TableCell style={{ fontSize: "12px" }}>
                            {subCategory.subCategoryName}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "12px" }}
                          >
                            {subCategory.minAssessmentValue}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "12px" }}
                          >
                            {subCategory.maxAssessmentValue}
                          </TableCell>
                          <TableCell />
                          <TableCell
                            align="center"
                            style={{ fontSize: "12px" }}
                          >
                            {subCategory.templateAttachment}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "12px" }}
                          >
                            <div style={{ display: "flex" }}>
                              <Tooltip title="Edit">
                                <IconButton
                                  style={{
                                    marginRight: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <BorderColorIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete">
                                <IconButton style={{ marginBottom: "5px" }}>
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
};

export default LearningModule;
