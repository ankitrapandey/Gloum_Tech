


import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const industries = [
    {
        title: 'E-commerce',
        description: 'For E-commerce businesses, our Digital Marketing Services focus on optimizing product visibility through strategic SEO, engaging content, and targeted advertising. We drive traffic, improve conversion rates, and enhance the overall online shopping experience, resulting in increased sales and customer retention.',
    },
    {
        title: 'Healthcare',
        description: 'In the Healthcare sector, our services aim to build trust and credibility through informative content, targeted advertising, and strategic SEO. We help healthcare providers enhance their online presence, disseminate valuable information, and engage with patients to foster trust and loyalty.',
    },
    {
        title: 'Finance',
        description: 'For Finance, our Digital Marketing strategies emphasize building brand authority and trust. We implement targeted content marketing, SEO strategies, and paid advertising to position financial institutions as reliable sources, enhance brand recognition, and attract potential clients.',
    },
    {
        title: 'Education',
        description: 'In Education, our services aim to engage students and parents through targeted content, social media engagement, and SEO strategies. We help educational institutions create compelling campaigns, improve their online visibility, and attract prospective students',
    },
    {
        title: 'Travel & Hospitality',
        description: 'For Travel & Hospitality, our strategies focus on captivating content, visual storytelling, and targeted advertising. We aim to enhance customer engagement, inspire travel, and drive bookings through strategic SEO and captivating social media campaigns.',
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
                height: { xs: '350px', sm: '400px', md: '500px', lg: '400px', xl: '500px' },
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

const DigitalMarketingServices = () => {
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
                    Digital Marketing<br/>
                     Services Across <br/>
                     Diverse<br/>
                      Industries<br/>
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

export default DigitalMarketingServices;
