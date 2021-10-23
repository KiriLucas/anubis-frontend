import { Grid } from '@mui/material'
import React from 'react'

const Dashboard = () => {
    const local = localStorage.getItem('token')
    console.log(local)
    return (
        <div>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <h1>Dashboard</h1>
            </Grid>
            <Grid item xs={12}>
                <h2>Welcome {local}</h2>
            </Grid>
        </Grid>
    )
        </div>
    )
}

export default Dashboard