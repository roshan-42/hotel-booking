import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Homepage";
import Contact from "./pages/Contact";
import Hotels from "./pages/Hotels";
import RoomType from "./pages/RoomType";
import AllRooms from "./pages/AllRooms";
import FeedBack from "./pages/FeedBack";
import Login from "./pages/Login";
import Button from "./pages/Button";
import AdminDashboardLayout from "./pages/AdminDashboard/AdminDashboardLayout";
import HotelProfile from "./pages/HotelProfile";
import BookHotel from "./pages/BookHotel";
import RoomCategory from "./pages/RoomCategory";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/UserProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./pages/UserProfile";
import api from "./utils/api";
import { useEffect } from "react";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <ToastContainer />

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/hotels" element={<Hotels />} />
            <Route path="/roomtype" element={<RoomType />} />
            <Route path="/categorytype/:slug" element={<RoomCategory />} />

            <Route path="/allrooms" element={<AllRooms />} />
            <Route path="/profile" element={<UserProfile />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/button" element={<Button />} />
            <Route path="/hotelprofile/:slug" element={<HotelProfile />} />
            <Route path="/bookhotel" element={<BookHotel />} />
            {/* Admin Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route
                path="/admin-panel"
                element={<Navigate to="/admin-panel/dashboard" />}
              />
              <Route
                path="/admin-panel/:menuSlug"
                element={<AdminDashboardLayout />}
              />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  );
};

export default App;
