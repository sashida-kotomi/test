// import React from 'react';

// type CheckboxProps = {
//   size: 'small' | 'large' | 'default';
//   color: string;
//   label: string;
// };

// const Checkbox = ({ size, color }: CheckboxProps) => {
//   const sizeStyles = {
//     small: { padding: '5px 10px'},
//     large: { padding: '15px 30px'},
//     default: { padding: '10px 20px'},
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//     <input type='checkbox'
//       style={{
//         ...sizeStyles[size],
//         backgroundColor: color,
//         color: '#fff',
//         margin :'10px'
//       }}
//     >
//     {label}
//     </input>
//     </div>
//   );
// };

// export default Checkbox;

// import React from 'react';

// type CheckboxProps = {
//   size: 'small' | 'large' | 'default';
//   color: string;
//   label: string;
// };

// const Checkbox = ({ size, color, label }: CheckboxProps) => {
//   const sizeStyles = {
//     small: { padding: '5px 10px' },
//     large: { padding: '15px 30px' },
//     default: { padding: '10px 20px' },
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       {/* inputタグにidを付けて、labelタグと関連付け */}
//       <input
//         type="checkbox"
//         id={label} // ラベルとの関連付け用
//         style={{
//           ...sizeStyles[size],
//           backgroundColor: color,
//           color: '#fff',
//           margin: '10px',
//         }}
//       />
//       {/* inputタグのlabelはhtmlForを使って関連付け */}
//       <label htmlFor={label} style={{ marginLeft: '10px' }}>
//         {label}
//       </label>
//     </div>
//   );
// };

// export default Checkbox;

// Checkbox.tsx


type CheckboxProps = {
  size: 'small' | 'large' | 'default';
  color: string;
  label: string;
};

const Checkbox = ({ size, color, label }: CheckboxProps) => {
  const sizeStyles = {
    small: { padding: '5px 10px' },
    large: { padding: '15px 30px' },
    default: { padding: '10px 20px' },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        id={label} // ラベルとの関連付け用
        style={{
          ...sizeStyles[size],
          backgroundColor: color,
          color: '#fff',
          margin: '10px',
        }}
      />
      <label htmlFor={label} style={{ marginLeft: '10px' }}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
