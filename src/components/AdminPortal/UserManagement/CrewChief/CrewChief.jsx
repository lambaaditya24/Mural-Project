import React from "react";
import "./CrewChief.css";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const CrewChiefManager = (props) => {
  const [seName, setseName] = React.useState(null);
  const [seDoj, setseDoj] = React.useState(null);
  const [socialEnterprise, setsocialEnterprise] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [personName, setPersonName] = React.useState([]);
  const [editRow, setEditRow] = React.useState(null);
  const [rows, setRows] = React.useState([
    {
      name: "Brandon Dennison",
      doj: "01/06/2023",
      se: "CoalField Development",
      crewMembers: ["Shane", "Gina", "Devon"],
    },
    {
      name: "Devon",
      doj: "01/06/2023",
      se: "Education Corporation",
      crewMembers: ["Shane", "Gina", "Devon"],
    },
    {
      name: "Aditya",
      doj: "01/06/2023",
      se: "Furniture Corporation",
      crewMembers: ["Shane", "Gina", "Devon"],
    },
    {
      name: "Shane",
      doj: "01/06/2023",
      se: "Agriculture Corporation",
      crewMembers: ["Shane", "Gina", "Devon"],
    },
    {
      name: "Gina",
      doj: "01/06/2023",
      se: "Furniture Corporation",
      crewMembers: ["Shane", "Gina", "Devon"],
    },
  ]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
    setOpenDialog(props.openCrewChief);
  }, [props.openCrewChief]);

  const handleSeChange = (event) => {
    setsocialEnterprise(event.target.value);
  };

  const handleNameChange = (event) => {
    setseName(event.target.value);
  };

  const handleDojChange = (event) => {
    setseDoj(event.target.value);
  };

  const handleCloseCrewChief = () => {
    props.onCloseCrewChief();
    setOpenDialog(false);
  };

  const handleEdit = (row) => {
    console.log(row, "row to be editied");
    setOpenDialog(true);
    setEditRow(row);
    setseName(row.name);
    setseDoj(row.doj);
    setsocialEnterprise(row.se);
    setPersonName(row.crewMembers);
  };

  const handleDelete = (row) => {
    const updatedRows = [...rows];
    const rowIndex = updatedRows.findIndex((item)=> item==row);
    if(rowIndex!== -1){
      updatedRows.splice(rowIndex,1);
      setRows(updatedRows);
    }
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleAddNew = () => {
    if (editRow !== null) {
      const updatedRows = [...rows];
      const rowIndex = updatedRows.findIndex((row) => row == editRow);

      if (rowIndex !== -1) {
        updatedRows[rowIndex].name = seName;
        updatedRows[rowIndex].doj = seDoj;
        updatedRows[rowIndex].se = socialEnterprise;
        updatedRows[rowIndex].crewMembers = personName;
        setRows(updatedRows);
        setseName(null);
        setseDoj(null);
        setsocialEnterprise(null);
        setPersonName([]);
        console.log(rows,"rows after editing")
      }
    } else {
      const updatedRows = [...rows];
      updatedRows.push({
        name: seName,
        doj: seDoj,
        se: socialEnterprise,
        crewMembers: personName,
      });
      setRows(updatedRows);
      console.log(rows,"rows after adding new")
    }
    setEditRow(null);
    handleCloseCrewChief();
  };

  const names = [
    "Shane",
    "Gina",
    "Devon",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];


  return (
    <>
      <TableContainer
        component={Paper}
        style={{
          width: "1050px",
          minHeight: "400px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Date of Joining
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Social Enterprise Assignment
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Crew Member Assignment
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
                  style={{ fontSize: "12px" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  {row.doj}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  {row.se}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  <ul>
                    {row.crewMembers.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton
                      style={{ marginRight: "35px", marginBottom: "5px" }}
                      onClick={() => handleEdit(row)}
                    >
                      <BorderColorIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDelete(row)}
                      style={{ marginBottom: "5px" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <Dialog
            open={openDialog}
            onClose={handleCloseCrewChief}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
          >
            <DialogTitle id="alert-dialog-title" sx={{backgroundColor:"#003C5B", color:'#fff'}}>
              Add New Crew Chief
            </DialogTitle>
            <DialogContent>
              <TextField
                id="outlined-helperText"
                label="Name"
                helperText="Enter Crew Chief Name"
                style={{ marginTop: 20 }}
                value={seName}
                onChange={handleNameChange}
              />
              <TextField
                id="outlined-helperText"
                label="Date Of Joining"
                helperText="Enter Date of Joining"
                style={{ marginLeft: 40, marginTop: 20, width: 270 }}
                value={seDoj}
                onChange={handleDojChange}
              />
              <FormControl
                style={{ width: 230, marginTop: 32, marginRight: 25 }}
              >
                <InputLabel id="demo-simple-select-lable">
                  Social Enterprise
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Social Enterprise"
                  value={socialEnterprise}
                  onChange={handleSeChange}
                >
                  <MenuItem value="CoalField Development">
                    CoalFiled Development
                  </MenuItem>
                  <MenuItem value="T-shirt Corporation">
                    T-shirt Corporation
                  </MenuItem>
                  <MenuItem value="Agriculture Corporation">
                    Agriculture Corporation
                  </MenuItem>
                  <MenuItem value="Furniture Corporation">
                    Furniture Corporation
                  </MenuItem>
                  <MenuItem value="Art Corporation">Art Corporation</MenuItem>
                  <MenuItem value="Education Corporation">
                    Education Corporation
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, width: 270, mt: 4 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Crew Members
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Crew Member" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseCrewChief} style={{color:"#fff",backgroundColor:"#003C5B"}}>Cancel</Button>
              <Button autoFocus onClick={handleAddNew} style={{marginRight:"30px",marginLeft:"20px",color:"#fff",backgroundColor:"#003C5B"}}>
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </Table>
      </TableContainer>
    </>
  );
};

export default CrewChiefManager;
