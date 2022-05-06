import React from "react";
import Navbar from "./components/NavBar";
import "./components/css/App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Signup from "./components/pages/Signup";
import Account from "./components/pages/Account";
import About from "./components/pages/About";
import Ticket from "./components/pages/Ticket";
import Start from "./components/pages/Start";
import TableSelect from "./components/pages/TableSelect";
import Confirmation from "./components/pages/Confirmation";
//import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/start/tableSelect" element={<TableSelect />} />
          <Route
            path="/start/tableSelect/confirmation"
            element={<Confirmation />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
