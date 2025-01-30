import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const initialBookings = [
  {
    id: 1,
    guest: "John Doe",
    room: "Deluxe",
    checkIn: "2024-02-01",
    checkOut: "2024-02-05",
    status: "Confirmed",
  },
  {
    id: 2,
    guest: "Jane Smith",
    room: "Single",
    checkIn: "2024-02-10",
    checkOut: "2024-02-15",
    status: "Pending",
  },
  {
    id: 3,
    guest: "Alice Johnson",
    room: "Family",
    checkIn: "2024-03-01",
    checkOut: "2024-03-05",
    status: "Cancelled",
  },
];

export default function BookingManage() {
  const [bookings, setBookings] = useState(initialBookings);

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="booking management table">
          <TableHead>
            <TableRow>
              <TableCell>S.N</TableCell>
              <TableCell>Guest Name</TableCell>
              <TableCell>Room Type</TableCell>
              <TableCell>Check-In</TableCell>
              <TableCell>Check-Out</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={booking.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{booking.guest}</TableCell>
                <TableCell>{booking.room}</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  <button className="bg-green-600 text-white px-4 p-2 rounded-lg ">
                    View
                  </button>
                  <button className="bg-[#344A71] text-white px-4 p-2 rounded-lg cursor-pointer ml-2">
                    Edit
                  </button>
                  <button className="bg-[#FDE55B] text-black px-4 p-2 rounded-lg cursor-pointer ml-2">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
