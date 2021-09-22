import { Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import leftEye from './left-eye.svg';
import rightEye from './right-eye.svg';
import SignUpForm from './signUp.js';

import './App.css';

function App() {
  const [renderLoginModal, setRenderLoginModal] = useState(false)

  const onClick = () => {
    setRenderLoginModal(true)
  }


  return (
    <div>
      <SignUpForm potato={renderLoginModal}/>
      <Grid container spacing={1}>
        <Grid item sm={6} onClick={onClick}>
          <img class="eye left-eye" src={leftEye}/>
          <span class="test"><b>NEW ACCOUNT</b></span>
        </Grid>
        <Grid item sm={6}>
          <img class="eye right-eye" src={rightEye} />
          <span class="test"><b>LOG IN</b></span>
        </Grid>
      </Grid>
      </div>
  );
}

export default App;
