



import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const MobileAppSection = () => {
  return (
    <Box sx={{ backgroundColor: 'wheat', padding: { xs: '2rem', sm: '4rem 2rem', } }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{
          flexDirection: { xs: 'column', sm: 'column', md: 'row' }, 
        }}
      >
        {/* Image section (at top for mobile view) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            mb: { xs: 4, sm: 4, md: 0 }, 
            order: { xs: 1, md: 2 }, 
          }}
        >
          <Box
            component="img"
            
            src="https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/66057771fb8509033aa51e30_Mobile%20app%20development-p-500.webp" // Replace with your image source
            alt="Mobile app example"
            sx={{
              maxWidth: { xs: '80%', sm: '60%', md: '100%' }, // Responsive image size
              height: 'auto',
           
            }}
          />
        </Grid>

        {/* Text and Button section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center text and button on small, left on large
            alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center on small screens, left on large
            textAlign: { xs: 'center', sm: 'center', md: 'left' }, // Center text on small, left on large
            px: { xs: 2, sm: 6, md: 10 }, // Responsive padding
            order: { xs: 2, md: 1 }, // Text second on small screens, first on large
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#000',
              fontFamily: 'Satoshi Black, sans-serif',
              fontSize: { xs: '32px', sm: '40px', md: '43px' }, // Responsive font size
              fontWeight: 900,
              lineHeight: { xs: '40px', sm: '50px', md: '60px' }, // Responsive line height
              marginBottom: '1rem',
              maxWidth: '850px',
            }}
          >
            Top Mobile App Development Company
          </Typography>
          <Typography
            sx={{
              marginBottom: '2rem',
              color: '#555',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '15px' }, // Responsive text size
            }}
          >
            Beyond code, we’re invested in the success of your business and the satisfaction of your customers.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              letterSpacing: '1px',
              borderRadius: '2px',
              padding: { xs: '10px 20px', sm: '12px 25px' }, // Responsive button padding
              fontFamily: 'Satoshi Bold, sans-serif',
              fontSize: { xs: '12px', sm: '14px' }, // Responsive button text
              fontWeight: 700,
              transition: 'all .3s',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileAppSection;
