import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LayersIcon from '@mui/icons-material/Layers';
import BuildIcon from '@mui/icons-material/Build';
import WebIcon from '@mui/icons-material/Web';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SupportIcon from '@mui/icons-material/SupportAgent';

const iconMap = {
  ShoppingCartIcon: ShoppingCartIcon,
  LayersIcon: LayersIcon,
  BuildIcon: BuildIcon,
  CloudDownloadIcon: CloudDownloadIcon,
  WebIcon: WebIcon,
  SupportIcon: SupportIcon,
};

const webAppServices = [
  {
    title: "E-commerce Web Development",
    description: "Serve a wider audience with a top e-commerce web app. Cut overhead, boost sales, and deliver personalized shopping experiences.",
    icon: "ShoppingCartIcon",
    iconColor: "#FF6F61"
  },
  {
    title: "Full Stack Development",
    description: "Launch complex projects quickly with complete flexibility and ownership, without adding extra costs.",
    icon: "LayersIcon",
    iconColor: "#FFB74D"
  },
  {
    title: "Custom Web App Development",
    description: "Tailored solutions that automate operations, maximize efficiency, and adapt to the unique needs of your business.",
    icon: "BuildIcon",
    iconColor: "#8BC34A"
  },
  {
    title: "Progressive Web App Development",
    description: "Save customers from downloads and connect with your business faster, reducing development and maintenance costs.",
    icon: "CloudDownloadIcon",
    iconColor: "#03A9F4"
  },
  {
    title: "Web Portal Development",
    description: "Get self-service web portals for smooth communication between employees, customers, and partners.",
    icon: "WebIcon",
    iconColor: "#FF5722"
  },
  {
    title: "Web App Support & Maintenance",
    description: "Keep your existing websites running smoothly and provide your users with the best possible experience.",
    icon: "SupportIcon",
    iconColor: "#E91E63"
  }
];

const WebAppServices = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F7F7', p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Web Application Development Services
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        The website is the face of any business, an engine of its growth, and the platform where customers interact directly with the 
       <br />business. Partnering with a top web app development company makes your business web-ready. GloumTech has been creating <br />
        new-age web experiences, converting every user interaction into a business success.
      </Typography>
      <Grid container spacing={8} justifyContent="center">
        {webAppServices.map((service, index) => {
          const IconComponent = iconMap[service.icon]; // Map string to actual icon component
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'row', // Horizontal layout for the icon and text
                  alignItems: 'center',
                  p: 3,
                  height: '100%',
                  textAlign: 'left',
                  transition: 'transform 0.3s, background-color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)', // Zoom effect for the entire card on hover
                    background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: service.iconColor, // Background color for the icon
                    borderRadius: '50%', // Rounded icon background
                    width: 50, // Icon container width
                    height: 50, // Icon container height
                    mr: 2, // Margin between icon and text
                    transition: 'transform 0.3s', // Smooth zoom for icon
                    '&:hover': {
                      transform: 'scale(1.2)', // Zoom effect for icon on hover
                    },
                  }}
                >
                  <IconComponent sx={{ fontSize: 30, color: '#fff' }} /> {/* Reduced icon size */}
                </Box>
                <Box sx={{ flex: 1 }}> {/* Ensures text takes up available space */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {service.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WebAppServices;
