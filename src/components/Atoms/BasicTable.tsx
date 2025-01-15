import './BasicTable.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import BasicButton from './BasicButton'; 
import BasicTextField from './BasicTextField'; 

export default function BasicTable() {

  const [data, setData] = useState([
    { id: 1, name: "山田太郎", age: 25 },
    { id: 2, name: "鈴木一郎", age: 30 },
    { id: 3, name: "佐藤花子", age: 28 },
    { id: 4, name: "湊崎紗夏", age: 28 },
    { id: 5, name: "名井南", age: 27 },
    { id: 6, name: "平井桃", age: 28 }
    
  ]);

  // 検索キーワードの状態を管理
  const [searchTerm, setSearchTerm] = useState('');
  
  // 検索結果の状態を管理
  const [filteredData, setFilteredData] = useState(data);

  // 削除処理
  const handleDelete = (name: string) => {
    const newRows = data.filter(item => item.name !== name);
    setData(newRows); // 更新された行を状態にセット
    setFilteredData(newRows); // フィルタリング後のデータも更新
  };

  // 検索ボタンがクリックされたときの処理
  const handleSearch = () => {
 
    const result = data.filter(user => user.name.includes(searchTerm));
    setFilteredData(result); 
  };

  return (
    <div>
      <h1>ユーザー一覧</h1>
      
      {/* 検索フォーム */}
      <div className="search-form">
        <p>検索したい名前を入力してください。</p>
        <BasicTextField
          size="small"
          color="primary"
          type="string"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // 検索キーワードを更新
        />
        <BasicButton 
          size="small" 
          color="primary" 
          label="検索" 
          onClick={handleSearch} // 検索ボタンがクリックされたときに検索を実行
          type="button"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>年齢</th>
            <th>編集</th>
            <th>詳細</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <BasicButton 
                      label="編集"
                      type="button"
                      color="primary"
                      size="small"
                    />
                  </Link>
                </td>
                <td>
                  <Link to={`/detail/${user.id}`}>
                    <BasicButton 
                      size="small"
                      color="primary" 
                      label="詳細"
                      type="button"
                    />
                  </Link>
                </td>
                <td>
                  <BasicButton 
                    size="small" 
                    color="primary" 
                    label="削除" 
                    onClick={() => handleDelete(user.name)} 
                    type="button"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>その名前のユーザーは存在しません。</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className='registration'>
      <Link to={'/Signup'}>
      <BasicButton size="large" color="primary" label='新規登録' type="button" />
      </Link>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import BasicButton from './BasicButton';
// import BasicTextField from './BasicTextField';

// export default function BasicTable({ data, setData }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   const handleSearch = () => {
//     const result = data.filter(user => user.name.includes(searchTerm));
//     setFilteredData(result);
//   };

//   const handleDelete = (name) => {
//     const newRows = data.filter(item => item.name !== name);
//     setData(newRows);
//     setFilteredData(newRows);
//   };

//   return (
//     <div>
//       <h1>ユーザー一覧</h1>

//       <div className="search-form">
//         <p>検索したい名前を入力してください。</p>
//         <BasicTextField
//           size="small"
//           color="primary"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <BasicButton size="small" color="primary" label="検索" onClick={handleSearch} />
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>名前</th>
//             <th>年齢</th>
//             <th>編集</th>
//             <th>詳細</th>
//             <th>削除</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ? (
//             filteredData.map(user => (
//               <tr key={user.id}>
//                 <td>{user.name}</td>
//                 <td>{user.age}</td>
//                 <td>
//                   <Link to={`/edit/${user.id}`}>
//                     <BasicButton label="編集" />
//                   </Link>
//                 </td>
//                 <td>
//                   <Link to={`/detail/${user.id}`}>
//                     <BasicButton label="詳細" />
//                   </Link>
//                 </td>
//                 <td>
//                   <BasicButton label="削除" onClick={() => handleDelete(user.name)} />
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5}>その名前のユーザーは存在しません。</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <div className="registration">
//         <Link to="/Signup">
//           <BasicButton label="新規登録" />
//         </Link>
//       </div>
//     </div>
//   );
// }
