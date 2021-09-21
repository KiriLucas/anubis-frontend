import { Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import leftEye from './left-eye.svg';
import rightEye from './right-eye.svg';
import { SignUpForm } from './signUp';

import './App.css';

function App() {
  const [formData, setFormData] = useState({})

  const onChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const teste = () => {
    console.log('aaaaaaa')
  }

  return (

    <div>
      <Grid container spacing={1}>
        <Grid item sm={6} onClick={teste}>
          <img class="eye left-eye" src={leftEye}/>
          {/* <span>teste</span> */}
        </Grid>
        <Grid item sm={6}>
          <img class="eye right-eye" src={rightEye} />
        </Grid>
      </Grid>
      </div>
  );
}

export default App;
