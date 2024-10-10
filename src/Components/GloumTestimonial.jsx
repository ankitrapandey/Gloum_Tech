
import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography, Avatar, Slide, Fade } from '@mui/material';

const testimonials = [
  {
    name: "Raymond N.",
    feedback: "The freelancer was great, he listened to all our problems and helped us find a solution that works best for everyone. I would work with him again!",
    img: "path_to_img1.jpg", // replace with actual image path
  },
  {
    name: "John D.",
    feedback: "Amazing work! The project was completed on time and exceeded expectations.",
    img: "path_to_img2.jpg",
  },
  {
    name: "Sarah W.",
    feedback: "Highly professional and great communication. Delivered exactly what we needed.",
    img: "path_to_img3.jpg",
  },
  {
    name: "Alice L.",
    feedback: "Very skilled developer. The outcome was outstanding, and the process was smooth.",
    img: "path_to_img4.jpg",
  },
  {
    name: "Michael P.",
    feedback: "Fantastic experience! The project went beyond our expectations in every way.",
    img: "path_to_img5.jpg",
  },
];

const GloumTestimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [checked, setChecked] = useState(true);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const interval = setTimeout(() => {
      setChecked(false); // Fade out the current testimonial
      setTimeout(() => {
        setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
        setChecked(true); // Fade in the next testimonial
      }, 500); // Delay for the fade-out effect
    }, 3000); // Every 3 seconds

    return () => clearTimeout(interval);
  }, [currentTestimonial]);

  return (
    <Box p={4} bgcolor="#212121" color="white" borderRadius={2} width="full" mx="auto" marginTop={4}>
      <Grid container spacing={3} alignItems="center">
        {/* Left side: static text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ position: 'relative', fontWeight: 500 }}>
            testimonial
            <Box
              sx={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: '#ff9800',
              }}
            />
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 2 }}>
            View the opinions of our client regarding us and our work.
          </Typography>
        </Grid>

        {/* Right side: dynamic testimonial */}
        <Grid item xs={12} md={6}>
          <Slide direction="left" in={checked} timeout={500} mountOnEnter unmountOnExit>
            <Box
              ref={testimonialRef}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{
                height: '300px', // Set a fixed height to prevent movement
                transition: 'opacity 1s ease-in-out',
                overflow: 'hidden', // Prevent overflow
              }}
            >
              <Fade in={checked} timeout={500}>
                <Box>
                  <Avatar
                    alt={testimonials[currentTestimonial].name}
                    src={testimonials[currentTestimonial].img}
                    sx={{ width: 80, height: 80, mb: 2, mx: "auto" }} // Ensure the image is centered
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: '1.2rem', 
                      mt: 2, 
                      wordWrap: 'break-word', 
                      whiteSpace: 'normal', 
                      wordBreak: 'break-word',
                    }}
                  >
                    {testimonials[currentTestimonial].feedback}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                    {testimonials[currentTestimonial].name}
                  </Typography>
                </Box>
              </Fade>
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GloumTestimonial;
