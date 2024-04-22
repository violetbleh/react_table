import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const First = () => {
    var[input,setInput] = useState()
    const inputHandler=(e)=>{
        console.log(e.target.value)
        setInput=(e.target.value)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{input}</Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" 
       onChange={inputHandler}></TextField>
       <br/><br/>
       <TextField id="outlined-basic" label="Password" type='password' variant="outlined" 
      ></TextField>
      <br/><br/><br/>

      <Button variant="contained" onClick={inputHandler} style={{backgroundColor:'green'}}>Login </Button>
    </div>
  )
}

export default First
