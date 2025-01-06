type DirectionButtonProps = {
  size:'small' | 'large' ;
  color: string;
  direction: 'up' | 'down' | 'left' | 'right';
};

function DirectionButton(props: DirectionButtonProps){
  const { size, color, direction } = props;

  const sizeStyles = {
    small: {padding: '20px'},
    large: {padding: '40px'}
  }
    // Directionに応じたスタイルを設定
  const directionStyles = {
    up: {
      transform: 'rotate(0deg)',
    },
    down: {
      transform: 'rotate(180deg)',
    },
    left: {
      transform: 'rotate(270deg)',
    },
    right: {
      transform: 'rotate(90deg)',
    },
  };



  return (
    <button style={{
      ...sizeStyles[size],
      backgroundColor: color,
      color: '#000',
      margin: '10px',
      ...directionStyles[direction],
    }}>
    {direction === 'up' && '↑'}
    {direction === 'down' && '↓'}
    {direction === 'left' && '←'}
    {direction === 'right' && '→'}
    </button>

  );
}
export default DirectionButton;
