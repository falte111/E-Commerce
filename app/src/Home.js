import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import background from "./resource/musicbg.jpg";
import { Grid } from "@mui/material";
import { yellow } from "@mui/material/colors";

function Home() {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${require("./resource/musicbg.jpg")})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

 const buttonStyle = {
    backgroundColor:"yellow",
    borderRadius: 50,
    width:"180px",
    height:"40px"
 }
  return (
    <div>
      <Navbar></Navbar>
      <Grid className="innerDivHome" style={containerStyle}>
        <div className="homeText"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',}}>
        <div>
        <h1 style={{fontSize:"80px"}}>Music is your world</h1>
        <h3>Dont miss a chance!</h3>
        <button style={buttonStyle}>Start Learning</button>  
        {/* onMouseEnter={} */}
        </div>
        </div>

      </Grid>
    </div>
  );
}
export default Home;
