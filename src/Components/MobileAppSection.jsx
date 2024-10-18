
// import React from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';

// const MobileAppSection = () => {
//   return (
//     <Box sx={{ backgroundColor: '#f5f5f5', padding: { xs: '2rem', sm: '4rem 2rem' } }}> 
//       <Grid
//         container
//         alignItems="center"
//         justifyContent="center"
//         spacing={4}
//         sx={{ 
//           flexDirection: { xs: 'column', sm: 'column', md: 'row' } // Stack content on small screens, row layout on larger
//         }} 
//       >
//         {/* Image section at the top for xs and sm */}
        

//         {/* Text and Button section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center on small screens, normal on larger
//               alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }, // Align items center on small, left on larger screens
//               px: { xs: 2, sm: 6, md: 10 }, // Adjust padding for different viewports
//               maxWidth: '100%',
//               textAlign: { xs: 'center', sm: 'center', md: 'left' }, // Center text on small screens, left on larger
//             }}
//           >
//             <Typography
//               variant="h3"
//               sx={{
//                 color: '#000',
//                 fontFamily: 'Satoshi Black, sans-serif',
//                 fontSize: { xs: '32px', sm: '40px', md: '43px' }, // Responsive font size
//                 fontWeight: 900,
//                 lineHeight: { xs: '40px', sm: '50px', md: '60px' }, // Responsive line height
//                 marginBottom: '1rem',
//                 maxWidth: '850px',
//               }}
//             >
//               Top Mobile App Development Company
//             </Typography>
//             <Typography
//               sx={{
//                 marginBottom: '2rem',
//                 color: '#555',
//                 fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '15px' }, // Responsive text size
//               }}
//             >
//               Beyond code, we’re invested in the success of your business and the satisfaction of your customers.
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: '#000000',
//                 color: '#FFFFFF',
//                 letterSpacing: '1px',
//                 borderRadius: '2px',
//                 padding: { xs: '10px 20px', sm: '12px 25px' }, // Responsive button padding
//                 fontFamily: 'Satoshi Bold, sans-serif',
//                 fontSize: { xs: '12px', sm: '14px' }, // Responsive button text
//                 fontWeight: 700,
//                 transition: 'all .3s',
//                 '&:hover': {
//                   backgroundColor: '#333',
//                 },
//               }}
//             >
//               Contact Us
//             </Button>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <Box
//             component="img"
//             src="https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/66057771fb8509033aa51e30_Mobile%20app%20development-p-500.webp" 
//             alt="Mobile app example"
//             sx={{ 
//               maxWidth: { xs: '80%', sm: '60%', md: '100%' }, // Adjust image size for different viewports
//               height: 'auto',
//               mb: { xs: 4, sm: 4, md: 0 }, // Margin bottom for smaller screens, none for larger
//             }} 
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default MobileAppSection;





import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const MobileAppSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: { xs: '2rem', sm: '4rem 2rem' } }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{
          flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Stack on small screens, row on large
        }}
      >
        {/* Image section (at top for mobile view) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' }, // Center image on mobile, right on large screens
            alignItems: 'center',
            mb: { xs: 4, sm: 4, md: 0 }, // Margin bottom for small screens, none for large
            order: { xs: 1, md: 2 }, // Image first on small screens, second on large
          }}
        >
          <Box
            component="img"
            src="https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/66057771fb8509033aa51e30_Mobile%20app%20development-p-500.webp" // Replace with your image source
            alt="Mobile app example"
            sx={{
              maxWidth: { xs: '80%', sm: '60%', md: '100%' }, // Responsive image size
              height: 'auto',
            }}
          />
        </Grid>

        {/* Text and Button section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center text and button on small, left on large
            alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center on small screens, left on large
            textAlign: { xs: 'center', sm: 'center', md: 'left' }, // Center text on small, left on large
            px: { xs: 2, sm: 6, md: 10 }, // Responsive padding
            order: { xs: 2, md: 1 }, // Text second on small screens, first on large
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#000',
              fontFamily: 'Satoshi Black, sans-serif',
              fontSize: { xs: '32px', sm: '40px', md: '43px' }, // Responsive font size
              fontWeight: 900,
              lineHeight: { xs: '40px', sm: '50px', md: '60px' }, // Responsive line height
              marginBottom: '1rem',
              maxWidth: '850px',
            }}
          >
            Top Mobile App Development Company
          </Typography>
          <Typography
            sx={{
              marginBottom: '2rem',
              color: '#555',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '15px' }, // Responsive text size
            }}
          >
            Beyond code, we’re invested in the success of your business and the satisfaction of your customers.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              letterSpacing: '1px',
              borderRadius: '2px',
              padding: { xs: '10px 20px', sm: '12px 25px' }, // Responsive button padding
              fontFamily: 'Satoshi Bold, sans-serif',
              fontSize: { xs: '12px', sm: '14px' }, // Responsive button text
              fontWeight: 700,
              transition: 'all .3s',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileAppSection;
