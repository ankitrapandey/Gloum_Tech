
import React, { useState } from 'react';
import { Box, Typography, Menu, MenuItem, Grid, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import IndustryIcon from '@mui/icons-material/Business'; 
import ServicesIcon from '@mui/icons-material/Build'; 
import ProductsIcon from '@mui/icons-material/Category'; 

const PositiveChange = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuType, setMenuType] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (event, type) => {
        setAnchorEl(event.currentTarget);
        setMenuType(type);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
        setMenuType(null);
    };

    const categories = [
        {
            name: 'Industries',
            items: ['Healthcare', 'Automotive', 'Banking and Financial Services', 'Wellness and Fitness', 'Transportation and Logistics'],
            icon: <IndustryIcon fontSize="large" />,
        },
        {
            name: 'Services',
            items: ['Mobile App Development', 'Web Development', 'Digital Transformation', 'Product Engineering', 'Staff Augmentation'],
            icon: <ServicesIcon fontSize="large" />,
        },
        {
            name: 'Products',
            items: ['Cost it Right', 'Profitley'],
            icon: <ProductsIcon fontSize="large" />,
        },
    ];

    const handleContactClick = () => {
        navigate('/contact-us');
    };

    return (
        <Box sx={{ backgroundColor: '#e64b50', minHeight: '65vh', color: '#fff', p: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: '#fff',
                                border: '1px solid #000',
                                borderRadius: '10px',
                                lineHeight: '1px',
                                margin: '0 auto',
                                fontSize: { xs: '20px', md: '25px', lg: '15px', },
                                width: { xs: '90%', md: '80%', lg: '50%' },
                                maxWidth: '400px',
                                textAlign: 'center',
                                p: 2,
                            }}
                        >
                            Driving Positive Change
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                color: '#fff',
                                fontSize: { xs: '20px', md: '28px' },
                                fontWeight: 900,
                                mt: 2,
                                textAlign: 'center',
                            }}
                        >
                            What we do?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="body1"
                        align="left"
                        sx={{
                            mt: { xs: 2, md: 0 },
                            fontSize: { xs: '14px', md: '16px' },
                            lineHeight: '1.6',
                            color: '#fff',
                        }}
                    >
                        With years of experience in the IT business and working around a host of business ideas and technical possibilities, we have built a tech-leveraged ecosystem to deliver end-to-end digital transformation.
                    </Typography>
                </Grid>
            </Grid>

            {/* Categories with Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', mt: 4 }}>
                {categories.map((category) => (
                    <Box
                        key={category.name}
                        onMouseEnter={(e) => handleMouseEnter(e, category.name.toLowerCase())}
                        onMouseLeave={handleMouseLeave}
                        sx={{ 
                            position: 'relative', 
                            textAlign: 'center', 
                            mb: 2, 
                            width: '200px',
                            minWidth: '180px',
                            maxWidth: '240px',
                        }}
                    >
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                borderBottom: '1px solid grey', 
                                pb: 2, 
                            }}
                        >
                            {category.icon}
                        </Box>
                        <Typography variant="h6" sx={{ display: 'inline-flex', alignItems: 'center', fontSize: { xs: '16px', md: '18px' }, mt: 1 }}>
                            {category.name} <ArrowDropDownIcon sx={{ ml: 1 }} />
                        </Typography>

                        <Menu
                            anchorEl={anchorEl}
                            open={menuType === category.name.toLowerCase()}
                            onClose={handleMouseLeave}
                            PaperProps={{
                                style: {
                                    marginTop: '10px',
                                },
                            }}
                        >
                            {category.items.map((item) => (
                                <MenuItem 
                                    key={item} 
                                    sx={{
                                        fontSize: '15px',
                                        '&:hover': {
                                            color: '#e64b50', 
                                        }
                                    }}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                ))}
            </Box>

            {/* Contact Button */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                    variant="contained"
                    sx={{ 
                        backgroundColor: '#000', 
                        color: '#fff', 
                        width: { xs: '100%', sm: '50%', lg: '200px' }, 
                        maxWidth: '300px', 
                    }}
                    onClick={handleContactClick}
                >
                    Contact Us
                </Button>
            </Box>
        </Box>
    );
};

export default PositiveChange;
