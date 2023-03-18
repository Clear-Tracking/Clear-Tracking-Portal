import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ViewDetails from '../../Components/ViewDetails';
import userformData from "../../assets/data/userformdata.json"
import Box from '@mui/material/Box';
const columns = [
  { field: 'id',headerAlign: "center",align: "center", headerName: 'ID', width: 75, headerClassName: 'super-app-theme--header' },
  { field: 'personpic',headerAlign: "center", align: "center",headerClassName: 'super-app-theme--header', headerName: 'Photo', width: 150, renderCell: (params) => <img src={params.value} height="50px" width="50px" style={{ borderRadius: "50%" }} /> },
  {
    field: 'fullName',
    headerName: 'Full name',headerAlign: "center",align: "center", headerClassName: 'super-app-theme--header',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'missingdays',align: "center", headerAlign: "center",headerName: 'Missing Days', type: 'number', headerClassName: 'super-app-theme--header', width: 200 },
  {
    field: 'age',
    headerName: 'Age',align: "center", headerAlign: "center",headerClassName: 'super-app-theme--header',
    type: 'number',
    width: 90,

  },
  {
    field: 'place',align: "center", headerName: 'Place',headerAlign: "center", width:200 , headerClassName: 'super-app-theme--header',
    valueGetter: (params) =>
      `${params.row.pom}`
  },

  {
    field: 'view',align: "center", headerName: 'View',headerAlign: "center", headerClassName: 'super-app-theme--header', width: 200, renderCell: (params) => <ViewDetails perid={params.row.id} personpicture={params.row.personpic}
      personfirstname={params.row.firstName} personlastname={params.row.lastName} personmissing={params.row.dom}
      gender={params.row.gender} />
  },


];

export default function Launchedfirdata() {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography variant='h5' style={{fontFamily: "Poppins", fontStyle: "normal", letterSpacing: "0.03rem", fontWeight: "bold", lineHeight: "143%" }}>
          Launched FIR Database from this Station
        </Typography>
        <div className='container' style={{ marginTop: "1rem", height: "80vh", background: "#ffffff" }}>

          <DataGrid
            rows={userformData}
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
