
import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GloumOpportunity = () => {
    const navigate = useNavigate();
    const jobs = [
        {
            id: 1,
            title: 'B2B Marketing Specialist',
            description: 'A B2B Marketing Specialist having 1 to 3 years of prior work experience...',
            joinDuration: '15 Days',
            location: 'Remote',
            openings: '1 Opening',
            experience: '6 Months - 1 Year',
        },
        {
            id: 2,
            title: 'Associate Software Developer',
            description: 'Associate Software Developer who can help us with developing, implementing...',
            joinDuration: '30 Days',
            location: 'Remote',
            openings: '1 Opening',
            experience: '6 Months - 1 Year',
        },
        {
            id: 3,
            title: 'Business Development Executive (BDE)',
            description: 'BDE required to help us generate business through online portals like Upwork...',
            joinDuration: '30 Days',
            location: 'Remote',
            openings: '1 Opening',
            experience: '0 Year - 2 Years',
        },
        {
            id: 4,
            title: 'Blockchain Developer',
            description: 'Looking for a highly capable blockchain developer who can work on...',
            joinDuration: '30 Days',
            location: 'Remote',
            openings: '1 Opening',
            experience: '1 Year - 3 Years',
        },
        {
            id: 5,
            title: 'NodeJS Developer',
            description: 'Looking for a Node.js developer who can work on Javascript frameworks...',
            joinDuration: '30 Days',
            location: 'Remote',
            openings: '1 Opening',
            experience: '6 Months - 1 Year',
        }
    ];

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Opportunities
            </Typography>
            <Grid container spacing={3}>
                {jobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                        <Card
                            elevation={3}
                            sx={{
                                minWidth: 275,
                                height: 350,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: '20px',
                                borderRadius: '15px',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ mb: 1.5, color: '#36bbca' }}
                                >
                                    {job.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {job.description}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    Join duration: {job.joinDuration}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    Location: {job.location}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    Openings: {job.openings}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    Experience: {job.experience}
                                </Typography>
                            </CardContent>
                            <Button
                                variant="outlined"
                                sx={{
                                    border: '1px solid skyblue',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#36bbca',
                                        color: 'white',
                                    },
                                }}
                                onClick={() => navigate(`/job/${job.id}`)}
                            >
                                Apply Now
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default GloumOpportunity;


