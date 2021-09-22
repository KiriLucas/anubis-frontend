import { Grid, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './App.css';

function SignUpForm(props) {
  const [formData, setFormData] = useState({})
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => { 
    setOpen(props.potato)
    console.log(open)
  })

  return (

    <div>
      <Dialog
        open={open}
      >
        <DialogTitle>Create new account</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <Grid item sm={12}>
            <TextField name="username" label="Username" variant="standard" onChange={handleChange} fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="password" label="Password" type="password" variant="standard" onChange={handleChange} fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField name="email" label="E-mail" variant="standard" onChange={handleChange} fullWidth />
          </Grid>
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
