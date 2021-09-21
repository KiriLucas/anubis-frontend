import { Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import leftEye from './left-eye.svg';
import rightEye from './right-eye.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({})

  const onChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  return (

    <div>
      <Grid container spacing={1} class="potato">
        <Grid item sm={4}>
          <img class="eye left-eye" src={leftEye} />
        </Grid>
        <Grid item sm={4}>
          <img class="eye right-eye" src={rightEye} />
        </Grid>
      </Grid>

        {
        //* Sign up form 
        }

        
        {/* <Grid container spacing={1} class="potato">
          <Grid item sm={12}>
            <TextField name="username" label="Username" variant="standard" onChange={onChange} fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="password" label="Password" type="password" variant="standard" onChange={onChange} fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="email" label="E-mail" variant="standard" onChange={onChange} fullWidth />
          </Grid>
          <Grid item sm={12}>
          </Grid>
          <Grid item sm={12} sx={{ 'padding-top': '3vh' }} >
            <Button variant="" fullWidth
              disabled={!formData.username || !formData.password || !formData.email}>Sign In</Button>
          </Grid>
        </Grid> */}
      </div>
  );
}

export default App;
