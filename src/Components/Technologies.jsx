import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Image data instead of icons
const techData = [
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc1815cdd2c25cf56a_swift-tech.svg', label: 'Swift' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8c2e6f5a94eca081d_c-sharp-tech.svg', label: 'Objective C' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a124173a0aa245c769c6_download.png', label: 'Android' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d6d0964467c5d8b7a0086_xamarin-logo.png', label: 'Xamarin' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c96dd46835bef050de_flutter-tech.svg', label: 'Flutter' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc0f2f680e3e3af7cb_react-tech.svg', label: 'React Native' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8f62d79d1e92bdcc1_Azure.svg', label: 'Azure' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c84e944f22d8c83fcf_Aws.svg', label: 'AWS' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c90c1bc0352928400e_html-tech.svg', label: 'HTML 5' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a5e3ae86981b9a62d085_php%20logo.webp', label: 'PHP' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c9bfbd2511866597c5_css-tech.svg', label: 'CSS' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a1771341b0c904d91024_sql-server-icon-8.png', label: 'SQL Server' }
];

const Technologies = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F7F7', p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Technologies That Help Us Craft Seamless Mobile Experiences
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {techData.map((tech, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 2, 
                textAlign: 'center',
                width: '80%', // Adjusted width
                maxWidth: '120px', // Optional: Set a max width
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', // Stack image and text vertically
                  justifyContent: 'center', 
                  alignItems: 'center', // Center horizontally
                  mb: 1,
                  height: 70,  // Adjusted height to fit both image and text
                  width: '100%', // Make it take full width of Paper
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={tech.image} 
                  alt={tech.label} 
                  style={{ 
                    display: 'block', // Ensures image is centered
                    margin: 'auto', // Center the image horizontally
                    maxWidth: '60%', // Ensure the image does not exceed the box width
                    maxHeight: '60%', // Ensure the image does not exceed the box height
                    objectFit: 'contain' 
                  }}
                />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {tech.label}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technologies;
