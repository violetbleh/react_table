import { Grid, TextField } from '@mui/material'
import React from 'react'

const Second = () => {
  return (
    <div style={{margin:'10%'}}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
<TextField id="outlined-basic" label="Name" variant="filled"  fullWidth/>
</Grid>
<Grid item xs={12} sm={6} md={6}>
<TextField id="outlined-basic" label="Age" variant="filled" fullWidth />
</Grid>
<Grid item xs={12} sm={6} md={6}>
<TextField id="outlined-basic" label="Place" variant="filled" fullWidth/>
</Grid>
</Grid>
    </div>
  )
}

export default Second
