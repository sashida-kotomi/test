import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1); // カウントアップ
  const decrement = () => setCount(count - 1); // カウントダウン

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={increment}>増加</button>
      <button onClick={decrement}>減少</button>
    </div>
  );
};

export default Counter;
