// import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioButtonProps {
  size: 'small' | 'large';  
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';  // MUIの色
}

export default function RowRadioButtonsGroup(props: RadioButtonProps) {
  const { size, color } = props;

  return (

    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio size={size} color={color}/>} label="Female" />
      <FormControlLabel value="male" control={<Radio size={size} color={color}  />} label="Male" />
      <FormControlLabel value="other" control={<Radio size={size} color={color} />} label="Other" />
      <FormControlLabel
        value="disabled"
        disabled
        control={<Radio />}
        label="other"
      />
    </RadioGroup>
  </FormControl>

  );
}
