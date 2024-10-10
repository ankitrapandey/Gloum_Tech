import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton, Card, CardContent } from '@mui/material';
import { LinkedIn, Facebook, Instagram, YouTube, LocationOn } from '@mui/icons-material'; // Import the LocationOn icon

const GloumFooter = () => {
  return (
    <footer>
      <Box sx={{ backgroundColor: '#222', minHeight: '100vh', width: '100%', color: '#fff', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Section */}
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={headerStyle}>Company</Typography>
              {['Career', 'Sitemap', 'Event', 'Privacy Policy', 'Term and Condition', 'Our Brochure'].map((item) => (
                <Link href="#" key={item} sx={linkStyle}>{item}</Link>
              ))}
            </Grid>

            {/* Services Section */}
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={headerStyle}>Services</Typography>
              {['Blockchain', 'Mobile Development', 'Web Development', 'Design', 'AI Development', 'Software Testing', 'Game Development', 'Robotics'].map((service) => (
                <Link href="#" key={service} sx={linkStyle}>{service}</Link>
              ))}
            </Grid>

            {/* About Section */}
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={headerStyle}>About</Typography>
              {['About Company', 'Vision & Mission', 'Become Our Partner', 'Our Technology Partners'].map((about) => (
                <Link href="#" key={about} sx={linkStyle}>{about}</Link>
              ))}
            </Grid>

            {/* Contact Info Section */}
            <Grid item xs={12} sm={3}>
              <Card sx={{ backgroundColor: '#333', color: '#fff', mb: 4 }}>
                <CardContent>
                  <Typography variant="h6" sx={headerStyle}>INDIA</Typography>
                  <Typography variant="body2" sx={contactTextStyle}>
                    <Link href="tel:+917314972583" sx={contactLinkStyle}>+91 93453 58709</Link><br />
                    <Link href="mailto:info@softude.com" sx={contactLinkStyle}>info@Gloumtech.com</Link><br />
                    <LocationOn sx={{ color: 'red', marginRight: '4px', verticalAlign: 'middle' }} /> {/* Red location icon */}
                    <Link
                      href="https://www.google.com/maps/place/%E0%A4%B0%E0%A5%80%E0%A4%B5%E0%A4%BE,+%E0%A4%AE%E0%A4%A7%E0%A5%8D%E0%A4%AF+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%87%E0%A4%B8/@24.5406421,81.3030767,15z/data=!3m1!4b1!4m6!3m5!1s0x39845a348b85dbbd:0xbc368e68a40a6da9!8m2!3d24.5362477!4d81.3036946!16zL20vMDNwY2J6?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank" sx={contactLinkStyle}
                    >
                      Corporate Park, 14th Floor, Plot No. 25, Rewa, MP, India
                    </Link>
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ backgroundColor: '#333', color: '#fff' }}>
                <CardContent>
                  <Typography variant="h6" sx={headerStyle}>UK</Typography>
                  <Typography variant="body2" sx={contactTextStyle}>
                    <Link href="tel:+19703163846" sx={contactLinkStyle}>+44 7961 927827</Link><br />
                    <Link href="mailto:info@softude.com" sx={contactLinkStyle}>info@Gloumtech.com</Link><br />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ color: 'red', marginRight: '4px' }} /> {/* Red location icon */}
                      <Link
                        href="https://www.google.com/maps/place/%E0%A4%B0%E0%A5%80%E0%A4%B5%E0%A4%BE,+%E0%A4%AE%E0%A4%A7%E0%A5%8D%E0%A4%AF+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%87%E0%A4%B8/@24.5406421,81.3030767,15z/data=!3m1!4b1!4m6!3m5!1s0x39845a348b85dbbd:0xbc368e68a40a6da9!8m2!3d24.5362477!4d81.3036946!16zL20vMDNwY2J6?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank" sx={contactLinkStyle}
                      >
                        Sally Park Birmingham
                      </Link>
                    </Box>
                  </Typography>
                </CardContent>
              </Card>

              {/* Social Media Icons */}
              <Box sx={{ mt: 2 }}>
                <IconButton href="#" sx={iconButtonStyle}><LinkedIn /></IconButton>
                <IconButton href="#" sx={iconButtonStyle}><Facebook /></IconButton>
                <IconButton href="#" sx={iconButtonStyle}><Instagram /></IconButton>
                <IconButton href="#" sx={iconButtonStyle}><YouTube /></IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', mt: 19 }}>
          <Typography variant="body2" sx={{ fontSize: '16px', color: '#aaa' }}>
            Copyright©2022 | All rights reserved
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

// Styles
const headerStyle = {
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '12px',
};

const linkStyle = {
  color: '#aaa',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '8px',
  fontSize: '16px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'red',
  },
};

const contactTextStyle = {
  color: '#aaa',
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '8px',
};

const contactLinkStyle = {
  color: '#aaa',
  textDecoration: 'none',
  '&:hover': {
    color: 'red',
  },
};

const iconButtonStyle = {
  color: '#fff',
  fontSize: '20px',
  transition: 'transform 0.3s ease, color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    color: 'red',
  },
};

export default GloumFooter;
