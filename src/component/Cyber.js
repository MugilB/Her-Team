import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button, Container, Grid, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { VisuallyHiddenInput } from '@chakra-ui/react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isBetween from 'dayjs/plugin/isBetween';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Nav from './Nav';

dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

const Cyber = () => {
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState(null);
  const [options, setOptions] = useState([]);

  // Mock options for Autocomplete (replace with actual data fetching if needed)
  const mockOptions = [
    { label: 'Sri Krishna College of Technology' },
    { label: 'Ayyapan Temple' },
    { label: 'Gandhipuram, Coimbatore, Tamil Nadu' },
  ];

  useEffect(() => {
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
        backgroundImage: 'url("https://img.freepik.com/free-photo/woman-searching-internet-plane-tickets_23-2148521299.jpg?t=st=1722143784~exp=1722147384~hmac=6ede94a7046ae63780fd4ef5bfa2d8f9434308acc88d134bd3cb81c77c33fc04&w=826")',
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
                backgroundImage: 'url("https://img.freepik.com/free-photo/working-woman-feel-serious-looking-laptop-table_1150-15396.jpg?t=st=1722137255~exp=1722140855~hmac=c0f4905e7fe37dd6c60fbd0faeedbba1bbbf3623b9c0744672b685f9a901d6bf&w=740")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                position: 'relative',
                minHeight: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'black',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '87%',
                minHeight: '400px',
                color: 'black',
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
                    strings={['Cyber Complaint']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={false}
                  />
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={2}>                
                    
                    <Grid item xs={18}>
                      <TextField
                        label="Name"
                        fullWidth
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2
                        }}
                      />
                      <TextField
                        label="Age"
                        fullWidth
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2
                        }}
                      />
                      <TextField
                        label="Phone Number"
                        fullWidth
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2
                        }}
                      />
                      <TextField
                        label="E-mail"
                        fullWidth
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2
                        }}
                      />
                    
                    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload Details
      <VisuallyHiddenInput type="file" />
    </Button>
                    </Grid>
                    
                  </Grid>
                  
                  <Box sx={{ mt: 2 }}>
                  <Link to="/CyberC" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained" 
                      size="large"
                      sx={{ width: '100%', backgroundColor: '#FF0000' }}
                    >
                      File Complaint
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

export default Cyber;
