// import * as React from 'react';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


interface CheckBoxProps {
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';  // MUIの色
}

export default function CheckBox(props: CheckBoxProps) {
  const { size, color } = props;
  return (
    <div>
    <FormControlLabel control={<Checkbox defaultChecked size={size} color={color} />} label="Label" />
    <FormControlLabel required control={<Checkbox size={size} color={color} />} label="Required" />
    <FormControlLabel disabled control={<Checkbox size={size} color={color} />} label="Disabled" />
    </div>
  );
}
