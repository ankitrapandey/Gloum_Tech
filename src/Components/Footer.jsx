

// import React from "react";
// import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
// import { Phone, Email, LocationOn, Facebook, Instagram, LinkedIn, YouTube, Twitter } from "@mui/icons-material";

// const footerLinks = [
//   { text: "E-Commerce Solutions" },
//   { text: "AI Solutions" },
//   { text: "IOT Solutions" },
//   { text: "Enterprise/Custom Software Development" },
//   { text: "Mobile Application Development" },
//   { text: "Web Application Development" },
//   { text: "Back-end API Development" },
//   { text: "UI/UX Front-end Development" },
//   { text: "Digital Marketing Services" },
//   { text: "DevOps" },
//   { text: "On Demand Software Teams" },
// ];

// const quickLinks = [
//   { text: "Portfolio" },
//   { text: "Contact" },
//   { text: "About" },
//   { text: "Career" },
//   { text: "Events" },
//   { text: "Blogs" },
//   { text: "Partners" },
// ];

// const Footer = () => {
//   return (
//     <Box
//       sx={{width:'full',
//         bgcolor: "#1a1a1a",
//         color: "#fff",
//         p: { xs: 2, sm: 4 },
//         mt: 3,
//         height:'auto' // Ensure the footer takes full viewport height
//       }}
//     >
//       <Grid container spacing={4} sx={{ flexGrow: 1 }}>
//         {/* Services */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Box sx={{ pt: { xs:35, sm: 40, md:0, lg: 0 } }}>
//             <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2, fontWeight: 'bold' }}>
//               Services
//             </Typography>
//             <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
//               {footerLinks.map((link, index) => (
//                 <li key={index} style={{ marginBottom: '0.5rem' }}>
//                   <Link
//                     href="#"
//                     color="inherit"
//                     underline="none"
//                     sx={{
//                       transition: "color 0.3s",
//                       "&:hover": { color: "red" },
//                       fontSize: { xs: "0.8rem", md: "0.9rem" }, // Adjust font size for mobile
//                     }}
//                   >
//                     {link.text}
//                   </Link>
//                 </li>
//               ))}
//             </Box>
//           </Box>
//         </Grid>

//         {/* Quick Links */}
//         <Grid item xs={12} sm={6} md={4} >
//           <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" },  fontWeight: 'bold' }}>
//             Quick Links
//           </Typography>
//           <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
//             {quickLinks.map((link, index) => (
//               <li key={index} style={{ marginBottom: '0.5rem' }}>
//                 <Link
//                   href="#"
//                   color="inherit"
//                   underline="none"
//                   sx={{
//                     transition: "color 0.3s",
//                     "&:hover": { color: "red" },
//                     fontSize: { xs: "0.8rem", md: "0.9rem" },
//                   }}
//                 >
//                   {link.text}
//                 </Link>
//               </li>
//             ))}
//           </Box>
//         </Grid>

//         {/* Contact Information */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2, fontWeight: 'bold' }}>
//             Contact Information
//           </Typography>
//           <Box sx={{ mt: 1 }}>
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.8rem", md: "0.9rem" },
//                 display: 'flex',
//                 alignItems: 'center',
//                 '&:hover': { color: 'red' },
//               }}
//             >
//               <Link
//                 href="tel:+917314258093"
//                 color="inherit"
//                 underline="none"
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 <Phone sx={{ fontSize: '1rem', marginRight: '0.5rem' }} /> +91 731-4258093
//               </Link>
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.8rem", md: "0.9rem" },
//                 display: 'flex',
//                 alignItems: 'center',
//                 '&:hover': { color: 'red' },
//               }}
//             >
//               <Link
//                 href="tel:+919589706590"
//                 color="inherit"
//                 underline="none"
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 <Phone sx={{ fontSize: '1rem', marginRight: '0.5rem' }} /> +91 9589706590
//               </Link>
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.8rem", md: "0.9rem" },
//                 display: 'flex',
//                 alignItems: 'center',
//                 '&:hover': { color: 'red' },
//               }}
//             >
//               <Link
//                 href="mailto:mail@parkhya.com"
//                 color="inherit"
//                 underline="none"
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 <Email sx={{ fontSize: '1rem', marginRight: '0.5rem' }} /> mail@parkhya.com
//               </Link>
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.8rem", md: "0.9rem" },
//                 display: 'flex',
//                 alignItems: 'center',
//                 '&:hover': { color: 'red' },
//               }}
//             >
//               <Link
//                 href="https://www.google.com/maps/search/?api=1&query=206,+Atulya+IT+Park,+Khandwa+Road,+Indore+-+452014"
//                 target="_blank"
//                 color="inherit"
//                 underline="none"
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 <LocationOn sx={{ fontSize: '1rem', marginRight: '0.5rem' }} /> 206, Atulya IT Park, Khandwa Road, Indore - 452014
//               </Link>
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.8rem", md: "0.9rem" },
//                 display: 'flex',
//                 alignItems: 'center',
//                 '&:hover': { color: 'red' },
//               }}
//             >
//               <Link
//                 href="https://www.google.com/maps/search/?api=1&query=121,+Devi+Ahilya+Marg,+Bhandari+Mill+Square,+Indore+-+452003"
//                 target="_blank"
//                 color="inherit"
//                 underline="none"
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 <LocationOn sx={{ fontSize: '1rem', marginRight: '0.5rem' }} /> 121, Devi Ahilya Marg, Bhandari Mill Square, Indore - 452003
//               </Link>
//             </Typography>
//           </Box>

//           {/* Social Media Icons */}
//           <Box sx={{ mt: 2, textAlign: { xs: 'center', md: 'left' } }}>
//             <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "red" } }}>
//               <Facebook />
//             </IconButton>
//             <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "red" } }}>
//               <Instagram />
//             </IconButton>
//             <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "red" } }}>
//               <LinkedIn />
//             </IconButton>
//             <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "red" } }}>
//               <YouTube />
//             </IconButton>
//             <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "red" } }}>
//               <Twitter />
//             </IconButton>
//           </Box>
//         </Grid>
//       </Grid>

//       <Typography
//         variant="body2"
//         color="textSecondary"
//         align="center"
//         sx={{
//           mt: 4,
//           color: 'white',
//           borderTop: '1px solid gray',
//           paddingTop: '1rem',
//           fontSize: { xs: "0.7rem", md: "0.8rem" }, // Adjust text size for mobile
//         }}
//       >
//         © 2007-2024 All rights reserved | Privacy policy
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;





import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Phone, Email, LocationOn, Facebook, Instagram, LinkedIn, YouTube, Twitter } from "@mui/icons-material";

const footerLinks = [
  { text: "E-Commerce Solutions" },
  { text: "AI Solutions" },
  { text: "IOT Solutions" },
  { text: "Enterprise/Custom Software Development" },
  { text: "Mobile Application Development" },
  { text: "Web Application Development" },
  { text: "Back-end API Development" },
  { text: "UI/UX Front-end Development" },
  { text: "Digital Marketing Services" },
  { text: "DevOps" },
  { text: "On Demand Software Teams" },
];

const quickLinks = [
  { text: "Portfolio" },
  { text: "Contact" },
  { text: "About" },
  { text: "Career" },
  { text: "Events" },
  { text: "Blogs" },
  { text: "Partners" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1a1a1a",
        color: "#fff",
        p: { xs: 2, sm: 3 },
        mt: 3,
      }}
    >
      <Grid container spacing={2}>
        {/* Services */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 1, fontWeight: 'bold' }}>
            Services
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
            {footerLinks.map((link, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{
                    transition: "color 0.3s",
                    "&:hover": { color: "red" },
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                  }}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 1, fontWeight: 'bold' }}>
            Quick Links
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
            {quickLinks.map((link, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{
                    transition: "color 0.3s",
                    "&:hover": { color: "red" },
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                  }}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 1, fontWeight: 'bold' }}>
            Contact Information
          </Typography>
          <Box sx={{ mt: 0.5 }}>
            {[
              { href: "tel:+917314258093", text: "+91 731-4258093", icon: <Phone /> },
              { href: "tel:+919589706590", text: "+91 9589706590", icon: <Phone /> },
              { href: "mailto:mail@parkhya.com", text: "mail@parkhya.com", icon: <Email /> },
              { href: "https://www.google.com/maps/search/?api=1&query=206,+Atulya+IT+Park,+Khandwa+Road,+Indore+-+452014", text: "206, Atulya IT Park, Khandwa Road, Indore - 452014", icon: <LocationOn /> },
              { href: "https://www.google.com/maps/search/?api=1&query=121,+Devi+Ahilya+Marg,+Bhandari+Mill+Square,+Indore+-+452003", text: "121, Devi Ahilya Marg, Bhandari Mill Square, Indore - 452003", icon: <LocationOn /> },
            ].map((contact, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  display: 'flex',
                  alignItems: 'center',
                  mb: 0.5,
                  '&:hover': { color: 'red' },
                }}
              >
                <Link
                  href={contact.href}
                  target="_blank"
                  color="inherit"
                  underline="none"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  {React.cloneElement(contact.icon, { sx: { fontSize: '1rem', marginRight: '0.5rem' } })} {contact.text}
                </Link>
              </Typography>
            ))}
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            {[
              { href: "#", icon: <Facebook /> },
              { href: "#", icon: <Instagram /> },
              { href: "#", icon: <LinkedIn /> },
              { href: "#", icon: <YouTube /> },
              { href: "#", icon: <Twitter /> },
            ].map((social, index) => (
              <IconButton key={index} href={social.href} sx={{ color: "#fff", "&:hover": { color: "red" } }}>
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        sx={{
          mt: 4,
          color: 'white',
          borderTop: '1px solid gray',
          paddingTop: '0.5rem',
          fontSize: { xs: "0.7rem", md: "0.8rem" },
        }}
      >
        © 2007-2024 All rights reserved | Privacy policy
      </Typography>
    </Box>
  );
};

export default Footer;
