// import React from 'react';

// type ButtonProps = {
//   size: 'small' | 'large' | 'default';
//   color: string;
// };

// const Button = (ButtonProps) => {
//   const sizeStyles = {
//     small: { padding: '5px 10px'},
//     large: { padding: '15px 30px'},
//     default: { padding: '10px 20px'},
//   };

//   return (
//     <button
//       style={{
//         ...sizeStyles[size],
//         backgroundColor: color,
//         color: '#fff',
//         margin :'10px'
//       }}
//     >
//       ボタン
//     </button>
//   );
// };

// export default Button;
// import React from 'react';

type ButtonProps = {
  size: 'small' | 'large' ;
  color: string;
};

function Button(props: ButtonProps) {
  const { size, color } = props;  

  const sizeStyles = {
    small: { padding: '5px 10px' },
    large: { padding: '15px 30px' },
  };

  return (
    <button
      style={{
        ...sizeStyles[size],
        backgroundColor: color,
        color: '#fff',
        margin: '10px',
      }}
    >
      ボタン
    </button>
  );
}

export default Button;
