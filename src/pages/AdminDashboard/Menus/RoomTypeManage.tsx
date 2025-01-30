import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const initialRoomTypes = [
  { id: 1, type: "Deluxe" },
  { id: 2, type: "Single" },
  { id: 3, type: "Family" },
  { id: 4, type: "VIP" },
];

export default function RoomTypeManage() {
  const [roomTypes, setRoomTypes] = useState(initialRoomTypes);

  const handleDelete = (id: number) => {
    setRoomTypes(roomTypes.filter((room) => room.id !== id));
  };

  const handleEdit = (id: number) => {
    alert(`Edit room type with ID: ${id}`);
  };

  const handleAddRoomType = () => {
    const newRoomType = {
      id: roomTypes.length + 1,
      type: `New Room Type ${roomTypes.length + 1}`,
    };
    setRoomTypes([...roomTypes, newRoomType]);
  };

  return (
    <div className="p-4">
      <div className="text-2xl font-bold">Room Type Management</div>

      <button
        onClick={handleAddRoomType}
        className="bg-[#344A71] text-white px-4 p-2 rounded-lg mt-4"
      >
        Add New Room Type
      </button>
      <div className="mt-4">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.N</TableCell>
                <TableCell align="right">Room Type</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roomTypes.map((room, index) => (
                <TableRow key={room.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align="right">{room.type}</TableCell>
                  <TableCell align="right">
                    <button className="bg-green-600 text-white px-4 p-2 rounded-lg cursor-pointer ">
                      View
                    </button>
                    <button
                      onClick={() => handleEdit}
                      className="bg-[#344A71] text-white px-4 p-2 rounded-lg ml-2 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete}
                      className="bg-[#FDE55B] text-black px-4 p-2 rounded-lg ml-2 cursor-pointer"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
