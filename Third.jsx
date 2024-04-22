import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Third = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography  variant="h6" 
          style={{textAlign:'left'}} component="div" sx={{ flexGrow: 1 }}>
            SomanTraders
          </Typography>
          <Button><Link to={'/'}>Login</Link></Button>
          <Button><Link to={'/s'}>State</Link></Button>
          <Button><Link to={'/z'}>Field</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Third
