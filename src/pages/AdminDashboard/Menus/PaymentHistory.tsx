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

const initialPayments = [
  {
    id: 1,
    guest: "John Doe",
    amount: "$200",
    date: "2024-01-25",
    status: "Completed",
  },
  {
    id: 2,
    guest: "Jane Smith",
    amount: "$350",
    date: "2024-01-26",
    status: "Pending",
  },
  {
    id: 3,
    guest: "Alice Johnson",
    amount: "$150",
    date: "2024-01-27",
    status: "Completed",
  },
];

export default function PaymentHistory() {
  const [payments, setPayments] = useState(initialPayments);

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>
        Payment History
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="payment history table">
          <TableHead>
            <TableRow>
              <TableCell>S.N</TableCell>
              <TableCell>Guest Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment, index) => (
              <TableRow key={payment.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{payment.guest}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>
                  <button className="bg-[#344A71] text-white px-4 p-2 rounded-lg cursor-pointer">
                    View
                  </button>
                  <button className="bg-[#FDE55B] text-black px-4 p-2 rounded-lg ml-2 cursor-pointer">
                    Refund
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
