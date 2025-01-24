import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboardLayout from "./pages/AdminDashboard/AdminDashboardLayout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-panel" element={<AdminDashboardLayout />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
