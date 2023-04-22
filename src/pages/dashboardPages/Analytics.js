import * as React from 'react';
import { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import GenderAnalytics from '../../Components/GenderAnalytics';
import RegionAnalytics from '../../Components/RegionAnalytics';
import YearlyAnalytics from '../../Components/YearlyAnalytics';
import { Button } from '@mui/material';
import * as API2 from "../../api";
import { useDispatch, useSelector } from 'react-redux';
import { analyseData } from '../../store/policeDashboardSlice';

export default function Dashboarddatabase() {

    const [chartData, setChartData] = useState({ gender: { maleCount: 0, femaleCount: 0 }, years: [], region: [] })
    const dispatch = useDispatch()
    const policeDashboardState = useSelector((state) => state.policeDashboard);

    useEffect(() => {
        dispatch(analyseData())
    }, [])

    return (

        <Box sx={{ p: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={5}  >
                    <Box sx={{ backgroundColor: "#f1f6fb", borderRadius: 4, p: 1 }}>
                        <Typography variant='h6' style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                            Gender Analytics
                        </Typography>
                        <Box sx={{ height: "40vh" }}>
                            <GenderAnalytics maleCount={policeDashboardState.genderAnalytics?.male} femaleCount={policeDashboardState.genderAnalytics?.female} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={7}  >
                    <Box sx={{ backgroundColor: "#f1f6fb", borderRadius: 4, p: 1 }}>
                        <Typography variant='h6' style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                            Region Analytics
                        </Typography>
                        <Box sx={{ height: "40vh" }}>
                            <RegionAnalytics regionData={policeDashboardState.regionalAnalytics} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} >
                    <Box sx={{ backgroundColor: "#f1f6fb", borderRadius: 4, p: 1 }}>
                        <Typography variant='h6' style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                            Yearly Analytics
                        </Typography>
                        <Box sx={{ height: "60vh" }}>
                            <YearlyAnalytics yearData={policeDashboardState.yearlyAnalytics} />
                        </Box>
                    </Box>
                </Grid>

                <Button onClick={() => { API2.analyseData() }}>click me</Button>

            </Grid>
        </Box >
    );

}
