
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import DevicesIcon from '@mui/icons-material/Devices';
import FlutterDashIcon from '@mui/icons-material/FlutterDash'; // Icon for Flutter

const AppDevelopmentServices = () => {
    return (
        <Box sx={{ backgroundColor: '#F7F7F7', p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Our Mobile App Development Services
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                The current mobile landscape demands apps that are not only functional but also emotionally resonant with
                customers. Softude is a cross-platform mobile app development company in the USA, with a prime focus on a
                customer-centric approach. We build mobile apps that serve as an extension of our clients’ brands and engage
                customers to become active participants in their shared digital transformation journey.
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {/* Android App Development */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            transition: 'transform 0.3s, background-color 0.3s',
                            '&:hover': {
                                background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
                                transform: 'scale(1.05)', // zoom effect on hover
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)', // zoom effect on icon hover
                                },
                            }}
                        >
                            <AndroidIcon sx={{ fontSize: 40, color: '#3DDC84' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                            Android App Development
                        </Typography>
                        <Typography variant="body2">
                            Give your business global exposure by reaching billions of potential customers who prefer Android devices.
                            With our Android app development services, you can launch apps faster, and save the development cost.
                        </Typography>
                    </Paper>
                </Grid>

                {/* iOS App Development */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            transition: 'transform 0.3s, background-color 0.3s',
                            '&:hover': {
                               background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
                              
                                transform: 'scale(1.05)', // zoom effect on hover
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)', // zoom effect on icon hover
                                },
                            }}
                        >
                            <AppleIcon sx={{ fontSize: 40, color: '#000' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                            iOS App Development
                        </Typography>
                        <Typography variant="body2">
                            Target the premium audience and increase your average revenue per user with our iOS app development. We
                            build applications that run smoothly on any Apple device and are designed with Apple design guidelines,
                            giving users a stunning device experience.
                        </Typography>
                    </Paper>
                </Grid>

                {/* React Native App Development */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            transition: 'transform 0.3s, background-color 0.3s',
                            '&:hover': {
                                background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)', // Gradient background
                            
                                transform: 'scale(1.05)', // zoom effect on hover
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)', // zoom effect on icon hover
                                },
                            }}
                        >
                            <DevicesIcon sx={{ fontSize: 40, color: '#61DAFB' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                            React Native App Development
                        </Typography>
                        <Typography variant="body2">
                            Expand your audience with a single mobile app. By choosing React native app development, businesses can
                            target both Android and iOS users while giving them a smooth and responsive app experience.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Flutter App Development */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            transition: 'transform 0.3s, background-color 0.3s',
                            '&:hover': {
                               background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
                                transform: 'scale(1.05)',
                               
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)', // zoom effect on icon hover
                                },
                            }}
                        >
                            <FlutterDashIcon sx={{ fontSize: 40, color: '#02569B' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                            Flutter App Development
                        </Typography>
                        <Typography variant="body2">
                            Take advantage of Google's fast and dynamic Flutter framework to create high-performance apps. Reach both
                            Android and iOS platforms with a single codebase, reducing development time and cost.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppDevelopmentServices;
