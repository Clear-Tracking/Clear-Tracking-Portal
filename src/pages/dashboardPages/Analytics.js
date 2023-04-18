import * as React from 'react';
import { useEffect,useState } from 'react';
import { Typography, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import GenderAnalytics from '../../Components/GenderAnalytics';
import RegionAnalytics from '../../Components/RegionAnalytics';
import YearlyAnalytics from '../../Components/YearlyAnalytics';

export default  function Dashboarddatabase() {

    const[chartData, setChartData] = useState({gender:{maleCount:0, femaleCount:0}, years:[], region:[]})


    useEffect(()=>{
        const loadData = async ()=>{
            let newChartData = {gender:{maleCount: 0, femaleCount:0}, years:{}, region: {}}
            fetch("http://localhost:1337/api/reoprt-firs")
            .then(res=>res.json())
            .then(res=>{
                let maleCount =0
                let femaleCount =0
                for(var i=0;i<res.data.length;i++){
                    let personData = res.data[i].attributes;
                    if(personData.gender==="Female")
                        femaleCount++;
                    else
                        maleCount++;
                    // For Date 
                    let year = personData["dom"].slice(0,4)
                    if(!newChartData.years[year])
                        newChartData.years[year] = {found:0, notFound:0} 
                    if(personData.found)
                        newChartData.years[year]["found"] += 1
                    else
                        newChartData.years[year]["notFound"] += 1
                    // For region 
                    let city = personData["city"];
                    if(!newChartData.region[city])
                        newChartData.region[city] = {missing:0}
                    newChartData.region[city].missing += 1
                    

                }
                newChartData.gender.femaleCount = femaleCount;
                newChartData.gender.maleCount = maleCount;
                newChartData.years= Object.entries(newChartData.years).map(([year, obj]) => ({ year, ...obj }))
                newChartData.region= Object.entries(newChartData.region).map(([region, obj]) => ({ region, ...obj }))
                setChartData(newChartData);
            })
            .catch(err=>console.log(err));
        }
    

        loadData()}
        ,[])

    return (

        <Box sx={{ p: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={5}  >
                    <Box sx={{backgroundColor:"#f1f6fb",borderRadius:4,p:1}}>
                    <Typography variant='h6'style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                        Gender Analytics
                    </Typography>
                    <Box sx={{ height: "40vh" }}>
                        <GenderAnalytics maleCount={chartData.gender.maleCount} femaleCount={chartData.gender.femaleCount}/>
                    </Box>
                    </Box>
                </Grid>
                <Grid item xs={7}  >
                <Box sx={{backgroundColor:"#f1f6fb",borderRadius:4,p:1}}>
                    <Typography variant='h6'style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                        Region Analytics
                    </Typography>
                    <Box sx={{ height: "40vh" }}>
                        <RegionAnalytics regionData ={chartData.region}/>
                    </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} >
                <Box sx={{backgroundColor:"#f1f6fb",borderRadius:4,p:1}}>
                    <Typography variant='h6'style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
                        Yearly Analytics
                    </Typography>
                    <Box sx={{ height: "60vh" }}>
                        <YearlyAnalytics yearData = {chartData.years} />
                    </Box>
                    </Box>
                </Grid>

                

            </Grid>
        </Box >
    );

}
