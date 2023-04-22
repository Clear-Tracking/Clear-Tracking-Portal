
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserRegisteredMissingProfile from '../../../Components/UserRegisteredMissingProfile';
import { userRegisteredStatus } from '../../../store/dashboardSlice';


export default function MissingPersonProfile(props) {
  // Redux State
  const dispatch = useDispatch();
  const dashboardState = useSelector((state) => state.dashboard);

  const familyRegisteredAadhar = JSON.parse(localStorage.getItem('profile'))?.AadharNo;

  // Call Backend APIs when Page Loads
  useEffect(() => {
    if (familyRegisteredAadhar) {
      dispatch(userRegisteredStatus({ familyRegisteredAadhar: familyRegisteredAadhar, count: 1 }));
    }
  }, []);
  // console.log(dashboardState)

  return (
    <>
      {
        dashboardState.stationFirs.map(formdata => {
          //const url= backendURl+formdata.personpic.data.attributes.url
          //console.log(formdata)
          return (
            <UserRegisteredMissingProfile missingObject={formdata} />

          )
        })
      }
    </>
  );
}