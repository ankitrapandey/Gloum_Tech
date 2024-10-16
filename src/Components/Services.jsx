

import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

// Array of service data
const servicesData = [
  { 
    title: 'E-Commerce Solutions', 
    description: 'Build your online presence with our bespoke Ecommerce Solutions that drive engagement and boost your bottom line.'
  },
  { 
    title: 'AI Solutions', 
    description: 'From machine learning algorithms to predictive modelling, we harness AI\'s transformative potential.'
  },
  { 
    title: 'IoT Solutions', 
    description: 'Connect, analyse, and innovate with our IoT Solutions.' 
  },
  { 
    title: 'Enterprise/Custom Software Development', 
    description: 'Delivering scalable, secure and precisely aligned software solutions for your enterprise, ensuring 360 degree excellence.' 
  },
  { 
    title: 'Cloud Solutions', 
    description: 'Leverage the power of cloud computing to achieve unmatched scalability, efficiency, and cost savings.' 
  },
  { 
    title: 'Cybersecurity Solutions', 
    description: 'Comprehensive security strategies to safeguard your data and infrastructure from emerging threats.' 
  },
  { 
    title: 'Mobile App Development', 
    description: 'Crafting intuitive, engaging, and high-performance mobile applications for both iOS and Android platforms.' 
  },
  { 
    title: 'Blockchain Solutions', 
    description: 'Unlock the potential of blockchain technology to secure, automate, and enhance your business processes.' 
  },
  { 
    title: 'Data Analytics Solutions', 
    description: 'Turn data into actionable insights with advanced analytics and data-driven strategies.' 
  },
  { 
    title: 'AR/VR Solutions', 
    description: 'Revolutionize customer experiences with cutting-edge Augmented and Virtual Reality solutions.' 
  },
  { 
    title: 'Digital Marketing Solutions', 
    description: 'Boost your brand visibility and drive conversions with our targeted digital marketing strategies.' 
  },
];

const Services = () => {
  return (
    <Box sx={{ padding: '2rem', minHeight: '500px' }}>
      <Grid container spacing={4}>
        {/* Dynamically render each service box */}
        {servicesData.map((service, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                backgroundColor: index % 2 === 0 ? '#f4f6f8' : '#000',
                color: index % 2 === 0 ? '#000' : '#fff',
                height: '370px',  // Adjusted height
                width: '600px',    // Adjusted width
                borderBottom: index % 2 === 0 ? 'none' : '2px solid darkgray',
                display: 'flex',
                flexDirection: 'column', // Ensures the content is stacked vertically
                justifyContent: 'space-between',
                boxShadow: 3, // Optional: Add shadow for better visual
              }}
            >
              <CardContent>
                <Typography variant="overline" sx={{ letterSpacing: 2, color: index % 2 === 0 ? '#000' : '#fff' }}>
                  SERVICES
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    marginBottom: '1rem', 
                    color: index % 2 === 0 ? '#000' : '#fff',
                    borderBottom: '2px solid darkgray', // 2px dark gray border under the title
                    paddingBottom: '0.5rem' // Adds spacing between title and border
                  }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: index % 2 === 0 ? '#000' : '#fff' }}>
                  {service.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                  {/* "Learn More" Button */}
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      borderRadius: '20px',
                      padding: '0.5rem 1.5rem',
                      color: '#fff',
                      background: 'linear-gradient(45deg, #c084fc, #f79e1b)', // Gradient background
                      '&:hover': {
                        backgroundColor: 'black', // Black background on hover
                        color: '#fff',
                      },
                    }}
                  >
                    Read More &#8594;
                  </Button>

                  {/* "Get a Quote" Button */}
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: 'none',
                      borderRadius: '20px',
                      padding: '0.5rem 1.5rem',
                      color: index % 2 === 0 ? '#000' : '#fff',
                      borderColor: index % 2 === 0 ? '#000' : '#fff',
                      '&:hover': {
                        backgroundColor: 'black', // Black background on hover
                        color: '#fff',
                      },
                    }}
                  >
                    Get a Quote &#8594;
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
