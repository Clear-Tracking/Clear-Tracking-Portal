import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';
import userformData from "../../assets/data/userformdata.json"

const columns = [
  { field: 'id', headerName: 'ID', width: 70,headerClassName:'super-app-theme--header' },
  { field: 'personpic', headerClassName:'super-app-theme--header',headerName: 'Photo',width: 200, renderCell:(params)=><img src={params.value} height="100px" width="100px" style={{borderRadius:"50%"}}/> },
  {
    field: 'fullName',
    headerName: 'Full name',headerClassName:'super-app-theme--header',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'missingdays', headerName: 'Missing Days',type: 'number',headerClassName:'super-app-theme--header', width: 130 },
  {
    field: 'age',
    headerName: 'Age',headerClassName:'super-app-theme--header',
    type: 'number',
    width: 90,
    
  },
  { field: 'place', headerName: 'Place', width: 130 ,headerClassName:'super-app-theme--header',
  valueGetter: (params)=>
  `${params.row.pom}`},
  { field: 'view', headerName: 'View',headerClassName:'super-app-theme--header', width: 130 ,renderCell:(params)=><ViewDetails personpicture={params.row.personpic}
  personfirstname={params.row.firstName} personlastname={params.row.lastName} personmissing={params.row.dom}
  gender={params.row.gender}/>},
  
];

export default function Launchedfirdata() {
  return (
    <>
    <div style={{background:"white"}}>
    <Typography variant='h5' style={{marginTop:"30px",fontFamily:"Poppins",fontStyle:"normal",letterSpacing:"0.03rem",fontWeight:"bold",lineHeight:"143%"}}>
      Launched FIR Database from this Station
    </Typography>
    <div className='container' style={{height:"80vh", width: '80%', background:"#ffffff", marginTop:"10px",marginLeft:"50px" }}>
      
      <DataGrid
        rows={userformData}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        rowHeight={120}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main'},
          '& .super-app-theme--header': {
              textTransform:"uppercase"
                   },
          '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle' :
                   {
                     fontWeight : "bold"
                   },
                  '& .MuiDataGrid-cellContent':
                  {
                      fontFamily:"Poppins",fontSize:"18px"
                  }
          }}
      />
    </div>
    </div>
    
    </>
  );

}
