import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderComponents from '../components/Molecules/HeaderComponents';

const data = [
  { id: 1, name: "山田太郎", age: 25 },
  { id: 2, name: "鈴木一郎", age: 30 },
  { id: 3, name: "佐藤花子", age: 28 },
  { id: 4, name: "湊崎紗夏", age: 28 },
  { id: 5, name: "名井南", age: 27 },
  { id: 6, name: "平井桃", age: 28 }
];

const EditUser = () => {
  const { id } = useParams<{ id: string }>();  // idを明示的にstring型として取り込む
  const navigate = useNavigate();
  
  // idがundefinedでないことを確認してからデータを取得
  if (id === undefined) {
    return <div>ユーザーIDが不正です。</div>;
  }

  
  const user = data.find(u => u.id === parseInt(id, 10));

  // userが見つからない場合のエラーハンドリング
  if (!user) {
    return <div>ユーザーが見つかりません。</div>;
  }

  // ユーザーを見つけた場合、状態を管理する
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  // 保存ボタンを押したときの処理
  const handleSave = () => {
    // ユーザーのデータを更新（実際にはサーバーに送信する処理が必要）
    user.name = name;
    user.age = age;

    // 保存が完了したら前のページに戻る
    navigate('/');  
  };

  return (
    <div>
      <HeaderComponents />
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
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <button type="button" onClick={handleSave}>保存</button>
      </form>
    </div>
  );
};

export default EditUser;
