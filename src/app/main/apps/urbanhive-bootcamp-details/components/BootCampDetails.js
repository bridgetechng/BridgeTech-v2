import FusePageSimple from '@fuse/core/FusePageSimple';
import { Link, useHistory } from 'react-router-dom'


import {Box,Icon,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox} from '@material-ui/core';
import { styled,createTheme, ThemeProvider  } from '@mui/material/styles';
import {makeStyles} from  '@material-ui/core/styles';
import Stack from '@mui/material/Stack';

import { useState, useEffect } from 'react';

import { Paper,Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import TNAIL1 from  "../../../urbanhive-assets/urbanhive-thumbnails/fundamentals1.png";
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
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
let amount = 100000;
// let price;
const [email, setEmail] = useState(user.email)
const [name, setName] = useState(user.name)

let verify = Object.values(state.type);
let verifyTrue = verify.includes(true);
let count = verify.reduce((total,x) => (x==true ? total+1 : total), 0)



const componentProps = {
  email,
  amount: amount * count,
  metadata: {
    name,
  },
  publicKey,
  text: "Pay Now",
  onSuccess: () => {
    handleSubmit();
  },
  onClose: () => alert("Wait! Don't leave :("),
}


const handleSubmit = () => {
  let today = new Date().toLocaleDateString()
   dispatch(buyBootcamp(state, user.uid, today, history));
}
  const validateBootcamp = (initializePayment) => {
    console.log('Val:- ', state);
    let verify = Object.values(state.type);
     let verifyTrue = verify.includes(true);
     count = verify.reduce((total,x) => (x==true ? total+1 : total), 0)
     if(verifyTrue){
       amount = amount * count;
             // handleOpen();
      console.log('Count:=', count);
      console.log('Price:=', amount);
        initializePayment();
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
          <PaystackButton {...componentProps} className="paystack-button"/>
        </Box>
      </Modal>


     <Container maxWidth="lg">
     <ThemeProvider theme={theme}>
      <CssBaseline/> 

       {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
       <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button onClick={() => history.push('/apps/bootcamp')}variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"2rem", marginLeft: "1%"}}>
        <Icon className="text-20" >
        arrow_back
          </Icon>
            &nbsp; 
        <b>Back</b> 
       </Button>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='h4' align="center" color="textPrimary" gutterBottom paragraph style={{marginRight:"1rem"}}> 
         Bootcamp Details
        </Typography>
        </Grid>
      </Grid>

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
      <Grid item xs={8} md={14}>
       <FormControlLabel 
      control={
      <Checkbox 
      style={{color: 'black'}}
      checked={state.type.index} 
      name={c.label} 
      value={state.type[c.label]} 
      onChange={checkboxChange}
       />}  
       label={<span style={{ fontSize: '17px' }}>{c.label}</span>} />
      </Grid>
      <Grid item xs={6} md={2}>
      </Grid>
      </Grid>
      
      </>
    )
  })
 }
  <hr style={{borderTop: '1px solid black'}}/>
  <br/>
                 {/* <div>
                <button onClick={() => {
                    validateBootcamp();
                }}>Paystack Hooks Implementation</button>
            </div> */}

  {/* <Button onClick={validateBootcamp} variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"2rem", paddingLeft:"5rem", paddingRight: "5rem", marginLeft: "35%"}}>
  <Icon className="text-20" >
  account_balance_wallet
    </Icon>
      &nbsp;
       <b>Buy</b> 
  </Button> */}

            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => <Button onClick={() => {validateBootcamp(initializePayment)}} variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"2rem", paddingLeft:"5rem", paddingRight: "5rem", marginLeft: "35%"}}>
                <Icon className="text-20" >
                account_balance_wallet
                  </Icon>
                    &nbsp;
                    <b>Buy</b> 
                </Button>
                }
            </PaystackConsumer>  
      
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
