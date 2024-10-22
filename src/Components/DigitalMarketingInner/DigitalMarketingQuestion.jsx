
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const textContent = `
At GloumTech, our Digital Marketing Services encompass a comprehensive approach to maximising your online presence, audience engagement, and business growth. From strategic planning to execution, we employ tailored strategies that leverage the power of digital channels to enhance brand visibility, drive traffic, and achieve measurable results.`;

const whatIsBackendApi = `
Digital Marketing refers to the use of various online channels and platforms to promote brands, products, or services. It involves a range of techniques such as Search Engine Optimization (SEO), Social Media Marketing (SMM), Content Marketing, Pay-Per-Click (PPC) advertising, Email Marketing, and more. The goal is to connect with the target audience, build brand awareness, and ultimately drive conversions and sales.

`;

const ourApproach = `
At GloumTech, our Digital Marketing Services leverage strategic precision and data-driven optimization. We meticulously analyze your goals and audience to tailor multi-channel strategies covering Search Engine Optimization (SEO), Social Media Marketing (SMM), Content Marketing, Pay-Per-Click (PPC) advertising, Email Marketing, and more. Our focus on data-backed decision-making ensures your brand achieves heightened visibility, engagement, and conversions

`;

const DigitalMarketingQuestion = () => {
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
            What is Digital Marketing?
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
         GloumTech' Approach to Digital Marketing Services
          </Typography>
          <Typography variant="body1" gutterBottom>
            {ourApproach}
          </Typography>
        </Grid>

        {/* Right Column: Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://parkhya.com/public/images/experience_img/Digital%20Marketing.png" // Replace with actual path
            alt="Backend APi Question"
            sx={{ width: '100%', }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DigitalMarketingQuestion;
