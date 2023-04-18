import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import formfilldisplay from "../../../assets/data/formfilldisplay.json";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import UserLeads from '../../../Components/UserLeads';
import AllMissingPeopleData from "../../../assets/data/missingPeopleDataset.json";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserRegisteredMissingProfile from '../../../Components/UserRegisteredMissingProfile';
import { userRegisteredStatus } from '../../../store/policeDashboardSlice';
import StatusUserSide from '../../../Components/StatusUserSide';
import StepperUserside from '../../../Components/StepperUserside'

export default function UserAnalytics(props) {

    // Redux State
    const dispatch = useDispatch();
    const policeDashboardState = useSelector((state) => state.policeDashboard);

    const familyRegisteredAadhar = JSON.parse(localStorage.getItem('profile'))?.AadharNo;

    // Call Backend APIs when Page Loads
    useEffect(() => {
        if (familyRegisteredAadhar) {
            dispatch(userRegisteredStatus({ familyRegisteredAadhar: familyRegisteredAadhar, count: 1 }));
        }
    }, []);
    
    return (
        <>

            <Box>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={4}>
                        {
                            policeDashboardState.stationFirs.map(formdata => {
                                //const url= backendURl+formdata.personpic.data.attributes.url
                                console.log(formdata)
                                return (
                                    <>
                                        <StatusUserSide missingObject={formdata} />

                                        <StepperUserside formdata={formdata} />
                                    </>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h6" sx={{ fontStyle: "Poppins", fontWeight: "bold", ml: 1 }}>Leads</Typography>
                            </Grid>
                            {
                                AllMissingPeopleData.map(allmissingpeople => {
                                    return (
                                        <Grid item xs={12}>
                                            <UserLeads missingpersonfirstname={allmissingpeople.firstName} missingpersonlastname={allmissingpeople.lastName} missingpersonimage={allmissingpeople.personpic}
                                                missingpersongender={allmissingpeople.gender} missingpersondom={allmissingpeople.dom} missingdob={allmissingpeople.dob} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}