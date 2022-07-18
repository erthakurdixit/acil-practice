import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

// export function ButtonSingle() {
//     openImage=()=>{
//         popup
//     }

//     return (<>
//   {/* types of variant: variant="Text" variant="Contained" variant="Outlined" */}
//         <Button variant="contained" onClick={openImage} >Open Image</Button>
//     </>
//     );
//   }

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


export  function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {    field: 'age',    headerName: 'Age',    type: 'number',    width: 130,  },
  {    field: 'fullName',    headerName: 'Full name',    description: 'This column has a value getter and is not sortable.',    sortable: false,    width: 160,    valueGetter: (params) =>      `${params.row.firstName || ''} ${params.row.lastName || ''}`,  },
  {    field: 'btn',    headerName: 'Button', renderCell: BasicPopover ,    width: 200,  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
