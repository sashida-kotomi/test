import React from 'react';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicButton from '../components/Atoms/BasicButton';
import './DetailPage.css';
import { Link } from 'react-router-dom';

export default function DetailPage() {
  return(
    <div>
      
      <HeaderComponents/>
      <h1>詳細ページ</h1>

        <table className='dessertdetail'>
          <tr>
            <th>Dessert:</th>
            <td>Frozen yoghurt</td>
          </tr>
          <tr>
            <th>Calories:</th>
            <td>159</td>
          </tr>
          <tr>
            <th>Fat (g):</th>
            <td>6</td>
          </tr>
          <tr>
            <th>Carbs (g):</th>
            <td>24</td>
          </tr>
          <tr>
            <th>Protein (g):</th>
            <td>4</td>
          </tr>
        </table>
         
      <div className='button2'>
      <Link to={'/'}>
    <BasicButton size="large" color="primary" label='一覧ページに戻る' />
    </Link>
    </div>
    </div>
  )
}