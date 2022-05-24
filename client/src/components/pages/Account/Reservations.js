import React from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function createData(orderNum, datePlaced, reservationDate, restaraunt, party) {
    return { orderNum, datePlaced, reservationDate, restaraunt, party };
  }
  
  const rows = [
    createData('E1234', '05/23/2022', '05/30/2022', 'Olive Garden', 5),
    createData('D1234', '05/01/2022', '05/15/2022', 'Outback Steakhouse', 2),
    createData('C1234', '04/20/2022', '04/28/2022', 'The Melting Pot', 2),
    createData('B1234', '03/15/2022', '03/25/2022', "Bob's Burger and Brew", 7),
    createData('A1234', '01/07/2022', '01/10/2022', 'Applebees', 2),
  ];
  
  export default function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h3>Order #</h3></TableCell>
              <TableCell align="right"><h3>Date Placed</h3></TableCell>
              <TableCell align="right"><h3>Reservation Date</h3></TableCell>
              <TableCell align="right"><h3>Restaraunt</h3></TableCell>
              <TableCell align="right"><h3>Party Size</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.orderNum}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderNum}
                </TableCell>
                <TableCell align="right">{row.datePlaced}</TableCell>
                <TableCell align="right">{row.reservationDate}</TableCell>
                <TableCell align="right">{row.restaraunt}</TableCell>
                <TableCell align="right">{row.party}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }