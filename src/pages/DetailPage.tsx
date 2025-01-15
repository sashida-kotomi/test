import React from 'react';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicButton from '../components/Atoms/BasicButton';
import './DetailPage.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // useParams を使ってパラメータを取得

type User = {
  id: number;
  name: string;
  age: number;
};

export default function DetailPage({ users }: { users: User[] }) {


  const { id } = useParams(); // URLパラメータからidを取得
  const user = users.find((user) => user.id === parseInt(id!));

  if (!user) {
    return <div>ユーザーが見つかりません。</div>;
  }

  return (
    <div>
      <HeaderComponents />
      <h1>ユーザー詳細</h1>
      <p>名前: {user.name}</p>
      <p>年齢: {user.age}</p>
      <Link to={'/'}>
      <BasicButton 
      label='一覧ページに戻る'
      type='button'
      color='primary'
      size='small'
      />
      </Link>
    </div>
  );
}
