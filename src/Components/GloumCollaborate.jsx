
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const GloumCollaborate = () => {
  const navigate = useNavigate();

  // Handle button click
  const handleClick = () => {
    navigate('/know-more'); // Replace with your desired route
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#000',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for larger
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: { xs: '0 20px', md: '0 50px' }, // Adjust padding for smaller screens
        backgroundImage: 'url(https://infograins.com/static/media/section2-bg.054e2a2340e216bf3021.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Video Element */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          width: { xs: '150px', sm: '200px', md: '300px', lg: '400px' }, // Responsive video size
          height: { xs: '150px', sm: '200px', md: '300px', lg: '400px' },
          objectFit: 'cover',
          flexShrink: 0,
          marginBottom: '25px', // Fixed space below video
        }}
      >
        <source src="https://infograins.com/static/media/section2.81a15e7dc9c383141ad4.mp4" type="video/mp4" />
      </Box>

      {/* Text Content */}
      <Grid container spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
        <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'left' }, overflow: 'hidden' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '22px', sm: '28px', md: '36px', lg: '48px' }, // Responsive font size
              lineHeight: 1.2,
              marginBottom: '20px', // Adjust spacing
              whiteSpace: 'normal', // Allow text to wrap
              wordWrap: 'break-word', // Ensure long words wrap
            }}
            gutterBottom
          >
            Collaborate with Top <br /> Software Development Company
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: '20px',
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              color: 'rgba(255, 255, 255, 0.8)',
              whiteSpace: 'normal', // Allow text to wrap
              wordWrap: 'break-word', // Ensure long words wrap
            }}
          >
            Infograins has emerged as the leading Software Development Company where we specialize
            in delivering end-to-end tailored software solutions to meet the unique needs of our clients.
            We provide Custom Software development, Blockchain Development, Web 3 Development, Metaverse
            Development, Web Development, and many more.
          </Typography>
          
          {/* Button with Circular Icon */}
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: 'transparent',
              color: '#fff',
              borderRadius: '50px',
              padding: '10px 20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#000',
                transition: '0.3s ease',
              },
            }}
          >
            <Box
              sx={{
                width: '40px',
                height: '40px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowForwardIcon sx={{ color: '#000', fontSize: '20px' }} />
            </Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Know more</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GloumCollaborate;
