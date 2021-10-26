import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import { Grid, TextField, Button, Avatar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Main.css';

const NewAccountForm = () => {
  const history = useHistory()

  const [params, setParams] = useState({
    showPassword: false,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    birthdate: '',
    username: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  }

  const handleSubmit = () => {
    const body = formData
    const api = axios.post('http://192.168.0.16:3001/users', body)
    api.then((data) => {
      // Replace createAccount component with a success message using a state to render one or the other
      // history.push('/dashboard')
    }).catch((error) => {
      console.log(error)
      toast.error("Something went wrong!", {theme: "dark"})
    })
  }
  
  const setStyles = {
    avatar: {
      backgroundColor: '#1c1c1c',
    },
    fields: {
      marginTop: '0.8%'
    },
    button: {
      marginTop: '1em'
    }
}

  return (
    <div>
      <Grid container spacing={1}>
      <Grid item xs={12} align='center'>
        <Avatar style={setStyles.avatar}><AddCircleOutlineIcon /></Avatar>
        <h2>Create new account</h2>
      </Grid>
      
        <Grid item xs={6}>
          <TextField
            id='fullName'
            label='Name'
            variant='outlined'
            value={formData.firstName}
            onChange={handleChange('firstName')}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField required
            id='username'
            label='Username'
            variant='outlined'
            value={formData.username}
            onChange={handleChange('username')}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField required
            id='email'
            label='Email'
            variant='outlined'
            value={formData.email}
            onChange={handleChange('email')}
            style={setStyles.fields}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
      <TextField required
        id='password'
        label='Password'
        variant='outlined'
        value={formData.password}
        onChange={handleChange('password')}
        style={setStyles.fields}
        type={params.showPassword ? 'text' : 'password'}
        fullWidth
      />
      </Grid>
      <Grid item xs={12}>
      <Button style={setStyles.button} variant="contained" disableElevation onClick={handleSubmit} fullWidth>Create new account</Button>
      
      </Grid>
      </Grid>
    </div>
  );
}

export default NewAccountForm;
