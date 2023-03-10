import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';
import allmissingpeople from "../../assets/data/missingPeopleDataset.json"

const columns = [
  { field: 'id', headerName: 'ID', width: 70,headerClassName: 'super-app-theme--header',
  headerAlign: 'center'  },
  { field: 'personpic', headerName: 'Photo',headerClassName: 'super-app-theme--header',
  headerAlign: 'center',width: 200, renderCell:(params)=><img src={params.value} height="100px" width="100px" style={{borderRadius:"50%",marginLeft:"50px"}}/> },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    headerAlign: 'center',headerClassName: 'super-app-theme--header',
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'missingdays', headerName: 'Missing Days',headerAlign: 'center',headerClassName: 'super-app-theme--header',type: 'number', width: 130  },
  {
    field: 'age',
    headerName: 'Age',
    headerAlign: 'center',headerClassName: 'super-app-theme--header',
    type: 'number',
    width: 90,
    
  },
  
  { field: 'place', headerName: 'Place',headerAlign: 'center', headerClassName: 'super-app-theme--header',width: 130, valueGetter: (params)=>
  `${params.row.pom}` },
  { field: 'view', headerName: 'View',headerAlign: 'center', headerClassName: 'super-app-theme--header',width: 130 ,renderCell:(params)=><ViewDetails personpicture={params.row.personpic}
  personfirstname={params.row.firstName} personlastname={params.row.lastName} personmissing={params.row.dom}
  gender={params.row.gender}/>},
  
];


export default function Dashboarddatabase() {
  return (
    <>
    <Typography variant='h5' style={{paddingTop:"20px", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
      Database
    </Typography>
    <div className='container' style={{height:"80vh", width: '95%', background:"#ffffff", marginTop:"10px" }}>
      
      <DataGrid
        rows={allmissingpeople}
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
              fontWeight:"bold",textTransform:"uppercase"
            },
            
        }}
      />
    </div>
    
    </>
  );

}
