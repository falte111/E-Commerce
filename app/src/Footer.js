import { Grid, Box} from "@mui/material";
import carousellicon from "./resource/carousellicon.png";
import instagramicon from "./resource/instagramicon.png";
import facebookicon from "./resource/facebookicon.png";
function Footer() {
    return(
        <Box sx={{ width: '100%', backgroundColor: '#302424'}}>
        <Grid container   direction="row"
        alignItems="center"
        justifyContent="center">

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <p style={{color:"white",fontSize:"25px", textAlign:"center"}}>You can find us at</p>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  display="flex" justifyContent="center">
             <span style={{padding:"20px"}}>
            <img src={facebookicon} width={50} height={50}></img>
            </span>
            <span style={{padding:"20px"}}>
            <img src={instagramicon} width={50} height={50}></img>
            </span>
            <span style={{padding:"20px"}}>
            <img src={carousellicon} width={50} height={50}></img>
            </span>
        </Grid>
        </Grid>
        <Grid item>
        <p style={{color:"white",fontSize:"25px", textAlign:"center"}}>Copyright © 2024 Quindicesima </p>
        </Grid>
        </Grid>
        </Box>
    )
}


export default Footer;