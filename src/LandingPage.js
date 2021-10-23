import { Grid } from '@mui/material';
import React from 'react'
import LoginForm from './signIn.js';

import './Main.css';

const LandingPage = () => {

  const paperStyle = {
    backgroundColor: '#fafafa',
    color: 'black',
    padding: 20,
    height: '35vh',
    width: '50%',
    marginTop: '10vh',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '10vh',
  }

  return (

      <Grid container style={paperStyle}>
        <Grid item xs={6}>
          <LoginForm />
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
      </Grid>


  );
}

export default LandingPage;
