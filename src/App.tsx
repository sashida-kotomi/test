import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import TopPage from './pages/TopPage';
import Signup from './pages/Signup';
import DetailPage from './pages/DetailPage';
import EditingPage from './pages/EditingPage';

type User = {
  id: number;
  name: string;
  age: number;
};

export default function App() {
  const initialData: User[] = [
    { id: 1, name: "山田太郎", age: 25 },
    { id: 2, name: "鈴木一郎", age: 30 },
    { id: 3, name: "佐藤花子", age: 28 },
    { id: 4, name: "湊崎紗夏", age: 28 },
    { id: 5, name: "名井南", age: 27 },
    { id: 6, name: "平井桃", age: 28 }
  ];

  const [data, setData] = useState<User[]>(initialData); // 状態を管理

  // 新規ユーザー追加のための関数
  const handleAddUser = (name: string, age: number) => {
    const newUser = { id: data.length + 1, name, age };
    setData([...data, newUser]); // 新しいユーザーをデータに追加
  };

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<TopPage data={data} />} /> {/* data を TopPage に渡す */}
        <Route path="/detail/:id" element={<DetailPage users={data} />} /> {/* DetailPageにデータを渡す */}
        <Route 
          path="/Signup" 
          element={<Signup onAddUser={handleAddUser} />} 
        /> {/* 新規ユーザー追加用に setData を渡す */}
        <Route path="/edit/:id" element={<EditingPage  />} /> {/* 編集ページに遷移 */}
      </Routes>
    </div>
  );
}
