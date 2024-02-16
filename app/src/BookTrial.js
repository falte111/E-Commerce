import Navbar from "./Navbar";
import { Grid, TextField } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import { useState } from "react";
function BookTrial() {
    const [value, setValue] = useState('+65')
    const handleChange = (newValue) => {
        setValue(newValue)
      }
    const handleSubmit = (e) =>{
        e.preventDefault()
        var userParticulars={

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
        <Navbar></Navbar>
        <Grid container spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '40vh' }}>
            <h1>Book Online</h1>
            <h3>Experience the difference at Quindicesima, where your unique talents and goals are nurtured and celebrated.
‍</h3>
<h3>Book a trial today and embark on a personalized learning journey tailored to your individual strengths and interests!</h3>

            <TextField              id="firstname"
            required
          label="First Name"
          placeholder="Enter your first name"
          multiline
          variant="standard"  sx={{
            width: 500,
            maxWidth: '70%',
            paddingBottom:"2%"
          }}></TextField>
          
          <TextField              id="lastname"
            required
          label="Last Name"
          placeholder="Enter your last name"
          multiline
          variant="standard"  sx={{
            width: 500,
            maxWidth: '70%',
            paddingBottom:"2%"
          }}></TextField>
          <MuiTelInput value={value} onChange={handleChange} style={{     width: 500,
            maxWidth: '70%', paddingBottom:"2%"}}/>
              <TextField              id="email"
            required
          label="Email"
          placeholder="Enter your email address"
          multiline
          variant="standard"  sx={{
            width: 500,
            maxWidth: '70%', paddingBottom:"2%"
          }}></TextField>
          <div><button style={buttonStyle}><span style={{color:"white", fontFamily:"Droid Sans"}}>SUBMIT</span></button></div>
        </Grid>
        </div>
    )
    }
    export default BookTrial;