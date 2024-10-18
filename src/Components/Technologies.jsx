// import React from 'react';
// import { Box, Typography, Grid, Paper } from '@mui/material';

// // Image data instead of icons
// const techData = [
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc1815cdd2c25cf56a_swift-tech.svg', label: 'Swift' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8c2e6f5a94eca081d_c-sharp-tech.svg', label: 'Objective C' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a124173a0aa245c769c6_download.png', label: 'Android' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d6d0964467c5d8b7a0086_xamarin-logo.png', label: 'Xamarin' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c96dd46835bef050de_flutter-tech.svg', label: 'Flutter' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc0f2f680e3e3af7cb_react-tech.svg', label: 'React Native' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8f62d79d1e92bdcc1_Azure.svg', label: 'Azure' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c84e944f22d8c83fcf_Aws.svg', label: 'AWS' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c90c1bc0352928400e_html-tech.svg', label: 'HTML 5' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a5e3ae86981b9a62d085_php%20logo.webp', label: 'PHP' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c9bfbd2511866597c5_css-tech.svg', label: 'CSS' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a1771341b0c904d91024_sql-server-icon-8.png', label: 'SQL Server' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596996b5c4dca1a76a21e8a_Firebase.webp', label: 'Firebase' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cb71ea840e39b698f5_java-tech.svg', label: 'java' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c9bfbd2511866597c5_css-tech.svg', label: 'CSS' },



// ];

// const Technologies = () => {
//   return (
//     <Box sx={{ backgroundColor: '#F7F7F7', p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Technologies That Help Us Craft Seamless Mobile Experiences
//       </Typography>
//       <Grid container spacing={8} justifyContent="center">
//         {techData.map((tech, index) => (
//           <Grid item xs={4} sm={4} md={2.4} lg={2.4} xl={2.4} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 2,

//                 borderRadius: '10px',
//                 maxHeight: '6vh',
//                 maxWidth: '5vw', // Optional: Set a max width

//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.1)'
//                 }
//               }}
//             >
//               <Box
//                 sx={{
//                   border: '2px solid red',
//                   display: 'flex',
//                   flexDirection: 'column', // Stack image and text vertically
//                   justifyContent: 'center',
//                   alignItems: 'center', // Center horizontally
//                   mb: 1,
//                   height: 70,  // Adjusted height to fit both image and text
//                   width: '100%', // Make it take full width of Paper
//                   overflow: 'hidden'
//                 }}
//               >
//                 <img
//                   src={tech.image}

//                   style={{
//                     display: 'block', // Ensures image is centered
//                     margin: 'auto', // Center the image horizontally
//                     maxWidth: '90%', // Ensure the image does not exceed the box width
//                     maxHeight: '90%', // Ensure the image does not exceed the box height
//                     objectFit: 'contain'
//                   }}
//                 />

//               </Box>
//               <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
//                 {tech.label}
//               </Typography>
//             </Paper>

//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Technologies;



// import React from 'react';
// import { Box, Typography, Grid, Paper } from '@mui/material';

// // Image data instead of icons
// const techData = [
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc1815cdd2c25cf56a_swift-tech.svg', label: 'Swift' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8c2e6f5a94eca081d_c-sharp-tech.svg', label: 'Objective C' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a124173a0aa245c769c6_download.png', label: 'Android' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d6d0964467c5d8b7a0086_xamarin-logo.png', label: 'Xamarin' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c96dd46835bef050de_flutter-tech.svg', label: 'Flutter' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc0f2f680e3e3af7cb_react-tech.svg', label: 'React Native' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8f62d79d1e92bdcc1_Azure.svg', label: 'Azure' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c84e944f22d8c83fcf_Aws.svg', label: 'AWS' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c90c1bc0352928400e_html-tech.svg', label: 'HTML 5' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a5e3ae86981b9a62d085_php%20logo.webp', label: 'PHP' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c9bfbd2511866597c5_css-tech.svg', label: 'CSS' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a1771341b0c904d91024_sql-server-icon-8.png', label: 'SQL Server' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596996b5c4dca1a76a21e8a_Firebase.webp', label: 'Firebase' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cb71ea840e39b698f5_java-tech.svg', label: 'Java' },
//   { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c9bfbd2511866597c5_css-tech.svg', label: 'CSS' },
// ];

// const Technologies = () => {
//   return (
//     <Box sx={{ backgroundColor: '#F7F7F7', p: 4, px:35, }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Technologies That Help Us Craft Seamless<br/>
//          Mobile Experiences
//       </Typography>
//       <Grid container spacing={8} justifyContent="center">
//         {techData.map((tech, index) => (
//           <Grid item xs={4} sm={4} md={2.4} lg={2.4} xl={2.4} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 2,
//                 mt:4,
//                 borderRadius: '10px',
//                 maxHeight: '12vh',
//                 maxWidth: '5vw', // Optional: Set a max width
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.1)',
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   mb: 1,
//                   height: 80,  // Increased height to provide more space for centering
//                   width: '100%',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <img
//                   src={tech.image}
//                   alt={tech.label} 
//                   style={{
                    
//                     margin: 'auto',
//                     maxWidth: '80%', 
//                     maxHeight: '80%', 
//                     objectFit: 'contain',
//                   }}
//                 />
//               </Box>
//               <Typography sx={{ fontWeight: 'bold', textAlign: 'center', pt:1.3, fontSize: { xs: '0.8rem', sm: '1rem', } }}>
//                 {tech.label}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Technologies;




import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Image data instead of icons
const techData = [
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc1815cdd2c25cf56a_swift-tech.svg', label: 'Swift' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8c2e6f5a94eca081d_c-sharp-tech.svg', label: 'Objective C' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a124173a0aa245c769c6_download.png', label: 'Android' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d6d0964467c5d8b7a0086_xamarin-logo.png', label: 'Xamarin' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c96dd46835bef050de_flutter-tech.svg', label: 'Flutter' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cc0f2f680e3e3af7cb_react-tech.svg', label: 'React Native' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c8f62d79d1e92bdcc1_Azure.svg', label: 'Azure' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c84e944f22d8c83fcf_Aws.svg', label: 'AWS' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c90c1bc0352928400e_html-tech.svg', label: 'HTML 5' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a5e3ae86981b9a62d085_php%20logo.webp', label: 'PHP' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c9bfbd2511866597c5_css-tech.svg', label: 'CSS' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596a1771341b0c904d91024_sql-server-icon-8.png', label: 'SQL Server' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6596996b5c4dca1a76a21e8a_Firebase.webp', label: 'Firebase' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67cb71ea840e39b698f5_java-tech.svg', label: 'Java' },
  { image: 'https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/658d67c9bfbd2511866597c5_css-tech.svg', label: 'CSS' },
];

const Technologies = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F7F7', p: { xs: 2, sm: 4 }, px: { md: 10, lg: 15, xl: 35 } }}>
      <Typography variant="h4" align="center" gutterBottom>
        Technologies That Help Us Craft Seamless<br />
        Mobile Experiences
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {techData.map((tech, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4} xl={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                mt: 4,
                borderRadius: '10px',
                height: 'auto', // Use auto to adapt to content height
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 1,
                  height: 80,  // Maintain height for centering
                  overflow: 'hidden',
                }}
              >
                <img
                  src={tech.image}
                  alt={tech.label} 
                  style={{
                    margin: 'auto',
                    maxWidth: '80%', 
                    maxHeight: '80%', 
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'center', pt: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                {tech.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technologies;
