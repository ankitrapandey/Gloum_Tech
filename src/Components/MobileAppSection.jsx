import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
const MobileAppSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '4rem 2rem' }}> 
      <Grid container alignItems="center" spacing={4}>
        {/* Left section: Text and Button */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              fontSize: { xs: '2rem', md: '3rem' } 
            }}
          >
            Top Mobile App Development Company
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              marginBottom: '2rem', 
              color: '#555', 
              fontSize: { xs: '1rem', md: '1.2rem' } 
            }}
          >
            Beyond code, we’re invested in the success of your business and the satisfaction of your customers.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#000', 
              color: '#fff', 
              padding: '0.75rem 2rem', 
              borderRadius: '5px', 
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Contact Us
          </Button>
        </Grid>

        {/* Right section: Images of the mobile phones */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box
            component="img"
            src="https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/66057771fb8509033aa51e30_Mobile%20app%20development-p-500.webp" // Replace with the actual source of your first image
            alt="Mobile app example 1"
            
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileAppSection;
