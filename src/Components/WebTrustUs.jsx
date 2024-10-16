

import React from 'react';
import { Container, Grid, Typography, Paper, Box, Divider } from '@mui/material';
import { Verified, School, AccessTime, Handshake } from '@mui/icons-material';

const features = [
  {
    icon: <Verified />,
    title: 'Industry Recognition',
    description: 'Recognized as the best software development company, and top web developer for the automotive, financial, and e-commerce industry by Designrush, Clutch, MSME Government of India.',
  },
  {
    icon: <School />,
    title: 'Industry-Specific Knowledge',
    description: 'Bringing in-depth knowledge of diverse industries, their needs, challenges, and customers’ expectations to align with clients’ business goals.',
  },
  {
    icon: <AccessTime />,
    title: 'Timely Delivery',
    description: 'Successfully completed more than 1500 web app development projects on time without missing the milestones.',
  },
  {
    icon: <Handshake />,
    title: 'Partnership Beyond Contracts',
    description: 'Offer additional value beyond the contractual scope like user training or maintenance support to ensure the overall success of our clients.',
  },
];

const WebTrustUs = () => {
  return (
    <Box sx={{ backgroundColor: '#F8F8F8', padding: '40px 0' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#000' }}> {/* Heading color changed to black */}
          Reasons Why Our Clients Trust Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* First Column */}
          <Grid item xs={12} sm={5}>
            <Grid container spacing={4} direction="column">
              {features.slice(0, 2).map((feature, index) => (
                <Grid item key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      padding: '20px',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#FFB3B3', // Darker pink background color
                        borderRadius: '50%',
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '16px',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        style: { color: '#FF4D4D', fontSize: '40px' }, // Darker icon color
                      })}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ color: '#000' }}> {/* Title color changed to black */}
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ color: '#777' }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Vertical Divider */}
          <Grid item xs={false} sm={1}>
            <Divider orientation="vertical" sx={{ height: '100%', borderColor: '#FF6B6B' }} />
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} sm={5}>
            <Grid container spacing={4} direction="column">
              {features.slice(2).map((feature, index) => (
                <Grid item key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      padding: '20px',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#FFB3B3', // Darker pink background color
                        borderRadius: '50%',
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '16px',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        style: { color: '#FF4D4D', fontSize: '40px' }, // Darker icon color
                      })}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ color: '#000' }}> {/* Title color changed to black */}
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ color: '#777' }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebTrustUs;
