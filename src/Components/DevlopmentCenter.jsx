import React from 'react';
import { Container, Grid, Typography, Box, Link, Paper } from '@mui/material';
import { Phone, Email, WhatsApp } from '@mui/icons-material';

const offices = [
  {
    country: 'India',
    address: '407, Atulya IT Park, Bhawarkuan Main Rd, Indore, Madhya Pradesh 452010',
    phone1: '+91 9770477239',
    phone2: '+91 9713406272 (For Sales)',
    phone3: '+91 9617635159 (HR)',
    email: 'info@infograins.com',
    emailHR: 'hr@infograins.com',
  },
  {
    country: 'UK',
    address: 'Apartment 4105, 25 Arena Tower Crossharbour Plaza, London E14 9YF',
    phone1: '+447401232155',
  },
  {
    country: 'USA',
    address: '135, 447 Broadway, 2nd Floor, New York, NY 10013, USA',
    phone1: '+13312695159',
    address2: '720 W. Randolph Street Chicago, IL',
    phone2: '+13312695159',
  },
  {
    country: 'UAE',
    address: 'FDRK3822 Compass Building, AL Shohada Road, AL Hamra Industrial Zone-FZ, Ras AL Khaimah, United Arab Emirates',
  },
  {
    country: 'Australia',
    address: '264 George Street, Sydney 2000',
    phone1: '+61480043472',
  },
];

const OfficeCard = ({ office }) => (
  <Paper elevation={3} sx={{ padding: 2, margin: 1 }}>
    <Typography variant="h6">{office.country} OFFICE</Typography>
    <Typography>{office.address}</Typography>
    {office.address2 && <Typography>{office.address2}</Typography>}
    {office.phone1 && (
      <Typography>
        <Phone /> <Link href={`tel:${office.phone1}`}>{office.phone1}</Link>
      </Typography>
    )}
    {office.phone2 && (
      <Typography>
        <Phone /> <Link href={`tel:${office.phone2}`}>{office.phone2}</Link>
      </Typography>
    )}
    {office.phone3 && (
      <Typography>
        <Phone /> <Link href={`tel:${office.phone3}`}>{office.phone3}</Link>
      </Typography>
    )}
    {office.email && (
      <Typography>
        <Email /> <Link href={`mailto:${office.email}`}>{office.email}</Link>
      </Typography>
    )}
    {office.emailHR && (
      <Typography>
        <Email /> <Link href={`mailto:${office.emailHR}`}>{office.emailHR}</Link>
      </Typography>
    )}
  </Paper>
);

const DevelopmentCenter= () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Development Center-GloumTech Software Solutions Pvt. Ltd.
    </Typography>
    <Grid container spacing={2}>
      {offices.map((office, index) => (
        <Grid item xs={12} md={6} key={index}>
          <OfficeCard office={office} />
        </Grid>
      ))}
    </Grid>
    <Box position="fixed" bottom={16} right={16}>
      <Link href="https://wa.me/yourwhatsapplink">
        <WhatsApp style={{ fontSize: 60, color: '#25D366' }} />
      </Link>
    </Box>
  </Container>
);

export default DevelopmentCenter;