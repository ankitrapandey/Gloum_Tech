

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    budget: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState({}); // State for error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agree: e.target.checked });
    setErrors({ ...errors, agree: '' }); // Clear error on checkbox change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.agree) newErrors.agree = 'You must agree to the privacy policy';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    console.log('Form submitted:', formData);
    // Add logic to send form data to your backend
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" align="center">Contact Us</Typography>
        <Typography variant="subtitle1" align="center">
          Whether you need a solution or have a doubt, we are happy to help you.
        </Typography>
      </Grid>
      <Grid item xs={10} md={6}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
                error={Boolean(errors.fullName)} // Set error state
                helperText={errors.fullName} // Display error message
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={Boolean(errors.phoneNumber)}
                helperText={errors.phoneNumber}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                variant="outlined"
                value={formData.company}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={Boolean(errors.budget)}>
                <InputLabel>Budget (USD)</InputLabel>
                <Select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  label="Budget (USD)"
                >
                  <MenuItem value="">
                    <em>Select Budget</em>
                  </MenuItem>
                  <MenuItem value={1000}>$1,000</MenuItem>
                  <MenuItem value={5000}>$5,000</MenuItem>
                  <MenuItem value={10000}>$10,000</MenuItem>
                </Select>
                {errors.budget && <Typography color="error">{errors.budget}</Typography>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                error={Boolean(errors.message)}
                helperText={errors.message}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agree}
                    onChange={handleCheckboxChange}
                    required
                    color="primary"
                  />
                }
                label="By submitting the form, I agree to the privacy policy and give my consent to receive emails/phone calls."
              />
              {errors.agree && <Typography color="error">{errors.agree}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
