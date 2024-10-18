



import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import DevicesIcon from '@mui/icons-material/Devices';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';

const AppDevelopmentServices = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#F7F7F7',
                p: 4,
                backgroundImage: 'url(https://cdn.prod.website-files.com/631ec5866e474e5b101f6a41/6322e52da962a70b7f34a8d1_web-app-services-bg.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
            }}
        >
            <Typography sx={{fontSize:'36px',color:'#OOOOOO'}}  align="center" gutterBottom>
                Our Mobile App Development Services
            </Typography>
            <Typography  align="center" sx={{ mb: 4,fontSize:'14px',color:'#OOOOOO' }}>
                The current mobile landscape demands apps that are not only functional but also emotionally resonant with<br/>
                customers. Softude is a cross-platform mobile app development company in the USA, with a prime focus on a<br/>
                customer-centric approach. We build mobile apps that serve as an extension of our clients’ brands and engage<br/>
                customers to become active participants in their shared digital transformation journey.
            </Typography>
            <Grid container spacing={8} justifyContent="center">
                {/* Android App Development */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'left',
                            transition: 'transform 0.3s, background-color 0.3s',
                            height: '100%', // Uniform height
                            '&:hover': {
                                color:'white',
                                background: '#e64b50',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AndroidIcon
                                sx={{
                                    fontSize: 30,
                                    color: '#3DDC84',
                                    backgroundColor: '#E0F2F1', 
                                    borderRadius: '50%', 
                                    p: 1,
                                    mr: 2, 
                                }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Android App Development
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 2 }}>
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
                            textAlign: 'left',
                            transition: 'transform 0.3s, background-color 0.3s',
                            height: '100%', // Uniform height
                            '&:hover': {
                                color:'white',
                                background: '#e64b50',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AppleIcon
                                sx={{
                                    fontSize: 30,
                                    color: '#000',
                                    backgroundColor: '#F0F0F0',
                                    borderRadius: '50%',
                                    p: 1,
                                    mr: 2,
                                }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                iOS App Development
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 2 }}>
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
                            textAlign: 'left',
                            transition: 'transform 0.3s, background-color 0.3s',
                            height: '100%', // Uniform height
                            '&:hover': {
                                color:'white',
                                background: '#e64b50',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <DevicesIcon
                                sx={{
                                    fontSize: 30,
                                    color: '#61DAFB',
                                    backgroundColor: '#E3F2FD',
                                    borderRadius: '50%',
                                    p: 1,
                                    mr: 2,
                                    
                                }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                React Native App Development
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 2 }}>
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
                            textAlign: 'left',
                            transition: 'transform 0.3s, background-color 0.3s',
                            height: '100%', // Uniform height
                            '&:hover': {
                                color:'white',
                                background: '#e64b50',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <FlutterDashIcon
                                sx={{
                                    fontSize: 30,
                                    color: '#02569B',
                                    backgroundColor: '#E0F7FA',
                                    borderRadius: '50%',
                                    p: 1,
                                    mr: 2,
                                }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Flutter App Development
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 2 }}>
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

