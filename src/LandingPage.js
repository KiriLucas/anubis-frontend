import { Grid, Typography } from '@mui/material';
import React from 'react'
import LoginForm from './login.js';
import NewAccountForm from './newAccount.js';
import Divider from '@mui/material/Divider'
import { ToastContainer, toast } from 'react-toastify';

import './Main.css';

const LandingPage = () => {

  const paperStyle = {
    borderRadius: '3px',
    // backgroundColor: 'rgba(199, 168, 249, 0.08)',
    background: 'rgba(0, 0, 0, 0)',
    borderRadius: '10px',
    backdropFilter: 'blur(7.2px)',
    color: 'black',
    // padding: 20,
    // height: '25vh',
    width: '50vw',
    display: 'flex',
    marginTop: '25vh',
    marginBottom: '25vh',
    marginLeft: '25vw',
    marginRight: '25vw',
    // boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2), 0px 5px 5px 0px rgba(0,0,0,0.24)'
  }

  const itemStyle = {
    padding: '10px'
  }

  const toastComponent = () => {
    return <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  }

  return (
    <Grid>
      {toastComponent()}

      <Grid container style={paperStyle} spacing={2}>
        <Grid item xs={5} style={itemStyle}>
          <LoginForm />
        </Grid>

        <Divider orientation="vertical" flexItem>
          <h3><b> OR </b></h3>
        </Divider>

        <Grid container xs={5} style={itemStyle}>
          <NewAccountForm />
        </Grid>

      </Grid>

    </Grid>
  )
}

export default LandingPage;
