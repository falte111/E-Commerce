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
import orchestral1 from "./resource/orchestral1.jpg"
import orchestral2 from "./resource/orchestral2.jpg"
import orchestral3 from "./resource/orchestral3.jpg"
import orchestral4 from "./resource/orchestral4.jpg"
import classroom from "./resource/classroom.jpg"
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"
import { Grid } from "@mui/material";
import React, { useState, useEffect } from 'react';
import './BackgroundChanger.css'; 
import './imagehover.css'
import Divider from '@mui/material/Divider';

function Home() {
  const backgroundimages =[
    background,
    background2,
    background3
  ]

  const orchestralimages=[
    orchestral1,
    orchestral2,
    orchestral3,
    orchestral4
  ]

  const [backgroundimageused, setBackGroundImageUsed] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setBackGroundImageUsed(prevIndex => (prevIndex + 1) % backgroundimages.length);
    }, 8000);

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
      <Grid className="background-container" style={{backgroundImage: `url(${(backgroundimages[backgroundimageused])})`, backgroundRepeat:"no-repeat"}}>
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
      </Grid>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/+6591124691?text=Hi%2C%20I%20am%20interested%20in%20the%20free%20trial%20lesson%20by%20Quindicesima%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:0,right:0}} /></a>
      {/* Line break by adding br tag to separate background and contents */}
      <br/> 
      <Divider/>

      <Grid className="musiceducation-section" container  direction="column"
  alignItems="center"
  justifyContent="center">
        <Grid item>
          <div className="container">
          <h1 style={{textAlign:"center"}}>MUSIC EDUCATION</h1>
          {/* https://stackoverflow.com/questions/66226603/how-to-fit-images-to-different-screen-resolutions */}
          <a href="http://localhost:3000/courses">
          <img className="image" src={classroom} style={{maxwidth:"100%" , height:"600px"}}></img>
          <div class="middle">
    <div class="text">FIND OUT MORE!</div>
  </div>
  </a>
          </div>
        </Grid>
      </Grid>
<br/>
<Divider/>
<Grid className="orchestral-section" container direction= "row" alignItems="center"  justifyContent="center">
  <div>
    <h1 style={{textAlign:"center"}}>ORCHESTRAL</h1>
    <Grid container spacing={2}>
    {orchestralimages.map(orchestralimage=>(
      <Grid item>
        <Card>
      <CardMedia sx={{ height: 400, width:400 }}
       image ={orchestralimage}/>
      <CardContent>
        <h1>
          Lizard
        </h1>
      </CardContent>
        </Card>
      </Grid>

    ))
    }
    </Grid>
  </div>

</Grid>

    </div>
    
  );
}
export default Home;
