import React from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import {Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, styled} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

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
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                        <StyledTableRow
                            key={row.orderNum}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell component="th" scope="row">
                                {row.orderNum}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.datePlaced}</StyledTableCell>
                            <StyledTableCell align="right">{row.reservationDate}</StyledTableCell>
                            <StyledTableCell align="right">{row.restaraunt}</StyledTableCell>
                            <StyledTableCell align="right">{row.party}</StyledTableCell>
                            </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
  }