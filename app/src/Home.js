import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import background from "./resource/musicbg.jpg";
import background2 from "./resource/pianoplaying.jpg"
import background3 from "./resource/trumpet.jpg"
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"
import { Grid } from "@mui/material";
import React, { useState, useEffect } from 'react';
import './BackgroundChanger.css'; 

function Home() {
  const backgroundimages =[
    background,
    background2,
    background3
  ]
  const [backgroundimageused, setBackGroundImageUsed] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setBackGroundImageUsed(prevIndex => (prevIndex + 1) % backgroundimages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundimages.length]);

  // const containerStyle = {
  
  //   width: "100%",
  //   // '@media (min-width: 780px)': {
  //   //   width: '80%'
  //   // },
  //   height: "auto",
  //   backgroundImage: `url(${(backgroundimages[backgroundimageused])})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",

  // };

 const buttonStyle = {
    backgroundColor:"#fff474",
    borderRadius: 50,
    width:"180px",
    height:"40px",
 }
  return (
    
    <div>
      <Navbar></Navbar>
      <Grid className="background-container" style={{backgroundImage: `url(${(backgroundimages[backgroundimageused])})`}}>
        <div className="homeText"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',}}>
        <div>
        <h1 style={{fontSize:"80px", margin:"0px" , padding:"0px", fontFamily:"sans-serif", color: "white"}}>Music is your world</h1>
        <h3 style = {{paddingLeft:"35%", fontFamily:"sans-serif", color: "white"}}>Dont miss a chance!</h3>
        <div style={{paddingLeft:"35%"}}><button style={buttonStyle} onClick={()=>navigate("/booktrial")}><span style={{color:"#4f504b", fontFamily:"Droid Sans"}}>START LEARNING</span></button></div>
        {/* onMouseEnter={} */}
        </div>
        </div>
        <a aria-label="Chat on WhatsApp" href="https://wa.me/+6591124691?text=Hi%2C%20I%20am%20interested%20in%20the%20free%20trial%20lesson%20by%20Quindicesima%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:0,right:0}} /></a>
      </Grid>
      
    </div>
    
  );
}
export default Home;
