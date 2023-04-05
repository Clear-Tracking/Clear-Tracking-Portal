import * as React from 'react';
import { useNavigate } from "react-router-dom";

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

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';


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

export default function ReportMissingForm() {

  let navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("FIR form submitted"/*{
      email: data.get('email'),
      password: data.get('password'),
    }*/);
    navigate("/dashboard")
  };


  const [gender, setgender] = React.useState('');
  
  const handleChange = (event) => {
    setgender(event.target.value);
  };

  const [value, setValue] = React.useState('');
  const [missValue, setMissValue] = React.useState('');

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

  const handleChangeMissingDate = (newValue) => {
    setMissValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        
        <Box
          sx={{
            padding:"5%",
            borderRadius:10,
            border:2,borderColor:"pink",
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            //  alignItems: 'center',
          }}
        >
          
          
          
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
            
              <Grid item xs={12} >
              <Typography variant="h5"style={{textAlign:"center",fontFamily:"Poppins",fontWeight:"bold",fontStyle:"normal",lineHeight:"143%"}}>
            Registeration Form
          </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="aadhar"
                  label="Aadhar Number"
                  id="aadhar"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoComplete="ano"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputProps={{ readOnly: true }}
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
                  inputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth"
                  name="dob"
                  autoComplete="dob"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
            
            <TextField
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  autoComplete="gender"
                  inputProps={{ readOnly: true }}
                />
          </FormControl>
          </Box>
          </Grid>
          <Grid item xs={3} >
                <img src="https://tse2.mm.bing.net/th?id=OIP.UJewJHqS1HF431mLgpRPFQHaHa&pid=Api&P=0" style={{height:"100%",width:"100%",border:"1px solid #eeeeee"}}/>
              </Grid>  
              <Grid item xs={9}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="Address"
                  id="Address"
                  autoComplete="Address"
                  multiline rows={(4)}
                  inputProps={{ readOnly: true }}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Guardian"
                  label="Guardian Name"
                  type="Guardian"
                  id="Guardian"
                  autoComplete="Guardian"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Contact"
                  label="Contact Number"
                  id="Contact"
                  type="number"
                  autoComplete="Contact"
                  inputProps={{ readOnly: true }}
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
              <DesktopDatePicker
                label="Missing Date"
                id="dom"
                inputFormat="DD-MM-YYYY"
                value={missValue}
                onChange={handleChangeMissingDate}
                renderInput={(params) => <TextField {...params} />}
              />
              </Grid>
              <Typography variant="h5" style={{marginTop:10,fontFamily:"Poppins",fontWeight:"bold",fontStyle:"normal",lineHeight:"143%"}}>
              Physical Features
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
                  label="Eye Colour"
                  type="Eye"
                  id="Eye"
                  autoComplete="Eye"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Hair"
                  label="Hair Colour"
                  type="Hair"
                  id="Hair"
                  autoComplete="Hair"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="face"
                  label="Face Marks (if any)"
                  type="Face"
                  id="Face"
                  autoComplete="Face"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Any other disability"
                  label="Any other disability (if any)"
                  type="text"
                  id="aod"
                  autoComplete="Any other disability"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Height"
                  label="Height in cms"
                  type="number"
                  id="Height"
                  autoComplete="Height"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Weight"
                  label="Weight in Kgs"
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
          </LocalizationProvider>
          </Box>
        </Box>
        
        
        
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