import React from "react";
import { CiCalendarDate } from "react-icons/ci";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";

const rows = [
  createData("Cement", "50 tons", "Low Stock", "Send"),
  createData("Cement", "50 tons", "Low Stock", "Send"),
  createData("Cement", "50 tons", "Low Stock", "Send"),
];

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const InformationCart = ({ date, title, numRequest }) => {
  return (
    <div className='flex flex-col space-y-2 bg-white shadow-xl p-3 rounded  '>
      <div className='flex justify-start items-center space-x-2'>
        <CiCalendarDate size={20} />
        <div className='font-semibold'>{date}</div>
        <div className='font-light'>Last Updated</div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='font-bold text-lg'>{title}</div>
        <div className='flex space-x-3 items-center'>
          <div className='text-sm'>New Request</div>
          <div className='text-center text-rose-500 rounded-full p-1 bg-rose-200 text-sm w-7 h-7'>
            {numRequest}
          </div>
        </div>
      </div>

      <div>
        <TableContainer sx={{ padding: 0, margin: 0 }}>
          <Table sx={{ padding: 0 }}>
            <TableHead>
              <TableRow sx={{ padding: 0 }}>
                <TableCell sx={{ fontSize: "10px" }}>MATERIALS</TableCell>
                <TableCell align='right' sx={{ fontSize: "10px" }}>
                  QUANTITY
                </TableCell>
                <TableCell align='right' sx={{ fontSize: "10px" }}>
                  STATUS
                </TableCell>
                <TableCell align='right' sx={{ fontSize: "10px" }}>
                  REQUEST
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ padding: 0 }}>
                  <TableCell sx={{ fontSize: "10px" }}>{row.name}</TableCell>
                  <TableCell align='right' sx={{ fontSize: "10px" }}>
                    {row.calories}
                  </TableCell>
                  <TableCell align='right' sx={{ fontSize: "10px" }}>
                    {row.fat}
                  </TableCell>
                  <TableCell align='right' sx={{ fontSize: "10px" }}>
                    {row.carbs}
                  </TableCell>
                  <TableCell align='right' sx={{ fontSize: "10px" }}>
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className='flex justify-end items-center '>
        <div className='text-sm text-neutral-700 p-0 border-b-red-100'>
          View Details
        </div>
      </div>
      <div className='flex gap-5 items-center text-sm text-neutral-600'>
        <div>Progress</div>
        <progress
          className='progress progress-success w-56 flex-1'
          value='70'
          max='100'
        ></progress>

        <div>70%</div>
      </div>
    </div>
  );
};

export default InformationCart;
