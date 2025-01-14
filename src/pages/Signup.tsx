import React, { useState } from 'react';
import BasicTextField from '../components/Atoms/BasicTextField';
import BasicButton from '../components/Atoms/BasicButton';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import './Signup.css';

export default function Signup() {
  const [dessert, setDessert] = useState('');
  const [calories, setCalories] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームのデータを送信するロジック
    console.log({ dessert, calories, fat, carbs, protein });
  };

  return (
    <div className="signup-container">
      <HeaderComponents />
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Dessert (100g serving)</label>
          <BasicTextField
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Calories</label>
          <BasicTextField
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Fat (g)</label>
          <BasicTextField
            type="number"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Carbs (g)</label>
          <BasicTextField
            type="number"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Protein (g)</label>
          <BasicTextField
            type="number"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </div>

        <BasicButton type="submit" label='新規登録'/>
      </form>
    </div>
  );
}
