import React from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import { rootShouldForwardProp } from "@mui/material/styles/styled";
import { Link, useNavigate } from "react-router-dom";

function createData(
    orderNum,
    datePlaced, 
    reservationDate, 
    partyNum, 
    restaruant
    ) {
    return (
        orderNum,
        datePlaced, 
        reservationDate, 
        restaruant,
        partyNum   
        )
}

const rows = [
    createData(1234, 5/22/2022, 5/30/2022, "Olive Garden", 5),
];

export default function Reservations() {
    
    console.log("Reservations");

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Order #</TableCell>
                        <TableCell align="right">Date Placed</TableCell>
                        <TableCell align="right">Reservation Date</TableCell>
                        <TableCell alight="right">Restaruant</TableCell>
                        <TableCell align="right">Party Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.orderNum}
                            </TableCell>
                            <TableCell align="right">{row.datePlaced}</TableCell>
                            <TableCell align="right">{row.reservationDate}</TableCell>
                            <TableCell align="right">{row.restaruant}</TableCell>
                            <TableCell align="right">{row.partyNum}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}