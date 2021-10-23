import { Grid, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Main.css';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router';
import axios from 'axios';

function LoginForm(props) {
  const history = useHistory()

  const [formData, setFormData] = useState({})
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleClose = () => {
    props.onCancel()
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
    const api = axios.post('http://localhost:3001/auth/login', values)
    api.then((data) => {
      console.log(data)
      localStorage.setItem('token', JSON.stringify(data))
      const batata = JSON.parse(localStorage.getItem('token'))
      history.push('/dashboard')
    
    }).catch( console.error)

  }

  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(formData)
  };

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
          <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            value={values.username}
            onChange={handleChange2('username')}
            label="Password"
            fullWidth
          />
          </Grid>
          <Grid item sm={12}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange2('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </Grid>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!values.username || !values.password} onClick={handleSubmit}>Login</Button>
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

export default LoginForm;
