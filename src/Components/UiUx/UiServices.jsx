


import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const industries = [
  {
    title: 'E-commerce',
    description: 'In the E-commerce sector, our UI/UX Front-end Development focuses on creating visually appealing, user-friendly interfaces. We optimize product pages, streamline checkout processes, and implement intuitive navigation, enhancing user experiences and driving conversions.',
  },
  {
    title: 'Healthcare',
    description: 'For Healthcare, our UI/UX designs prioritize patient-centric interfaces. We develop user-friendly portals, appointment scheduling systems, and interactive dashboards, empowering patients to engage easily with healthcare services and information.',
  },
  {
    title: 'Finance',
    description: 'In Finance, our UI/UX solutions emphasize security and ease of use. We design intuitive banking interfaces, investment portals, and financial management apps, ensuring seamless user interactions while prioritizing data security and compliance.',
  },
  {
    title: 'Education',
    description: 'For Education, our UI/UX development supports interactive learning platforms, virtual classrooms, and e-learning tools that engage students and enhance learning experiences.',
  },
  {
    title: 'Travel & Hospitality',
    description: 'In Travel & Hospitality, our UI/UX solutions focus on booking systems, travel guides, and user-friendly websites that provide seamless experiences for travelers.',
  },
];

const GradientBox = ({ children, index }) => {
    const background =
    index % 2 === 0
      ? '#f9f9f9' 
      : 'var(--G1,linear-gradient(94deg,#7a7da9 0%, #e6b791 100%))'; 


  return (
    <Box
      sx={{
        background: background, 
        p: 3,
        borderRadius: '8px',
        height:{xs:'350px',sm:'400px',md:'500px',lg:'400px',xl:'500px'},
        width:{xs:'80%',sm:'80%',md:'80%',lg:'80%'}, 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
      }}
    >
      {children}
    </Box>
  );
};

const IndustryCard = ({ title, description, index }) => (
  <GradientBox index={index}>
    <Typography
      variant="h6"
      component="div"
      gutterBottom
      sx={{
        position: 'relative',
        pb: 1,
        mb: 2,
        '&::after': {
          content: '""',
          display: 'block',
          width: '100%',
          height: '2px',
          backgroundColor: 'gray', // 2px Gray border under heading
          position: 'absolute',
          bottom: 0,
        },
      }}
    >
      {title}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </GradientBox>
);

const UiServices = () => {
  return (
    <Box sx={{ p: 7 }}>
      <Grid container spacing={4}>
        {/* Left side for Text */}
        <Grid item xs={12} md={4}>
            <Typography 
            sx={{
color:'#8a8a8a',
fontSize:'12px',
            }}
            >
                S E R V I C E S
            </Typography>
          <Typography variant="h4" gutterBottom>
            UI/UX Front-End Development Solutions Across Diverse Industries
          </Typography>
        </Grid>

        {/* Right side for Boxes */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {industries.map((industry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <IndustryCard s title={industry.title} description={industry.description} index={index} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UiServices;
