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
import { FormLabel, Input, Paper } from '@mui/material';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { createFir } from '../store/policeDashboardSlice';
import { DatePicker } from '@mui/x-date-pickers';
import { useSelector } from 'react-redux';
import { checkAadharDetail } from '../store/policeDashboardSlice';
import { useState } from 'react';

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
  
  // Redux State
  const dispatch = useDispatch();
  const getAadharDataState = useSelector((state) => state.policeDashboard);

  const [nearestStation, setnearestStation] = React.useState('');

  const handleChangeNearestStation = (event) => {
    setnearestStation(event.target.value);
  };
  const todayDate = Date.now()
  const [domPicked, setDomPicked] = React.useState(dayjs(todayDate));
  //console.log(domPicked)
  const [gender, setgender] = React.useState('');
  const familyRegisteredAadhar = JSON.parse(localStorage.getItem('profile'))?.AadharNo;
  const handleChange = (event) => {
    setgender(event.target.value);
  };

const [aadharFirstName, setaadharFirstName] = useState("")

const checkAadhar = (e)=>{
  //console.log(e.target.value)
   
  dispatch(checkAadharDetail({AadharNo: e.target.value}))
  // setaadharFirstName(getAadharDataState.aadharData.firstName)
};



console.log(getAadharDataState.aadharData)

	const sendPhotoToMlServer = (imageData, uuid)=>{
		fetch("http://localhost:3500/saveFace", {
    method: 'POST', 
    mode: 'cors',
        headers:{
            "Accept" : "*/*",
            'Access-Control-Allow-Origin': "*",
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({"image":imageData, "uuid": uuid}) 
  })
    .then(res=>res.json())
    .then(res=> console.log(res))

	}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reader = new FileReader();
    reader.onload = () =>{
      const imageData = reader.result;
      const formData = {
        data: {
          "personpic": imageData,
          "firstName": data.get("firstName"),
          "lastName": data.get("lastName"),
          "dob": data.get("dob"),
          "gender": data.get("gender"),
          "address": data.get("Address"),
          "guardian":  data.get("Guardian"),
          "Contact": data.get("Contact"),
          "pom": data.get("pom"),
          "dom": domPicked.format("YYYY-MM-DD"),
          "complexion": data.get("complexion"),
          "Eye": data.get("Eye"),
          "Hair": data.get("Hair"),
          "Face": data.get("face"),
          "aod": data.get("aod"),
          "height": data.get("Height"),
          "weight": data.get("Weight"),
          "isLaunched": false,
          "firLaunchedBy": " ",
          "stationId": data.get("nearestPoliceStation"),
          "aadhar": data.get("aadhar"),
          "found": false,
          "familyRegisteredAadhar": familyRegisteredAadhar
        }
      }
      
      sendPhotoToMlServer(imageData, data.get("aadhar"))
      
      dispatch(createFir(formData))
    };
    reader.readAsDataURL(data.get("uploadedpic"))
    
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
            border:2,borderColor:"#003d80",
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            //  alignItems: 'center',
          }}
        >
          
          
          
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={3}>
            
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
                  onChange={checkAadhar}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoComplete="ano"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
              {/* <TextField
                required
                id="firstName"
                label="Required"
                // defaultValue={getAadharDataState.aadharData.firstName}
                inputProps={{
                  readOnly: true
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={getAadharDataState.aadharData.firstName}
                  inputProps={{
                    readOnly: true
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  value={getAadharDataState.aadharData.lastname}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
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
                  value={getAadharDataState.aadharData.dob}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
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
                  value={getAadharDataState.aadharData.gender}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
                />
          </FormControl>
          </Box>
          </Grid>
          
              <Grid item xs={12} lg={12}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="Address"
                  id="Address"
                  autoComplete="Address"
                  multiline rows={(4)}
                  value={getAadharDataState.aadharData.address}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
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
                  value={getAadharDataState.aadharData.fathername}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
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
                  value={getAadharDataState.aadharData.phoneNo}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={2} lg={2} >
            <FormLabel>Image: </FormLabel>
            </Grid>

          <Grid item xs={10} lg={10}>
            <Input type="file" id="uploadedpic" name="uploadedpic" fullWidth/>
              </Grid>  
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="pom"
                  label="Place of missing"
                  type="text"
                  id="pom"
                  autoComplete="pom"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <DatePicker
              
          label="Date of Missing"
          value={domPicked}
          onChange={(newValue) => setDomPicked(newValue)}
        />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
              <FormControl fullWidth>
        <InputLabel id="nearestPoliceStation">Nearest Police Station</InputLabel>
        <Select
          labelId="nearestPoliceStation"
          id="nearestPoliceStation"
          value={nearestStation}
          label="nearestPoliceStation"
          name="nearestPoliceStation"
          onChange={handleChangeNearestStation}
        >
          <MenuItem value={1}>Borivali Police Station</MenuItem>
          <MenuItem value={2}>Samta Nagar Police Station</MenuItem>
        </Select>
      </FormControl>
              </Grid>
              <Typography variant="h5" style={{marginTop:10,fontFamily:"Poppins",fontWeight:"bold",fontStyle:"normal",lineHeight:"143%"}}>
              Physical Features
              </Typography>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="complexion"
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
                  type="text"
                  id="Eye"
                  autoComplete="Eye"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="Hair"
                  label="Hair Colour"
                  type="text"
                  id="Hair"
                  autoComplete="Hair"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="face"
                  label="Face Marks (if any)"
                  type="text"
                  id="face"
                  autoComplete="face"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  name="aod"
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
