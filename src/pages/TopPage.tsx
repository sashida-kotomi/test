import React from 'react';
import BasicButton from '../components/Atoms/BasicButton';
import SearchForm from '../components/Molecules/SearchForm';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicTable from '../components/Atoms/BasicTable';
import './TopPage.css';


export default function TopPage () {
  return(
    
    <div className='toppage'>
      
      <div className='header'>
        <HeaderComponents />
      </div>
      <div className='main'>
        <SearchForm />
        <BasicTable />
      </div>

      <div className='registration'>
      <BasicButton size="large" color="primary" label='新規登録' />
      </div>


    </div>
  )
}