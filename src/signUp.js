import { Grid, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Main.css';

function SignUpForm(props) {
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

  return (

    <div>
      <Dialog
        open={props.renderLoginModal}
        maxWidth={'md'}
      >
        <DialogTitle>Create new account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Create a new Anubis account in order to be able to play */}
          </DialogContentText>
          <Grid item sm={12}>
            <TextField name="name" label="Name" variant="standard" onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="username" label="Username" variant="standard" onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="password" label="Password" type="password" variant="standard" onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="email" label="E-mail" variant="standard" onChange={handleChange} required fullWidth />
          </Grid>
          <DialogContentText>
            * required fields
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} disabled={!formData.username || !formData.password || !formData.email}>Create</Button>
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

export default SignUpForm;
