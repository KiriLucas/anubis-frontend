import { Grid, Typography } from '@mui/material';
import React from 'react'
import LoginForm from './login.js';
import NewAccountForm from './newAccount.js';

import './Main.css';

const LandingPage = () => {

  const paperStyle = {
    borderRadius: '3px',
    backgroundColor: '#fafafa',
    color: 'black',
    padding: 20,
    height: '20%',
    width: '40%',
    marginTop: '5%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '10vh',
  }

  const itemStyle = {
    padding: '10px'
  }

  return (
    <Grid container style={paperStyle} spacing={2}>
      <Grid item xs={5} style={itemStyle}>
        <LoginForm />
      </Grid>
      <Grid item xs={2} style={itemStyle}>
              <Typography align='center' style={{marginTop: '100%'}}><b> OR </b></Typography>
      </Grid>
      <Grid item xs={5} style={itemStyle}>
      <NewAccountForm />
      </Grid>
    </Grid>
  )
}

export default LandingPage;
