import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

// Image sources
const images = [
  { src: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8e7844e205d1c356b_angular-tech.svg', label: 'Angular JS' },
  { src: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc0f2f680e3e3af7cb_react-tech.svg', label: 'React JS' },
  { src: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a7f2b21e00d8b54294eba0_dotnet-icon.svg', label: 'Microsoft.net' },
  { src: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a5a982eafd20cd8d091e_590px-Node.js_logo.svg-p-500.png', label: 'Node.JS' },
  { src: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a7f31fa52c81accc473585_Kentico-Emblem-700x394-p-500.png', label: 'Kentico' },
  { src: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a7f37140d2e7b895f3ef2a_free-umbraco-3629127-3030267.png', label: 'Umbraco' },
];

const WebSolution = () => (
  <Box textAlign="center" sx={{ padding: 4 }}>
    <Typography variant="h4" gutterBottom>
      Technologies That Help Us Create Stunning Web Solutions
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {images.map((item, index) => (
        <Grid item xs={12} sm={4} md={2} key={index}>
          <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" // Center content vertically
            sx={{ 
              width: 120,    // Fixed width
              height: 120,   // Fixed height
              p: 2,
              backgroundColor: '#f5f5f5', // Light gray background color
              borderRadius: 2,
              transition: 'transform 0.3s', // Smooth transition for scaling
              '&:hover': {
                transform: 'scale(0.9)', // Scale down on hover
              },
            }}
          >
            <Box
              component="img"
              src={item.src}
              alt={item.label}
              sx={{ 
                width: '80%', // Adjust width for a better fit
                height: '80%', // Adjust height for a better fit
                objectFit: 'contain' // Maintain aspect ratio
              }} 
            />
            <Typography variant="body1" sx={{ marginTop: 1, textAlign: 'center' }}>
              {item.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default WebSolution;
