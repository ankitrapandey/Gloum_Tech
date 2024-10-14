

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    maxWidth: '1000px',
    margin: '50px auto',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  },
  contactInfo: {
    backgroundColor: '#00a0df',
    color: 'white',
    height: '70vh',
    padding: '20px',
    borderRadius: '10px',
  },
  formContainer: {
    padding: '40px',
    backgroundColor: '#FFFFFFD1',
  },
  inputField: {
    marginBottom: '40px',
    '& .MuiInputBase-root': {
      border: 'none',
      borderBottom: '1px solid #ccc',
      borderRadius: '0',
      '&:hover': {
        borderBottom: '1px solid #00a0df',
      },
      '&.Mui-error': {
        borderBottom: '1px solid red',
      },
      '&.Mui-focused': {
        borderBottom: '1px solid #00a0df',
      },
    },
  },
  submitButton: {
    height: '7vh',
    width:'30vw',
    background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
    color: 'white',
    fontSize: '16px',
    borderRadius: '15px',
    marginTop: '40px', // Margin added
  },
});

const ContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    phoneNumber: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: formData.firstName === '',
      email: formData.email === '',
      phoneNumber: formData.phoneNumber === '',
      subject: formData.subject === '',
      message: formData.message === '',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      console.log('Form submitted successfully!', formData);
      // Add your form submission logic here
    }
  };

  return (
    <Box className={classes.container}>
      <Grid container spacing={3}>
        {/* Contact Info Section */}
        <Grid item xs={12} md={5}>
          <Box className={classes.contactInfo}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography>GloumTech</Typography>
            <Typography>Email</Typography>
            <Typography>
              <a href="mailto:info@gloumtech.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                info@gloumtech.com
              </a>
            </Typography>
            <Typography>Phone</Typography>
            <Typography>
              <a href="tel:+44 7961 927827" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                UK +44 7961 927827
              </a>
            </Typography>
          </Box>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={7}>
          <Box className={classes.formContainer}>
            <form onSubmit={handleSubmit}>
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                variant="standard"
                className={classes.inputField}
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                helperText={errors.firstName ? 'First Name is required' : ''}
                InputProps={{ disableUnderline: true}}
              />
              <TextField
                name="email"
                label="Email address"
                fullWidth
                variant="standard"
                className={classes.inputField}
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? 'Email is required' : ''}
                InputProps={{ disableUnderline: true }}
              />
              <TextField
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                variant="standard"
                className={classes.inputField}
                value={formData.phoneNumber}
                onChange={handleChange}
                error={errors.phoneNumber}
                helperText={errors.phoneNumber ? 'Phone Number is required' : ''}
                InputProps={{ disableUnderline:true }}
              />
              <TextField
                name="subject"
                label="Subject"
                fullWidth
                variant="standard"
                className={classes.inputField}
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                helperText={errors.subject ? 'Subject is required' : ''}
                InputProps={{ disableUnderline: true }}
              />
              <TextField
                name="message"
                label="Your Message"
                fullWidth
                // multiline
                // rows={4}
                variant="standard"
                className={classes.inputField}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                helperText={errors.message ? 'Message is required' : ''}
                InputProps={{ disableUnderline: true }}
              />
              {/* Centered Button */}
              <Box  display="flex" justifyContent="center" marginTop={10}>
                <Button type="submit" className={classes.submitButton}>
                  Send
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
