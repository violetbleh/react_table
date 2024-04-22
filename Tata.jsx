
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tata = () => {
    var data=[{name:"san",age:19,place:"tcr"},{name:"ann",age:29,place:"ekm"}]
  return (
    <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                    {data.map((value,index)=>{
                        return <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                            <TableCell>{value.place}</TableCell>
                        </TableRow>
                    })}
                 </TableBody>
        </Table>
    </TableContainer>
      
    </div>
  )
}

export default Tata
