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
  Slider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './ProfessionalAssesment.css';


const ProfessionalAssesment = (props) => {
  const [rows, setRows] = React.useState([
    {
      criteria: "SAFETY",
      description:
        "Takes measures to avoid physical harm to self & others; takes precautions to prevent injury, danger, loss; avoids safety violations & incidents; asks safety questions.",
    },
    {
      criteria: "RESPECT",
      description:
        "Recognition & acceptance of the rights & privileges of others; treats managers & peers with high professionalism & dignity.",
    },
    {
      criteria: "RESPECTING WORKPLACE DIVERSITY",
      description:
        "Understanding & acceptance of co-workers, visitors and others varied characteristics (race, ethnicity, religion, gender, age, political ideology, sexual orientation, physical abilities, socio-economic status, life experiences, cognitive approaches to problem solving).",
    },
    {
      criteria: "WORK QUALITY",
      description:
        "Professionalism & excellence in one work; an achieved result showing little imperfection; completes tasks with excellence; avoids consistent or major errors.",
    },
    {
      criteria: "ATTITUDE",
      description:
        "One position taken for a purpose or with regard to a fact or though; one emotion toward a fact or thought; brings energy & enthusiasm to the work; stays calm & clear-headed under stress; takes responsibility for own actions.",
    },
    {
      criteria: "FOLLOWS INSTRUCTION",
      description:
        "Closely, properly, & thoroughly follows orders; completes tasks as instructed; asks clarifying questions when unsure.",
    },
    {
      criteria: "PROMPTNESS",
      description:
        "Done or delivered at once without delay; alert; quick to act as the occasion demands; on-time; does not procrastinate; rarely absent or late without significant cause.",
    },
    {
      criteria: "PROBLEM SOLVING",
      description:
        "Process of finding solutions to troublesome issues; unpacks problems into manageable parts and works to address each part.",
    },
    {
      criteria: "INITIATIVE",
      description:
        "Recognize responsibility to make things happen; to be proactive rather than reactive; takes charge of ones own productivity; looks for opportunities to go beyond expectations.",
    },
    {
      criteria: "FOCUS",
      description:
        "Pay particular interest to; something is the center of activity or interest; concentrates on the task assigned; eliminates distractions that are within ones control; manages time & does not procrastinate; pays attention during meetings.",
    },
    {
      criteria: "TEAMWORK",
      description:
        "Willingness of a group of people to work together to achieve a common goal; combined effective & efficient action of a group of people; works well with others; looks for ways to help; looks for ways to support and accomplish as a group.",
    },
    {
      criteria: "COMMUNICATION",
      description:
        "Act of process of using words, sounds, signs, behaviors to express or exchange information; listens attentively; relays ideas/thoughts kindly; gives & receives feedback well; relays information in a timely, clear & respectful manner.",
    },
    {
      criteria: "PLANNING",
      description:
        "An intention or decision about what one is going to do; thinking about and organizing the steps & actions necessary to achieve the desired goal or outcome; thinks ahead; gathers the information & supplies necessary to complete the task.",
    },
  ]);

  const notes = [
    { name: "Supervisor Comments:" },
    { name: "Celebrations/Acknowledgements:" },
    {
      name: "Areas of Concern About Employee Actions, Attitude, Performance, Etc.",
    },
    { name: "Corrective Discipline:" },
    { name: "Plans for Improvement:" },
    { name: "Employee Comments:" },
    {
      name: "Any upcoming life events or heavy workload periods that you believe may be stress-inducing or may need support of some sort?",
    },
    { name: "Other comments/notes:" },
  ];

  const marks = [
    { value: 1, label: '1 (Needs Improvement)' },
    { value: 2, label: '2' },
    { value: 3, label: '3 (Progressing)' },
    { value: 4, label: '4' },
    { value: 5, label: '5 (Competent)' },
  ];
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          Professional Themes Measurement of Progress
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
            {props.editRow ? props.editRow.name : "Default"}
            <span style={{ fontWeight: 700, marginLeft: 30 }}>
              Supervisor Completing the scorecard :
            </span>
            Brandon Dennison
          </div>


          <div className="scorecard">

          {rows.map((section, idx) => (
            <Accordion key={idx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls={`panel${idx}a-content`}
                id={`panel${idx}a-header`}
                sx={{ backgroundColor: "#003C5B", color: "#fff", mt: 2 }}
              >
                <Typography>{section.criteria}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                {section.description && <Typography sx={{color:'#003C5B'}}>{section.description}</Typography>}
                <div className="sub-category">
                <Typography sx={{mt:3,fontSize: 14, fontWeight:'600', textDecoration:'underline'}}>{section.criteria} Score:</Typography>
                <Slider
                  value={value}
                  min={1}
                  step={1}
                  max={5}
                  marks={marks}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  sx={{width:'960px',ml:11, mt:2}}
                />
                </div>
                <Typography gutterBottom sx={{mt:3,fontSize: 14, fontWeight:'600'}}>{section.criteria} Comments:</Typography>
                <textarea className="score-notes"></textarea>
              </AccordionDetails>
            </Accordion>
          ))}
          </div>
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-between" }}>
          <div>
            <label style={{ fontWeight: 700, marginLeft: "10px" }}>
              Total Score (Out of 65)
              <input className="score-input" />
            </label>
          </div>
          <div>
            <Button
              onClick={handleCloseAssesment}
              style={{ color: "#fff", backgroundColor: "#003C5B" }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              onClick={handleCloseAssesment}
              style={{
                marginRight: "30px",
                marginLeft: "20px",
                color: "#fff",
                backgroundColor: "#003C5B",
              }}
            >
              Submit
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ProfessionalAssesment;
