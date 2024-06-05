import Navbar from "./Navbar";
import { Grid, TextField, Toolbar } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import { useState } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from "./Footer"
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"
import axios from "axios";


function BookTrial() {
    const API_URL = "http://localhost:8080";
    const [value, setValue] = useState('+65')
    const handleChange = (newValue) => {
        setValue(newValue)
      }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submit gbutton pressed")
        console.log(e.target.firstNameInput.value)
        var userParticulars={
          firstName: e.target.firstNameInput.value,
          lastName: e.target.lastNameInput.value ,
          contactNumber: e.target.contactNumberInput.value,
          email: e.target.emailInput.value
        }
        axios.post(API_URL+"/booktrial" , userParticulars)
    }
    const buttonStyle = {
        backgroundColor:"#a054e4",
        borderRadius: 50,
        width:"180px",
        height:"40px",
     }

    return(
        <div>
        <Grid container spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '40vh' }}>
    <Grid item lg={12} md={12} xs={12}><Toolbar><Navbar></Navbar></Toolbar></Grid>
    <Grid item lg={12} md={12} xs={12}>
      {/* <Toolbar><Navbar></Navbar></Toolbar> */}
    <div style={{maxWidth:"70%", paddingBottom:"2%"}}>
            <h1>Book Online</h1>
            <h3>Experience the difference at Quindicesima, where your unique talents and goals are nurtured and celebrated.
‍</h3>
<h3>Book a trial today and embark on a personalized learning journey tailored to your individual strengths and interests!</h3>
</div>

            <form onSubmit={handleSubmit}>
              <div>
            <TextField              id="firstname"
            name = "firstNameInput"
            required
          label="First Name"
          placeholder="Enter your first name"
          multiline
          variant="standard"  sx={{
            width:300,
            maxWidth: '70%',
            paddingBottom:"2%"
          }}></TextField>
          </div>
          <div>
          <TextField              id="lastname"
            name = "lastNameInput"
            required
          label="Last Name"
          placeholder="Enter your last name"
          multiline
          variant="standard"  sx={{
            width: 300,
            maxWidth: '70%',
            paddingBottom:"2%"
          }}></TextField>
          </div>
          <div>
          <MuiTelInput name = "contactNumberInput" value={value} onChange={handleChange} style={{     width: 300,
            maxWidth: '70%', paddingBottom:"2%"}}/>
            </div>
            <div>
              <TextField              id="email"
              name = "emailInput"
            required
          label="Email"
          placeholder="Enter your email address"
          multiline
          variant="standard"  sx={{
            width: 300,
            maxWidth: '70%', paddingBottom:"2%"
          }}></TextField>
          </div>
          <div><button  type ="submit" style={buttonStyle}><span style={{color:"white", fontFamily:"Droid Sans"}}>SUBMIT</span></button></div>
          </form>
          <Grid item lg={12} md={12} xs={12}>
          <div><h1>Address</h1></div>
          <div><PlaceIcon color="action"></PlaceIcon> <text>36 Toa Payoh, #11-341, Singapore, Singapore</text></div>
  <div><PhoneIcon color = "action"></PhoneIcon><text>+65 9145 0050</text></div>
          </Grid>
          </Grid>
          <Footer></Footer>
        <a aria-label="Chat on WhatsApp" href="https://wa.me/+6591124691?text=Hi%2C%20I%20am%20interested%20in%20the%20free%20trial%20lesson%20by%20Quindicesima%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:5,right:5}} /></a>
        </Grid>
        
        {/* <Grid container spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
        <Grid item lg={6} md={6} xs={6}>
          <div><h1>Address</h1></div>
          <div>
          <PlaceIcon color="action"></PlaceIcon> <text>36 Toa Payoh, #11-341, Singapore, Singapore</text></div>
  <div><PhoneIcon color = "action"></PhoneIcon><text>+65 9145 0050</text></div>

        </Grid>
        </Grid> */}
  
        </div>
    )
    }
    export default BookTrial;