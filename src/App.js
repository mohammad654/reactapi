import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home,About,Contact } from "./components/index";
import NavBar from "./navbar";
function App() {
  return (
    <div className="App">
     
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
