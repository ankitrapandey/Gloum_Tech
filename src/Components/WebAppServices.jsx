

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import DevicesIcon from '@mui/icons-material/Devices';
import LanguageIcon from '@mui/icons-material/Language';
import BuildIcon from '@mui/icons-material/Build';

const appServices = [
  {
    icon: <AndroidIcon sx={{ fontSize: 30, color: '#3DDC84', backgroundColor: '#E0F2F1', borderRadius: '50%', p: 1, mr: 2 }} />,
    title: "E-commerce Web Development",
    description: "Serve a wider audience with a top e-commerce web app. Cut overhead, boost sales, and deliver personalized shopping experiences.",
  },
  {
    icon: <AppleIcon sx={{ fontSize: 30, color: '#000', backgroundColor: '#F0F0F0', borderRadius: '50%', p: 1, mr: 2 }} />,
    title: "Full Stack Development",
    description: "Launch complex projects quickly with complete flexibility and ownership, without adding extra costs.",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 30, color: '#61DAFB', backgroundColor: '#E3F2FD', borderRadius: '50%', p: 1, mr: 2 }} />,
    title: "Custom Web App Development",
    description: "Tailored solutions that automate operations, maximize efficiency, and adapt to the unique needs of your business.",
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 30, color: '#4CAF50', backgroundColor: '#E8F5E9', borderRadius: '50%', p: 1, mr: 2 }} />,
    title: "Progressive Web App Development",
    description: "Save customers from downloads and connect with your business faster, reducing development and maintenance costs.",
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 30, color: '#4CAF50', backgroundColor: '#E8F5E9', borderRadius: '50%', p: 1, mr: 2 }} />,
    title: "Web Portal Development",
    description: "Get self-service web portals for smooth communication between employees, customers, and partners.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 30, color: '#FF9800', backgroundColor: '#FFF3E0', borderRadius: '50%', p: 1, mr: 2 }} />,
    title: "Web App Support & Maintenance",
    description: "Keep your existing websites running smoothly and provide your users with the best possible experience.",
  },
];

const WebAppServices = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F7F7F7',
        p: { xs: 2, sm: 4 }, // Responsive padding
        backgroundImage: 'url(https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6322e52da962a70b7f34a8d1_web-app-services-bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Ensure the background covers the entire area
        minHeight:'100vh'
      }}
    >
      <Typography sx={{ fontSize: { xs: '28px', sm: '36px' }, color: '#000000' }} align="center" gutterBottom>
        Web Application Development Services
      </Typography>
      <Typography align="center" sx={{ mb: 4, fontSize: { xs: '12px', sm: '14px' }, color: '#000000' }} gutterBottom>
        The website is the face of any business, an engine of its growth, and the platform where customers interact directly <br />
        with the business. Partnering with a top web app development company makes your business web-ready.<br />
        GloumTech has been creating new-age web experiences, converting every user interaction into a business success.
      </Typography>
      <Grid container spacing={8} justifyContent="center">
        {appServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjusted grid item sizes */}
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 3 }, // Responsive padding
                textAlign: 'left',
                transition: 'transform 0.3s, background-color 0.3s',
                height: '100%', // Uniform height
                '&:hover': {
                  color: 'white',
                  background: '#e64b50',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {service.icon && service.icon} {/* Display the icon only if it exists */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '18px' } }}>
                  {service.title}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, fontSize: { xs: '12px', sm: '14px' } }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WebAppServices;
