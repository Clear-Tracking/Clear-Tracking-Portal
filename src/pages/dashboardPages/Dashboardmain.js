import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MiniCalendar from '../../Components/MiniCalendar';
import CardJustNowPolice from '../../Components/CardJustNowPolice';
import CardCasesPolice from '../../Components/CardCasesPolice';
import Typography from '@mui/material/Typography';
import MissingPercentage from '../../Components/MissingPercentage';
import MonthlyStatistics from '../../Components/MonthlyStatistics';
import { REQUEST_STATUS_LOADING } from '../../constants/Constants';
import CircularProgress from '@mui/material/CircularProgress';

import { useSelector,useDispatch } from 'react-redux';
import { getStationFirsNotLaunched,getAllFirsLaunched,analyseData } from '../../store/policeDashboardSlice';

export default function Dashboardmain() {

  // Redux State
  const dispatch = useDispatch();
  const policeDashboardState = useSelector((state) => state.policeDashboard);

  const stationId = JSON.parse(localStorage.getItem('profile'))?.stationId;

  // Call Backend APIs when Page Loads
  useEffect(() => {
    if (stationId) {
      dispatch(getStationFirsNotLaunched({ stationId: stationId,count:25}));
      dispatch(getAllFirsLaunched(3));
      dispatch(analyseData())
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid item xs={12} md={8} sx={{ pb: 4, px: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="div" fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"} lineHeight="143%" letterSpacing="0.03rem" color="#000000" marginTop={"30px"} >
                  Just Now
                </Typography>
              </Grid>
              {
                policeDashboardState.requestStatus === REQUEST_STATUS_LOADING ? (
                  // false? (
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                      <CircularProgress />
                    </Box>
                  </Grid>
                ) : (
                  policeDashboardState.stationFirs.map(formdata => {
                    //const url= backendURl+formdata.personpic.data.attributes.url;
                    return (
                      <Grid item xs={12} md={4} >
                        <CardJustNowPolice personimage={formdata.personpic} personfirstname={formdata.firstName} personlastname={formdata.lastName} gender={formdata.gender} dateofmissing={formdata.dom} />
                      </Grid>
                    )
                  })
                )
              }
              <Grid item xs={12} md={12} >
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", lineHeight: "143%", letterSpacing: "0.03rem", color: "#000000", marginTop: "10px" }}>
                  Recent Cases
                </Typography>
              </Grid>
              {
                policeDashboardState.requestStatus === REQUEST_STATUS_LOADING ? (
                  // false? (
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                      <CircularProgress />
                    </Box>
                  </Grid>
                ) : (
                  policeDashboardState.allFirs.map(allmissingpeople => {
                    //const url= backendURl+allmissingpeople.personpic.data.attributes.url;
                    return (
                      <Grid item xs={12}>
                        <CardCasesPolice missingpersonfirstname={allmissingpeople.firstName} missingpersonlastname={allmissingpeople.lastName} missingpersonimage={allmissingpeople.personpic}
                          missingpersongender={allmissingpeople.gender} missingpersondom={allmissingpeople.dom} missingdob={allmissingpeople.dob} />
                      </Grid>
                    )
                  })
                )}

            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ flexGrow: 1, height: "100%", background: "#F1F6FC" }}>
            <Grid container >
              <Grid item xs={12} >
                <MiniCalendar h='100%' minW='90%' selectRange={false} />
              </Grid>
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, ml: 4 }}>Analytics</Typography>
                <Box sx={{ height: "40vh" }}>
                  <MissingPercentage found = {policeDashboardState.analytics?.found} notFound = {policeDashboardState.analytics?.notFound}/>
                </Box>

              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 600, ml: 4 }}> Monthly Statistics</Typography>
                <Box sx={{ height: "40vh" }}>
                  <MonthlyStatistics data = {policeDashboardState.monthlyStatistics}/>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
