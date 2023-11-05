import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./About";

function App() {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${require("./resource/musicbg.jpg")})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    // <div className="App" style={containerStyle}>
    //   <Navbar></Navbar>
    //   <Cards></Cards>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
