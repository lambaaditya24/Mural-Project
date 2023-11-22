import {
  Alert,
  Divider,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import WeeklyDialog from "../DialogAssesment/WeeklyDialog";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloseIcon from '@mui/icons-material/Close';


const Weekly = () => {
  const [rows, setRows] = React.useState([
    { week: "October Week 4", score: 95 },
    { week: "October Week 3", score: 86 },
    { week: "October Week 2", score: 95 },
    { week: "October Week 1", score: 89 },
    { week: "September Week 4", score: 81 },
    { week: "September Week 3", score: 82 },
  ]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [editRow, setEditRow] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditRow(null);
  };
  const handleAssesment = (row) => {
    setEditRow(row);
    setOpenDialog(true);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          flexDirection: "row",
          gap: "10px",
          fontSize: 14,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        <span style={{ fontWeight: 700 }}>Employee Name :</span>
        Devon
        <span style={{ fontWeight: 700, marginLeft: 30 }}>
          Supervisor Completing the scorecard :
        </span>
        Brandon Dennison
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "left",
          flexDirection: "row",
          gap: "10px",
          fontSize: 14,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        <span style={{ fontWeight: 700 }}>
          Latest Weekly participation Score :
        </span>
        95
        <span style={{ fontWeight: 700, marginLeft: 30 }}>
          Past 6 Weeks Average Weekly Score:
        </span>
        88.5
      </div>
      <Divider sx={{ mt: 2 }} />

      {/* ----------Table ------------------------------------- */}

      <TableContainer
        component={Paper}
        style={{
          width: "100%",
          minHeight: "600px",
          position: "relative",
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
                Month - Week
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
                View Assesment
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
                  {row.week}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ fontSize: "12px" }}
                >
                  {row.score}
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        action={action}
      >
        <Alert
          onClose={handleClose}
          icon={<EmojiEventsIcon fontSize="inherit" />}
          severity="success"
          sx={{ width: "100%" }}
        >
          Congratulations!! You have the highest Weekly Score. Keep it up!
        </Alert>
      </Snackbar>
      <WeeklyDialog
        openDialog={openDialog}
        editRow={editRow}
        handleClose={handleCloseDialog}
      />
    </React.Fragment>
  );
};

export default Weekly;
