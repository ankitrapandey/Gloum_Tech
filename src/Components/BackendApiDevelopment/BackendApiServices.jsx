


import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const industries = [
    {
        title: 'E-commerce',
        description: 'In the E-commerce sector, we revolutionise operations by developing robust APIs that facilitate seamless interactions between inventory management systems, payment gateways, and customer databases. Our tailored solutions ensure swift order processing, secure payment transactions, and personalized customer experiences, fostering customer retention and satisfaction.',
    },
    {
        title: 'Healthcare',
        description: 'For the Healthcare industry, Parkhya Solutions designs APIs that bridge the gap between Electronic Health Records (EHR) systems, healthcare applications, and wearable devices. Our expertise in Back-end API Development enables secure data exchange, facilitating better communication among medical professionals, streamlining processes, and ultimately enhancing patient care and treatment outcomes.',
    },
    {
        title: 'Finance',
        description: 'In the Finance sector, our specialized APIs connect banking systems, financial databases, and third-party applications, ensuring secure data transactions, compliance with regulations, and real-time information access, empowering financial institutions with the agility to adapt to market changes and deliver enhanced services to clients.',
    },
    {
        title: 'Transportation',
        description: 'For the Transportation industry, we craft APIs that integrate various logistics management systems, GPS tracking, and fleet management tools. This integration streamlines operations, enhances route optimization, and enables real-time communication between different components, ensuring efficient transportation and logistics management.',
    },
    {
        title: 'Retail',
        description: 'In Retail, we facilitate a unified shopping experience across multiple channels by developing APIs that synchronise inventory management, customer data, and sales platforms. Our Back-end API Development solutions empower retailers to deliver consistent, personalised experiences to customers across online and offline touchpoints, driving sales and customer loyalty.',
    },
];

const GradientBox = ({ children, index }) => {
    const background =
        index % 2 === 0
            ? '#f9f9f9'
            : 'var(--G1,linear-gradient(94deg,#7a7da9 0%, #e6b791 100%))';


    return (
        <Box
            sx={{
                background: background,
                p: 3,
                borderRadius: '8px',
                height: '350px',
                width: { xs: '80%', sm: '80%', md: '80%', lg: '80%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            {children}
        </Box>
    );
};

const IndustryCard = ({ title, description, index }) => (
    <GradientBox index={index}>
        <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
                position: 'relative',
                pb: 1,
                mb: 2,
                '&::after': {
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'gray', // 2px Gray border under heading
                    position: 'absolute',
                    bottom: 0,
                },
            }}
        >
            {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
    </GradientBox>
);

const BackendApiServices = () => {
    return (
        <Box sx={{ p: 7 }}>
            <Grid container spacing={4}>
                {/* Left side for Text */}
                <Grid item xs={12} md={4}>
                    <Typography
                        sx={{
                            color: '#8a8a8a',
                            fontSize: '12px',
                        }}
                    >
                        S E R V I C E S
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        UI/UX Front-End Development Solutions Across Diverse Industries
                    </Typography>
                </Grid>

                {/* Right side for Boxes */}
                <Grid item xs={12} md={8}>
                    <Grid container spacing={4}>
                        {industries.map((industry, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <IndustryCard s title={industry.title} description={industry.description} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BackendApiServices;
