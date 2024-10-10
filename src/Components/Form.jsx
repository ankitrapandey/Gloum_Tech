

// import React, { useState } from 'react';
// import { Container, TextField, Button, Grid, Typography, Box } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//     inputField: {
//       '& input': {
//         padding: '10px 0', 
//       },
//     },
//     container: {
//         Width: '100%', 
//         margin: '0 auto', 
//         padding: '20px',
//         // background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
//         background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
//     },
//     submitButton: {
//       marginTop: '20px',
//       padding: '10px 20px',
//       background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
//       color: 'white',
//       borderRadius: '20px',
//     },
//     textSection: {
//       paddingRight: '40px',
//     },
//   });

// const Form = () => {
//   const classes = useStyles();

//   // State for form data
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     message: '',
//   });
//   const [errors, setErrors] = useState({});

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: !value.trim() });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key].trim()) newErrors[key] = true;
//     });
//     setErrors(newErrors);
//     if (!Object.values(newErrors).includes(true)) {
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <Container className={classes.container}>
//       <Grid container spacing={4} alignItems="center">
//         {/* Left side: Text content */}
//         <Grid item xs={12} md={6} className={classes.textSection}>
//           <Typography variant="h6">Contact Us</Typography>
//           <Typography variant="h4">Ready To Set-Up Your Business?</Typography>
//           <Typography>
//             If you're ready to elevate your Shopify store to the next level, partner with Parkhya Solutions. We are confident that our expertise and commitment will help you succeed.
//           </Typography>
//         </Grid>

//         {/* Right side: Form fields */}
//         <Grid item xs={12} md={6}>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   name="firstName"
//                   label="First Name"
//                   fullWidth
//                   variant="standard"
//                   className={classes.inputField}
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   error={errors.firstName}
//                   helperText={errors.firstName ? 'First Name is required' : ''}
//                   InputProps={{ disableUnderline: false }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="lastName"
//                   label="Last Name"
//                   fullWidth
//                   variant="standard"
//                   className={classes.inputField}
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   error={errors.lastName}
//                   helperText={errors.lastName ? 'Last Name is required' : ''}
//                   InputProps={{ disableUnderline: false }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="email"
//                   label="Email"
//                   fullWidth
//                   variant="standard"
//                   className={classes.inputField}
//                   value={formData.email}
//                   onChange={handleChange}
//                   error={errors.email}
//                   helperText={errors.email ? 'Email is required' : ''}
//                   InputProps={{ disableUnderline: false }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="phoneNumber"
//                   label="Phone Number"
//                   fullWidth
//                   variant="standard"
//                   className={classes.inputField}
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   error={errors.phoneNumber}
//                   helperText={errors.phoneNumber ? 'Phone Number is required' : ''}
//                   InputProps={{ disableUnderline: false}}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="message"
//                   label="Message"
//                   fullWidth
//                   variant="standard"
//                   className={classes.inputField}
//                   value={formData.message}
//                   onChange={handleChange}
//                   error={errors.message}
//                   helperText={errors.message ? 'Message is required' : ''}
//                 //   multiline
//                 //   rows={4}
//                   InputProps={{ disableUnderline: false }}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Box display="flex" justifyContent="center">
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     className={classes.submitButton}
//                   >
//                     Submit
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Form;



import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  inputField: {
    '& input': {
      padding: '10px 0', 
    },
  },
  container: {
    minWidth: '100%', // Full width of the screen
    padding: '20px', // Inner padding
    background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)', // Gradient background
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect
  },
  submitButton: {
    marginTop: '20px',
    padding: '10px 20px',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    color: 'white',
    borderRadius: '20px',
  },
  textSection: {
    paddingRight: '40px',
  },
});

const Form = () => {
  const classes = useStyles();

  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: !value.trim() });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) newErrors[key] = true;
    });
    setErrors(newErrors);
    if (!Object.values(newErrors).includes(true)) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Container className={classes.container}>
      <Grid container spacing={4} alignItems="center">
        {/* Left side: Text content */}
        <Grid item xs={12} md={6} className={classes.textSection}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="h4">Ready To Set-Up Your Business?</Typography>
          <Typography>
            If you're ready to elevate your Shopify store to the next level, partner with Parkhya Solutions. We are confident that our expertise and commitment will help you succeed.
          </Typography>
        </Grid>

        {/* Right side: Form fields */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                  InputProps={{ disableUnderline: false }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  variant="standard"
                  className={classes.inputField}
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  helperText={errors.lastName ? 'Last Name is required' : ''}
                  InputProps={{ disableUnderline: false }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  variant="standard"
                  className={classes.inputField}
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? 'Email is required' : ''}
                  InputProps={{ disableUnderline: false }}
                />
              </Grid>
              <Grid item xs={12}>
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
                  InputProps={{ disableUnderline: false }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  label="Message"
                  fullWidth
                  variant="standard"
                  className={classes.inputField}
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message ? 'Message is required' : ''}
                  InputProps={{ disableUnderline: false }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submitButton}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
