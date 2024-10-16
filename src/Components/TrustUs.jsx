import React from 'react';
import { Container, Grid, Typography, Paper, Box, Divider } from '@mui/material';
import { ThumbUp, VerifiedUser, Security, SupportAgent } from '@mui/icons-material';

const features = [
  {
    icon: <ThumbUp />,
    title: 'ISO-Certified Development Process',
    description:
      'Leverage our ISO-certified development processes, ensuring the highest standards of quality, security, and efficiency in every stage of mobile app development.',
  },
  {
    icon: <Security />,
    title: 'Enterprise-Grade Security Protocols',
    description:
      'Fortify your app with enterprise-grade security protocols and secure your application and users data with our robust encryption, authentication, and authorization mechanisms.',
  },
  {
    icon: <VerifiedUser />,
    title: 'Experienced and Certified Developers',
    description:
      'Entrust your project to a team of experienced and certified mobile app developers. Our experts bring a wealth of industry knowledge and certifications to ensure the success of your app.',
  },
  {
    icon: <SupportAgent />,
    title: '24/7 Global Support and Maintenance',
    description:
      'Get unparalleled support pre and post application deployment. Our dedicated support teams ensure that your app remains optimized, secure, and accessible at all times.',
  },
];

const TrustUs = () => {
  return (
    <Box sx={{ backgroundColor: '#F8F8F8', padding: '40px 0' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Reasons Our Clients Trust Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* First Column - ISO-Certified and Enterprise-Grade Security */}
          <Grid item xs={12} sm={5}>
            <Grid container spacing={4} direction="column">
              <Grid item>
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
                      backgroundColor: '#FFEBEB',
                      borderRadius: '50%',
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '16px',
                    }}
                  >
                    {React.cloneElement(features[0].icon, {
                      style: { color: '#FF6B6B', fontSize: '40px' },
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {features[0].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {features[0].description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item>
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
                      backgroundColor: '#FFEBEB',
                      borderRadius: '50%',
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '16px',
                    }}
                  >
                    {React.cloneElement(features[1].icon, {
                      style: { color: '#FF6B6B', fontSize: '40px' },
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {features[1].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {features[1].description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Vertical Divider */}
          <Grid item xs={false} sm={1}>
            <Divider orientation="vertical" sx={{ height: '100%', borderColor: '#FF6B6B' }} />
          </Grid>

          {/* Second Column - Certified Developers and 24/7 Support */}
          <Grid item xs={12} sm={5}>
            <Grid container spacing={4} direction="column">
              <Grid item>
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
                      backgroundColor: '#FFEBEB',
                      borderRadius: '50%',
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '16px',
                    }}
                  >
                    {React.cloneElement(features[2].icon, {
                      style: { color: '#FF6B6B', fontSize: '40px' },
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {features[2].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {features[2].description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item>
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
                      backgroundColor: '#FFEBEB',
                      borderRadius: '50%',
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '16px',
                    }}
                  >
                    {React.cloneElement(features[3].icon, {
                      style: { color: '#FF6B6B', fontSize: '40px' },
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {features[3].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {features[3].description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TrustUs;
