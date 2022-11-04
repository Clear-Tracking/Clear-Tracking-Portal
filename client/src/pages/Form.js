import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from '@mui/material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Clear Tracking 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function UserInput() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const [gender, setgender] = React.useState('');
  
  const handleChange = (event) => {
    setgender(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth"
                  name="Date of Birth"
                  autoComplete="DOB"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Others</MenuItem>
            </Select>
          </FormControl>
          </Box>
          </Grid>
                
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="Address"
                  id="Address"
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Aadhar Number"
                  label="Aadhar Number"
                  id="aadhar"
                  autoComplete="ano"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Guardian"
                  label="Guardian"
                  type="Guardian"
                  id="Guardian"
                  autoComplete="Guardian"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Contact"
                  label="Contact"
                  id="Contact"
                  autoComplete="Contact"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Place of missing"
                  label="Place of missing"
                  type="text"
                  id="pom"
                  autoComplete="pom"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Date of missing"
                  label="date of missing"
                  type="number"
                  id="dom"
                  autoComplete="dom"
                />
              </Grid>
              <Typography component="h1" variant="h6">
              Physical features
          </Typography>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Complexion"
                  label="Complexion"
                  type="text"
                  id="complexion"
                  autoComplete="complexion"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Eye"
                  label="Eye"
                  type="Eye"
                  id="Eye"
                  autoComplete="Eye"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Hair"
                  label="Hair"
                  type="Hair"
                  id="Hair"
                  autoComplete="Hair"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="face"
                  label="Face"
                  type="Face"
                  id="Face"
                  autoComplete="Face"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Any other disability"
                  label="Any other disability"
                  type="text"
                  id="aod"
                  autoComplete="Any other disability"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Height"
                  label="Height"
                  type="number"
                  id="Height"
                  autoComplete="Height"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Weight"
                  label="Weight"
                  type="number"
                  id="Weight"
                  autoComplete="Weight"
                />
              </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        
      </Container>
      
    </ThemeProvider>
  );
}

// export default function BasicSelect() {
//     const [age, setAge] = React.useState('');
  
//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };
//     return (
//         <Box sx={{ minWidth: 120 }}>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Age</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={age}
//               label="Age"
//               onChange={handleChange}
//             >
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//       );

//     };