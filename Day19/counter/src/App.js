import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Counter from "./Counter";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <nav style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/counter" style={{ marginRight: "10px" }}>
          Counter
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
