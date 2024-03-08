import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import About from "./About";
import Home from "./Home";
import Courses from "./Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./About";
import BookTrial from "./BookTrial";

function App() {
  // const containerStyle = {
  //   width: "100vw",
  //   height: "100vh",
  //   backgroundImage: `url(${require("./resource/musicbg.jpg")})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    // <div className="App" style={containerStyle}>
    //   <Navbar></Navbar>
    //   <Cards></Cards>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booktrial" element={<BookTrial/>}/>
      </Routes>
    </Router>
  );
}

export default App;
