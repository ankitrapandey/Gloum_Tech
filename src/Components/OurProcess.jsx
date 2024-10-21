


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

const OurProcess = () => {
    return (
        <Box textAlign="center" sx={{ marginTop: '1rem', paddingX: { xs: 2, sm: 4 },backgroundColor:'white', minHeight: '10vh' }}>
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

            <Box sx={{ position: 'relative', marginTop: '1rem', textAlign: 'center' }}>
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
                                    height: { xs: '250px', sm: '300px', md: '200px' },
                                }}
                            >
                                {/* Red dot above the number */}
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        backgroundColor: '#ff0000',
                                        marginBottom: '0.5rem',
                                        position: 'absolute',
                                        top: '31px', // Adjusted to keep consistent spacing
                                        zIndex: 2
                                    }}
                                />
                                {/* Number below the red dot */}
                                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem' }, color: '#E0E0E0', fontWeight: 'bold', zIndex: 1 }}>
                                    {step.number}
                                </Typography>

                                {/* Step Title */}
                                <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {step.title}
                                </Typography>
                                <Box
                                    sx={{
                                        width: '60%',  // Adjust the width as needed
                                        height: '2px', // Height of the border
                                        backgroundColor: '#E0E0E0', // Color of the border
                                        marginTop: '0.5rem', // Space between number and border
                                        display: { xs: 'block', sm: 'none' }, // Show only on mobile view
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default OurProcess;
