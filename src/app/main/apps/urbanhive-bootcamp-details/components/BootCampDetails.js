import FusePageSimple from '@fuse/core/FusePageSimple';
import { Link, useHistory } from 'react-router-dom'


import {Box,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox} from '@material-ui/core';
import { styled,createTheme, ThemeProvider  } from '@mui/material/styles';
import {makeStyles} from  '@material-ui/core/styles';
import Stack from '@mui/material/Stack';

import { useState, useEffect } from 'react';

import { Paper,Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import TNAIL1 from  "../../../urbanhive-assets/urbanhive-thumbnails/fundamentals1.png";
import { PaystackButton } from 'react-paystack';
import Modal from '@mui/material/Modal';
import { buyBootcamp } from 'redux/actions/bootcamp.action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const courses = [
  {id: 1, label: 'Installing Visual Studio Editor'},
  {id: 2, label: 'Setting Up Firebase'},
  {id: 3, label: 'Learning Webpack, ES5 & ES6'},
  {id: 4, label: 'Flutter & Material Design'},
];



function BootCampDetailsCard() {
  const { user } = useSelector((state) => state.login);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const history = useHistory();

const [state, setState] = useState({
  type: {}, // <-- object map
})

useEffect(() => {
  console.log(state)
}, [state])


const checkboxChange = (e) => {
  const { name } = e.target
  setState((prevState) => ({
    ...prevState,
    type: {
      ...prevState.type,
      [name]: !prevState.type[name], // <-- toggle state
    },
  }))
}

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

const publicKey = 'pk_test_41be8d2866325ed0e9bcf8734f6d31706640d968';
const [amount, setAmount] = useState(500000);
const [email, setEmail] = useState(user.email)
const [name, setName] = useState(user.name)


const componentProps = {
  email,
  amount,
  metadata: {
    name,
  },
  publicKey,
  text: "Pay Now",
  onSuccess: () => {
    handleSubmit();
    // alert("You have successfully booked a dev😁!");
  },
  onClose: () => alert("Wait! Don't leave :("),
}


const handleSubmit = () => {
  let today = new Date().toLocaleDateString()
   dispatch(buyBootcamp(state, user.uid, today, history));
}

  const validateBootcamp = () => {
    console.log('Val:- ', state);
    let verify = Object.values(state.type);
     let verifyTrue = verify.includes(true);
      let count = verify.reduce((total,x) => (x==true ? total+1 : total), 0)
     if(verifyTrue){
      setAmount(count * amount);
      handleOpen();
     }else{
      alert('You have not checked any bootcamp course');
      console.log('Empty o...', state.type);
     }

  }

  return (
    <>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Proceed with payment to buy
          </Typography> */}
          <PaystackButton {...componentProps} className="paystack-button"/>
        </Box>
      </Modal>


     <Container maxWidth="lg">
     <ThemeProvider theme={theme}>
      <CssBaseline/> 
        <Typography variant='h4' align="center" color="textPrimary" gutterBottom paragraph style={{marginTop:"4rem"}}> 
         Bootcamp Details
        </Typography>
        <hr/>
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       
        <Grid item xs={6}>
        {/* <Card sx={{ maxWidth: 545 }}> */}

      <CardMedia
       style={{border: '1px solid black', backgroundColor: '#fff', paddingLeft: '30px', paddingRight: '30px'}}
        component="img"
        height="250"
        image={TNAIL1}
        alt="Paella dish"
      />
      <br/><br/>
 {
  courses.map(c => {
    return (
      <>
      <Grid container spacing={2} style={{borderTop: '1px solid black'}}>
      <Grid item xs={8} md={10}>
      {/* <FormControlLabel control={<Checkbox checked={checkedState[c.id]} onChange={() => handleOnChange(c.id)} />}  label={<span style={{ fontSize: '17px' }}>{c.label}</span>} /> */}
      <FormControlLabel 
      control={
      <Checkbox 
      checked={state.type.index} 
      name={c.label} 
      value={state.type[c.label]} 
      onChange={checkboxChange}
       />}  
       label={<span style={{ fontSize: '17px' }}>{c.label}</span>} />
      </Grid>
      <Grid item xs={6} md={2}>
      {/* <Button onClick={handleSubmit} variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"2rem"}}>
           <b>Buy</b>
      </Button> */}
      </Grid>
      </Grid>
      
      </>
    )
  })
 }
  <hr style={{borderTop: '1px solid black'}}/>
  <br/>

 <Button onClick={validateBootcamp} variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"2rem", marginLeft: "40%"}}>
           <b>Buy</b>
 </Button>



  
      
    </Grid>
       

      </Grid>

      <hr/>
     
   
    </>

     </ThemeProvider>
     </Container>
    </>
  );
}

export default BootCampDetailsCard;
