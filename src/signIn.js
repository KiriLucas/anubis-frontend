import { Grid, TextField, Button, Avatar, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useHistory } from 'react-router';
import axios from 'axios';
import './Main.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
      toast.error("Something went wrong!", {theme: "dark"})
    })
  }
  
  const setStyles = {
    avatar: {
      backgroundColor: '#3f51b5',
    },
    fields: {
      marginBottom: '1vh'
    }
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
      <Grid align='center'>
        <Avatar style={setStyles.avatar}><LockOutlinedIcon /></Avatar>
        <h2>Log In</h2>
      </Grid>

      <TextField required
        id='username'
        style={setStyles.fields}
        label='Username'
        variant='standard'
        value={values.username}
        onChange={handleChange('username')}
        fullWidth
      />

      <TextField required
        id='password'
        style={setStyles.fields}
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
      <Button variant="contained" disableElevation disabled={!values.username || !values.password} onClick={handleSubmit} fullWidth>Login</Button>
      <Typography> <Link href='#'> Forgot your password? </Link></Typography>
    </div>
  );
}

export default LoginForm;
