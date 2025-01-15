import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type BasicButtonProps = {
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'; 
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // onClick をオプションとして追加
  type:string;
};

export default function BasicButton(props: BasicButtonProps) {
  const { size, color, label, onClick, type  } = props;
  
  return (

    <Stack spacing={2} direction="row">
    {/* <Button variant="text" size={size} color={color}>{label}</Button>   */}
    {/* <Button variant="contained" size={size} color={color}>{label}</Button> */}
    <Button variant="outlined" size={size} color={color} onClick={onClick} type={type} >{label}</Button> 
    
  </Stack>

  );
}
// 