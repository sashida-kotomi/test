// import React from 'react';
// import HeaderComponents from '../components/Molecules/HeaderComponents';
// import BasicTextField from '../components/Atoms/BasicTextField';
// import BasicButton from '../components/Atoms/BasicButton';
import { Link } from 'react-router-dom'


// export default function EditingPage() {
//   return(
//     <div>
//       <HeaderComponents />
//        <h1>編集ページ</h1>
//       <p>Dessert (100g serving)</p>
//      <BasicTextField color='primary' size='small' />
//        <p>Calories</p>
//        <BasicTextField color='primary' size='small'/>
//        <p>Fat (g)</p>
//        <BasicTextField color='primary' size='small'/>
//        <p>Carbs (g)	</p>
//        <BasicTextField color='primary' size='small'/>
//        <p>Protein (g)</p>
//        <BasicTextField color='primary' size='small'/>


//        <div className='button1'>
//        <BasicButton size="large" color="primary" label='編集する' />
//      </div>
//      <div className='button2'>
//      <Link to={'/'}>
//      <BasicButton size="large" color="primary" label='一覧ページに戻る' />
//    </Link>
//      </div>
//     </div>

//   )
// // }
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import BasicButton from '../components/Atoms/BasicButton'; // 必要に応じてインポート
// import { Link } from 'react-router-dom'

// interface Data {
//   id: number;
//   name: string;
//   age: number;
// }

// const EditPage = ({ data, setData }: { data: Data[], setData: React.Dispatch<React.SetStateAction<Data[]>> }) => {
//   const { id } = useParams<{ id: string }>(); // URLからIDを取得
//   const navigate = useNavigate();
  
//   // 編集対象のデータを取得
//   const currentData = data.find(item => item.id === parseInt(id!));

//   const [name, setName] = useState(currentData?.name || "");
//   const [age, setAge] = useState(currentData?.age || 0);

//   // 保存ボタンが押されたときに変更を保存
//   const handleSave = () => {
//     if (currentData) {
//       // 編集されたデータでデータを更新
//       const updatedData = data.map(item =>
//         item.id === currentData.id ? { ...item, name, age } : item
//       );
//       setData(updatedData); // 親コンポーネントのsetDataを使ってデータを更新
//       navigate("/"); // トップページに遷移
//     }
//   };

//   return (
//     <div>
//       <h1>編集ページ</h1>
//       <div>
//         <label>
//           名前:
//           <input 
//             type="text" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           年齢:
//           <input 
//             type="number" 
//             value={age} 
//             onChange={(e) => setAge(Number(e.target.value))} 
//           />
//         </label>
//       </div>
//       <div>
//       <Link to={'/'}>
//         <BasicButton 
//           size="small" 
//           color="primary" 
//           label="保存" 
//           onClick={handleSave} // 保存時に変更を反映
//           type="button"
//         />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EditPage;


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // React Router

const data = [
  { id: 1, name: "山田太郎", age: 25 },
  { id: 2, name: "鈴木一郎", age: 30 },
  { id: 3, name: "佐藤花子", age: 28 }
];

const EditUser = () => {
  const { id } = useParams();  // URLパラメータからIDを取得
  const history = useNavigate();
  
  // 編集するユーザーのデータを取得
  const user = data.find(u => u.id === parseInt(id));

  // ユーザーが見つからない場合、エラーメッセージを表示
  if (!user) {
    return <div>ユーザーが見つかりません。</div>;
  }

  // フォームに表示するための状態
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  // 保存ボタンを押したときの処理
  const handleSave = () => {
    // データの更新（実際にはサーバーに送信して更新する処理が必要）
    user.name = name;
    user.age = age;

    // 保存が完了したら前のページに戻る
    history.push('/');
  };

  return (
    <div>
      <h1>ユーザー編集</h1>
      <form>
        <div>
          <label>名前: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>年齢: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <Link to={'/'}>
        <button type="button" onClick={handleSave}>保存</button>
        </Link>
      </form>
    </div>
  );
};

export default EditUser;
