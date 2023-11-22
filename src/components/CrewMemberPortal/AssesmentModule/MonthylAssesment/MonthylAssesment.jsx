import {
  Divider,
  IconButton,
  Paper,
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
import MonthlyDialog from "../DialogAssesment/MonthlyDialog";

const Monthly = () => {
  const [rows, setRows] = React.useState([
    { week: "November", score: 59 },
    { week: "October", score: 52 },
    { week: "September", score: 53 },
    { week: "August", score: 62 },
    { week: "July", score: 49 },
    { week: "June", score: 53 },
  ]);

  const [openDialog, setOpenDialog] = React.useState(false);

  const [editRow, setEditRow] = React.useState(null);

  const handleAssesment = (row) => {
    console.log(row);
    setEditRow(row);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditRow(null);
  };

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
          Latest Monthly Professional Themes Measurement of Progress Score :
        </span>
        59
        <span style={{ fontWeight: 700, marginLeft: 30 }}>
          Past 6 Weeks Average Monthly Score:
        </span>
        55
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
                Month
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                Score (Out of 65)
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
      <MonthlyDialog
        openDialog={openDialog}
        editRow={editRow}
        handleClose={handleCloseDialog}
      />
    </React.Fragment>
  );
};

export default Monthly;
