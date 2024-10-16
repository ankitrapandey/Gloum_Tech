


// import React from 'react';
// import { Grid, Typography, Box } from '@mui/material';

// const processSteps = [
//     'Planning With Precision',
//     'Wireframing and UI/UX Designing',
//     'Web App Development',
//     'Testing the Functionalities',
//     'Setting Up the Launch',
//     'Maintenance and Support'
// ];

// const OurProcess = () => {
//     return (
//         <Box textAlign="center" sx={{ marginTop: '4rem', paddingX: { xs: 2, sm: 4 } }}>
//             {/* Container for Title and Description */}
//             <Box display="flex" flexDirection={{ xs: 'column', md: 'row',lg:'none' }} justifyContent='space-around' alignItems="center">
//                 <Typography variant="h5" gutterBottom sx={{ marginBottom: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
//                     Our Process is Our Strength
//                 </Typography>
//                 <Typography variant="body1" gutterBottom sx={{ maxWidth: '600px', textAlign: { xs: 'center', md: 'left' } }}>
//                     Project managers, business analysts, web app developers, QA; 
//                     everyone in our team works in sync with you to deliver exactly what you’ve expected. 
//                     We plan, follow, work on feedback, and achieve the promise.
//                 </Typography>
//             </Box>
//             <Box sx={{ position: 'relative', marginTop: '2rem', textAlign: 'center' }}>
//                 {/* Line spanning across all the steps */}
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: '26px', // Vertically aligns with the center of each dot
//                         left: 0,
//                         right: 0,
//                         height: '2px',
//                         backgroundColor: 'gray',
//                         zIndex: 0,
//                     }}
//                 />
//                 <Grid container spacing={2} justifyContent="center">
//                     {processSteps.map((step, index) => (
//                         <Grid item xs={12} sm={6} md={2} key={index}>
//                             <Box display="flex" flexDirection="column" alignItems="center" position="relative">
//                                 {/* Number with red dot */}
//                                 <Box
//                                     sx={{
//                                         width: 24,
//                                         height: 24,
//                                         borderRadius: '50%',
//                                         backgroundColor: '#ff0000',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         marginBottom: '1rem',
//                                         color: '#fff',
//                                         zIndex: 1,
//                                         position: 'relative'
//                                     }}
//                                 >
//                                     <Typography variant="caption">{index + 1}</Typography>
//                                 </Box>
//                                 <Typography variant="body2" align="center">{step}</Typography>
//                             </Box>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </Box>
//     );
// };

// export default OurProcess;




import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const processSteps = [
    'Planning With Precision',
    'Wireframing and UI/UX Designing',
    'Web App Development',
    'Testing the Functionalities',
    'Setting Up the Launch',
    'Maintenance and Support'
];

const OurProcess = () => {
    return (
        <Box textAlign="center" sx={{ marginTop: '4rem', paddingX: { xs: 2, sm: 4 } }}>
            {/* Container for Title and Description */}
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent='space-around' alignItems="center">
                <Typography variant="h5" gutterBottom sx={{ marginBottom: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                    Our Process is Our Strength
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ maxWidth: '600px', textAlign: { xs: 'center', md: 'left' } }}>
                    Project managers, business analysts, web app developers, QA; 
                    everyone in our team works in sync with you to deliver exactly what you’ve expected. 
                    We plan, follow, work on feedback, and achieve the promise.
                </Typography>
            </Box>
            <Box sx={{ position: 'relative', marginTop: '2rem', textAlign: 'center' }}>
                {/* Line spanning across all the steps, hidden in mobile view */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '26px', // Vertically aligns with the center of each dot
                        left: 0,
                        right: 0,
                        height: { xs: 0, sm: '2px' }, // Set height to 0 in mobile view
                        backgroundColor: 'gray',
                        zIndex: 0,
                        transition: 'height 0.3s ease' // Optional: smooth transition effect
                    }}
                />
                <Grid container spacing={2} justifyContent="center">
                    {processSteps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={2} key={index}>
                            <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                                {/* Number with red dot */}
                                <Box
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: '#ff0000',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1rem',
                                        color: '#fff',
                                        zIndex: 1,
                                        position: 'relative'
                                    }}
                                >
                                    <Typography variant="caption">{index + 1}</Typography>
                                </Box>
                                <Typography variant="body2" align="center">{step}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default OurProcess;
