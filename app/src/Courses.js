import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import { Grid, Toolbar, Box } from "@mui/material";
//import background from "./resource/musicbg.jpg";
import kidplayingpiano from "./resource/kidplayingpiano.jpg"
import teacherorchestral from "./resource/teacherorchestral.jpg"
import musictheory from "./resource/musictheory.jpg"
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Face3SharpIcon from '@mui/icons-material/Face3Sharp';
function Courses() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '20vh' }}
  >
    <Grid item lg={12} md={12} xs={12}>
      <Toolbar>
       <Navbar></Navbar>
      </Toolbar>
    </Grid>

    <Grid className="courses-section" container direction="row" justifyContent="center" textAlign="center">
      <Grid item lg={12} md={12} xs={12}>
        <p style={{ textAlign: "center", fontSize: "50px" }}>OUR CLASSES</p>
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img className="image" src={kidplayingpiano} style={{ maxWidth: "100%", height: "auto", width: "auto", maxHeight: "550px" }} />
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
        <b style={{fontSize:"30px"}}>Classical Instruments</b>
        <p>Our school is a solution for families who would like to expose their children to the world of music!</p>
        <p>Pricing (1 hour per week):</p>
        <b>9% GST included in prices</b>
        <p>Initial/Beginner - $545.55 (13 week term) / $207.83 (monthly)</p>
        <p>Grade 2 - $701.415 (13 week term) / $259.78 (monthly)</p>
        <p>Grade 3 - $779.35 (13 week term) / $285.77 (monthly)</p>
        <p>Grade 4 - $857.29 (13 week term) /  $311.74 (monthly)</p>
        <p>Grade 5 - $935.22 (13 week term) /  $309.84 (monthly)</p>
        <p>Grade 6 - $929.5 (13 week term) / $337.73 (monthly)</p>
        <p>Grade 7 - $1,091.10 (13 week term) / $357.5 (monthly)</p>
        <p>Grade 8 - $1,072.5 (13 week term) / $389.68 (monthly)</p>
        <p>DipABRSM/ATCL/ARSM - $1,402.84 (13 week term) /  $519.57 (monthly)</p>
        <p>LRSM/LTCL - $1,558.7  (13 week term) / $571.56 (monthly)</p>
        <p>FRSM/FTCL - $1,714.57 (13 week term) / $597.51 (monthly)</p>
      </Grid>
      
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img className="image" src={teacherorchestral} style={{ maxWidth: "100%", height: "auto", width: "825px", maxHeight: "550px" }} />
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
      <b style={{fontSize:"30px"}}>Contemporary & Popular Instrument Lessons</b>
      <p>Our school is a solution for families who would like to expose their children to the world of music!</p>
      <p>Pricing (1 hour per week):</p>
      <b>9% GST included in prices</b>
      <p>Level 1 - $701.42  (13 week term) / $259.78 (monthly)</p>
      <p>Level 2 -  $779.35 (13 week term) / $285.77 (monthly)</p>
      <p>Level 3 -  $857.29 (13 week term) /  $311.74 (monthly)</p>
      <p>Level 4 -  $935.22 (13 week term) /  $337.73 (monthly)</p>
      <p>Level 5 -  $1,013.16 (13 week term) / $363.70 (monthly)</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      </Grid>
    
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img className="image" src={musictheory} style={{ maxWidth: "100%", height: "auto", width: "auto", maxHeight: "550px" }} />
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
      <b style={{fontSize:"30px"}}>Academics & Tuition (monthly)</b>
      <p>Our school is a solution for families who would like to expose their children to the world of music!</p>
      <p>Conducting - $780 </p>
      <p>Classical/Popular Music Composition - $750</p>
      <p>Orchestration + Arranging - $750</p>
      <p>History of music - $700</p>
      <p>Theory (Graded - ABRSM) - Dependent on Grade, refer to Classical lessons.</p>
      <p>NAFA/Lasalle/YST/UAS Module tuition - Dependent on Module, please discuss with staff.</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      </Grid>      
    </Grid>
    <Grid>
      <p className="whychooseus">Why choose us?</p>
    </Grid>

    //Student Reviews section
    <Grid container  spacing={3}
    direction="row" 
    justifyContent="center">
      <Grid item xl={6} style={{backgroundColor:"#9ba6a5"}}>
      <Box
          sx={{
            backgroundColor: "#9ba6a5",
            padding: 2, // Add padding if needed
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%" // Adjust height if needed
          >
            <PersonSharpIcon sx={{ fontSize: 105, color: "#2772db" }} />
          </Box>
          <p>
          “Lessons have been extremely hollistic & “free flow”, Catering to what I require in order to improve my skills and become a better player instead of a rigid syllabus structure.”
          </p>
          <b>-Lee Sek Heng, Grade 8 Piano Performance ABRSM, PASS</b>
        </Box>
        
      </Grid>

      <Grid item xl={6} style={{backgroundColor:"#9ba6a5"}}>  
      <Box
          sx={{
            backgroundColor: "#9ba6a5",
            padding: 2, // Add padding if needed
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%" // Adjust height if needed
          >
            <Face3SharpIcon sx={{ fontSize: 86, color: "#2772db" }} />
          </Box>
          <p>
          "Dr Edwin Choy has a wealth of knowledge in music, and is able to convey it to his students well. His approach to teaching allows his students to progress quickly as he us able to identify their weakness and strengths and recommends them training to build up the skill they are lacking. This allowed me to quickly improve my playing skills very quickly and to play pieces I used to think were beyond my reach."
          </p>
          <b>-Aswin Kummaran s/o Tamilarasu, Grade 8 Piano ABRSM student, Music Composition, Orchestration, Arranging & Production</b>
        </Box>
        
      </Grid>
    </Grid>

    <a aria-label="Chat on WhatsApp" href="https://wa.me/+6591124691?text=Hi%2C%20I%20would%20like%20to%20find%20out%20more%20about%20the%20courses%20%20offered%20by%20Quindicesima%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:0,right:0}} /></a>
  </Grid>
  
  
);

};
export default Courses;
