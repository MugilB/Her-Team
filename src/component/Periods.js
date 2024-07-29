// src/components/Periods.js

import React, { useState } from 'react';
import { TextField, Autocomplete, Button, Container, Grid, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {ReactTyped} from 'react-typed'; // Ensure this package is installed
import Nav from './Nav';

const Periods = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  // Mock options for Autocomplete (replace with actual data fetching if needed)
  const mockOptions = [
    { label: 'Sri Krishna College of Technology' },
    { label: 'Ayyapan Temple' },
    { label: 'Gandhipuram, Coimbatore, Tamil Nadu' },
  ];

  useState(() => {
    setOptions(mockOptions);
  }, []);

  const handlePlaceSelect = (event, value) => {
    console.log('Selected place:', value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-photo/woman-wearing-casual-sweater-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_343596-4031.jpg?t=st=1722143932~exp=1722147532~hmac=a3d7fc961cb7d878b362bdc6a5a70492227bd2572279c38e82166f8129b9b883&w=740")', // Background image for the whole page
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Nav/>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                backgroundImage: 'url("https://source.unsplash.com/random/800x600?map")', // Background image for the map section
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                position: 'relative',
                minHeight: '400px', // Ensure the height is sufficient for the map
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(10px)', // Add blur effect
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
                border: '1px solid rgba(255, 255, 255, 0.3)', // Border to enhance glass effect
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472888122254!2d76.92319257408951!3d10.927606756388924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721919285291!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                backdropFilter: 'blur(10px)', // Add blur effect
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
                border: '1px solid rgba(255, 255, 255, 0.3)', // Border to enhance glass effect
                color: 'black',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '87%',
                minHeight: '400px', // Ensure the height is sufficient for the form
                color: 'black', // Text color to contrast with background image
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 800 }}>
                <Typography style={{ fontSize: '30px', marginBottom: '20px' }} component="span">
                  <ReactTyped
                    strings={['Lady Time']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={false}
                  />
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={14}>
                      <Autocomplete
                        freeSolo
                        options={options}
                        getOptionLabel={(option) => option.label || ''}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                        onChange={handlePlaceSelect}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Your Location"
                            fullWidth
                            sx={{
                              bgcolor: 'rgba(255, 255, 255, 0.8)',
                              borderRadius: 1,
                              '& .MuiInputBase-input': {
                                color: '#000',
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>
                    
                  </Grid>
                  <Box sx={{ mt: 2 }}>
                    <Link to="/PeriodC" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ width: '100%', backgroundColor: '#4CAF50' }}
                      >
                        Help Me
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Periods;
