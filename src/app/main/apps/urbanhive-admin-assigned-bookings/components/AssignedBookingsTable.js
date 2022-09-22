import FusePageSimple from '@fuse/core/FusePageSimple';



import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { makeStyles } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { AddBoxOutlined } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  tablecell: {
    fontSize: '20px',
  },
}))



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Name', width: 130 },
  { field: 'lastName', headerName: 'Email Address', width: 130 },
  {
    field: 'phoneNumber',
    headerName: 'Developer',
    type: 'string',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Date',
    sortable: true,
    width: 160,
   
  },
  {
    field: 'addBox',
    headerName: 'Alter Date',
    
    width: 130,
  },
];

const rows = [
  { id: 1, lastName: 'Elon', firstName: 'Tesla', phoneNumber:'09035197246', email: 'ogorkelvin289@gmail.com'},
  { id: 2, lastName: 'Blake', firstName: 'Jade', phoneNumber:'08119477917' , email:'mydelivery250@gmail.com'},
  { id: 3, lastName: 'Test', firstName: 'Said', phoneNumber:'08105565130', email: 'blakej@gmail.com'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', phoneNumber:'08119477917', email: 'tesla@gmail.com'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', phoneNumber:'08119477917' , email:'user_test5@bridgetechadvance.com'},
  { id: 6, lastName: 'Melisandre', firstName: null, phoneNumber:'08183763331', email:'user_test4@bridgetechadvance.com'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', phoneNumber:'08119477917' , email:'user_test3@bridgetechadvance.com'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', phoneNumber:'08105565130'  , email:'user_test2@bridgetechadvance.com'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', phoneNumber:'08105565130' , email:'user_test1@bridgetechadvance.com'},
];

export default function BasicTable() {
  return (
      <>
      
    <h1>Upcoming Appointments</h1>
     <br/>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Developer Booked</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="center">Change Booking</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="center"><AddBoxIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}