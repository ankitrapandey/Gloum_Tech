


// import React from 'react';
// import { Grid, Typography, Box } from '@mui/material';

// const processSteps = [
//     { number: "01", title: "Planning With Precision" },
//     { number: "02", title: "Wireframing and UI/UX Designing" },
//     { number: "03", title: "Web App Development" },
//     { number: "04", title: "Testing the Functionalities" },
//     { number: "05", title: "Setting Up the Launch" },
//     { number: "06", title: "Maintenance and Support" },
// ];

// const ProcessSteps = () => {
//     return (
//         <Box textAlign="center" sx={{ marginTop: '4rem', paddingX: { xs: 2, sm: 4 }, minHeight: '50vh' }}>
//             {/* Container for Title and Description */}
//             <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent='space-around' alignItems="center">
//                 <Typography variant="h5" gutterBottom sx={{ marginBottom: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
//                     Our Process is Our Strength
//                 </Typography>
//                 <Typography variant="body1" gutterBottom sx={{ maxWidth: '600px', textAlign: { xs: 'center', md: 'left' } }}>
//                     Adaptability and continuous improvement drive us to make mobile applications that excel
//                     in the dynamic market. Our mobile app development team also works closely with stakeholders 
//                     to foster a sense of shared ownership and deliver apps that meet their expectations.
//                 </Typography>
//             </Box>

//             <Box sx={{ position: 'relative', marginTop: '2rem', textAlign: 'center', flexDirection: 'column' }}>
//                 {/* Line spanning across all the steps, hidden in mobile view */}
//                 <Box
//                     sx={{
//                         position: 'relative',
//                         top: '38px',
//                         left: 0,
//                         right: 0,
//                         height: { xs: 0, sm: '2px' },
//                         backgroundColor: 'gray',
//                         zIndex: 0,
//                         transition: 'height 0.3s ease'
//                     }}
//                 />
//                 <Grid container spacing={2} justifyContent="center">
//                     {processSteps.map((step, index) => (
//                         <Grid item xs={12} sm={6} md={2} key={index}>
//                             <Box
//                                 display="flex"
//                                 flexDirection="column"
//                                 alignItems="center"
//                                 position="relative"
//                                 sx={{
//                                     height: { xs: '200px', sm: '250px', md: '300px' },
                               
//                                 }}
//                             >
//                                 {/* Red dot above the number */}
//                                 <Box
//                                     sx={{
//                                         width: 10,
//                                         height: 10,
//                                         top: '31px',
//                                         borderRadius: '50%',
//                                         backgroundColor: '#ff0000',
//                                         marginBottom: '0.5rem',
//                                         position: 'absolute',
//                                         zIndex: 2
//                                     }}
//                                 />
//                                 {/* Number below the red dot */}
//                                 <Typography variant="h1" sx={{ fontSize: '4rem', color: '#E0E0E0', fontWeight: 'bold', position: 'relative', zIndex: 1 }}>
//                                     {step.number}
//                                 </Typography>

//                                 {/* Step Title */}
//                                 <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
//                                     {step.title}
//                                 </Typography>
//                             </Box>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </Box>
//     );
// };

// export default ProcessSteps;

import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const processSteps = [
    { number: "01", title: "Planning With Precision" },
    { number: "02", title: "Wireframing and UI/UX Designing" },
    { number: "03", title: "Web App Development" },
    { number: "04", title: "Testing the Functionalities" },
    { number: "05", title: "Setting Up the Launch" },
    { number: "06", title: "Maintenance and Support" },
];

const ProcessSteps = () => {
    return (
        <Box textAlign="center" sx={{ marginTop: '4rem', paddingX: { xs: 2, sm: 4 }, minHeight: '50vh' }}>
            {/* Container for Title and Description */}
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent='space-around' alignItems="center">
                <Typography variant="h5" gutterBottom sx={{ marginBottom: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                    Our Process is Our Strength
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ maxWidth: '600px', textAlign: { xs: 'center', md: 'left' } }}>
                    Adaptability and continuous improvement drive us to make mobile applications that excel
                    in the dynamic market. Our mobile app development team also works closely with stakeholders 
                    to foster a sense of shared ownership and deliver apps that meet their expectations.
                </Typography>
            </Box>

            <Box sx={{ position: 'relative', marginTop: '2rem', textAlign: 'center', flexDirection: 'column' }}>
                {/* Line spanning across all the steps, hidden in mobile view */}
                <Box
                    sx={{
                        position: 'relative',
                        top: '38px',
                        left: 0,
                        right: 0,
                        height: { xs: 0, sm: '2px' },
                        backgroundColor: 'gray',
                        zIndex: 0,
                        transition: 'height 0.3s ease'
                    }}
                />
                <Grid container spacing={2} justifyContent="center">
                    {processSteps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={2} key={index}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                position="relative"
                                sx={{
                                    height: { xs: '200px', sm: '250px', md: '300px' },
                                }}
                            >
                                {/* Red dot above the number */}
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        top: '31px',
                                        borderRadius: '50%',
                                        backgroundColor: '#ff0000',
                                        marginBottom: '0.5rem',
                                        position: 'absolute',
                                        zIndex: 2
                                    }}
                                />
                                {/* Number below the red dot */}
                                <Typography variant="h1" sx={{ fontSize: '4rem', color: '#E0E0E0', fontWeight: 'bold', position: 'relative', zIndex: 1 }}>
                                    {step.number}
                                </Typography>

                                {/* Border Below Title (only in mobile view) */}
                                <Box
                                    sx={{
                                        width: '60%',  // Adjust the width as needed
                                        height: '2px', // Height of the border
                                        backgroundColor: '#E0E0E0', // Color of the border
                                        marginTop: '0.5rem', // Space between number and border
                                        display: { xs: 'block', sm: 'none' }, // Show only on mobile view
                                    }}
                                />

                                {/* Step Title */}
                                <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {step.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ProcessSteps;
