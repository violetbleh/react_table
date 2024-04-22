import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Field = () => {
    var[input,setInput]=useState([]);
    var[data,setData]=useState([]);
    const inputHandler=(e)=>{
                 setInput({...input,[e.target.name]:e.target.value})
                 console.log(input);
    };
    const addHandler=()=>{
        console.log('clicked')
       setData((data)=>[...data,input])
        console.log(data);
    }
  return (
    <div style={{margin:'10%'}}>
       
      <TextField id="outlined-basic" label="Name" name="sname" onChange={inputHandler} />&nbsp; <br/><br/>
      <TextField id="outlined-basic" label="Age" name="age" onChange={inputHandler} />&nbsp; <br/><br/>
      <TextField id="outlined-basic" label="Place" name="place" onChange={inputHandler} />&nbsp; <br/><br/>
      <TextField id="outlined-basic" label="Phone no" name="no" onChange={inputHandler} />
      <br/><br/><br/>
      <Button variant='contained' onClick={addHandler} style={{backgroundColor:'green'}}>Submit</Button>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'purple',fontStyle:"oblique"}}>Name</TableCell>
                    <TableCell style={{color:'purple',fontStyle:"oblique"}}>Age</TableCell>
                    <TableCell style={{color:'purple',fontStyle:"oblique"}}>Place</TableCell>
                    <TableCell style={{color:'purple',fontStyle:"oblique"}}>Phone no</TableCell>
                </TableRow>
            </TableHead>
          <TableBody>
            {data.map((v,i)=>{
                return <TableRow key={i}>
                    <TableCell>{v.sname}</TableCell>
                    <TableCell>{v.age}</TableCell>
                    <TableCell>{v.place}</TableCell>
                    <TableCell>{v.no}</TableCell>
                </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Field
