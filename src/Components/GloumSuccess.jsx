
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CountUp from 'react-countup';

const GloumSuccess = () => {
  const data = [
    { label: 'Years of Experience', value: 5 },
    { label: 'Skilled Workforce', value: 15 },
    { label: 'Countries Served', value: 20 },
    { label: 'Customer Retention Rate', value: 50 }
  ];

  return (
    <Grid container spacing={0} >
      {/* Left side with image */}
      <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
        <Box sx={{ width: '100%', height: '100%' }}>
          {/* Use the provided image URL */}
          <img
            src="https://parkhya.com/public/images/policy_img/1705497987.webp"
            alt="Success"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover' // Ensures the image covers the area
            }}
          />
        </Box>
      </Grid>

      {/* Right side with text content */}
      <Grid item xs={12}  md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: { xs: '20px', md: '50px' }, backgroundColor: '#ffffff' }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          OUR SUCCESS
        </Typography>
        <Typography variant="h2" fontWeight="bold" sx={{ color: '#333', mb: 2 }}>
          <CountUp end={100} duration={5} />+
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          projects delivered.
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
          Milestones Of Excellence
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          Our track record speaks.
        </Typography>

        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  p: 2,
                  background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 1
                }}
              >
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#333' }}>
                  <CountUp end={item.value} duration={3} />+
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GloumSuccess;
