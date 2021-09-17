import { Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [formData, setFormData] = useState({})

  const onChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  console.log(formData)

  return (
    <div class="App">
      <div class="container">
        <Grid container spacing={1}>
          <Grid item sm={8}>
            <TextField name="username" label="Username" variant="standard" onChange={onChange} />
          </Grid>
          <Grid item sm={8}>
            <TextField name="password" label="Password" type="password" variant="standard" onChange={onChange} />
          </Grid>
          <Grid item sm={8}>
            <TextField name="email" label="E-mail" variant="standard" />
          </Grid>
          <Grid item sm={4}>
          </Grid>
          <Grid item sm={4}>
            <Button variant="contained" fullWidth >Submit</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
