// import React, { useState } from 'react';
// import BasicTextField from '../components/Atoms/BasicTextField';
// import BasicButton from '../components/Atoms/BasicButton';
// import HeaderComponents from '../components/Molecules/HeaderComponents';
// import BasicTable from '../components/Atoms/BasicTable';
// import './Signup.css';

// export default function Signup() {
//   const [dessert, setDessert] = useState('');
//   const [calories, setCalories] = useState('');
//   const [fat, setFat] = useState('');
//   const [carbs, setCarbs] = useState('');
//   const [protein, setProtein] = useState('');
  
//   const [rows, setRows] = useState([]); // テーブルの行を管理する状態

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 新しい行を作成
//     const newRow = {
//       name: dessert,
//       calories: parseInt(calories),
//       fat: parseFloat(fat),
//       carbs: parseFloat(carbs),
//       protein: parseFloat(protein),
//     };
//     setRows([...rows, newRow]); // 新しい行を追加
//     // フォームをリセット
//     setDessert('');
//     setCalories('');
//     setFat('');
//     setCarbs('');
//     setProtein('');
//   };

//   return (
//     <div className="signup-container">
//       <HeaderComponents />
//       <h2>Sign Up Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label>Dessert (100g serving)</label>
//           <BasicTextField
//             size='small'
//             color='primary'
//             label='Dessert'
//             type="string"
//             value={dessert}
//             onChange={(e) => setDessert(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label>Calories</label>
//           <BasicTextField
//             size='small'
//             color='primary'
//             label='Calories'
//             type="number"
//             value={calories}
//             onChange={(e) => setCalories(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label>Fat (g)</label>
//           <BasicTextField
//             size='small'
//             color='primary'
//             type="number"
//             value={fat}
//             label='Fat'
//             onChange={(e) => setFat(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label>Carbs (g)</label>
//           <BasicTextField
//             size='small'
//             color='primary'
//             label='Carbs'
//             type="number"
//             value={carbs}
//             onChange={(e) => setCarbs(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label>Protein (g)</label>
//           <BasicTextField
//             size='small'
//             color='primary'
//             label='Protein'
//             type="number"
//             value={protein}
//             onChange={(e) => setProtein(e.target.value)}
//           />
//         </div>
        
//         <BasicButton size='small' color='primary' type="submit" label='新規登録'/>
//       </form>

//       {/* BasicTableにrowsを渡してテーブルを表示 */}
//       <BasicTable rows={rows} />
//     </div>
//   );
// }
import React, { useState } from 'react';
import BasicTextField from '../components/Atoms/BasicTextField';
import BasicButton from '../components/Atoms/BasicButton';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicTable from '../components/Atoms/BasicTable';
import './Signup.css';

export default function Signup() {
  const [dessert, setDessert] = useState('');
  const [calories, setCalories] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  
  const [rows, setRows] = useState([]); // テーブルの行を管理する状態

  const handleSubmit = (e) => {
    e.preventDefault();

    // 新しい行を作成
    const newRow = {
      name: dessert,
      calories: parseInt(calories),
      fat: parseFloat(fat),
      carbs: parseFloat(carbs),
      protein: parseFloat(protein),
    };

    // 新しい行をテーブルに追加
    setRows([...rows, newRow]);

    // フォームをリセット
    setDessert('');
    setCalories('');
    setFat('');
    setCarbs('');
    setProtein('');
  };

  return (
    <div className="signup-container">
      <HeaderComponents />
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Dessert (100g serving)</label>
          <BasicTextField
            size="small"
            color="primary"
            label="Dessert"
            type="string"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Calories</label>
          <BasicTextField
            size="small"
            color="primary"
            label="Calories"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Fat (g)</label>
          <BasicTextField
            size="small"
            color="primary"
            type="number"
            value={fat}
            label="Fat"
            onChange={(e) => setFat(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Carbs (g)</label>
          <BasicTextField
            size="small"
            color="primary"
            label="Carbs"
            type="number"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Protein (g)</label>
          <BasicTextField
            size="small"
            color="primary"
            label="Protein"
            type="number"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </div>
        
        <BasicButton size="small" color="primary" type="submit" label="新規登録" />
      </form>

      {/* BasicTableにrowsを渡してテーブルを表示 */}
      <BasicTable rows={rows} />
    </div>
  );
}
