import React from 'react';
import BasicTextField from  '../components/Atoms/BasicTextField';
import RowRadioButtonsGroup from '../components/Atoms/RowRadioButton';
import BasicButton from '../components/Atoms/BasicButton';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import './Signup.css'

export default function Signup () {
  return(
  <div>
    <div>
      <HeaderComponents />
    </div>
    <p>登録フォーム</p>
    <div className='nameform'>
      <p>氏名</p>
      <BasicTextField color='primary' size='small' />
    </div>
      <div className='gender'>
        <RowRadioButtonsGroup label='男' size='small' color='primary'/>
        <RowRadioButtonsGroup label='女' size='small' color='primary'/>
      </div>
    <div className='mail'>
      <p>メールアドレス</p>
    <BasicTextField color='primary' size='small'/>
    </div>


    <div className='button1'>
      <BasicButton size="large" color="primary" label='登録'/>
    </div>

    <div className='button2'>
    <BasicButton size="large" color="primary" label='一覧ページに戻る' />
    </div>
  </div>
  )
}