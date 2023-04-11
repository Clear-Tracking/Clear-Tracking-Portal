import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';
import userformData from "../../assets/data/userformdata.json"
import Box from '@mui/material/Box';
import { datediff } from '../../util';
import { useSelector, useDispatch } from 'react-redux';
import { getStationFirsLaunched } from '../../store/policeDashboardSlice';
import { useEffect } from 'react';
import { backendURl } from '../../constants/Constants';

const columns = [
  {
    field: 'id',
    headerAlign: "center",
    align: "center",
    headerName: 'ID',
    width: 75,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'personpic',
    headerAlign: "center",
    headerName: 'Photo',
    headerClassName: 'super-app-theme--header',
    align: "center",
    width: 150,
    renderCell: (params) => <img src={params.row.personpic} height="50px" width="50px" style={{ borderRadius: "50%" }} />
  },
  {
    field: 'fullName',
    headerName: 'Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false, headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    width: 300, align: "center",
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'missingdays',
    headerName: 'Missing Days',
    headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    align: "center",
    type: 'number',
    width: 200,
    valueGetter: (params) => datediff(params.row.dom)
  },
  {
    field: 'age',
    headerName: 'Age', align: "center",
    headerClassName: 'super-app-theme--header',
    headerAlign: "center",
    width: 90,
    valueGetter: (params) => datediff(params.row.dob)
  },

  {
    field: 'place',
    headerName: 'Place',
    headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    align: "center",
    width: 200,
    valueGetter: (params) => `${params.row.pom}`
  },
  {
    field: 'view',
    headerName: 'View',
    align: "center",
    headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    width: 200,
    renderCell: (params) => <ViewDetails formDataView={params.row} 
    // perid={params.row.id} personpicture={params.row.personpic}
    //   personfirstname={params.row.firstName} personlastname={params.row.lastName} personmissing={params.row.dom}
    //   gender={params.row.gender} 
      />
  },


];

export default function Launchedfirdata() {

   // Redux State
   const dispatch = useDispatch();
   const policeDashboardState = useSelector((state) => state.policeDashboard);
 
   const stationId = JSON.parse(localStorage.getItem('profile'))?.stationId;
 
   // Call Backend APIs when Page Loads
   useEffect(() => {
     if (stationId) {
      dispatch(getStationFirsLaunched({ stationId: stationId,count:25}));
     }
   }, []);

  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography variant='h5' style={{ fontFamily: "Poppins", fontStyle: "normal", letterSpacing: "0.03rem", fontWeight: "bold", lineHeight: "143%" }}>
          Launched FIR Database from this Station
        </Typography>
        <div className='container' style={{ marginTop: "1rem", height: "80vh", background: "#ffffff" }}>

          <DataGrid
            rows={policeDashboardState.stationFirs}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            rowHeight={60}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main'
              },
              '& .super-app-theme--header': {
                textTransform: "uppercase"
              },
              '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle':
              {
                fontWeight: "bold"
              },
              '& .MuiDataGrid-cellContent':
              {
                fontFamily: "Poppins", fontSize: "18px"
              }
            }}
          />
        </div>
      </Box>

    </>
  );

}
