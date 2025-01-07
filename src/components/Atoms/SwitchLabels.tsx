// import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


type SwitchLabelProps = {
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'; 
};

export default function SwitchLabels(props: SwitchLabelProps) {
  const { size, color }= props;
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked size={size} color={color}/>} label="Label" />
      <FormControlLabel required control={<Switch size={size} color={color}/>} label="Required" />
      <FormControlLabel disabled control={<Switch size={size} color={color}/>} label="Disabled" />
    </FormGroup>
  );
}
