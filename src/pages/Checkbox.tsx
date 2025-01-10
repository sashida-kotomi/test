// import React from 'react';

// type CheckboxProps = {
//   size: 'small' | 'large' | 'default';
//   color: string;
//   label: string;
// };

// const Checkbox = ({ size, color, label}: CheckboxProps) => {
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

// // export default Checkbox;
// import React from 'react';

// type CheckboxProps = {
//   label: string;
//   checked: boolean;
//   onChange: (checked: boolean) => void;
// };

// const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
//   return (
//     <label>
//       <input type="checkbox" checked={checked} onChange={() => onChange(!checked)} />
//       {label}
//     </label>
//   );
// };

// export default Checkbox;

type CheckboxProps = {
  size: 'small' | 'large';
  color: string;
};

function Checkbox(props: CheckboxProps) {
  const { size, color } = props;

  const sizeStyles = {
    small: { width: '20px', height: '20px' },
    large: { width: '40px', height: '40px' },
  };

  return (
    <label
      style={{
        display: 'inline-block',
        padding: '5px',
        backgroundColor: color,
        borderRadius: '4px',
        margin: '10px',
        cursor: 'pointer',
      }}
    >
      <input
        type="checkbox"
        style={{
          ...sizeStyles[size],
          marginRight: '5px',
        }}
      />
      チェックボックス
    </label>
  );
}

export default Checkbox;
