import React, { useState } from 'react';
import { Container, Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: '#F8F8F8', padding: '60px 0' }}>
      <Container>
        {/* Header Section */}
        <Box textAlign="center" sx={{ marginBottom: '40px' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Start Your Mobile App Project Now
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', marginBottom: '20px' }}>
            With our long-held expertise in transforming businesses digitally, we support anything in the bracket
            to accelerate, grow, and perform at scale.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '10px 30px',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>

        {/* FAQ Section */}
        <Typography variant="h4" align="center" gutterBottom>
          FAQ's
        </Typography>
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FF6B6B' }} />}>
              <Typography sx={{ fontWeight: 'bold' }}>How much does it cost to develop a mobile app?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The cost of developing a mobile app varies depending on its complexity, features, and platform. Contact us for
                a personalized quote.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FF6B6B' }} />}>
              <Typography sx={{ fontWeight: 'bold' }}>
                Can you improve the functionalities of my existing mobile application?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we offer services to enhance, maintain, and add features to your existing mobile application.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FF6B6B' }} />}>
              <Typography sx={{ fontWeight: 'bold' }}>Is there any specific industry you serve?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We serve a wide range of industries including healthcare, finance, education, and e-commerce, among others.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
