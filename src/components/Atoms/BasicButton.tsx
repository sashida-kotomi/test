import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type BasicButtonProps = {
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'; 
};

export default function BasicButton(props: BasicButtonProps) {
  const { size, color } = props;
  
  return (

    <Stack spacing={2} direction="row">
    <Button variant="text" size={size} color={color}>Text</Button>
    <Button variant="contained" size={size} color={color}>Contained</Button>
    <Button variant="outlined" size={size} color={color}>Outlined</Button>
  </Stack>

  );
}