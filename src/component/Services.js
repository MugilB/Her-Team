// src/components/Services.js

import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Navbar from './Navbar';
import Nav from './Nav';

const cardData = [
  { title: 'Bike Ride', image: 'https://cdn-icons-png.flaticon.com/128/7695/7695161.png', path: '/bike-ride' },
  { title: 'Rooms', image: 'https://cdn-icons-png.flaticon.com/128/3030/3030336.png', path: '/rooms' },
  { title: 'Delivery', image: 'https://cdn-icons-png.flaticon.com/128/13467/13467122.png', path: '/food-delivery' },
  { title: 'Cyber Crime', image: 'https://cdn-icons-png.flaticon.com/128/5643/5643496.png', path: '/cyber-crime' },
  { title: 'Counselling', image: 'https://cdn-icons-png.flaticon.com/128/141/141918.png', path: '/mental-counselling' },
  { title: 'Menstruals', image: 'https://cdn-icons-png.flaticon.com/128/11426/11426772.png', path: '/menstruals' },
  { title: 'Pregnancy', image: 'https://cdn-icons-png.flaticon.com/128/14373/14373354.png', path: '/pregnancy' },
  { title: 'Fitness', image: 'https://cdn-icons-png.flaticon.com/128/5357/5357292.png', path: '/fitness' },
];

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '50%', // Make the card circular
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: 'black',
  overflow: 'hidden',
  width: 150, // Adjust width for the circular shape
  height: 150, // Adjust height for the circular shape
  display: 'flex', // Center content
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: theme?.shadows ? theme.shadows[5] : '0px 10px 20px rgba(0, 0, 0, 0.15)',
  },
}));

const GlassCardMedia = styled(CardMedia)({
  height: 80, // Adjust height for icons
  width: 80, // Adjust width for icons
  margin: '0 auto', // Center the icon
  objectFit: 'contain', // Make sure the icon fits within the container
});

const GlassCardContent = styled(CardContent)({
  textAlign: 'center',
  padding: 0, // Remove padding to fit text within circular shape
});

function Services() {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      p: 3, 
      backgroundImage: 'url("https://img.freepik.com/free-photo/image-stylish-asian-girlfriend-sunglasses-guessing-whats-inside-gift-box-heartshaped-present-s_1258-95162.jpg?t=st=1722103382~exp=1722106982~hmac=1e7fdf233c52be5c9d7b2231773c07e00398404eef2688604f630e927fe6e976&w=826")', // Add your background image URL here
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Nav/>
      <Container sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="div" sx={{ color: 'black', mb: 4 }}>
          Services
        </Typography>
      </Container>
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Link to={card.path} style={{ textDecoration: 'none' }}>
              <GlassCard>
                <GlassCardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                />
                <GlassCardContent>
                  <Typography variant="h6" component="div" noWrap>
                    {card.title}
                  </Typography>
                </GlassCardContent>
              </GlassCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
