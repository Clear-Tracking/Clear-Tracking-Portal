
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserRegisteredMissingProfile from '../../../Components/UserRegisteredMissingProfile';
import { userRegisteredStatus } from '../../../store/policeDashboardSlice';


export default function MissingPersonProfile(props) {
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
  console.log(policeDashboardState)

  return (
    <>
      {
        policeDashboardState.stationFirs.map(formdata => {
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