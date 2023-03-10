import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';


const columns = [
  { field: 'id', headerName: 'ID', width: 70,headerClassName: 'super-app-theme--header',
  headerAlign: 'center'  },
  { field: 'avatar', headerName: 'Photo',headerClassName: 'super-app-theme--header',
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
  { field: 'place', headerName: 'Place',headerAlign: 'center', headerClassName: 'super-app-theme--header',width: 130 },
  { field: 'view', headerName: 'View',headerAlign: 'center', headerClassName: 'super-app-theme--header',width: 130 ,renderCell:()=><ViewDetails/>},
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai", view:"View"},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 22 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 15 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Delhi"},
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 22, avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai" },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 15, avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai" },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 , avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai"},
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65, avatar: "https://mdbootstrap.com/img/new/slides/041.jpg", missingdays:12, place:"Mumbai" },
];

export default function Dashboarddatabase() {
  return (
    <>
    <Typography variant='h5' style={{paddingTop:"20px", fontFamily:"Poppins",fontStyle:"normal",fontWeight:"bold",lineHeight:"143%"}}>
      Database
    </Typography>
    <div className='container' style={{height:"80vh", width: '95%', background:"#ffffff", marginTop:"10px" }}>
      
      <DataGrid
        rows={rows}
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
