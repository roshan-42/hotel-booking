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

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin-panel"
            element={<Navigate to="/admin-panel/dashboard" />}
          />
          <Route
            path="/admin-panel/:menuSlug"
            element={<AdminDashboardLayout />}
          />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/roomtype" element={<RoomType />} />
          <Route path="/allrooms" element={<AllRooms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
