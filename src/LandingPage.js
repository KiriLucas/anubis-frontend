import { Grid } from '@mui/material';
import React, { useState } from 'react'
import leftEye from './left-eye.svg';
import rightEye from './right-eye.svg';
import SignUpForm from './signUp.js';
import LoginForm from './signIn.js';

import './Main.css';

function LandingPage() {
  const [renderNewAccountModal, setRenderNewAccountModal] = useState(false)
  const [renderLoginModal, setRenderLoginModal] = useState(false)

  const onClickNewAccount = () => {
    setRenderNewAccountModal(true)
  }

  const onClickLogIn = () => {
    setRenderLoginModal(true)
  }

  return (
    <div>
      <Grid container spacing={2}>
      <SignUpForm onCancel={() => setRenderNewAccountModal(false)} renderNewAccountModal={renderNewAccountModal} />
      <LoginForm onCancel={() => setRenderLoginModal(false)} renderLoginModal={renderLoginModal} />
        <Grid item sm={6} onClick={onClickNewAccount}>
          <img class="eye left-eye" src={leftEye} />
          <span class="test"><b>NEW ACCOUNT</b></span>
        </Grid>
        <Grid item sm={6} onClick={onClickLogIn}>
          <img class="eye right-eye" src={rightEye} />
          <span class="test"><b>LOG IN</b></span>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
