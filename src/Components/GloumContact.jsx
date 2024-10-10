import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  marginTop:'5rem',
  background: 'linear-gradient(to right, #d3d3f3, #fefbd8)',
  padding: theme.spacing(8, 4),


}));

// Custom button style with hover effect
const ContactButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
  color: 'white',
  marginTop: theme.spacing(4),
  padding: theme.spacing(1, 4),
  borderRadius:'20px',
  '&:hover': {
    backgroundColor: 'black', // black background on hover
    color: '#fff',           // white text on hover
  },
}));

function GloumContact() {
  return (
    <BackgroundBox>
      <Typography variant="h3" component="h1" gutterBottom>
        Dynamic IT Solutions, Tailored To <br/>
        Transform Your Business
      </Typography>
      
      <Typography variant="subtitle1" component="p" gutterBottom>
        Your vision, our expertise
      </Typography>
      {/* Adjusting the button's alignment and position */}
      <Box >
        <ContactButton>
          CONTACT
        </ContactButton>
      </Box>
    </BackgroundBox>
  );
}

export default GloumContact;

