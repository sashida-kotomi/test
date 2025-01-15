// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type BasicTextFieldProps = {
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'; 
  value:string;
  label:string;
  type: 'string' | 'number';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicTextField (props: BasicTextFieldProps) {
  const { size, color,value,type,label ,onChange } = props;

  return(
    <Box
    component ='form'
    sx={{ '& > :not(style)': { m: 1, width: '500px' } }}
    // 25ch
    noValidate
    autoComplete="off"
    >
      <TextField id='outlined-basic' type={type} label='' variant='outlined' size={size} color={color} value={value}   onChange={onChange}/>
      {/* <TextField id='filled-basic' label='Filled' variant='filled' size={size} color={color}/>
      <TextField id='standard-basic' label='Standard' variant='standard' size={size} color={color}/> */}
    </Box>
  )
}