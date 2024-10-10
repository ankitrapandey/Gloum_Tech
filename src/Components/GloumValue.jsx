

import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const videoLink = 'https://www.youtube.com/watch?v=vv4XpVNSL0Q';

const GloumValue = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#fff',
        p: 3,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {/* Left Section (Text Content) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '1px',
                color: '#333',
                mb: 1,
                display: 'inline-block',
                border: '1px solid black',
                padding: '4px 8px',
              }}
            >
              OUR VALUE
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 'bold', mt: 2 }}
            >
              Relationship Beyond Contracts
            </Typography>
            <Typography variant="body1" gutterBottom>
              A solution is only valuable when it truly helps the people it's
              meant for. In every service we offer, we go beyond what's required
              to create lasting relationships and connect our passion with your
              business goals.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section (Image + Video Button) */}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 400, boxShadow: 'none', position: 'relative' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/650c223b053505ea929f34a4_Home%20Passion%20Your%20Goals%20Img-p-500.webp" // Replace with your actual image URL
              alt="Team collaboration"
            />
            <Button
              href={videoLink}
              target="_blank"
              variant="contained"
              startIcon={<PlayCircleOutlineIcon />}
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%', // Full width
                backgroundColor: '#000', // Black background
                color: '#fff',
                textTransform: 'none',
                padding: '12px 16px',
                borderRadius: 0, // No border radius
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                },
              }}
            >
              Watch Video
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GloumValue;
