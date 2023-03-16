import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';
import userformData from "../../assets/data/userformdata.json"

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'personpic', headerName: 'Photo',width: 200, renderCell:(params)=><img src={params.value} height="100px" width="100px" style={{borderRadius:"50%"}}/> },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'missingdays', headerName: 'Missing Days',type: 'number', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    
  },
  { field: 'place', headerName: 'Place', width: 130 ,
  valueGetter: (params)=>
  `${params.row.pom}`},
  { field: 'view', headerName: 'View', width: 130 ,renderCell:(params)=><ViewDetails perid={params.row.id} personpicture={params.row.personpic}
  personfirstname={params.row.firstName} personlastname={params.row.lastName} personmissing={params.row.dom}
  gender={params.row.gender}/>},
  
];

export default function Launchedfirdata() {
  return (
    <>
    <Typography variant='h5' style={{paddingTop:"20px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
      Launched FIR Database from this Station
    </Typography>
    <div className='container' style={{height:"80vh", width: '95%', background:"#ffffff", marginTop:"10px" }}>
      
      <DataGrid
        rows={userformData}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        rowHeight={120}
      />
    </div>
    
    </>
  );

}
