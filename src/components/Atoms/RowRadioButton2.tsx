import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface RadioButtonProps {
  size: 'small' | 'large';  
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';  // MUIの色
  label1: string;
  label2: string;
}
export default function RowRadioButtonsGroup(props: RadioButtonProps) {
  const { size, color , label1, label2 } = props;

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="button1" control={<Radio size={size} color={color}/>} label={label1} />
        <FormControlLabel value="button2" control={<Radio  size={size} color={color}/>} label={label2} /> 
      </RadioGroup>
    </FormControl>
  );
}
