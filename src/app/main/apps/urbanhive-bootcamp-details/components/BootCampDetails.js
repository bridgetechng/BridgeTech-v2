import FusePageSimple from '@fuse/core/FusePageSimple';
import { Link } from 'react-router-dom'


import {Typography,Icon,AppBar,Card,CardHeader,CardActions,CardContent,CardMedia,CssBaseline,Grid,Container} from '@material-ui/core';
import { styled,createTheme, ThemeProvider  } from '@mui/material/styles';
import {makeStyles} from  '@material-ui/core/styles';
import Stack from '@mui/material/Stack';

import { useState } from 'react';

import { Paper,Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import AVTR1 from "../../../urbanhive-assets/gray-copy.jpg" ;

import TNAIL1 from  "../../../urbanhive-assets/urbanhive-thumbnails/fundamentals1.png";


function BootCampDetailsCard() {

 

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000000',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
     
  },
});

 /*page regulation states */
 const [page1,setPage1] = useState(true)


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <>
     <Container maxWidth="lg">
     <ThemeProvider theme={theme}>
      <CssBaseline/> 
        <Typography variant='h4' align="center" color="textPrimary" gutterBottom paragraph style={{marginTop:"4rem"}}> 
         Our Bootcamps
        </Typography>
        <hr/>
    {page1 &&
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR1}/>
          </Avatar>
        }
       
        title="BY: DAGOGO CLINTON URANTA"
        subheader="May 12, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       <b> React JS/Flutter Bootcamp</b><br/>  (16 Sessions).
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>React JS/Flutter Bootcamp</b> (16 Sessions)
        </Typography>
        <p style={{fontSize: '15px'}}>
         This bootcamp is split into two parts,First we talk about React,
          state management, props and class based components. Then we go into flutter,
           talking about elements of the Dart language.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
          
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          
          <Icon className="text-20" >
             list
           </Icon>
             &nbsp;&nbsp;
             <a href="https://youtu.be/N3KLE4I3rNQ"  target="_blank" rel="noopener noreferrer" > <b>Details</b>  </a>
            
          </Button>
          
         
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem"}}>
          <Icon className="text-20" >
          account_balance_wallet
           </Icon>
             &nbsp;
            <Link to={'/apps/bookdev'} style={{textDecoration:'none',color:"white"}}> <b>Buy</b>  </Link>
          </Button>
          
          <Stack spacing={1} direction="row"  style={{color:"#f2db05"}}>
             <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
          </Stack>
          
          
          </Stack>

         
        </Grid>
       
      </Grid>

      <hr/>
     
   
    </>
   }

     </ThemeProvider>
     </Container>
    </>
  );
}

export default BootCampDetailsCard;
