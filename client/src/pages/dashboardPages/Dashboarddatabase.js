import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';
import allmissingpeople from "../../assets/data/missingPeopleDataset.json"

const columns = [
  { field: 'id', headerName: 'ID', width: 70,headerClassName: 'super-app-theme--header'
   },
  { field: 'personpic', headerName: 'Photo',headerClassName: 'super-app-theme--header',
  width: 200, renderCell:(params)=><img src={params.value} height="100px" width="100px" style={{borderRadius:"50%"}}/> },
  {
    field: 'fullName',
    headerName: 'Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    headerClassName: 'super-app-theme--header',
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'missingdays', headerName: 'Missing Days',headerClassName: 'super-app-theme--header',type: 'number', width: 130  },
  {
    field: 'age',
    headerName: 'Age',
    headerClassName: 'super-app-theme--header',
    type: 'number',
    width: 90
    
  },
  
  { field: 'place', headerName: 'Place', headerClassName: 'super-app-theme--header',width: 130, valueGetter: (params)=>
  `${params.row.pom}` },
  { field: 'view', headerName: 'View', headerClassName: 'super-app-theme--header',width: 90 ,renderCell:(params)=><ViewDetails personpicture={params.row.personpic}
  personfirstname={params.row.firstName} personlastname={params.row.lastName} personmissing={params.row.dom}
  gender={params.row.gender}/>},
  
];


export default function Dashboarddatabase() {
  return (
    <>
    <div style={{background:"white"}}>
    <Typography variant='h5' style={{marginTop:"30px", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",letterSpacing:"0.03rem",lineHeight:"143%"}}>
      Database
    </Typography>
    <div className='container' style={{height:"80vh", width: '80%', background:"#ffffff", marginTop:"10px",marginLeft:"50px" }}>
      
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
