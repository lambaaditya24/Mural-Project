import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const SocialEnterprisePage = () => {
  const [open, setOpen] = React.useState(false);
  const [seName, setseName] = React.useState("");
  const [seAddress, setseAddress] = React.useState("");
  const [rows, setRows] = React.useState([
    createData("CoalField Development", "2923 ParkAvenue, West Virginia"),
    createData("T-shirt Corporation", "2923 ParkAvenue, West Virginia"),
  ]);
  const [editRow, setEditRow] = React.useState(null);

  const handleEdit = (row) => {
    handleClickAddNew();
    setEditRow(row);
    setseAddress(row.address);
    setseName(row.name);
  };

  const handleDelete = (row) => {
    let updatedRows = [...rows];
    let rowIndex = updatedRows.findIndex((value) => value === row);
    if (rowIndex !== -1) {
      updatedRows.splice(rowIndex, 1);
      setRows(updatedRows);
    }
  };

  const handleClickAddNew = () => {
    setseName("");
    setseAddress("");
    setOpen(true);
  };

  const handleCloseAddNew = () => {
    setOpen(false);
  };

  const changeName = (event) => {
    setseName(event.target.value);
  };

  const changeAddress = (event) => {
    setseAddress(event.target.value);
  };

  const addNewSocialEnterprise = (event) => {
    event.preventDefault();
    if (editRow != null) {
      const updatedRows = [...rows];
      const rowIndex = updatedRows.findIndex((row) => row == editRow);

      if (rowIndex !== -1) {
        updatedRows[rowIndex].name = seName;
        updatedRows[rowIndex].address = seAddress;
      }
      setRows(updatedRows);
      setEditRow(null);
      setseAddress("");
      setseName("");
    } else {
      const newSocialEnterprise = createData(seName, seAddress);
      setRows([...rows, newSocialEnterprise]);
      setseAddress("");
      setseName("");
    }

    handleCloseAddNew();
  };

  function createData(name, address) {
    return { name, address };
  }

  return (
    <>
      <AppBar
        position="static"
        style={{
          width: "1025px",
          position: "relative",
          marginTop: 120,
          marginLeft: "20%",
          backgroundColor: "#003c5b",
          height: "50px",
          borderRadius: "3px 3px 0 0",
        }}
      >
        <Toolbar style={{ padding: "0" }}>
          <BusinessIcon
            style={{ paddingBottom: "10px", paddingRight: 5, paddingLeft: 10 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "18px", paddingBottom: "10px" }}
          >
            Social Enterprise
          </Typography>
          <Button
            variant="outlined"
            size="small"
            style={{
              marginRight: 55,
              marginBottom: 10,
              color: "#003c5b",
              backgroundColor: "#fff",
              paddingRight: 20,
              paddingLeft: 2,
            }}
            onClick={handleClickAddNew}
          >
            <AddIcon />
            Add New
          </Button>
        </Toolbar>
        <Dialog
          open={open}
          onClose={handleCloseAddNew}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Add New Social Enterprise"}
          </DialogTitle>
          <DialogContent>
            <TextField
              id="outlined-helperText"
              label="Name"
              helperText="Enter Social Enterprise Name"
              value={seName}
              onChange={changeName}
              style={{marginTop:10}}
            />
            <TextField
              id="outlined-helperText"
              label="Address"
              helperText="Enter Social Enterprise Address"
              style={{ marginLeft: 40,marginTop:10, width: 270 }}
              value={seAddress}
              onChange={changeAddress}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddNew}>Cancel</Button>
            <Button onClick={addNewSocialEnterprise} autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </AppBar>
      <TableContainer
        component={Paper}
        style={{
          width: "1025px",
          minHeight: "400px",
          marginTop: 85,
          position: "relative",
          margin: "auto",
          marginLeft: "20%",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontSize: "12px" }}>
                Name
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Address
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
                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton style={{ marginRight: "35px",marginBottom: "5px" }} onClick={() => handleEdit(row)}>
                      <BorderColorIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(row)} style={{ marginBottom: "5px" }}>
                      <DeleteIcon/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SocialEnterprisePage;
