import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, TextField, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import JournalModule from "./JournalModule/journalModule";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './profile.css'; // Make sure to update the CSS as well

const ProfileModule = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  // Sample data for contacts and allergies
  const emergencyContacts = [
    { id: 1, name: "John Doe", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", phone: "098-765-4321" }
  ];

  const allergies = [
    { id: 1, allergy: "Peanuts" },
    { id: 2, allergy: "Bee Stings" }
  ];

  return (
    <React.Fragment>
      <Container>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "auto",
            mt: "100px",
            ml: "70px",
            width: "1150px",
            borderRadius: 5,
            padding: 4
          }}
        >
          

          <Box sx={{ backgroundColor: 'white', padding: 0, borderRadius: 2 }}>
            
            <h2 style={{color:"#003c5b"}}>Profile Details</h2>
            <Divider sx={{mb:3}}/>


            <Button onClick={handleOpen} variant="contained" color="primary" sx={{ marginBottom: 2, backgroundColor:'#003c5b' }}>Journal Module</Button>
          <JournalModule openJournal={openDialog} />

            <Box sx={{ marginBottom: 4 }}>
              <h3 style={{color:"#003c5b"}}>Emergency Contacts</h3>
              <List>
                {emergencyContacts.map(contact => (
                  <ListItem
                    key={contact.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={contact.name} secondary={contact.phone} />
                  </ListItem>
                ))}
              </List>
              <Button startIcon={<AddCircleOutlineIcon />} variant="outlined">
                Add Emergency Contact
              </Button>
            </Box>

            <Box sx={{ marginBottom: 4 }}>
              <h3 style={{color:"#003c5b"}}>Allergies</h3>
              <List>
                {allergies.map(allergy => (
                  <ListItem
                    key={allergy.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={allergy.allergy} />
                  </ListItem>
                ))}
              </List>
              <Button startIcon={<AddCircleOutlineIcon />} variant="outlined">
                Add Allergy
              </Button>
            </Box>

            <Box sx={{ marginBottom: 4 }}>
              <FormControlLabel
                control={<Checkbox name="mediaConsent" />}
                label="Media Consent Provided"
                sx={{
                  '& .MuiFormControlLabel-label': { fontWeight: 'bold' }
                }}
              />
              <TextField
                type="date"
                name="mediaConsentDate"
                disabled
                variant="outlined"
                sx={{ marginLeft: 2 }}
              />
            </Box>

          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ProfileModule;
