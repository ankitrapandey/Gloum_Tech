
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const textContent = `
At GloumTech, we specialize in UI/UX Front-end Development, a pivotal aspect of creating intuitive and engaging digital experiences. This service involves the design and implementation of user interfaces that prioritize user experience, functionality, and visual appeal, ensuring that every interaction leaves a lasting impression.
`;

const whatIsUIUX = `
UI/UX Front-end Development is the process of designing and implementing the user interface and user experience elements of digital products. It focuses on creating visually appealing, intuitive, and functional interfaces that enhance user interaction, satisfaction, and overall usability. It involves translating design mockups into responsive, interactive web or mobile applications while ensuring a seamless user journey.
`;

const ourApproach = `
At GloumTech, our UI/UX Front-end Development approach revolves around user-centric design and rapid innovation. We conduct in-depth user research to tailor intuitive interfaces, swiftly prototyping and integrating cutting-edge technologies for seamless, responsive designs. Prioritizing accessibility and collaboration, our iterative process ensures interfaces that engage users and align with evolving project goals.
`;

const UxServices = () => {
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
            What is UI/UX Front-end Development?
          </Typography>
          <Typography variant="body1" gutterBottom>
            {whatIsUIUX}
          </Typography>

          {/* Our Approach to UI/UX Front-end Development */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 'bold', fontSize: '18px', mt: 4 }}
          >
            Our Approach to UI/UX Front-end Development
          </Typography>
          <Typography variant="body1" gutterBottom>
            {ourApproach}
          </Typography>
        </Grid>

        {/* Right Column: Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://parkhya.com/public/images/experience_img/UI%20UX.webp" // Replace with actual path
            alt="UI/UX Design Process"
            sx={{ width: '100%', }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UxServices;
