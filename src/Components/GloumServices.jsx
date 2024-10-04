
import React from 'react';
import { Box, Paper, Typography, Grid, Container } from '@mui/material';

const services = [
  { title: 'Blockchain', description: 'We have expertise and specialized blockchain service providers that offer expertise in developing custom blockchain solutions, including smart contract development, decentralized application (DApp) development, and blockchain consulting.' },
  { title: 'Mobile Development', description: 'Mobile development encompasses both the development of native apps, which are built for specific operating systems like iOS or Android, and the development of cross-platform apps.' },
  { title: 'Web Development', description: 'Web development is the process of creating and maintaining websites and web applications for the internet. It involves a range of tasks, from designing the visual layout and user interface.' },
  { title: 'Design', description: 'Design is a multifaceted and creative discipline that involves graphic design, industrial design, architecture, and user experience (UX) design.' },
  { title: 'Artificial Intelligence', description: 'AI development solutions involve creating smart applications and systems with decision-making and learning capabilities.' },
  { title: 'IoT', description: 'The Internet of Things (IoT) is a revolutionary concept that involves connecting everyday objects, devices, and systems to the internet, allowing them to collect and exchange data.' },
  { title: 'Salesforce Solutions', description: 'Salesforce enables organizations to manage and streamline various aspects of their business operations, including sales, marketing, customer support, and analytics.' },
  { title: 'Software Testing', description: 'Software testing is a critical phase in the software development lifecycle that involves systematically evaluating a software application or system to identify defects.' },
];

const ServiceCard = ({ title, description }) => {
  return (
    <Box
      sx={{
        perspective: '100%',
        width: '100%',
        height:'400px', // Responsive height
        marginTop: "15px",
        '&:hover .flip-card-inner': {
          transform: { lg: 'rotateY(180deg)', xs: 'none' },
        },
      }}
    >
      <Box
        className="flip-card-inner"
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: { lg: 'rotateY(0)', xs: 'none' },
        }}
      >
        {/* front side  */}
        
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            width: '91%',
            height: '91%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backfaceVisibility: 'hidden',
            backgroundColor: '#1c1c1c',
            borderRadius: '12px',
            border: '1px solid lightblue',
            color: '#fff',
            flexDirection: 'column',
            padding: '20px',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' }, mb: 2 }}>{title}</Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
              display: { lg: 'none', xs: 'block' },
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
        </Paper>

        {/* Back Side - Shows title and description only on large screens */}
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: { lg: 'flex', xs: 'none' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backfaceVisibility: 'hidden',
            backgroundColor: '#1c1c1c',
            transform: 'rotateY(180deg)',
            borderRadius: '12px',
            color: '#fff',
            border: '1px solid lightyellow',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' } }}>{title}</Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px' } }}>{description}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

const GloumServices = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        backgroundImage: 'url(https://infograins.com/static/media/services.d445a0e50242b0d8ddf0.png)',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        minHeight: '100vh',  
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography variant="h5" sx={{ color: '#fff', fontSize: { xs: '18px', md: '23px' }, mb: 1 }}>
        Professional Software Development Company
      </Typography>
      <Typography variant="h4" sx={{ color: '#fff', fontSize: { xs: '24px', md: '32px' }, mb: 4 }}>
        You Choose, We Deliver
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4}  key={index}>
              <ServiceCard title={service.title} description={service.description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GloumServices;
