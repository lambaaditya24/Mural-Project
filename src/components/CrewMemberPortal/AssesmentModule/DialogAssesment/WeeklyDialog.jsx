import React, { useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Tooltip,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./WeeklyDialog.css";

const WeeklyDialog = (props) => {
  const [rows, setRows] = React.useState([
    {
      criteria: "Attendance",
      score: 20,
      notes:"Been punctual",
      description: null,
      subCategory: [
        {
          name: "Attendace Criteria",
          values: [
            {
              desc: "Present for set schedule OR used approved paid time off",
              checked: false,
            },
            {
              desc: "Arrived on time each day, at or before start time (unless approved otherwise)",
              checked: true,
            },
            {
              desc: "Present until end of scheduled day (unless approved otherwise)",
              checked: true,
            },
            {
              desc: "Returned from all authorized breaks & lunch on time",
              checked: true,
            },
          ],
        },
      ],
    },

    {
      criteria: "Attitude",
      notes:"Good Attitude",

      score: 20,
      description:
        "When present, completed all work tasks assigned and challenges faced with:",
      subCategory: [
        {
          name: "Grumption",
          values: [
            {
              desc: "No complaining or whining",
              checked: true,
            },
            {
              desc: "commitment to excellent work",
              checked: true,
            },
            {
              desc: "fully participating",
              checked: true,
            },
            {
              desc: "diving into the work",
              checked: true,
            },
            {
              desc: "focused",
              checked: false,
            },
            {
              desc: "committed",
              checked: true,
            },
            {
              desc: "belief in self, each other, and community",
              checked: true,
            },
          ],
        },
        {
          name: "Grit",
      notes:"N/A",
      score: 20,
          values: [
            {
              desc: "Doggedly pursued solutions to problems",
              checked: false,
            },
            {
              desc: "followed through",
              checked: true,
            },
            {
              desc: "reflective",
              checked: true,
            },
            {
              desc: "fully present",
              checked: true,
            },
            {
              desc: "aware of how you impact the work and those around you",
              checked: false,
            },
            {
              desc: "found joy in the work",
              checked: false,
            },
            {
              desc: "willing to learn and grow",
              checked: true,
            },
          ],
        },
      ],
    },
    {
      criteria: "Communication",
      notes:"Poor Communication, need to improve!!",
      score: 0,
      description: null,
      subCategory: [
        {
          name: "Communication Criteria",
          values: [
            {
              desc: "Communicated scheduling issues or needs to Crew Chief",
              checked: false,
            },
            {
              desc: "Communicated challenges, concerns, fears, stresses",
              checked: true,
            },
            {
              desc: "Check & responded to work email",
              checked: true,
            },
            {
              desc: "Milestone work or Development meetings communicated to/approved by Crew Chief at least 24 hours in advance",
              checked: true,
            },
            {
              desc: "Communicated effectively with team on the work site",
              checked: true,
            },
          ],
        },
      ],
    },
    {
      criteria: "Academic and Professional Development:",
      notes:"Good work",
      score: 20,
      description: null,
      subCategory: [
        {
          name: "Crew Members Only",
          values: [
            {
              desc: "Check in with Crew Chief about school at least once in this week about grades and assignments",
              checked: true,
            },
            {
              desc: "Attended Study Hall (unless approved otherwise)",
              checked: true,
            },
            {
              desc: "Maintained school attendance (unless approved otherwise)",
              checked: true,
            },
          ],
        },
        {
          name: "Trainees & Crew Members",
      score: 20,
          values: [
            {
              desc: "Actively participated in professional training sessions (unless approved otherwise)",
              checked: true,
            },
          ],
        },
      ],
    },
    {
      criteria: "Personal Development:",
      notes:"Good work in this area",
      score: 20,
      description: null,
      subCategory: [
        {
          name: "When present:",
          values: [
            {
              desc: "Actively participated in PD Journal (not applicable 3rd-5th week)",
              checked: true,
            },
            {
              desc: "Actively participated in Financial Literacy session (not applicable 3rd-5th week)",
              checked: false,
            },
          ],
        },
        {
          name: "Attendance & active participation:",
          values: [
            {
              desc: "Week 3 Activity (only applicable on 3rd week) (unless approved otherwise)",
              checked: true,
            },
          ],
        },
      ],
    },
  ]);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let dialogWidth;
  if (isSmallScreen) {
    dialogWidth = "85vw"; // or any other value suitable for small screens
  } else if (isMediumScreen) {
    dialogWidth = "90vw"; // or any other value suitable for medium screens
  } else {
    dialogWidth = "95vw"; // default value for larger screens
  }

  console.log(props);

  useEffect(() => {
    setOpen(props.openDialog);
  }, [props.openDialog]);

  const handleCloseAssesment = () => {
    setOpen(false);
    props.handleClose();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Dialog
        open={open}
        onClose={props.handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={dialogWidth}
        PaperProps={{
          // setting style for the internal Paper component
          style: {
            width: dialogWidth,
            height: "90vh",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            backgroundColor: "#003C5B",
            color: "#fff",
            height: "45px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Participation Criteria & Scoring
          <Tooltip sx={{ ml: 132, mb: 0 }} title="Close">
                  <IconButton onClick={handleCloseAssesment}>
                    <CloseIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </Tooltip>
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
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

          <div className="scorecard">
            {rows.map((section, idx) => (
              <Accordion key={idx}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "#fff" }}
                    />
                  }
                  aria-controls={`panel${idx}a-content`}
                  id={`panel${idx}a-header`}
                  sx={{ backgroundColor: "#003C5B", color: "#fff", mt: 2 }}
                >
                  <Typography>{section.criteria}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="section">
                    {section.description && <p>{section.description}</p>}
                    {section.subCategory.map((sub, subIdx) => (
                      <div key={subIdx} className="sub-category">
                        <h3>{sub.name}</h3>
                        <ul>
                          {sub.values.map((value, valueIdx) => (
                            <ul key={valueIdx}>
                              <input
                                type="checkbox"
                                checked={value.checked}
                                readOnly
                              />
                              {value.desc}
                            </ul>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="score-section">
                      <label>
                        {section.criteria} Score:
                        <input className="score-input" placeholder="0 or 20" value={section.score} readOnly />
                      </label>
                      <label>
                        Notes on {section.criteria}:
                        <textarea className="score-notes" value={section.notes} readOnly></textarea>
                      </label>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </DialogContent>

        <DialogActions style={{ justifyContent: "space-between" }}>
          <div>
            <label style={{ fontWeight: 700, marginLeft: "10px" }}>
              Total Score (Out of 100)
              <input className="score-input" readOnly value={props.editRow ? props.editRow.score : 'N/A'}/>
            </label>
          </div>
          <div>
            {/* <Button
              onClick={handleCloseAssesment}
              style={{ color: "#fff", backgroundColor: "#003C5B" }}
            >
              Cancel
            </Button> */}
            {/* <Button
              autoFocus
              onClick={handleCloseAssesment}
              style={{
                marginRight: "30px",
                marginLeft: "20px",
                color: "#fff",
                backgroundColor: "#003C5B",
              }}
            >
              Close
            </Button> */}
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default WeeklyDialog;
