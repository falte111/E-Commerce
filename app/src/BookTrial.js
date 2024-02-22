import Navbar from "./Navbar";
import { Grid, TextField, Toolbar } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import { useState } from "react";
function BookTrial() {
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
    <Grid>
      <Toolbar><Navbar></Navbar></Toolbar>
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
          </Grid>
        </Grid>
        </div>
    )
    }
    export default BookTrial;