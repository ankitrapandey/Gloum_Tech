import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

const processSteps = [
  { number: "01", title: "Product Ideation and Strategy" },
  { number: "02", title: "Design and Prototyping" },
  { number: "03", title: "Mobile App Development" },
  { number: "04", title: "Application Testing and Quality Assurance" },
  { number: "05", title: "Deployment and Maintenance" }
];

const ProcessSteps = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F7F7', p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Process is Our Strength
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Adaptability and continuous improvement drive us to make mobile applications that excel in the dynamic market. Our mobile app development team also works closely with stakeholders to foster a sense of shared ownership and deliver apps that meet their expectations.
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {processSteps.map((step, index) => (
          <Grid item xs={12} sm={4} md={2} key={index} sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#E0E0E0', fontWeight: 'bold', mb: 1 }}>
              {step.number}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              {step.title}
            </Typography>
            {index < processSteps.length - 1 && (
              <Divider orientation="horizontal" sx={{ width: '100%', mb: 2 }} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProcessSteps;
