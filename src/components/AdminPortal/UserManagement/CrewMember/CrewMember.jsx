import React from "react";
import "./CrewMember.css";
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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import FormHelperText from '@mui/material/FormHelperText';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const CrewMemberManager = (props) => {
  const [name, setName] = React.useState("");
  const [startingDate, setStartingDate] = React.useState(dayjs('2022-07-17'));
  const [address, setAddress] = React.useState("");
  const [crewChief, setCrewChief] = React.useState("");
  const [projectCompDate, setProjectCompDate] = React.useState(dayjs('2022-07-25'));

  const [openDialog, setOpenDialog] = React.useState(false);
  const [editRow, setEditRow] = React.useState(null);
  const [rows, setRows] = React.useState([
    {
      name: "Shane",
      address: "2923 Park Avenue, West Virginia",
      startingDate: "01/06/2023",
      crewChief: "Brandon",
      pcd: "01/12/2023",
    },
    {
      name: "Gina",
      address: "919E Lemon St.",
      startingDate: "01/06/2023",
      crewChief: "Brandon",
      pcd: "01/12/2023",
    },
    {
      name: "Devon",
      address: "1215 E Vista Del Cero",
      startingDate: "01/06/2023",
      crewChief: "Devon",
      pcd: "01/12/2023",
    },
    {
      name: "Evon",
      address: "2923 Park Avenue",
      startingDate: "01/06/2023",
      crewChief: "Amanda",
      pcd: "01/12/2023",
    },
  ]);

  const handleAddNew = () => {
    if (editRow !== null) {
      const updatedRows = [...rows];
      const rowIndex = updatedRows.findIndex((row) => row == editRow);

      if (rowIndex !== -1) {
        updatedRows[rowIndex].name = name;
        updatedRows[rowIndex].address = address;
        updatedRows[rowIndex].startingDate = startingDate.format('MM/DD/YYYY');
        updatedRows[rowIndex].crewChief = crewChief;
        updatedRows[rowIndex].pcd = projectCompDate.format('MM/DD/YYYY');

        setRows(updatedRows);
        setStartingDate(dayjs('2022-07-17'));
        setAddress("");
        setCrewChief("");
        setProjectCompDate(dayjs('2022-07-25'));
        setName("");

        console.log(rows, "rows after editing");
      }
    } else {
      const updatedRows = [...rows];
      updatedRows.push({
        name: name,
        address: address,
        startingDate: startingDate.format('MM/DD/YYYY'),
        crewChief: crewChief,
        pcd: projectCompDate.format('MM/DD/YYYY'),
      });
      setRows(updatedRows);
      console.log(rows, "rows after adding new");
    }
    setEditRow(null);
    handleCloseCrewMember();
  };

  const handleEdit = (row) => {
    console.log(row, "row to be editied");
    setOpenDialog(true);
    setEditRow(row);
    setName(row.name);
    setStartingDate(row.startingDate.format('MM/DD/YYYY'));
    setAddress(row.address);
    setProjectCompDate(row.projectCompDate.format('MM/DD/YYYY'));
    setCrewChief(row.crewChief);
  };

  const handleDelete = (row) => {
    console.log(row, "row to be deleted");
    const updatedRows = [...rows];
    const rowIndex = updatedRows.findIndex((item) => item == row);
    if (rowIndex !== -1) {
      updatedRows.splice(rowIndex, 1);
      setRows(updatedRows);
    }
  };

  const handleCloseCrewMember = () => {
    props.onCloseCrewMember();
    setOpenDialog(false);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSDChange = (event) => {
    setStartingDate(event.target.value);
  };

  const handlePCDChange = (event) => {
    setProjectCompDate(event.target.value);
  };

  const handleCMChange = (event) => {
    setCrewChief(event.target.value);
  };

  useEffect(() => {
    setOpenDialog(props.openCrewMember);
  }, [props.openCrewMember]);

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
                Address
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Starting Date
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Crew Chief Assigned
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Project Completion Date
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
                  {row.address}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  {row.startingDate}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  {row.crewChief}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  {row.pcd}
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
            onClose={handleCloseCrewMember}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
          >
            <DialogTitle id="alert-dialog-title" sx={{backgroundColor:"#003C5B", color:'#fff'}}>
              Add New Crew Member
            </DialogTitle>
            <DialogContent>
              <TextField
                id="outlined-helperText"
                label="Name"
                helperText="Enter Crew Member Name"
                style={{ marginTop: 20 }}
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                id="outlined-helperText"
                label="Address"
                helperText="Enter Address"
                style={{ marginLeft: 40, marginTop: 20, width: 270 }}
                value={address}
                onChange={handleAddressChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker", "DatePicker"]}
                  sx={{  mt: 4 }}
                >
                  <MobileDatePicker
                    label="Starting Date"
                    style={{ width: 170, marginTop: 32, marginRight: 25 }}
                    sx={{ width: 225, mr:3 }}
                    value={startingDate}
                    onChange={handleSDChange}
                  />
                  <MobileDatePicker
                    label="Project Completion Date"
                    style={{ width: 170, marginTop: 32, marginLeft: 25 }}
                    sx={{ width: 265 }}
                    value={projectCompDate}
                    onChange={handlePCDChange}
                    maxWidth="sm"
                  />
                </DemoContainer>
              </LocalizationProvider>
              <FormControl
                style={{ width: 230, marginTop: 32, marginRight: 25 }}
              >
                <InputLabel id="demo-simple-select-lable">
                  Crew Chief
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Assign Crew Chief"
                  value={crewChief}
                  onChange={handleCMChange}
                >
                  <MenuItem value="Amanda">Amanda</MenuItem>
                  <MenuItem value="Bob Lance">Bob Lance</MenuItem>
                  <MenuItem value="Mary Jane">Mary Jane</MenuItem>
                  <MenuItem value="Suzen Kiwtoski">Suzen Kiwtoski</MenuItem>
                  <MenuItem value="Daniel Ostrosky">Daniel Ostrosky</MenuItem>
                </Select>
                <FormHelperText>Assign Crew Chief</FormHelperText>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseCrewMember} style={{color:"#fff",backgroundColor:"#003C5B"}}>Cancel</Button>
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

export default CrewMemberManager;
