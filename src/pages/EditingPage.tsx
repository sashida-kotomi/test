import React from 'react';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicTextField from '../components/Atoms/BasicTextField';
import BasicButton from '../components/Atoms/BasicButton';
import { Link } from 'react-router-dom'


export default function EditingPage() {
  return(
    <div>
      <HeaderComponents />
      <h1>編集ページ</h1>
      <p>Dessert (100g serving)</p>
      <BasicTextField color='primary' size='small'/>
      <p>Calories</p>
      <BasicTextField color='primary' size='small'/>
      <p>Fat (g)</p>
      <BasicTextField color='primary' size='small'/>
      <p>Carbs (g)	</p>
      <BasicTextField color='primary' size='small'/>
      <p>Protein (g)</p>
      <BasicTextField color='primary' size='small'/>


      <div className='button1'>
      <BasicButton size="large" color="primary" label='編集する' />
    </div>
    <div className='button2'>
    <Link to={'/'}>
    <BasicButton size="large" color="primary" label='一覧ページに戻る' />
    </Link>
    </div>
    </div>
  )
}