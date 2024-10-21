

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const BackendApiBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'flex-start', 
        justifyContent: 'center',
        px: { xs: 2, md: 10 }, 
        minHeight: '50vh', 
        gap: { xs: 4, md: 6 }, 
      }}
    >
      {/* Left Side (Text and Button) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' }, 
          justifyContent: 'flex-start', 
          mb: { xs: 4, md: 0 }, 
          mt: { xs: 0, md: 5 }, 
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#8a8a8a',
            fontSize: '12px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            mb: 1,
            textAlign: { xs: 'center', md: 'left' }, 
          }}
        >
          BACK-End API Development
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#000000',
            fontFamily:'sans-serif',
            fontSize: '28px',
            fontWeight:500,
            mb: 4,
            textAlign: { xs: 'center', md: 'left' }, 
          }}
        >
          Back-End API Development
          <br /> 
          Streamlining<br/>
          Connectivity For<br/>
          Seamless 
          <br />
          Operations
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowOutwardIcon/>}
          sx={{
            background: 'linear-gradient(93.83deg, #7a7da9 0%, #e6b791 100%)',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '30px',
            padding: '10px 30px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              opacity: 0.9,
              background: 'black',
            },
          }}
          href="#get-quote"
        >
          Get a Quote
        </Button>
      </Box>

      {/* Right Side (Image) */}
      <Box
        component="img"
        src="https://parkhya.com/public/images/banner_img/Rectangle%202763.webp"
        alt="Backend API Development"
        sx={{
          width: { xs: '100%', md: '50%' }, 
          maxWidth: '600px', 
          height: 'auto', 
          mt: { xs: 5, md: 2 }, 
        }}
      />
    </Box>
  );
};

export default BackendApiBanner;

