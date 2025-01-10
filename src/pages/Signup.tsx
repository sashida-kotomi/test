import React from 'react';
import BasicTextField from  '../components/Atoms/BasicTextField';
import RowRadioButton from '../components/Atoms/RowRadioButton2';
import BasicButton from '../components/Atoms/BasicButton';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import './Signup.css'
import { Link } from 'react-router-dom'
export default function Signup () {
 
 
  return(
  <div>
    <div>
      <HeaderComponents />
    </div>
    <h1>登録画面</h1>
    <p>登録フォーム</p>
    <div className='nameform'>
      <p>氏名</p>
      <BasicTextField color='primary' size='small' />
    </div>
      <div className='gender'>
        <p>性別</p>
      <RowRadioButton 
      size="small" 
      color="primary" 
      label1="男"
      label2="女"
    />

      </div>
    <div className='mail'>
      <p>メールアドレス</p>
    <BasicTextField color='primary' size='small'/>
    <p>住所</p>
    <BasicTextField color='primary' size='small'/>
    <p>電話番号</p>
    <BasicTextField color='primary' size='small'/>
    </div>


    <div className='button1'>
      <BasicButton size="large" color="primary" label='登録'/>
    </div>

    <div className='button2'>
    <Link to={'/'}>
    <BasicButton size="large" color="primary" label='一覧ページに戻る' />
    </Link>
    </div>
  </div>
  )
}