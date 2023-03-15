import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';
import allmissingpeople from "../../assets/data/missingPeopleDataset.json"
import Box from '@mui/material/Box';
const columns = [
  {
    field: 'id', headerAlign: "center", align: "center", headerName: 'ID', width: 75, headerClassName: 'super-app-theme--header'
  },
  {
    field: 'personpic', headerAlign: "center", headerName: 'Photo', headerClassName: 'super-app-theme--header', align: "center",
    width: 150, renderCell: (params) => <img src={params.value} height="50px" width="50px" style={{ borderRadius: "50%" }} />
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
  { field: 'missingdays', headerName: 'Missing Days', headerAlign: "center", headerClassName: 'super-app-theme--header', align: "center", type: 'number', width: 200 },
  {
    field: 'age',
    headerName: 'Age', align: "center",
    headerClassName: 'super-app-theme--header',
    type: 'number', headerAlign: "center",
    width: 90

  },

  {
    field: 'place', headerName: 'Place', headerAlign: "center", headerClassName: 'super-app-theme--header', align: "center", width: 200, valueGetter: (params) =>
      `${params.row.pom}`
  },
  {
    field: 'view', headerName: 'View', align: "center", headerAlign: "center", headerClassName: 'super-app-theme--header', width: 200, renderCell: (params) => <ViewDetails personpicture={params.row.personpic}
      personfirstname={params.row.firstName} personlastname={params.row.lastName} personmissing={params.row.dom}
      gender={params.row.gender} />
  },

];


export default function Dashboarddatabase() {
  return (
    
      <Box sx={{p:4}}>
        <Typography variant='h5' style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bold", letterSpacing: "0.03rem", lineHeight: "143%" }}>
          Database
        </Typography>
        <div className='container' style={{ marginTop:"1rem",height: "80vh",  background: "#ffffff" }}>

          <DataGrid
            rows={allmissingpeople}
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
  );

}
