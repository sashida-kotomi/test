import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import BasicButton from '../components/Atoms/BasicButton';
import BasicTextField from '../components/Atoms/BasicTextField';
import HeaderComponents from '../components/Molecules/HeaderComponents'

type SignupProps = {
  onAddUser: (name: string, age: number) => void;
};

const Signup: React.FC<SignupProps> = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !age) {
      alert('名前と年齢を入力してください');
      return;
    }
    onAddUser(name, Number(age)); // 新しいユーザーを追加
    navigate('/'); // ユーザー追加後にホーム（TopPage）に遷移
  };

  return (
    <div>
      <HeaderComponents />
      <h1>新規登録</h1>
      <div>
        <p>登録する名前を入力してください！</p>
        <BasicTextField 
          type='string'
          size="small"
          color="primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>年齢を入力してください！</p>
        <BasicTextField 
          size="small"
          color="primary"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />
      </div>
      <BasicButton 
        size="small"
        color="primary"
        label="登録"
        onClick={handleSubmit}
        type="button"
      />
    </div>
  );
};

export default Signup;
