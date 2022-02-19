import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex',flexDirection:'column',justifyContent:'center' , alignItems:'center' }}>
        <h1 style={{
            color:'#eee',
            fontWeight:'800'
        }}>No Data Found</h1>
      <CircularProgress sx={{
          fontSize:'100px',
      }} />
       <h4 style={{
            color:'#eee',
            fontWeight:'800'
        }}>Please Search</h4>
    </Box>
  );
}