import React, { useState } from 'react';
import BasicTextField from '../Atoms/BasicTextField';  // BasicTextFieldのインポート（ファイルパスに注意）
import BasicButton from '../Atoms/BasicButton';  // BasicButtonのインポート（ファイルパスに注意）

interface SearchFormProps {
  onSearch: (term: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 検索ボタンが押されたときの処理
  const handleSearch = () => {
    onSearch(searchTerm);  // 親コンポーネントに検索キーワードを渡す
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');  // 検索キーワードをクリア
  };

  return (
    <div className="container">
      <p>検索フォーム</p>
      <div className="form">
        <BasicTextField
          size="small"
          color="primary"
          type="string"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // 入力値を管理
        />
        <div className="button">
          <BasicButton size="small" color="primary" label="条件クリア" onClick={handleClear} type="button" />
          <BasicButton size="small" color="primary" label="検索" onClick={handleSearch} type="button" />
        </div>
      </div>
    </div>
  );
}
