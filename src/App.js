import { Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import leftEye from './left-eye.svg';
import rightEye from './right-eye.svg';
import SignUpForm from './signUp.js';

import './Main.css';
import './Fog.css';

function App() {
  const [renderLoginModal, setRenderLoginModal] = useState(false)

  const onClick = () => {
    setRenderLoginModal(true)
  }

  return (
    <div>
      <div id="foglayer_01" class="fog">
        <div class="image01"></div>
        <div class="image02"></div>
      </div>
      <div id="foglayer_02" class="fog">
        <div class="image01"></div>
        <div class="image02"></div>
      </div>
      <div id="foglayer_03" class="fog">
        <div class="image01"></div>
        <div class="image02"></div>
      </div>
      <Grid container spacing={2}>
      <SignUpForm onCancel={() => setRenderLoginModal(false)} renderLoginModal={renderLoginModal} />
        <Grid item sm={6} onClick={onClick}>
          <img class="eye left-eye" src={leftEye} />
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
