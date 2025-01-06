import React from 'react';
// import ReactDOM from 'react-dom';

// 課題2[チェックボックス]
import Checkbox from './pages/Checkbox';

const CheckboxApp = () => {
  return (
    <div>
      <h1>チェックボックスコンポーネントの作成</h1>
      <Checkbox size="small" color="blue" label="small" />
      <Checkbox size="large" color="green" label="large" />
      <Checkbox size="default" color="red" label="default" />
    </div>
  );
};

export default CheckboxApp;
