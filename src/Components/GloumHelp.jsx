

import React, { useState } from 'react';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Container,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

export default function GloumHelp() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false); // Track which accordion is expanded
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    budget: '',
    projectDescription: ''
  });
  const [error, setError] = useState('');

  const handleOpen = () => {
    setOpen(true);
    setError(''); // Clear error when opening the dialog
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
      formData.fullName &&
      formData.email &&
      formData.phoneNumber &&
      formData.budget &&
      formData.projectDescription
    ) {
      // Form submit logic here (e.g., send formData to API)
      console.log('Form Submitted:', formData);
      handleClose(); // Close the form after submission
    } else {
      setError('Please fill out all required fields.'); 
    }
  };


  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); 
  };

  return (
    <Container
      style={{
        paddingTop: '50px',
        backgroundColor: '#394854',
        minHeight: '100vh',
        maxWidth: '100%',
        paddingBottom: '50px',
        color: '#fff',
      }}
    >
      {/* Title Section */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#fff',
            border: '1px solid #000',
            borderRadius: '10px',
            lineHeight: '22px',
            fontSize: '15px',
            width: { xs: '100%', lg: '15vw'},
            textAlign: 'center'
          }}
        >
          The Partner You Need
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: '#fff', fontSize: '31.6px', fontWeight: 900 }}>
          How we can help you?
        </Typography>
      </Grid>

      {/* Main Content Section */}
      <Grid container spacing={4}>
        {/* Left Side - Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              maxWidth: { xs: '100%', md: '40%' },
              height: 'auto',
              margin: 'auto'
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/66d5b2dfd01f9d285ed60046_Tim%20with%20tumbsup%20gesture.webp"
              alt="Character"
              style={{
                width: '50%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>

        {/* Right Side - Services Section */}
        <Grid item xs={12} md={6}>
          {[
            {
              title: 'Consultation',
              description: 'Get expert guidance tailored to your business needs. Our consultants analyze your goals, ensuring technology solutions that align with your strategy and drive success.',
              icon: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a5466cd52f109c67ab0813_1.svg',
            },
            {
              title: 'Development',
              description: 'Harness innovation with our skilled developers crafting tailored, scalable software solutions. We bring cutting-edge technology to boost your digital capabilities.',
              icon: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a5466f1fdfe2fdb29664f6_2.svg',
            },
            {
              title: 'Deployment',
              description: 'Seamlessly integrate solutions into your infrastructure with our careful planning. Our deployment services ensure a smooth transition, minimizing disruptions, and maximizing efficiency.',
              icon: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a5466f1fdfe2fdb29664f6_2.svg',
            },
            {
              title: 'Maintenance',
              description: 'Keep your systems at peak performance with our comprehensive maintenance services. We proactively monitor and optimize, providing timely updates for resilient and up-to-date technology.',
              icon: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a54903f83bca867de5c7aa_1.svg',
            },
            {
              title: 'Cyber Security',
              description: 'From threat assessments to advanced security protocols, we create a secure environment, safeguarding your operations against evolving cyber threats.',
              icon: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/65a549032597f34459066294_2.svg',
            },
          ].map((service, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleAccordionChange(index)}
              TransitionProps={{ timeout: 500 }}
              sx={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#fff', '&:hover': { color: '#FF5555' }, transition: 'transform 0.5s' }} />}
                sx={{ '&:hover': { color: '#FF5555' } }}
              >
                <img
                  src={service.icon}
                  alt="Character"
                  style={{
                    height: '22px',
                    width: '22px',
                    marginRight: '8px'
                  }}
                />
                <Typography>{service.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{service.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          <Button variant="contained" color="primary" style={{ marginTop: '20px', backgroundColor: '#FF5555' }} onClick={handleOpen}>
            Discuss My Project
          </Button>
        </Grid>
      </Grid>

      {/* Discuss My Project Form Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Discuss My Project
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>} {/* Error Alert */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="fullName"
                  label={<span>Full Name <span style={{ color: 'red' }}>*</span></span>} // Asterisk in red
                  fullWidth
                 
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="email"
                  label={<span>Email <span style={{ color: 'red' }}>*</span></span>} // Asterisk in red
                  type="email"
                  fullWidth
                
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="phoneNumber"
                  label={<span>Phone Number <span style={{ color: 'red' }}>*</span></span>} // Asterisk in red
                  fullWidth
                 
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="companyName"
                  label="Company Name"
                  fullWidth
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth >
                  <InputLabel id="budget-label" >Budget (USD)</InputLabel>
                  <Select
                    // name="budget"
                    labelId="budget-label"
                    value={formData.budget}
                    onChange={handleChange}
                    // displayEmpty
                  >
                    <MenuItem value="">
                      <em>Select your budget</em>
                    </MenuItem>
                    <MenuItem value="<1000">Less than $1,000</MenuItem>
                    <MenuItem value="1000-5000">$1,000 - $5,000</MenuItem>
                    <MenuItem value="5000-20000">$5,000 - $20,000</MenuItem>
                    <MenuItem value="20000+">Above $20,000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="projectDescription"
                  label={<span>Project Description</span>} // Asterisk in red
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.projectDescription}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2, backgroundColor: 'transparent', border: '1px solid #3f51b5',color:'black' }}>
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

