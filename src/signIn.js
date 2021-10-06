import { Grid, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Main.css';

function SignInForm(props) {
  const [formData, setFormData] = useState({})

  const handleClose = () => {
    props.onCancel()
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const token = { 'user': 'pessoa', 'token': '123' }
  const usuario = {'username': 'abc', 'password':'abc'}

  const handleSubmit = () => {
    const api = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(token)
      }, 500);
    })
    api.then((data) => {
      localStorage.setItem('token', JSON.stringify(data))
      const batata = JSON.parse(localStorage.getItem('token'))
      console.log(batata.token)
    
    }).catch()

    

  }

  return (

    <div>
      <Dialog
        open={props.renderLoginModal}
        maxWidth={'md'}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Create a new Anubis account in order to be able to play */}
          </DialogContentText>
          <Grid item sm={12}>
            <TextField name="username" label="Username" variant="standard" onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="password" label="Password" type="password" variant="standard" onChange={handleChange} required fullWidth />
          </Grid>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!formData.username || !formData.password} onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
      {/* <Grid container spacing={1} class="potato">
          <Grid item sm={12}>
            <TextField name="username" label="Username" variant="standard" onChange={handleChange} fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="password" label="Password" type="password" variant="standard" onChange={handleChange} fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="email" label="E-mail" variant="standard" onChange={handleChange} fullWidth />
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

export default SignInForm;
