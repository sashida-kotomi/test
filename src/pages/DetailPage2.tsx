import React from 'react';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicButton from '../components/Atoms/BasicButton';
import './DetailPage2.css';
import { Link } from 'react-router-dom';

export default function DetailPage() {
  return(
    <div>
      
      <HeaderComponents/>
      <h1>詳細ページ</h1>

        <table className='dessertdetail'>
          <tr>
            <th>Dessert:</th>
            <td>Ice cream sandwich</td>
          </tr>
          <tr>
            <th>Calories:</th>
            <td>237</td>
          </tr>
          <tr>
            <th>Fat (g):</th>
            <td>9</td>
          </tr>
          <tr>
            <th>Carbs (g):</th>
            <td>37</td>
          </tr>
          <tr>
            <th>Protein (g):</th>
            <td>4.3</td>
          </tr>
        </table>
      <div className='button2'>
      <Link to={'/'}>
    <BasicButton type='button' size="large" color="primary" label='一覧ページに戻る' />
    </Link>
    </div>
    </div>
  )
}