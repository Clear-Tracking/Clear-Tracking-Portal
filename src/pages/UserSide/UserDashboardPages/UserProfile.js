import React from 'react'
import MissingPersonProfileCard from '../../../Components/MissingPersonProfileCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userProfileData } from '../../../store/policeDashboardSlice';

export default function MissingPersonProfile() {
  // Redux State
  const dispatch = useDispatch();
  const policeDashboardState = useSelector((state) => state.policeDashboard);

  const AadharNo = JSON.parse(localStorage.getItem('profile'))?.AadharNo;
  

  // Call Backend APIs when Page Loads
  useEffect(() => {
    console.log(AadharNo)
    if (AadharNo) {
      dispatch(userProfileData({ AadharNo: AadharNo, count: 1}));
      
    }
  }, []);
  return (    
    <Box>  
      {
        policeDashboardState.userProfile.map(userData => {
          //const url= backendURl+formdata.personpic.data.attributes.url
          //console.log(formdata)
          const url = process.env.REACT_APP_BACKEND_URL+userData.photo.data.attributes.url
          return (
            <MissingPersonProfileCard userData={userData} userpic = {url} />

          )
        })
      }
            
    </Box>
  )
}