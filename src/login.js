import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import { Grid, TextField, Button, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Main.css';

function LoginForm() {
  const history = useHistory()

  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleSubmit = () => {
    const api = axios.post('http://192.168.0.16:3001/auth/login', values)
    api.then((data) => {
      console.log(data)
      localStorage.setItem('token', JSON.stringify(data))
      history.push('/dashboard')
    }).catch(() => {
      setValues({username: values.username, password: ''})
      toast.error("Something went wrong!", {theme: "dark"})
    })
  }
  
  const setStyles = {
    avatar: {
      backgroundColor: '#3f51b5',
    },
  }

  return (
    <div>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <Grid container spacing={1}>
      <Grid item xs={12} align='center'>
        <Avatar style={setStyles.avatar}><LockOutlinedIcon /></Avatar>
        <h2>Log In</h2>
      </Grid>

      <Grid item xs={12}>
      <TextField required
        id='username'
        label='Username'
        variant='standard'
        value={values.username}
        onChange={handleChange('username')}
        autoFocus
        fullWidth
      />
      </Grid>

      <Grid item xs={12} >
      <TextField required
        id='password'
        label='Password'
        variant='standard'
        value={values.password}
        onChange={handleChange('password')}
        type={values.showPassword ? 'text' : 'password'}
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment position="end">
        //     <IconButton
        //       onClick={handleClickShowPassword}
        //       onMouseDown={handleMouseDownPassword}
        //     >
        //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
        //     </IconButton>
        //     </InputAdornment>
        //   )
        // }}
        fullWidth
      />
      </Grid>
      <Grid item xs={12} >
      <Button variant="contained" disableElevation disabled={!values.username || !values.password} onClick={handleSubmit} fullWidth>Login</Button>
      </Grid>
      </Grid>

    </div>
  );
}

export default LoginForm;
