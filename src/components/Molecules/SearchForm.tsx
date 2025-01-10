// import React from 'react';
import BasicButton from '../Atoms/BasicButton';
import CheckBox from '../Atoms/CheckBox';
import RowRadioButtonsGroup from '../Atoms/RowRadioButton';
import BasicTextField from '../Atoms/BasicTextField';
import './SearchForm.css'


export default function SearchForm() {

  return(

    <div  className='container'>
      <p>検索フォーム</p>

      {/* ラベル */}  
      <div className='searchbutton'>
        <div className='item' >
          <h2>チェックボックス:</h2>
          <CheckBox size="small" color="primary" />
        </div>

        <div className='item'>
          <h2>ラジオボタン:</h2>
          <RowRadioButtonsGroup size="small" color="primary"
          label1="ボタン1"
          label2="ボタン2"
          label3="ボタン3" />
    
        </div>

        <div className='form'>
          <BasicTextField size='small' color='primary' />
          <div className="button">
            
            <BasicButton size="small" color="primary" label='条件クリア' />
            <BasicButton size="small" color="primary" label='検索' />
          </div>
        </div>
      </div>


    </div>
  );
}