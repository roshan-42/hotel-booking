import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import api from "../../../utils/api";
import { Drawer } from "@mui/material";
import AddHotel from "./AddHotel";

const initialHotels = [
  { id: 1, name: "Grand Plaza Hotel" },
  { id: 2, name: "Ocean View Resort" },
  { id: 3, name: "Mountain Retreat" },
];

export default function HotelManage() {
  const [hotels, setHotels] = useState(initialHotels);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDelete = (id: number) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  const handleEdit = (id: number) => {
    alert(`Edit hotel with ID: ${id}`);
  };

  const handleAddHotel = () => {
    setDrawerOpen(true); // Open the Drawer when Add Hotel button is clicked
  };

  const closeDrawer = () => {
    setDrawerOpen(false); // Close the Drawer
  };

  const getHotels = async () => {
    try {
      const response = await api.get("/hotels/api/admin/hotels/");
      console.log("Check list of hotels", response?.data?.results);
      setHotels(response?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div className="p-4 w-full">
      <div className="text-2xl font-bold">Manage Hotel</div>
      <div className=" flex items-center justify-end">
        <button
          onClick={handleAddHotel}
          className="bg-[#344A71] text-white px-4 p-2 rounded-lg"
        >
          Add New Hotel
        </button>
      </div>

      <div className="mt-4  w-full">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.N</TableCell>
                <TableCell align="right">Hotel Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hotels.map((hotel, index) => (
                <TableRow key={hotel.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="text-start" align="right">
                    {hotel.name}
                  </TableCell>
                  <TableCell align="right">
                    <button
                      onClick={() => handleEdit(hotel.id)}
                      className="bg-[#344A71] text-white px-4 p-2 rounded-lg cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(hotel.id)}
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
        {/* Drawer for AddHotel */}
        <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
          <AddHotel onClose={closeDrawer} />
        </Drawer>
      </div>
    </div>
  );
}
