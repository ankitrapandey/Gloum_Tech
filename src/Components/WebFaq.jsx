import React, { useState } from 'react';
import { Container, Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WebFaq = () => {
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
            Start Your Web App Project Now
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', marginBottom: '20px' }}>
            Code your success story with our next-gen web applications that personalize every touchpoint, and drive repeat business.
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
            <AccordionSummary sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: '16px', color: '#FF6B6B' }}>
                <ExpandMoreIcon />
              </Box>
              <Typography sx={{ fontWeight: 'bold' }}>What is the cost of web application development?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The complete cost of the project depends on the type of web application development services, technologies used, features, and functionalities. If you want an accurate cost estimate, our expert consultants are happy to discuss it in detail. Contact us now!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ boxShadow: 'none' }}>
            <AccordionSummary sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: '16px', color: '#FF6B6B' }}>
                <ExpandMoreIcon />
              </Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                How do you guarantee the security of web application?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our certified developers are well aware of the latest practices and security measures that protect your websites and web applications. Timely audits, quality assurance testing, and implementing cybersecurity measures are an important part of our web app development services.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ boxShadow: 'none' }}>
            <AccordionSummary sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: '16px', color: '#FF6B6B' }}>
                <ExpandMoreIcon />
              </Box>
              <Typography sx={{ fontWeight: 'bold' }}>Do you make mobile-friendly and responsive web application?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, developing websites that adapt seamlessly to any device, from smartphones to desktops, is one of our goals. Progressive web app development, responsive design techniques, and mobile optimization methods are a few areas we focus on to create websites that do magic on mobile devices too.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default WebFaq;
