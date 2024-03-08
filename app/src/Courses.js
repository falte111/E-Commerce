import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import { Grid, Toolbar } from "@mui/material";
//import background from "./resource/musicbg.jpg";

function Courses() {
  return (
    <div>
    <Grid container spacing={0}  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '20vh' }}>
      <Grid item lg={12} md={12} xs={12}><Toolbar><Navbar></Navbar></Toolbar></Grid>
      <Grid  item lg={12} md={12} xs={12}>
      <h1>Classes</h1>
      </Grid>
    </Grid>
    </div>
  );
}
export default Courses;
