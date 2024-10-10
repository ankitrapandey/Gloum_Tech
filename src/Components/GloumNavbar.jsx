


import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Collapse, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

// Custom styles
const NavbarContainer = styled(AppBar)({
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E0E0E0',
    width: '100%',
});

const NavLink = styled(Button)({
    color: '#000000',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none',
    '&:hover': {
        color: '#FF0000', // Red color on hover for main menu items
    },
});

const DropdownItem = styled(MenuItem)({
    color: '#000',
    '&:hover': {
        color: '#FF0000', // Red color on hover for dropdown items
    },
});

// New style for ListItemText to have red hover effect
const StyledListItemText = styled(ListItemText)({
    '&:hover': {
        color: '#FF0000', // Red color on hover for mobile menu items
    },
});

const Logo = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    '& span': {
        color: '#FF0000',
    }
});

const SocialIconButton = styled(IconButton)({
    color: '#000',
    '&:hover': {
        color: '#FF0000', // Red hover for icons
    },
});

function GloumNavbar() {
    const [anchorCompany, setAnchorCompany] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [OurCompany, setOurCompany] = useState(false);

    const handleDropdownClick = (setAnchor) => (event) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorCompany(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleToggle = (setter) => () => {
        setter((prevOpen) => !prevOpen);
    };

    return (
        <Box>
            <NavbarContainer position="fixed">
                <Toolbar>
                    {/* Logo */}
                    <Logo variant="h6">
                        Gloum<span>tech</span>
                    </Logo>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, color: 'black' }}>
                        {/* Home */}
                        <Box>
                            <NavLink>
                                Home
                            </NavLink>
                        </Box>

                        {/* Our Services */}
                        <Box>
                            <NavLink>
                                Our Services
                            </NavLink>
                        </Box>

                        {/* About */}
                        <Box>
                            <NavLink>
                                About
                            </NavLink>
                        </Box>

                        {/* Contact */}
                        <Box>
                            <NavLink>
                                Contact
                            </NavLink>
                        </Box>

                        {/* Company */}
                        <Box onMouseEnter={handleDropdownClick(setAnchorCompany)} onMouseLeave={handleClose}>
                            <NavLink endIcon={<ArrowDropDownIcon />}>
                                Our Company
                            </NavLink>
                            <Menu
                                anchorEl={anchorCompany}
                                open={Boolean(anchorCompany)}
                                onClose={handleClose}
                            >
                                <DropdownItem onClick={handleClose} component={Link} to="/careers">Careers</DropdownItem>
                                <DropdownItem onClick={handleClose} component={Link} to="/blog">Blog</DropdownItem>
                                <DropdownItem onClick={handleClose} component={Link} to="/mission">Mission</DropdownItem>
                            </Menu>
                        </Box>
                    </Box>

                    {/* Mobile Hamburger Menu */}
                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', md: 'none' }, color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </NavbarContainer>

            {/* Drawer for Mobile Menu */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <Box sx={{ width: 250 }} role="presentation">
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ marginLeft: 'auto', color: 'black' }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <List>
                        {/* Home */}
                        <ListItem button>
                            <StyledListItemText primary="Home" />
                        </ListItem>

                        {/* Our Services */}
                        <ListItem button>
                            <StyledListItemText primary="Our Services" />
                        </ListItem>

                        {/* About */}
                        <ListItem button>
                            <StyledListItemText primary="About" />
                        </ListItem>

                        {/* Our Company */}
                        <ListItem button onClick={handleToggle(setOurCompany)}>
                            <StyledListItemText primary="Our Company" />
                            {OurCompany ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={OurCompany} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button component={Link} to="/careers">
                                    <StyledListItemText primary="Careers" />
                                </ListItem>
                                <ListItem button component={Link} to="/blog">
                                    <StyledListItemText primary="Blog" />
                                </ListItem>
                                <ListItem button component={Link} to="/mission">
                                    <StyledListItemText primary="Mission" />
                                </ListItem>
                            </List>
                        </Collapse>

                        {/* Contact Information */}
                        <ListItem>
                            <MuiLink href="mailto:info@softude.com" underline="hover" sx={{ color: 'black', '&:hover': { color: '#FF0000' } }}>
                                info@softude.com
                            </MuiLink>
                        </ListItem>
                        <ListItem>
                            <MuiLink href="tel:+919303800613" underline="hover" sx={{ color: 'black', '&:hover': { color: '#FF0000' } }}>
                                +91 9303800613
                            </MuiLink>
                        </ListItem>
                        <ListItem>
                            <MuiLink href="tel:+19179081899" underline="hover" sx={{ color: 'black', '&:hover': { color: '#FF0000' } }}>
                                +1 917 908 1899
                            </MuiLink>
                        </ListItem>

                        {/* Social Media Icons */}
                        <ListItem>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <SocialIconButton component="a" href="https://www.facebook.com">
                                    <Facebook />
                                </SocialIconButton>
                                <SocialIconButton component="a" href="https://www.twitter.com">
                                    <Twitter />
                                </SocialIconButton>
                                <SocialIconButton component="a" href="https://www.linkedin.com">
                                    <LinkedIn />
                                </SocialIconButton>
                                <SocialIconButton component="a" href="https://www.instagram.com">
                                    <Instagram />
                                </SocialIconButton>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default GloumNavbar;
