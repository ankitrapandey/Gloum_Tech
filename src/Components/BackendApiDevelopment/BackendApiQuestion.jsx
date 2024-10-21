
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const textContent = `
In today's interconnected digital landscape, the backbone of efficient software systems lies in robust Back-end API Development. At GloumTech, we understand the critical role that well-crafted APIs play in enabling seamless communication between various applications, databases, and systems.
`;

const whatIsBackendApi = `
Back-end API Development involves the creation and implementation of Application Programming Interfaces (APIs) specifically tailored to facilitate communication between the back-end of applications and other software components. These APIs serve as the intermediary allowing different systems to exchange data, perform actions, and execute functionalities without revealing their internal complexities.`;

const ourApproach = `
At GloumTech Solutions, our approach to Back-end API Development is centred on crafting tailored solutions that seamlessly connect diverse systems. We specialise in developing custom APIs aligned with unique business needs, prioritising scalability, security, and integration expertise. Our commitment extends beyond development, encompassing ongoing support, ensuring optimal performance, and alignment with evolving business goals.`;

const BackendApiQuestion = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', p: 5 }}>
      <Grid container spacing={3}>
        {/* Left Column: Text Section */}
        <Grid item xs={12} md={6}>

          {/* General Introduction Text */}
          <Typography variant="body1" gutterBottom>
            {textContent}
          </Typography>

          {/* What is UI/UX Front-end Development? */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 'bold', fontSize: '18px', mt: 4 }}
          >
            What is Back-end API Development?
          </Typography>
          <Typography variant="body1" gutterBottom>
            {whatIsBackendApi}
          </Typography>

          {/* Our Approach to UI/UX Front-end Development */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 'bold', fontSize: '18px', mt: 4 }}
          >
           Our Approach at GloumTech Solutions:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {ourApproach}
          </Typography>
        </Grid>

        {/* Right Column: Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://parkhya.com/public/images/experience_img/Back-end%20Api.webp" // Replace with actual path
            alt="Backend APi Question"
            sx={{ width: '100%', }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BackendApiQuestion;
