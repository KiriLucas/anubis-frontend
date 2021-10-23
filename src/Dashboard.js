import { Grid } from '@mui/material'
import React from 'react'

const Dashboard = () => {
    const local = localStorage.getItem('token')
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    {local}
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard